/**
 * AI Image Generation Service
 * 
 * Uses Google Imagen 3 (via @google/genai SDK) to generate
 * custom images for each website. Falls back to curated Unsplash.
 */

import { GoogleGenAI, type ImageGenerationConfig } from '@google/genai'
import { getImagesForIndustry } from './image-bank'

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

/** Generated image result */
export interface GeneratedImage {
  id: string
  base64: string        // base64-encoded image data
  mimeType: string      // image/png or image/jpeg
  dataUrl: string       // data:image/png;base64,... ready for <img src="">
  fallbackUrl?: string  // Unsplash fallback if generation failed
}

/** Image request for a website */
export interface ImageRequest {
  id: string
  prompt: string
  width?: number
  height?: number
  aspectRatio?: string
  fallbackCategory: 'hero' | 'services' | 'about' | 'team' | 'background'
  fallbackIndex?: number
}

/**
 * Build image generation prompts based on the website plan.
 * Returns 3-5 image requests tailored to the industry and style.
 */
export function buildImagePrompts(plan: any, style?: any): ImageRequest[] {
  const industry = plan?.industry || 'business'
  const businessName = plan?.title || 'Business'
  const colors = style?.tokens?.colors || plan?.design || {}
  const primaryColor = colors.primary || colors.primaryColor || '#2563EB'
  const isLight = isLightColor(colors.bg || colors.bgPrimary || '#FFFFFF')

  const mood = isLight
    ? 'bright, airy, natural lighting, clean composition'
    : 'moody, sophisticated, dramatic lighting, rich tones'

  const industryContext: Record<string, string> = {
    'healthcare': 'modern medical clinic, clean white environment, professional healthcare',
    'restaurant': 'beautiful food photography, warm inviting restaurant atmosphere',
    'saas': 'modern tech workspace, clean desk setup, abstract technology',
    'real-estate': 'luxury modern home interior, beautiful architecture',
    'fitness': 'energetic gym environment, athletic equipment, dynamic movement',
    'beauty': 'elegant spa environment, luxury beauty products, soft lighting',
    'education': 'bright modern classroom, study materials, learning environment',
    'agency': 'creative workspace, modern office design, collaborative environment',
    'portfolio': 'creative desk setup, design tools, artistic workspace',
    'ecommerce': 'beautiful product arrangement, lifestyle flat-lay photography',
    'nonprofit': 'community gathering, diverse people, hope and warmth',
    'local-service': 'professional office setting, trustworthy business environment',
  }

  const context = industryContext[industry] || 'professional business environment'

  return [
    {
      id: 'hero',
      prompt: `Professional ${industry} website hero photograph. ${context}. ${mood}. High-end commercial photography style. Wide landscape composition. Shallow depth of field. No text, no logos, no watermarks, no people's faces in close-up. Modern, premium aesthetic.`,
      aspectRatio: '16:9',
      fallbackCategory: 'hero',
      fallbackIndex: 0,
    },
    {
      id: 'about',
      prompt: `Professional ${industry} workspace or team environment photo. ${context}. Authentic, candid feel. Portrait orientation. Warm natural lighting. No stock photo clichés. Modern office or professional setting. No text or logos.`,
      aspectRatio: '3:4',
      fallbackCategory: 'about',
      fallbackIndex: 0,
    },
    {
      id: 'cta-background',
      prompt: `Abstract background texture for ${industry} website. Soft gradients in tones complementary to ${primaryColor}. Subtle organic patterns. Minimal, elegant. Can be used as a section background. No text, no logos, very subtle and muted.`,
      aspectRatio: '16:9',
      fallbackCategory: 'background',
      fallbackIndex: 0,
    },
  ]
}

/**
 * Generate images using Imagen 3.
 * Runs all requests in parallel for speed.
 * Falls back to Unsplash URLs if generation fails.
 */
export async function generateImages(
  requests: ImageRequest[],
  industry: string,
  timeoutMs: number = 30000
): Promise<Map<string, GeneratedImage | { fallbackUrl: string }>> {
  const results = new Map<string, GeneratedImage | { fallbackUrl: string }>()
  const fallbackImages = getImagesForIndustry(industry)

  // Generate all images in parallel with timeout
  const promises = requests.map(async (req) => {
    const fallbackUrl = fallbackImages[req.fallbackCategory]?.[req.fallbackIndex || 0]
      || fallbackImages.hero[0]

    try {
      const result = await Promise.race([
        generateSingleImage(req),
        new Promise<null>((_, reject) =>
          setTimeout(() => reject(new Error('Image generation timeout')), timeoutMs)
        ),
      ])

      if (result) {
        results.set(req.id, result)
      } else {
        results.set(req.id, { fallbackUrl })
      }
    } catch (error) {
      console.error(`Image generation failed for ${req.id}:`, error)
      results.set(req.id, { fallbackUrl })
    }
  })

  await Promise.allSettled(promises)
  return results
}

/**
 * Generate a single image using Imagen 3.
 */
async function generateSingleImage(req: ImageRequest): Promise<GeneratedImage | null> {
  try {
    const response = await genAI.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt: req.prompt,
      config: {
        numberOfImages: 1,
        aspectRatio: req.aspectRatio as any || '16:9',
      } as ImageGenerationConfig,
    })

    const image = response.generatedImages?.[0]
    if (!image?.image?.imageBytes) return null

    const base64 = image.image.imageBytes
    const mimeType = 'image/png'

    return {
      id: req.id,
      base64,
      mimeType,
      dataUrl: `data:${mimeType};base64,${base64}`,
    }
  } catch (error: any) {
    // Imagen might not be available — fail gracefully
    console.error(`Imagen generation error: ${error.message}`)
    return null
  }
}

/**
 * Get the image URL for a generated image (data URL) or fallback (Unsplash URL).
 */
export function getImageUrl(
  result: GeneratedImage | { fallbackUrl: string }
): string {
  if ('dataUrl' in result) return result.dataUrl
  if ('fallbackUrl' in result) return result.fallbackUrl
  return ''
}

/**
 * Check if a hex color is light or dark.
 */
function isLightColor(hex: string): boolean {
  const c = hex.replace('#', '')
  const r = parseInt(c.substring(0, 2), 16)
  const g = parseInt(c.substring(2, 4), 16)
  const b = parseInt(c.substring(4, 6), 16)
  return (r * 0.299 + g * 0.587 + b * 0.114) > 150
}
