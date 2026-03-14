/**
 * Component Registry — all available component variants.
 *
 * Key design principle: Multiple variants per section type enable UNIQUE sites.
 * The selection algorithm picks the best variant for each industry+style combo,
 * with controlled randomness to ensure no two sites look the same.
 */

import type { ComponentVariant } from './types'

// ── Hero ──────────────────────────────────────────────────────────────────────
import { heroSplitImage } from './hero/split-image'
import { heroCenteredGradient } from './hero/centered-gradient'
import { heroDarkEditorial } from './hero/dark-editorial'
import { heroSaasMockup } from './hero/saas-mockup'
import { heroMosaicGrid } from './hero/mosaic-grid'

// ── Social Proof ───────────────────────────────────────────────────────────────
import { socialProofStatsStrip } from './social-proof/stats-strip'
import { socialProofLogoWall } from './social-proof/logo-wall'

// ── Features ──────────────────────────────────────────────────────────────────
import { featuresIconGrid } from './features/icon-grid'
import { featuresAlternatingRows } from './features/alternating-rows'
import { featuresBentoGrid } from './features/bento-grid'

// ── About ─────────────────────────────────────────────────────────────────────
import { aboutSplitPhoto } from './about/split-photo'
import { aboutTeamGrid } from './about/team-grid'
import { aboutValuesGrid } from './about/values-grid'

// ── Testimonials ──────────────────────────────────────────────────────────────
import { testimonialsCardScroller } from './testimonials/card-scroller'
import { testimonialsWallOfLove } from './testimonials/wall-of-love'

// ── CTA ───────────────────────────────────────────────────────────────────────
import { ctaGradientBanner } from './cta/gradient-banner'
import { ctaDarkChecklist } from './cta/dark-checklist'

// ── Contact ───────────────────────────────────────────────────────────────────
import { contactSplitForm } from './contact/split-form'

// ── Footer ────────────────────────────────────────────────────────────────────
import { footerFourColumn } from './footer/four-column'

// ── NEW Section Types ─────────────────────────────────────────────────────────
import { processNumberedSteps } from './process/numbered-steps'
import { faqAccordion } from './faq/accordion'
import { pricingThreeTier } from './pricing/three-tier'
import { portfolioProjectGrid } from './portfolio/project-grid'

// ── Registry ──────────────────────────────────────────────────────────────────

/** All registered component variants, keyed by section type */
export const COMPONENT_REGISTRY: Record<string, ComponentVariant[]> = {
  hero: [heroSplitImage, heroCenteredGradient, heroDarkEditorial, heroSaasMockup, heroMosaicGrid],
  'social-proof': [socialProofStatsStrip, socialProofLogoWall],
  features: [featuresIconGrid, featuresAlternatingRows, featuresBentoGrid],
  about: [aboutSplitPhoto, aboutTeamGrid, aboutValuesGrid],
  testimonials: [testimonialsCardScroller, testimonialsWallOfLove],
  cta: [ctaGradientBanner, ctaDarkChecklist],
  contact: [contactSplitForm],
  footer: [footerFourColumn],
  // New section types
  process: [processNumberedSteps],
  faq: [faqAccordion],
  pricing: [pricingThreeTier],
  portfolio: [portfolioProjectGrid],
}

/**
 * Section types that should be included for each industry.
 * Base sections are always included; optional sections are added per-industry.
 */
const BASE_SECTIONS = ['hero', 'social-proof', 'features', 'about', 'testimonials', 'cta', 'contact', 'footer']

const INDUSTRY_EXTRA_SECTIONS: Record<string, string[]> = {
  saas: ['pricing', 'faq'],
  agency: ['portfolio', 'process'],
  portfolio: ['portfolio'],
  ecommerce: ['pricing'],
  education: ['process', 'faq', 'pricing'],
  nonprofit: ['process', 'faq'],
  fitness: ['pricing', 'process'],
  beauty: ['process'],
  healthcare: ['process', 'faq'],
  'local-service': ['process', 'faq'],
  restaurant: ['process'],
  'real-estate': ['process', 'faq'],
}

/**
 * Build the section order for a given industry.
 * Injects optional sections in the right position within the page flow.
 */
