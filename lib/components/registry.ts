/**
 * Component Registry — all available component variants.
 *
 * 18 section types, 40+ variants total.
 * Selection: industry + style tags + seed for variety.
 */

import type { ComponentVariant } from './types'

// ── Hero (10 variants) ───────────────────────────────────────────────────────
import { heroSplitImage } from './hero/split-image'
import { heroCenteredGradient } from './hero/centered-gradient'
import { heroDarkEditorial } from './hero/dark-editorial'
import { heroSaasMockup } from './hero/saas-mockup'
import { heroMosaicGrid } from './hero/mosaic-grid'
import { heroBoldTypography } from './hero/bold-typography'
import { heroGradientMesh } from './hero/gradient-mesh'
import { heroFullscreenImage } from './hero/fullscreen-image'
import { heroSplitDark } from './hero/split-dark'
import { heroAnnouncement } from './hero/announcement'

// ── Social Proof (4 variants) ─────────────────────────────────────────────────
import { socialProofStatsStrip } from './social-proof/stats-strip'
import { socialProofLogoWall } from './social-proof/logo-wall'
import { socialProofReviewAggregate } from './social-proof/review-aggregate'

// ── Features (7 variants) ─────────────────────────────────────────────────────
import { featuresIconGrid } from './features/icon-grid'
import { featuresAlternatingRows } from './features/alternating-rows'
import { featuresBentoGrid } from './features/bento-grid'
import { featuresTabbedShowcase } from './features/tabbed-showcase'
import { featuresGradientCards } from './features/gradient-cards'
import { featuresTwoColList } from './features/two-col-list'
import { featuresStatsHighlight } from './features/stats-highlight'

// ── About (5 variants) ────────────────────────────────────────────────────────
import { aboutSplitPhoto } from './about/split-photo'
import { aboutTeamGrid } from './about/team-grid'
import { aboutValuesGrid } from './about/values-grid'
import { aboutFounderSpotlight } from './about/founder-spotlight'

// ── Testimonials (5 variants) ─────────────────────────────────────────────────
import { testimonialsCardScroller } from './testimonials/card-scroller'
import { testimonialsWallOfLove } from './testimonials/wall-of-love'
import { testimonialsFeaturedQuote } from './testimonials/featured-quote'
import { testimonialsSplitPortrait } from './testimonials/split-portrait'
import { testimonialsTweetCards } from './testimonials/tweet-cards'

// ── CTA (6 variants) ──────────────────────────────────────────────────────────
import { ctaGradientBanner } from './cta/gradient-banner'
import { ctaDarkChecklist } from './cta/dark-checklist'
import { ctaNewsletter } from './cta/newsletter'
import { ctaImageOverlay } from './cta/image-overlay'
import { ctaSplitForm } from './cta/split-form'
import { ctaMinimalCentered } from './cta/minimal-centered'

// ── Contact (3 variants) ──────────────────────────────────────────────────────
import { contactSplitForm } from './contact/split-form'
import { contactCenteredForm } from './contact/centered-form'
import { contactDarkForm } from './contact/dark-form'

// ── Footer (3 variants) ───────────────────────────────────────────────────────
import { footerFourColumn } from './footer/four-column'
import { footerMinimalCentered } from './footer/minimal-centered'
import { footerDarkRich } from './footer/dark-rich'

// ── Process (2 variants) ──────────────────────────────────────────────────────
import { processNumberedSteps } from './process/numbered-steps'
import { processVerticalTimeline } from './process/vertical-timeline'

// ── FAQ (1 variant) ───────────────────────────────────────────────────────────
import { faqAccordion } from './faq/accordion'

// ── Pricing (1 variant) ───────────────────────────────────────────────────────
import { pricingThreeTier } from './pricing/three-tier'

// ── Portfolio (1 variant) ─────────────────────────────────────────────────────
import { portfolioProjectGrid } from './portfolio/project-grid'

// ── NEW Section Types ─────────────────────────────────────────────────────────
import { statsNumbersShowcase } from './stats/numbers-showcase'
import { servicesCardsGrid } from './services/cards-grid'
import { galleryPhotoMasonry } from './gallery/photo-masonry'
import { videoFeatureShowcase } from './video/feature-showcase'
import { blogArticlePreview } from './blog/article-preview'
import { comparisonFeatureTable } from './comparison/feature-table'

