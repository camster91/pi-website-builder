/**
 * Component Registry — all available component variants.
 * Each section type maps to an array of available variants.
 * The hybrid pipeline uses hasComponents() to decide whether to use
 * a pre-built template (fast, guaranteed quality) or AI generation.
 */

import type { ComponentVariant } from './types'

// Hero
import { heroSplitImage } from './hero/split-image'
import { heroCenteredGradient } from './hero/centered-gradient'

// Social Proof
import { socialProofStatsStrip } from './social-proof/stats-strip'

// Features
import { featuresIconGrid } from './features/icon-grid'

// About
import { aboutSplitPhoto } from './about/split-photo'

// Testimonials
import { testimonialsCardScroller } from './testimonials/card-scroller'

// CTA
import { ctaGradientBanner } from './cta/gradient-banner'

// Contact
import { contactSplitForm } from './contact/split-form'

// Footer
import { footerFourColumn } from './footer/four-column'

/** All registered component variants, keyed by section type */
export const COMPONENT_REGISTRY: Record<string, ComponentVariant[]> = {
  hero: [heroSplitImage, heroCenteredGradient],
  'social-proof': [socialProofStatsStrip],
  features: [featuresIconGrid],
  about: [aboutSplitPhoto],
  testimonials: [testimonialsCardScroller],
  cta: [ctaGradientBanner],
  contact: [contactSplitForm],
  footer: [footerFourColumn],
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
      'full-bleed': 'hero-split-image',
    }
    const targetId = styleMap[heroStyle]
    if (targetId) {
      const match = variants.find((v) => v.id === targetId)
      if (match) return match
    }
  }

  // Score each variant by industry match and tag overlap
  const scored = variants.map((v) => {
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

/** Returns a summary of coverage for logging/debugging */
export function getCoverage(): Record<string, number> {
  return Object.fromEntries(
    Object.entries(COMPONENT_REGISTRY).map(([k, v]) => [k, v.length])
  )
}
