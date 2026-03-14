# Visual Quality Upgrade Plan — Webflow-Level Output

## Current State Audit

### What We Have ✅
- Design token system (colors, fonts, spacing)
- CSS animation library (float, counter, parallax, tilt, marquee, blob, glass)
- Section-by-section generation capability (`generateSection` + `assembleWebsite`)
- Scroll reveal with multiple variants
- Card hover effects, image zoom, gradient borders

### What's Actually Broken 🔴

#### 1. WRONG CODE PATH — The API still uses `generateCode` (single-shot monolith)
**Impact: CRITICAL**
- `app/api/generate/route.ts` calls `generateCode()` — the OLD single-prompt approach
- This asks one LLM call to generate the ENTIRE site (nav, hero, features, testimonials, contact, footer)
- The LLM shortcuts, produces repetitive CSS, cuts corners on later sections
- The new `generateSection()` + `assembleWebsite()` is built but NEVER CALLED

**Fix:** Wire up the section-by-section pipeline in the API route

#### 2. IMAGES — Gemini hallucinates Unsplash URLs
**Impact: CRITICAL**
- We tell Gemini "use Unsplash URLs" but it invents fake photo IDs → broken images
- No industry-specific image library
- No fallback when images fail to load
- Professional templates rely on HIGH-QUALITY, RELEVANT images as 40% of visual impact

**Fix:** Curated image bank with REAL verified Unsplash URLs per industry

#### 3. FONT PAIRING — Always defaults to Inter
**Impact: HIGH**
- Planner suggests fonts but they're often generic
- No curated pairings — random combinations look amateurish
- Webflow templates use SPECIFIC, tested font pairs (serif heading + sans body, etc.)

**Fix:** Curated font pair library mapped to industries/styles

#### 4. SVG ICONS — Gemini generates garbage SVGs
**Impact: HIGH**  
- Inline SVG icons are often malformed, too complex, or visually inconsistent
- Different stroke widths, sizes, and styles within the same page
- Professional templates use CONSISTENT icon sets (all 24px, all 2px stroke, all rounded)

**Fix:** Pre-built SVG icon library with 50+ industry-relevant icons, consistent style

#### 5. CONTENT DENSITY — AI writes too much text
**Impact: HIGH**
- Webflow templates: ~15 words per card description, ~30 words per testimonial
- AI generates: 40-80 words per description, walls of text
- Result looks cluttered, unprofessional, overwhelming

**Fix:** Strict word count limits in prompts + post-generation content trimming

#### 6. COLOR APPLICATION — Too uniform, missing opacity layers
**Impact: MEDIUM**
- AI uses primary color at 100% everywhere → garish
- Professional templates use primary at: 100% (buttons), 15% (icon backgrounds), 8% (section tints), 5% (hover states)
- Missing: gradient overlays, color at opacity, warm neutral backgrounds

**Fix:** More specific opacity guidance in prompts + token expansion

#### 7. WHITESPACE — Not enough breathing room
**Impact: MEDIUM**
- AI packs elements too tightly
- Professional templates have 2-3x more whitespace between elements
- Section padding, card padding, and element spacing all too tight

**Fix:** Enforce minimum spacing values in global CSS

#### 8. SECTION TRANSITIONS — Sections feel disconnected
**Impact: MEDIUM**
- Each section is a flat rectangle
- Professional templates use: alternating bg colors, wave dividers, overlapping elements
- No visual rhythm or flow between sections

**Fix:** Section transition patterns built into CSS + prompt guidance

#### 9. NO REFERENCE CODE — AI has no quality benchmark
**Impact: HIGH**
- We describe what we want in English
- AI interprets descriptions differently each time
- No "gold standard" HTML example showing the exact quality level expected

**Fix:** Include reference HTML snippets for each section type in the prompt

#### 10. QA PASS IS WEAK
**Impact: MEDIUM**
- Current QA only checks for: broken links, missing .reveal, placeholder text
- Doesn't check: spacing, color consistency, typography hierarchy, image quality, responsive breakpoints, animation usage

**Fix:** Multi-dimensional quality scoring + targeted improvement prompts

---

## Improvement Strategy (Ranked by Impact)

### Phase 1: Wire Up Section Pipeline 🔴 (CRITICAL)
**File: `app/api/generate/route.ts`**

Replace `generateCode()` call with:
```
1. generatePlan(prompt) → plan
2. For each section in plan.sections:
   generateSection(plan, style, section.type, previousHtml) → sectionHtml
3. assembleWebsite(sections, plan, style) → finalHtml
4. reviewAndImprove(finalHtml, plan) → polishedHtml
```

This gives each section 16K tokens of focused attention instead of sharing 32K across everything.

### Phase 2: Curated Image Bank 🔴 (CRITICAL)
**New file: `lib/image-bank.ts`**

Real, verified Unsplash URLs organized by:
- Industry (dental, restaurant, SaaS, fitness, real-estate, etc.)
- Usage context (hero-background, team-portrait, service-card, about-section)
- Style (light, dark, warm, cool)

The plan should select images, and the section generator receives actual URLs.

### Phase 3: Reference HTML Snippets 🟡 (HIGH)
**New file: `lib/section-references.ts`**

For each section type, include ONE complete, production-quality HTML example (~2000 chars).
The section prompt includes: "Match or EXCEED this quality level: [reference]"

### Phase 4: Font Pair + Icon Libraries 🟡 (HIGH)
**New file: `lib/font-pairs.ts`**
- 15 tested font pairings with Google Fonts URLs
- Mapped to industries/tones

**New file: `lib/svg-icons.ts`**
- 60+ SVG icons, all 24px, 2px stroke, rounded caps
- Organized by category (business, health, tech, food, etc.)
- Section generator picks from library instead of generating

### Phase 5: Content Density Controls 🟡 (HIGH)
Update section prompts with strict limits:
- Hero heading: 5-8 words max
- Hero subheading: 15-25 words
- Service card description: 12-18 words
- Testimonial quote: 20-35 words
- About section body: 40-60 words
- CTA heading: 5-8 words

### Phase 6: Enhanced CSS Foundation 🟢 (MEDIUM)
Update `assembleWebsite` global CSS:
- Enforce more spacing: sections 120px padding, 48px grid gaps
- Add `.accent-word { color: var(--clr-accent); }` globally
- Add section transition patterns (wave, gradient fade)
- Improve base typography scale

### Phase 7: QA Scoring System 🟢 (MEDIUM)
Multi-pass QA:
- Pass 1: Visual consistency (colors, fonts, spacing)
- Pass 2: Content quality (no placeholder, word count limits)
- Pass 3: Technical correctness (valid HTML, responsive, animations work)

---

## Implementation Priority

| # | Task | Impact | Effort | Priority |
|---|------|--------|--------|----------|
| 1 | Wire section pipeline to API | 10/10 | Medium | NOW |
| 2 | Curated image bank | 9/10 | Medium | NOW |
| 3 | Reference HTML snippets | 8/10 | High | NEXT |
| 4 | Font pair library | 7/10 | Low | NEXT |
| 5 | SVG icon library | 7/10 | Medium | NEXT |
| 6 | Content density limits | 7/10 | Low | NEXT |
| 7 | CSS foundation upgrade | 6/10 | Low | AFTER |
| 8 | QA scoring system | 5/10 | Medium | AFTER |
