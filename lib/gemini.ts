import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const MODELS = {
  planner: 'gemini-2.0-flash',
  coder: 'gemini-2.0-flash',
  qa: 'gemini-2.0-flash',
}

export type AgentType = keyof typeof MODELS

export interface GenerationResult {
  text: string
  usage?: {
    promptTokens: number
    candidatesTokens: number
    totalTokens: number
  }
}

export interface WebsiteFiles {
  [filename: string]: string
}

/** Strip markdown code fences and extract content */
function extractCode(text: string, lang = ''): string {
  // Try to match ```lang ... ``` or just ``` ... ```
  const fenceRe = new RegExp(
    `\`\`\`(?:${lang}|html|css|js|javascript)?\\s*([\\s\\S]*?)\`\`\``,
    'i'
  )
  const match = text.match(fenceRe)
  if (match) return match[1].trim()
  return text.trim()
}

/** Extract JSON from a response that may be wrapped in markdown */
function extractJSON(text: string): any {
  const cleaned = extractCode(text, 'json')
  try {
    return JSON.parse(cleaned)
  } catch {
    // Try to find a JSON object in the text
    const objMatch = text.match(/\{[\s\S]*\}/)
    if (objMatch) {
      try {
        return JSON.parse(objMatch[0])
      } catch {
        throw new Error('Failed to parse plan JSON from AI response')
      }
    }
    throw new Error('No JSON found in AI response')
  }
}

class GeminiService {
  private getModel(agent: AgentType): GenerativeModel {
    return genAI.getGenerativeModel({
      model: MODELS[agent],
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 8192,
      },
    })
  }

  private async generate(agent: AgentType, prompt: string): Promise<GenerationResult> {
    const model = this.getModel(agent)
    const result = await model.generateContent(prompt)
    const text = result.response.text()
    const usage = result.response.usageMetadata
    return {
      text,
      usage: usage
        ? {
            promptTokens: usage.promptTokenCount || 0,
            candidatesTokens: usage.candidatesTokenCount || 0,
            totalTokens: usage.totalTokenCount || 0,
          }
        : undefined,
    }
  }

  async generatePlan(prompt: string): Promise<any> {
    const systemPrompt = `You are a website planning expert. Analyze the user's website request and return a detailed JSON plan.

Return ONLY valid JSON (no markdown, no explanation), with this exact structure:
{
  "title": "Website name",
  "description": "Brief site description",
  "pages": [{"name": "Home", "slug": "index", "sections": ["hero", "features", "cta"]}],
  "design": {
    "primaryColor": "#3B82F6",
    "secondaryColor": "#1E40AF",
    "accentColor": "#F59E0B",
    "fontHeading": "Inter",
    "fontBody": "Inter",
    "style": "modern"
  },
  "navigation": ["Home", "About", "Services", "Contact"],
  "seo": {
    "title": "Page title",
    "description": "Meta description under 160 chars",
    "keywords": ["keyword1", "keyword2"]
  },
  "content": {
    "heroHeading": "Main headline",
    "heroSubheading": "Supporting text",
    "cta": "Call to action text",
    "about": "About section text",
    "services": [{"name": "Service 1", "description": "desc", "icon": "⚡"}],
    "contact": {"email": "info@example.com", "phone": "555-0100", "address": "City, State"}
  }
}`

    const result = await this.generate('planner', `${systemPrompt}\n\nUser request: ${prompt}`)
    return extractJSON(result.text)
  }

  async generateCode(plan: any, prompt: string): Promise<{ html: string; usage?: any }> {
    const systemPrompt = `You are an expert frontend developer. Generate a complete, single-page website as a single HTML file.

REQUIREMENTS:
- Include ALL CSS inline in a <style> tag (use CSS custom properties for colors)
- Include ALL JavaScript inline in a <script> tag at the bottom
- Use Tailwind CSS via CDN: <script src="https://cdn.tailwindcss.com"></script>
- Use Alpine.js via CDN for interactivity: <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
- Mobile-first responsive design
- Semantic HTML5 with ARIA attributes
- Smooth scroll, hover transitions, animations
- Professional copywriting (not placeholder text)
- Include a sticky navigation bar
- Include a contact form (HTML only, no backend needed)
- Use Font Awesome icons via CDN if needed
- Make it visually impressive

OUTPUT: Return ONLY the complete HTML document starting with <!DOCTYPE html>. No markdown, no explanation.`

    const userPrompt = `${systemPrompt}

Website Plan:
${JSON.stringify(plan, null, 2)}

Original Request: ${prompt}`

    const result = await this.generate('coder', userPrompt)
    const html = extractCode(result.text, 'html')
    // Ensure it starts with DOCTYPE
    const cleanHtml = html.startsWith('<!') ? html : extractCode(result.text)

    return { html: cleanHtml, usage: result.usage }
  }

  async reviewAndImprove(html: string, plan: any): Promise<{ html: string; usage?: any }> {
    const prompt = `You are a senior frontend developer and UX expert. Review and improve this website code.

IMPROVEMENTS TO MAKE:
1. Fix any layout or responsive design bugs
2. Improve accessibility (ARIA labels, color contrast, focus states)
3. Enhance copywriting to be more compelling and professional
4. Add micro-animations and hover effects where appropriate
5. Ensure the navigation works (smooth scroll to sections)
6. Fix any broken Tailwind classes
7. Make sure the contact form looks great

Return ONLY the improved HTML document. No markdown, no explanation.

Original Plan: ${JSON.stringify(plan.seo || {}, null, 2)}

Code to improve:
${html}`

    const result = await this.generate('qa', prompt)
    const improved = extractCode(result.text, 'html')
    const cleanHtml = improved.startsWith('<!') ? improved : extractCode(result.text)

    return { html: cleanHtml.length > 500 ? cleanHtml : html, usage: result.usage }
  }
}

export const gemini = new GeminiService()
