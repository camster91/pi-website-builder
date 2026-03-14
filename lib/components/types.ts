/**
 * Component Template System — Types
 * 
 * Instead of AI writing HTML/CSS from scratch, we use pre-tested
 * component templates. The AI only fills content slots.
 */

/** A content slot that the AI needs to fill */
export interface ContentSlot {
  name: string
  type: 'text' | 'heading' | 'subheading' | 'eyebrow' | 'cta-text' | 'stat-value' | 'stat-label' | 'image-url' | 'icon-svg' | 'array'
  maxWords?: number
  description: string
  required: boolean
  /** For arrays: the sub-slots for each item */
  itemSlots?: ContentSlot[]
  /** Min/max items for array types */
  minItems?: number
  maxItems?: number
}

/** Filled content from the AI */
export interface FilledContent {
  [slotName: string]: string | string[] | FilledContent[]
}

/** A pre-built, tested component variant */
export interface ComponentVariant {
  id: string
  name: string
  section: 'nav' | 'hero' | 'social-proof' | 'features' | 'about' | 'testimonials' | 'pricing' | 'cta' | 'contact' | 'footer' | 'faq' | 'process' | 'stats' | 'services' | 'gallery' | 'video' | 'blog' | 'comparison' | 'portfolio'
  description: string

  /** Pre-built CSS for this component (scoped via unique class prefix) */
  css: string

  /** 
   * HTML template with {{slotName}} placeholders.
   * Array slots use {{#items}}...{{/items}} blocks with {{.property}}.
   * Special: {{PRIMARY}}, {{ACCENT}}, {{BG}} inject color tokens.
   */
  template: string

  /** Content slots the AI fills */
  slots: ContentSlot[]

  /** Industries this variant works best for */
  bestFor: string[]

  /** Visual characteristics for matching */
  tags: string[]
}

/**
 * Design tokens passed to every component for color/font/style injection.
 */
export interface DesignTokens {
  primary: string
  primaryDark: string
  accent: string
  bg: string
  bgCard: string
  bgSection: string
  text: string
  textSec: string
  textMuted: string
  border: string
  fontHeading: string
  fontBody: string
  radius: string
  density: 'spacious' | 'tight' // Added
  heroImage?: string
  aboutImage?: string
  serviceImages?: string[]
}

/**
 * Fill a component template with content and design tokens.
 * Replaces {{slotName}} with content, {{PRIMARY}} etc with tokens.
 */
export function fillTemplate(
  variant: ComponentVariant,
  content: FilledContent,
  tokens: DesignTokens
): { html: string; css: string } {
  let html = variant.template
  let css = variant.css

  // Replace design token placeholders in both HTML and CSS
  const tokenMap: Record<string, string> = {
    '{{PRIMARY}}': tokens.primary,
    '{{PRIMARY_DARK}}': tokens.primaryDark,
    '{{ACCENT}}': tokens.accent,
    '{{BG}}': tokens.bg,
    '{{BG_CARD}}': tokens.bgCard,
    '{{BG_SECTION}}': tokens.bgSection,
    '{{TEXT}}': tokens.text,
    '{{TEXT_SEC}}': tokens.textSec,
    '{{TEXT_MUTED}}': tokens.textMuted,
    '{{BORDER}}': tokens.border,
    '{{FONT_HEADING}}': tokens.fontHeading,
    '{{FONT_BODY}}': tokens.fontBody,
    '{{RADIUS}}': tokens.radius,
    '{{SPACING_VAR}}': tokens.density === 'spacious' ? 'clamp(4rem, 8vw, 7rem)' : 'clamp(2rem, 4vw, 3.5rem)',
    '{{HERO_IMAGE}}': tokens.heroImage || '',
    '{{ABOUT_IMAGE}}': tokens.aboutImage || '',
  }

  for (const [placeholder, value] of Object.entries(tokenMap)) {
    html = html.replaceAll(placeholder, value)
    css = css.replaceAll(placeholder, value)
  }

  // Replace service image placeholders
  if (tokens.serviceImages) {
    tokens.serviceImages.forEach((url, i) => {
      html = html.replaceAll(`{{SERVICE_IMAGE_${i}}}`, url)
      css = css.replaceAll(`{{SERVICE_IMAGE_${i}}}`, url)
    })
  }

  // Replace simple content slots: {{slotName}}
  for (const [key, value] of Object.entries(content)) {
    if (typeof value === 'string') {
      html = html.replaceAll(`{{${key}}}`, escapeHtml(value))
    }
  }

  // Handle indexed array access: {{arrayName[index].property}} and {{arrayName[index]}}
  const indexedRegex = /\{\{(\w+)\[(\d+)\](?:\.(\w+))?\}\}/g
  html = html.replace(indexedRegex, (match, arrayName, idxStr, prop) => {
    const arr = content[arrayName]
    if (!Array.isArray(arr)) return ''
    const item = arr[parseInt(idxStr)]
    if (item === undefined || item === null) return ''
    if (!prop) return escapeHtml(String(item))
    if (typeof item === 'object') return escapeHtml(String((item as any)[prop] ?? ''))
    return ''
  })

  // Handle array slots: {{#items}}...{{/items}}
  const arrayRegex = /\{\{#(\w+)\}\}([\s\S]*?)\{\{\/\1\}\}/g
  html = html.replace(arrayRegex, (match, arrayName, itemTemplate) => {
    const items = content[arrayName]
    if (!Array.isArray(items)) return ''

    return items.map((item: any, index: number) => {
      let filled = itemTemplate
      // Replace {{.property}} with item values
      if (typeof item === 'string') {
        filled = filled.replaceAll('{{.}}', escapeHtml(item))
      } else if (typeof item === 'object') {
        for (const [k, v] of Object.entries(item)) {
          filled = filled.replaceAll(`{{.${k}}}`, escapeHtml(String(v)))
        }
      }
      // Replace {{@index}} with the index
      filled = filled.replaceAll('{{@index}}', String(index))
      return filled
    }).join('\n')
  })

  // Clean up any unfilled placeholders
  html = html.replace(/\{\{[^}]+\}\}/g, '')

  return { html, css }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Select the best component variant for a section based on industry and style.
 */
export function selectVariant(
  variants: ComponentVariant[],
  industry: string,
  tags: string[] = []
): ComponentVariant {
  // Score each variant
  const scored = variants.map(v => {
    let score = 0
    if (v.bestFor.includes(industry)) score += 10
    for (const tag of tags) {
      if (v.tags.includes(tag)) score += 5
    }
    return { variant: v, score }
  })

  // Sort by score descending, return best match
  scored.sort((a, b) => b.score - a.score)
  return scored[0]?.variant || variants[0]
}