// ── Registry ──────────────────────────────────────────────────────────────────

export const COMPONENT_REGISTRY: Record<string, ComponentVariant[]> = {
  hero: [
    heroSplitImage,
    heroCenteredGradient,
    heroDarkEditorial,
    heroSaasMockup,
    heroMosaicGrid,
    heroBoldTypography,
    heroGradientMesh,
    heroFullscreenImage,
    heroSplitDark,
    heroAnnouncement,
  ],
  'social-proof': [
    socialProofStatsStrip,
    socialProofLogoWall,
    socialProofReviewAggregate,
  ],
  features: [
    featuresIconGrid,
    featuresAlternatingRows,
    featuresBentoGrid,
    featuresTabbedShowcase,
    featuresGradientCards,
    featuresTwoColList,
    featuresStatsHighlight,
  ],
  about: [
    aboutSplitPhoto,
    aboutTeamGrid,
    aboutValuesGrid,
    aboutFounderSpotlight,
  ],
  testimonials: [
    testimonialsCardScroller,
    testimonialsWallOfLove,
    testimonialsFeaturedQuote,
    testimonialsSplitPortrait,
    testimonialsTweetCards,
  ],
  cta: [
    ctaGradientBanner,
    ctaDarkChecklist,
    ctaNewsletter,
    ctaImageOverlay,
    ctaSplitForm,
    ctaMinimalCentered,
  ],
  contact: [
    contactSplitForm,
    contactCenteredForm,
    contactDarkForm,
  ],
  footer: [
    footerFourColumn,
    footerMinimalCentered,
    footerDarkRich,
  ],
  process: [
    processNumberedSteps,
    processVerticalTimeline,
  ],
  faq: [faqAccordion],
  pricing: [pricingThreeTier],
  portfolio: [portfolioProjectGrid],
  // New section types
  stats: [statsNumbersShowcase],
  services: [servicesCardsGrid],
  gallery: [galleryPhotoMasonry],
  video: [videoFeatureShowcase],
  blog: [blogArticlePreview],
  comparison: [comparisonFeatureTable],
}

// ── Industry Section Order ─────────────────────────────────────────────────────

const BASE_SECTIONS = ['hero', 'social-proof', 'features', 'about', 'testimonials', 'cta', 'contact', 'footer']

const INDUSTRY_EXTRA_SECTIONS: Record<string, string[]> = {
  saas:           ['stats', 'pricing', 'faq', 'comparison', 'blog'],
  agency:         ['portfolio', 'process', 'stats'],
  portfolio:      ['portfolio', 'gallery'],
  ecommerce:      ['pricing', 'gallery'],
  education:      ['process', 'faq', 'pricing', 'blog'],
  nonprofit:      ['process', 'faq', 'stats', 'blog'],
  fitness:        ['pricing', 'process', 'gallery', 'video'],
  beauty:         ['process', 'gallery', 'services'],
  healthcare:     ['process', 'faq', 'stats', 'services'],
  'local-service':['process', 'faq', 'services'],
  restaurant:     ['gallery', 'video', 'services'],
  'real-estate':  ['process', 'faq', 'portfolio', 'stats'],
}

/**
 * Section injection positions — controls WHERE optional sections appear in the flow.
 * Sections are injected just before the anchor section.
 */
const INJECT_BEFORE: Record<string, string> = {
  process:    'about',
  services:   'about',
  portfolio:  'testimonials',
  gallery:    'testimonials',
  video:      'testimonials',
  stats:      'cta',
  pricing:    'cta',
  faq:        'cta',
  comparison: 'pricing',
  blog:       'cta',
}

export function buildSectionOrder(industry: string): string[] {
  const extras = new Set(INDUSTRY_EXTRA_SECTIONS[industry] || [])
  const sections = [...BASE_SECTIONS]

  // Inject each extra section in the right position
  for (const extra of extras) {
    const anchor = INJECT_BEFORE[extra] ?? 'cta'
    const idx = sections.indexOf(anchor)
    if (idx !== -1 && !sections.includes(extra)) {
      sections.splice(idx, 0, extra)
    }
  }

  return sections
}

// ── Selection Logic ────────────────────────────────────────────────────────────

