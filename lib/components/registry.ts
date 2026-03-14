/**
 * Component Registry — all available component variants.
 * Import and register every component here.
 */

import type { ComponentVariant } from './types'
import { heroSplitImage } from './hero/split-image'
import { heroCenteredGradient } from './hero/centered-gradient'

/** All registered component variants, keyed by section type */
export const COMPONENT_REGISTRY: Record<string, ComponentVariant[]> = {
  hero: [
    heroSplitImage,
    heroCenteredGradient,
  ],
  // More sections will be added as components are built:
  // 'social-proof': [],
  // features: [],
  // about: [],
  // testimonials: [],
  // cta: [],
  // contact: [],
  // footer: [],
}

/**
 * Get all variants for a section type.
 */
export function getVariants(section: string): ComponentVariant[] {
  return COMPONENT_REGISTRY[section] || []
}

/**
 * Check if a section type has pre-built components available.
 */
export function hasComponents(section: string): boolean {
  return (COMPONENT_REGISTRY[section]?.length || 0) > 0
}

/**
 * Get the best variant for a section based on industry, style tags, and hero style.
 */
export function selectBestVariant(
  section: string,
  industry: string,
  tags: string[] = [],
  heroStyle?: string
): ComponentVariant | null {
  const variants = getVariants(section)
  if (variants.length === 0) return null

  // For hero sections, match heroStyle to variant
  if (section === 'hero' && heroStyle) {
    const styleMap: Record<string, string> = {
      'split-screen': 'hero-split-image',
      'split-image': 'hero-split-image',
      'full-image': 'hero-split-image',
      'gradient-mesh': 'hero-centered-gradient',
      'minimal-centered': 'hero-centered-gradient',
      'dark-gradient': 'hero-centered-gradient',
      'editorial': 'hero-centered-gradient',
    }
    const targetId = styleMap[heroStyle]
    if (targetId) {
      const match = variants.find(v => v.id === targetId)
      if (match) return match
    }
  }

  // Score variants
  const scored = variants.map(v => {
    let score = 0
    if (v.bestFor.includes(industry)) score += 10
    for (const tag of tags) {
      if (v.tags.includes(tag)) score += 3
    }
    return { variant: v, score }
  })

  scored.sort((a, b) => b.score - a.score)
  return scored[0]?.variant || variants[0]
}
