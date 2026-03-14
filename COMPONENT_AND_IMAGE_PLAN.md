# Component System + AI Image Generation — Architecture Plan

## Problem Statement

### Current: AI writes ALL code from scratch every time
```
User prompt → Plan → AI writes 10,000 chars of raw HTML/CSS per section → hope it's good
```

**Why this fails:**
- AI "invents" layouts each time → inconsistent quality
- AI writes CSS from scratch → bugs, browser issues, untested code
- AI generates icons → malformed SVGs
- AI picks images → hallucinates URLs
- AI decides spacing/sizing → sometimes cramped, sometimes too loose
- No guarantee of responsive quality
- Every generation is a gamble

### Target: AI composes from tested components + fills in content
```
User prompt → Plan → Select component variants → AI fills content slots → Assemble from tested HTML/CSS
```

**Why this wins:**
- Pre-tested HTML/CSS → guaranteed to render correctly
- Consistent quality → every site looks professional
- Faster generation → AI writes 200 words of content, not 10,000 chars of code
- Reliable responsive → tested at 375px, 768px, 1024px, 1440px
- AI focuses on what it's GOOD at → copywriting, brand voice, color selection
- What it's BAD at → writing bug-free CSS — is handled by pre-built templates

---

## Part 1: Component Template System

### Architecture

```
lib/
  components/
    types.ts         — ComponentVariant interface, slot types
    hero/
      split-image.ts   — Hero with image right, text left
      centered-gradient.ts — Centered text, mesh gradient bg
      dark-editorial.ts  — Dark bg, oversized typography
      full-bleed.ts     — Full-screen background image
      minimal-badge.ts  — Clean centered with pill badge
    features/
      icon-grid.ts      — 6 cards in 3-col grid with icons
      image-cards.ts    — Cards with top images
      bento-grid.ts     — Asymmetric bento layout
      numbered-list.ts  — Large numbers + descriptions
    social-proof/
      stats-strip.ts    — Horizontal stat counters
      logo-marquee.ts   — Scrolling logo/brand strip
    about/
      split-photo.ts    — Photo left, text right, overlapping stat
      timeline.ts       — Company timeline/story
      values-grid.ts    — Mission/vision/values cards
    testimonials/
      card-scroller.ts  — Horizontal scroll cards
      large-quote.ts    — Single large featured quote
      grid-cards.ts     — 3-col testimonial grid
    cta/
      gradient-banner.ts — Full-width gradient CTA
      split-cta.ts      — Text left, form right
      minimal-cta.ts    — Simple centered CTA
    contact/
      split-form.ts     — Info left, form right
      card-form.ts      — Centered card with form
    footer/
      four-column.ts    — Logo + 3 link columns + bottom bar
      minimal.ts        — Logo + links + copyright row
    pricing/
      three-tier.ts     — 3-column pricing with featured middle
      toggle-cards.ts   — Monthly/yearly toggle + cards
    faq/
      accordion.ts      — Expandable FAQ accordion
    nav/
      sticky-glass.ts   — Glassmorphism sticky nav
```

### Component Interface

```typescript
interface ComponentVariant {
  id: string
  name: string
  section: string  // hero | features | testimonials | etc.
  
  // The pre-built HTML template with {{slot}} placeholders
  html: string
  
  // The pre-built CSS (scoped to this component)
  css: string
  
  // Content slots the AI needs to fill
  slots: {
    name: string
    type: 'text' | 'heading' | 'image-url' | 'icon-svg' | 'color' | 'array'
    maxWords?: number
    description: string
    required: boolean
  }[]
  
  // Which industries/styles this variant works best for
  bestFor: string[]
  
  // Responsive breakpoints this has been tested at
  testedAt: number[] // [375, 768, 1024, 1440]
}
```

### How Generation Changes

**Before (current):**
```
1. Plan website → JSON
2. For each section:
   → Send 3000-word prompt to Gemini
   → Gemini writes 10,000+ chars of HTML/CSS from scratch
   → Hope it looks good
3. Assemble + QA pass
```

**After (component system):**
```
1. Plan website → JSON (includes component variant selections)
2. For each section:
   → Look up pre-built component template
   → Send SHORT prompt to Gemini: "Fill these 8 content slots for a dental clinic"
   → Gemini returns 200-400 words of content (NOT code)
   → Inject content into tested HTML template
3. Assemble (global CSS + component CSS + filled HTML)
   → Optional: AI polish pass for custom CSS additions
```

### Benefits

| Metric | Before | After |
|--------|--------|-------|
| Generation time | 60-90s (8 × 16K token sections) | 20-30s (8 × 2K token content fills) |
| Token cost | ~100K tokens/site | ~20K tokens/site |
| CSS bugs | Common (untested) | Zero (pre-tested) |
| Responsive quality | Variable | Guaranteed |
| Visual consistency | Random | Predictable |
| Content quality | Mixed (AI writes code AND content) | High (AI ONLY writes content) |

### Implementation Plan

**Phase 1: Build 5 core section templates** (hero, features, testimonials, contact, footer)
- Each has 2-3 variants
- Hand-craft the HTML/CSS to Webflow quality
- Test at 375px, 768px, 1024px, 1440px
- Include all animations (reveal, hover, counters)

**Phase 2: Content-fill prompt system**
- Small, focused prompts: "Write 6 service card titles (max 3 words each) for a dental clinic"
- Return structured JSON, not HTML
- Validate word counts

**Phase 3: Assembly engine**
- Replace `generateSection()` with `fillComponent()`
- Combine global CSS + component CSS + filled content
- Add custom CSS layer for brand-specific overrides