export function getVariants(section: string): ComponentVariant[] {
  return COMPONENT_REGISTRY[section] || []
}

export function hasComponents(section: string): boolean {
  return (COMPONENT_REGISTRY[section]?.length || 0) > 0
}

/**
 * Industry style preference tags
 */
const INDUSTRY_STYLE_TAGS: Record<string, string[]> = {
  saas:           ['saas', 'product', 'clean', 'modern', 'B2B', 'tech'],
  agency:         ['agency', 'creative', 'bold', 'editorial', 'premium', 'dark'],
  portfolio:      ['creative', 'editorial', 'images', 'showcase', 'portfolio'],
  ecommerce:      ['lifestyle', 'colorful', 'product', 'images'],
  education:      ['professional', 'trust', 'clean', 'readable'],
  nonprofit:      ['trust', 'mission', 'values', 'impact', 'human'],
  fitness:        ['bold', 'energetic', 'lifestyle', 'images', 'dark'],
  beauty:         ['lifestyle', 'creative', 'premium', 'images', 'minimal'],
  healthcare:     ['professional', 'trust', 'clean', 'human', 'minimal'],
  'local-service':['professional', 'trust', 'service-business', 'personal'],
  restaurant:     ['lifestyle', 'images', 'colorful', 'creative', 'fullscreen'],
  'real-estate':  ['professional', 'premium', 'images', 'trust', 'split'],
}

const HERO_STYLE_MAP: Record<string, string> = {
  'split-screen':    'hero-split-image',
  'split-image':     'hero-split-image',
  'full-image':      'hero-fullscreen-image',
  'fullscreen':      'hero-fullscreen-image',
  'gradient-mesh':   'hero-gradient-mesh',
  'gradient':        'hero-gradient-mesh',
  'minimal-centered':'hero-centered-gradient',
  'editorial':       'hero-dark-editorial',
  'dark':            'hero-dark-editorial',
  'saas':            'hero-saas-mockup',
  'product':         'hero-saas-mockup',
  'mockup':          'hero-saas-mockup',
  'mosaic':          'hero-mosaic-grid',
  'lifestyle':       'hero-mosaic-grid',
  'photo-grid':      'hero-mosaic-grid',
  'bold-type':       'hero-bold-typography',
  'typography':      'hero-bold-typography',
  'announcement':    'hero-announcement',
  'launch':          'hero-announcement',
  'split-dark':      'hero-split-dark',
  'luxury':          'hero-split-dark',
}

/**
 * Select the best variant for a section based on industry, style tags, and seed.
 *
 * @param section   - Section type key
 * @param industry  - Business industry
 * @param tags      - Additional style tags from the site plan
 * @param heroStyle - Preferred hero style hint from plan.design
 * @param seed      - Deterministic seed (e.g. project ID) for variety
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

  // Hero: use explicit style hint first
  if (section === 'hero' && heroStyle) {
    const key = heroStyle.toLowerCase().trim()
    const targetId = HERO_STYLE_MAP[key]
    if (targetId) {
      const match = variants.find((v) => v.id === targetId)
      if (match) return match
    }
  }

  // Collect all style tags
  const allTags = [...tags, ...(INDUSTRY_STYLE_TAGS[industry] || [])]

  // Score each variant
  const scored = variants.map((v) => {
    let score = 0
    if (v.bestFor.includes(industry)) score += 10
    for (const tag of allTags) {
      if (v.tags.includes(tag)) score += 2
    }
    return { variant: v, score }
  })
  scored.sort((a, b) => b.score - a.score)

  // Top tier: within 4 points of the best score
  const topScore = scored[0].score
  const topTier = scored.filter((s) => s.score >= topScore - 4)

  // Use seed for deterministic variety within the top tier
  if (topTier.length > 1 && seed) {
    const hash = seed.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
    return topTier[hash % topTier.length].variant
  }

  return topTier[0].variant
}

/** Returns coverage stats for debugging */
export function getCoverage(): Record<string, number> {
  return Object.fromEntries(
    Object.entries(COMPONENT_REGISTRY).map(([k, v]) => [k, v.length])
  )
}

/** Returns total variant count */
export function getTotalVariants(): number {
  return Object.values(COMPONENT_REGISTRY).reduce((sum, arr) => sum + arr.length, 0)
}
