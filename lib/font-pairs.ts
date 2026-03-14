/**
 * Curated Font Pairings — tested Google Font combinations
 * Each pair has heading + body fonts with specific weights and Google Fonts URL.
 */

export interface FontPair {
  id: string
  name: string
  heading: string
  headingWeights: string
  body: string
  bodyWeights: string
  googleUrl: string
  vibe: string // short description of the feeling
  industries: string[]  // best-fit industries
}

export const FONT_PAIRS: FontPair[] = [
  {
    id: 'elegant-serif',
    name: 'Elegant Serif',
    heading: 'Playfair Display',
    headingWeights: '400;500;600;700;800;900',
    body: 'Source Sans 3',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Source+Sans+3:wght@300;400;500;600&display=swap',
    vibe: 'Luxury, traditional, high-end',
    industries: ['beauty', 'real-estate', 'restaurant', 'portfolio'],
  },
  {
    id: 'modern-clean',
    name: 'Modern Clean',
    heading: 'Inter',
    headingWeights: '400;500;600;700;800;900',
    body: 'Inter',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
    vibe: 'Tech, neutral, professional',
    industries: ['saas', 'agency', 'local-service'],
  },
  {
    id: 'geometric-bold',
    name: 'Geometric Bold',
    heading: 'Space Grotesk',
    headingWeights: '400;500;600;700',
    body: 'DM Sans',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap',
    vibe: 'Technical, futuristic, confident',
    industries: ['saas', 'fitness', 'agency'],
  },
  {
    id: 'editorial',
    name: 'Editorial',
    heading: 'DM Serif Display',
    headingWeights: '400',
    body: 'DM Sans',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap',
    vibe: 'Authoritative, editorial, trustworthy',
    industries: ['local-service', 'healthcare', 'education', 'nonprofit'],
  },
  {
    id: 'warm-humanist',
    name: 'Warm Humanist',
    heading: 'Plus Jakarta Sans',
    headingWeights: '400;500;600;700;800',
    body: 'Plus Jakarta Sans',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap',
    vibe: 'Friendly, approachable, warm',
    industries: ['healthcare', 'education', 'nonprofit', 'beauty'],
  },
  {
    id: 'luxury-sans',
    name: 'Luxury Sans',
    heading: 'Sora',
    headingWeights: '400;500;600;700;800',
    body: 'Outfit',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap',
    vibe: 'Premium, modern luxury, polished',
    industries: ['real-estate', 'beauty', 'ecommerce', 'agency'],
  },
  {
    id: 'classic-professional',
    name: 'Classic Professional',
    heading: 'Libre Baskerville',
    headingWeights: '400;700',
    body: 'Source Sans 3',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@300;400;500;600&display=swap',
    vibe: 'Legal, established, corporate',
    industries: ['local-service', 'education', 'nonprofit'],
  },
  {
    id: 'sharp-startup',
    name: 'Sharp Startup',
    heading: 'Manrope',
    headingWeights: '400;500;600;700;800',
    body: 'Manrope',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap',
    vibe: 'Startup, fintech, modern SaaS',
    industries: ['saas', 'agency', 'ecommerce'],
  },
  {
    id: 'expressive-creative',
    name: 'Expressive Creative',
    heading: 'Clash Display',
    headingWeights: '400;500;600;700',
    body: 'Satoshi',
    bodyWeights: '300;400;500;700',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Work+Sans:wght@300;400;500;600&display=swap',
    vibe: 'Bold, creative, energetic',
    industries: ['portfolio', 'agency', 'fitness'],
  },
  {
    id: 'soft-rounded',
    name: 'Soft Rounded',
    heading: 'Nunito',
    headingWeights: '400;500;600;700;800;900',
    body: 'Nunito Sans',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&family=Nunito+Sans:wght@300;400;500;600&display=swap',
    vibe: 'Playful, friendly, family-oriented',
    industries: ['education', 'healthcare', 'nonprofit', 'fitness'],
  },
  {
    id: 'minimal-swiss',
    name: 'Minimal Swiss',
    heading: 'Instrument Sans',
    headingWeights: '400;500;600;700',
    body: 'Inter',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
    vibe: 'Swiss, minimal, precise',
    industries: ['portfolio', 'agency', 'saas'],
  },
  {
    id: 'elegant-modern',
    name: 'Elegant Modern',
    heading: 'Cormorant Garamond',
    headingWeights: '400;500;600;700',
    body: 'Outfit',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600&display=swap',
    vibe: 'Spa, wellness, elegance',
    industries: ['beauty', 'restaurant', 'real-estate'],
  },
  {
    id: 'bold-impact',
    name: 'Bold Impact',
    heading: 'Urbanist',
    headingWeights: '400;500;600;700;800;900',
    body: 'Urbanist',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap',
    vibe: 'Bold, modern, energetic',
    industries: ['fitness', 'ecommerce', 'saas', 'agency'],
  },
  {
    id: 'organic-natural',
    name: 'Organic Natural',
    heading: 'Fraunces',
    headingWeights: '400;500;600;700;800;900',
    body: 'Commissioner',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Fraunces:wght@400;500;600;700;800;900&family=Commissioner:wght@300;400;500;600&display=swap',
    vibe: 'Organic, artisanal, warm',
    industries: ['restaurant', 'nonprofit', 'beauty'],
  },
  {
    id: 'fintech-premium',
    name: 'Fintech Premium',
    heading: 'General Sans',
    headingWeights: '400;500;600;700',
    body: 'Inter',
    bodyWeights: '300;400;500;600',
    googleUrl: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
    vibe: 'Fintech, premium SaaS, dashboard',
    industries: ['saas', 'agency'],
  },
]

/**
 * Get the best font pair for an industry and optional style hint.
 */
export function getFontPairForIndustry(industry: string, styleHint?: string): FontPair {
  const norm = industry.toLowerCase().replace(/[^a-z-]/g, '')
  
  // Find pairs that match this industry
  const matches = FONT_PAIRS.filter(fp => fp.industries.includes(norm))
  
  if (matches.length === 0) return FONT_PAIRS[1] // Default to Modern Clean
  
  // If style hint, try to match vibe
  if (styleHint) {
    const hintLower = styleHint.toLowerCase()
    const vibeMatch = matches.find(fp => 
      fp.vibe.toLowerCase().includes(hintLower) || 
      fp.name.toLowerCase().includes(hintLower)
    )
    if (vibeMatch) return vibeMatch
  }
  
  // Return first match (highest priority)
  return matches[0]
}