**Phase 4: AI customization layer**
- After assembly, optional AI pass to add unique touches
- Custom CSS-only modifications (no structural changes)
- This is where creativity happens — on top of a solid foundation

---

## Part 2: AI Image Generation

### The Image Problem

Current: Unsplash stock photos
- Generic: every dental site gets the same teeth photo
- No brand coherence: images don't match the site's color palette
- Limited variety: 6 photos per industry

Target: AI-generated images unique to each site
- Custom hero illustrations/scenes matching the brand
- Consistent style across all images on the page
- Industry-specific but unique to this business

### Available Image APIs

| API | Model | Cost | Speed | Quality | Notes |
|-----|-------|------|-------|---------|-------|
| **Google Imagen 3** | imagen-3.0-generate-002 | Free tier / $0.02 per image | 5-10s | Excellent | Available through @google/genai SDK, same API key as Gemini |
| Together AI | Flux.1 Schnell | $0.003/image | 2-4s | Good | Very fast, very cheap |
| Together AI | Flux.1 Dev | $0.025/image | 8-15s | Excellent | Best open-source quality |
| OpenAI | DALL-E 3 | $0.04/image | 10-20s | Excellent | Requires separate API key |
| Replicate | Flux/SDXL | $0.01-0.05/image | 5-15s | Good-Excellent | Pay per second |

### Recommended: Google Imagen 3 (same API key!)
- Already have GEMINI_API_KEY
- New @google/genai SDK supports it
- Free tier includes image generation
- High quality, good with text/composition
- Consistent style when given the same style prompt

### Image Pipeline

```
1. PLANNING PHASE (parallel with content planning):
   → Generate image prompts based on industry + style + brand colors
   → 4-5 images per site:
     - Hero: abstract/lifestyle image matching industry
     - About: team/workspace/professional photo
     - Service 1-2: specific service illustrations
     - CTA: background texture/pattern
   
2. GENERATION PHASE (parallel with section content):
   → Fire all 4-5 image generations simultaneously
   → 10-15 seconds while section content fills happen
   → Receive base64 or URLs
   
3. STORAGE:
   → Option A: Inline as base64 data URLs (no storage needed, larger HTML)
   → Option B: Upload to Supabase Storage → get public URLs
   → Option C: Upload to Cloudflare R2 → get CDN URLs
   
4. INJECTION:
   → Replace image placeholders in component templates with real URLs
```

### Image Prompt Engineering

The key insight: image prompts must be STYLE-AWARE.

```typescript
function generateImagePrompts(plan: Plan, style: DesignStyle): ImagePrompt[] {
  const palette = style.tokens.colors
  const isLight = isLightTheme(palette.bg)
  
  return [
    {
      id: 'hero',
      prompt: `Professional ${plan.industry} website hero image. 
        ${isLight ? 'Light, airy, clean background' : 'Dark, moody, sophisticated'}. 
        Color palette: ${palette.primary}, ${palette.accent}. 
        Style: modern, minimal, high-end photography feel.
        NO text, NO logos, NO watermarks.
        Landscape orientation, 16:9 aspect ratio.`,
      width: 1344,
      height: 768,
    },
    {
      id: 'about',
      prompt: `Professional team or workspace photo for ${plan.industry} business.
        Warm, authentic, candid feel. Modern office or professional setting.
        NO stock photo clichés (no handshakes, no pointing at screens).
        Portrait orientation, 3:4 aspect ratio.`,
      width: 768,
      height: 1024,
    },
    // ...
  ]
}
```

### Fallback Strategy

```
1. Try AI generation (Imagen 3)
   ↓ fail?
2. Try backup API (Together AI Flux)
   ↓ fail?
3. Use curated Unsplash from image-bank.ts (current system)
```

### Cost Analysis

Per website generation:
- 4 AI images × $0.02 = $0.08 per site
- With free tier (Imagen): $0.00 for first ~100 images/day
- Gemini tokens: ~$0.05 per site
- Total: ~$0.13 per site (vs current ~$0.05 text-only)

---

## Implementation Roadmap

### Sprint 1: Component Templates (2-3 days)
1. Build ComponentVariant TypeScript interface
2. Hand-craft 5 hero variants in pure HTML/CSS
3. Hand-craft 3 features variants
4. Hand-craft 2 testimonial variants
5. Hand-craft contact + footer templates
6. Build content-fill prompt system
7. Build assembly engine
8. Wire up to API route

### Sprint 2: AI Images (1-2 days)
1. Install @google/genai SDK
2. Build image prompt generator
3. Build parallel image generation pipeline
4. Build storage/serving solution (base64 first, then CDN)
5. Build fallback chain (Imagen → Unsplash)
6. Wire into component templates

### Sprint 3: Quality + Polish (1-2 days)
1. Test all component variants at 4 breakpoints
2. Build preview system for style selection
3. Add custom CSS layer for AI creativity
4. Build QA scoring for final output
5. A/B test: component system vs current raw generation

---

## Decision Points

1. **Image storage**: Base64 inline (simple, large files) vs CDN upload (requires storage service)?
2. **Component count**: Start with 15 variants (MVP) or 30+ (complete)?
3. **AI creativity**: How much freedom for the AI to add custom CSS on top of templates?
4. **Migration**: Replace current system entirely, or run both in parallel?

---

## Recommended Starting Point

**Highest impact, lowest risk:**
1. Build 5 hero component templates (the most visible section)
2. Add Imagen 3 for hero images only (1 image per site)
3. Keep current section generation for other sections
4. Compare quality: templated hero + AI image vs fully AI-generated hero
