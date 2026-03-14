/**
 * Content Fill System — generates content to fill component slots.
 * The AI writes SHORT, targeted content — NOT code.
 * This is what makes component-based generation fast and high-quality.
 */

import type { ComponentVariant, FilledContent, ContentSlot } from './types'

/**
 * Build a focused content-fill prompt for a component variant.
 * The AI returns JSON with filled slot values.
 */
export function buildContentFillPrompt(
  variant: ComponentVariant,
  plan: any,
  sectionType: string
): string {
  const industry = plan?.industry || 'business'
  const businessName = plan?.title || 'Business'
  const tone = plan?.tone || 'professional'
  const content = plan?.content || {}

  // Build slot requirements
  const slotInstructions = variant.slots.map(slot => {
    const maxWords = slot.maxWords ? ` (MAX ${slot.maxWords} words)` : ''
    const required = slot.required ? ' [REQUIRED]' : ' [optional]'
    
    if (slot.type === 'array' && slot.itemSlots) {
      const itemDesc = slot.itemSlots.map(is => 
        `"${is.name}": ${is.description}${is.maxWords ? ` (max ${is.maxWords} words)` : ''}`
      ).join(', ')
      return `  "${slot.name}": Array of ${slot.minItems || 1}-${slot.maxItems || 6} objects, each with: { ${itemDesc} }${required}`
    }
    
    return `  "${slot.name}": ${slot.description}${maxWords}${required}`
  }).join('\n')

  // Pull existing content from plan to guide the AI
  const existingContent = []
  if (content.heroHeading) existingContent.push(`Hero heading idea: "${content.heroHeading}"`)
  if (content.heroSubheading) existingContent.push(`Subheading idea: "${content.heroSubheading}"`)
  if (content.heroCTA) existingContent.push(`CTA button: "${content.heroCTA}"`)
  if (content.heroSecondaryCTA) existingContent.push(`Secondary CTA: "${content.heroSecondaryCTA}"`)
  if (content.services?.length) existingContent.push(`Services: ${content.services.map((s: any) => s.name).join(', ')}`)
  if (content.socialProof) existingContent.push(`Stats: ${JSON.stringify(content.socialProof)}`)
  if (content.testimonials?.length) existingContent.push(`Testimonials: ${content.testimonials.length} available`)
  if (content.about?.heading) existingContent.push(`About heading: "${content.about.heading}"`)
  if (content.contact?.email) existingContent.push(`Contact email: ${content.contact.email}`)

  const existingStr = existingContent.length > 0
    ? `\n\nEXISTING CONTENT FROM PLAN (use as inspiration, but write fresh copy):\n${existingContent.join('\n')}`
    : ''

  return `You are a conversion copywriter for ${industry} businesses. Write content to fill a ${sectionType} section for "${businessName}".

BRAND: ${businessName}
INDUSTRY: ${industry}
TONE: ${tone}
SECTION: ${variant.name} (${variant.description})

FILL THESE SLOTS — return ONLY valid JSON, no markdown fences:
{
${slotInstructions}
}

COPYWRITING RULES:
1. RESPECT every word count limit — count carefully
2. Headlines: punchy, benefit-led, no filler words
3. Subheadings: clear value proposition, not vague
4. Button text: action verbs, 2-3 words only
5. Stats: use realistic numbers for a ${industry} business
6. Names: realistic full names for testimonials
7. NO buzzwords: "leverage", "synergy", "cutting-edge", "innovative"
8. NO generic text: make it specific to ${industry}
9. Eyebrow text: industry-specific, creates context
10. If navLinks are needed, use: ["Home", "Services", "About", "Testimonials", "Contact"]
${existingStr}

Return ONLY the JSON object. No explanation.`
}

/**
 * Parse the AI response into FilledContent.
 * Handles edge cases: markdown fences, partial JSON, etc.
 */
export function parseContentFill(text: string): FilledContent {
  let clean = text.trim()
  
  // Remove markdown code fences
  if (clean.startsWith('```')) {
    clean = clean.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '')
  }
  
  // Find JSON object boundaries
  const start = clean.indexOf('{')
  const end = clean.lastIndexOf('}')
  if (start === -1 || end === -1) {
    throw new Error('No JSON object found in AI response')
  }
  
  clean = clean.substring(start, end + 1)
  
  try {
    return JSON.parse(clean)
  } catch (e) {
    // Try fixing common JSON issues
    clean = clean.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']')
    return JSON.parse(clean)
  }
}

/**
 * Validate filled content against slot requirements.
 * Returns array of validation errors (empty = valid).
 */
export function validateContent(
  content: FilledContent,
  slots: ContentSlot[]
): string[] {
  const errors: string[] = []

  for (const slot of slots) {
    const value = content[slot.name]
    
    if (slot.required && (value === undefined || value === null || value === '')) {
      errors.push(`Missing required slot: ${slot.name}`)
      continue
    }

    if (value === undefined) continue

    if (slot.type === 'array' && Array.isArray(value)) {
      if (slot.minItems && value.length < slot.minItems) {
        errors.push(`${slot.name}: needs at least ${slot.minItems} items, got ${value.length}`)
      }
      if (slot.maxItems && value.length > slot.maxItems) {
        errors.push(`${slot.name}: max ${slot.maxItems} items, got ${value.length}`)
      }
    } else if (typeof value === 'string' && slot.maxWords) {
      const wordCount = value.split(/\s+/).filter(Boolean).length
      if (wordCount > slot.maxWords * 1.5) {  // Allow 50% overage before error
        errors.push(`${slot.name}: max ${slot.maxWords} words, got ${wordCount}`)
      }
    }
  }

  return errors
}