export function buildSectionOrder(industry: string): string[] {
  const extras = INDUSTRY_EXTRA_SECTIONS[industry] || []
  const sections = [...BASE_SECTIONS]

  // Insert process after features (before about)
  if (extras.includes('process')) {
    const idx = sections.indexOf('about')
    sections.splice(idx, 0, 'process')
  }

  // Insert portfolio after about (before testimonials)
  if (extras.includes('portfolio')) {
    const idx = sections.indexOf('testimonials')
    sections.splice(idx, 0, 'portfolio')
  }

  // Insert pricing before cta
  if (extras.includes('pricing')) {
    const idx = sections.indexOf('cta')
    sections.splice(idx, 0, 'pricing')
  }

  // Insert faq before cta (or after pricing)
  if (extras.includes('faq')) {
    const idx = sections.indexOf('cta')
    sections.splice(idx, 0, 'faq')
  }

  return sections
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
 * Industry–to–style-tags mapping for smarter variant selection.
 */
const INDUSTRY_STYLE_TAGS: Record<string, string[]> = {
  saas: ['saas', 'product', 'clean', 'modern', 'B2B'],
  agency: ['agency', 'creative', 'bold', 'editorial', 'premium'],
  portfolio: ['creative', 'editorial', 'images', 'showcase'],
  ecommerce: ['lifestyle', 'colorful', 'product'],
  education: ['professional', 'trust', 'clean'],
  nonprofit: ['trust', 'mission', 'values', 'impact'],
  fitness: ['bold', 'energetic', 'lifestyle', 'images'],
  beauty: ['lifestyle', 'creative', 'premium', 'images'],
  healthcare: ['professional', 'trust', 'clean', 'human'],
  'local-service': ['professional', 'trust', 'service-business'],
  restaurant: ['lifestyle', 'images', 'colorful', 'creative'],
  'real-estate': ['professional', 'premium', 'images', 'trust'],
}

/**
 * Select the best variant for a section based on industry, style, and some
 * controlled randomness so every generated site looks unique.
 *
 * @param section - Section type
 * @param industry - Business industry
 * @param tags - Additional style tags from the plan
 * @param heroStyle - Preferred hero style from plan.design
 * @param seed - A deterministic seed string (e.g. project ID) for "random" variation
 */
export function selectBestVariant(
  section: string,
  industry: string,
  tags: string[] = [],
  heroStyle?: string,
  seed?: string
): ComponentVariant | null {
  const variants = getVariants(section)
  if (variants.length === 0) return null
  if (variants.length === 1) return variants[0]

  // For hero sections, prioritize matching heroStyle from plan
  if (section === 'hero' && heroStyle) {
    const styleMap: Record<string, string> = {
      'split-screen': 'hero-split-image',
      'split-image': 'hero-split-image',
      'full-image': 'hero-split-image',
      'gradient-mesh': 'hero-centered-gradient',
      'minimal-centered': 'hero-centered-gradient',
      'editorial': 'hero-dark-editorial',
      'dark': 'hero-dark-editorial',
      'saas': 'hero-saas-mockup',
      'product': 'hero-saas-mockup',
      'mosaic': 'hero-mosaic-grid',
      'lifestyle': 'hero-mosaic-grid',
      'photo-grid': 'hero-mosaic-grid',
    }
    const targetId = styleMap[heroStyle.toLowerCase()]
    if (targetId) {
      const match = variants.find((v) => v.id === targetId)
      if (match) return match
    }
  }

  // Collect all style tags (industry defaults + plan tags)
  const allTags = [...tags, ...(INDUSTRY_STYLE_TAGS[industry] || [])]

  // Score each variant
  const scored = variants.map((v) => {
    let score = 0
    // Industry match is the strongest signal
    if (v.bestFor.includes(industry)) score += 10
    // Tag overlap
    for (const tag of allTags) {
      if (v.tags.includes(tag)) score += 3
    }
    return { variant: v, score }
  })

  scored.sort((a, b) => b.score - a.score)

  // Find the top score tier (within 3 points of the best)
  const topScore = scored[0].score
  const topTier = scored.filter((s) => s.score >= topScore - 3)

  // If multiple equally good variants, pick based on seed for variety
  if (topTier.length > 1 && seed) {
    const hash = seed.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
    return topTier[hash % topTier.length].variant
  }

  return topTier[0].variant
}

/** Returns a coverage map for debugging */
export function getCoverage(): Record<string, number> {
  return Object.fromEntries(
    Object.entries(COMPONENT_REGISTRY).map(([k, v]) => [k, v.length])
  )
}
