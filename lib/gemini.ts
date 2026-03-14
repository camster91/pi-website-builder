import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const MODELS = {
  planner: 'gemini-3.1-pro-preview',   // Best reasoning for brand strategy
  coder: 'gemini-3-flash-preview',      // Fast + high-quality for section HTML
  qa: 'gemini-2.5-flash',              // Quick targeted fixes
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

/** Strip markdown code fences */
function extractCode(text: string): string {
  const fenceRe = /```(?:html|css|js|javascript)?\s*([\s\S]*?)```/i
  const match = text.match(fenceRe)
  if (match) return match[1].trim()
  return text.trim()
}

/** Extract JSON, tolerating markdown fences */
function extractJSON(text: string): any {
  const cleaned = extractCode(text)
  try { return JSON.parse(cleaned) } catch { /* fallthrough */ }
  const objMatch = text.match(/\{[\s\S]*\}/)
  if (objMatch) try { return JSON.parse(objMatch[0]) } catch { /* fallthrough */ }
  throw new Error('Failed to parse plan JSON from AI response')
}

class GeminiService {
  private getModel(agent: AgentType, maxTokens = 8192): GenerativeModel {
    return genAI.getGenerativeModel({
      model: MODELS[agent],
      generationConfig: {
        temperature: agent === 'coder' ? 0.85 : 0.6,
        topP: 0.95,
        maxOutputTokens: maxTokens,
      },
    })
  }

  async generate(agent: AgentType, prompt: string, maxTokens?: number): Promise<GenerationResult> {
    const model = this.getModel(agent, maxTokens)
    const result = await model.generateContent(prompt)
    const text = result.response.text()
    const usage = result.response.usageMetadata
    return {
      text,
      usage: usage ? {
        promptTokens: usage.promptTokenCount || 0,
        candidatesTokens: usage.candidatesTokenCount || 0,
        totalTokens: usage.totalTokenCount || 0,
      } : undefined,
    }
  }

  async generatePlan(prompt: string): Promise<any> {
    const systemPrompt = `You are a senior brand strategist and UX architect. Analyze the user's website request and return a comprehensive JSON plan.

INDUSTRY DETECTION: Detect which category this falls into:
local-service | restaurant | portfolio | saas | ecommerce | agency | nonprofit | healthcare | real-estate | education | fitness | beauty

DESIGN STYLE MAPPING (assign based on industry + user cues):
- local-service → trustworthy-professional (navy/orange, clean, credibility-focused)  
- restaurant → warm-sensory (earthy/deep reds, imagery-forward, appetite-inducing)
- portfolio → minimal-bold (monochrome + 1 accent, typography-led, spacious)
- saas → modern-startup (violet/indigo, dark hero, feature-dense)
- agency → editorial-creative (black/white + vivid accent, large type, grid-breaking)
- fitness → energetic-dynamic (black/neon green or red, motion, strong CTAs)
- healthcare → calm-trustworthy (teal/white, soft corners, reassuring)
- beauty → luxe-soft (blush/gold, elegant serif headings, whitespace-heavy)

Return ONLY valid JSON with this exact structure:
{
  "title": "Business name",
  "tagline": "One-sentence brand promise",
  "industry": "detected-category",
  "style": "design-style-name",
  "targetAudience": "Who the site is for",
  "tone": "professional|friendly|bold|elegant|playful|authoritative",
  "design": {
    "primaryColor": "#hex",
    "primaryDark": "#hex (20% darker variant)",
    "secondaryColor": "#hex",
    "accentColor": "#hex (for CTAs and highlights)",
    "textPrimary": "#hex (dark, for headings)",
    "textSecondary": "#hex (medium, for body)",
    "textMuted": "#hex (light, for captions)",
    "bgPrimary": "#hex (page background)",
    "bgCard": "#hex (card/surface background)",
    "bgSection": "#hex (alternating section background)",
    "borderColor": "#hex",
    "fontHeading": "Google Font name for headings",
    "fontBody": "Google Font name for body",
    "borderRadius": "4px|8px|12px|16px|24px",
    "heroStyle": "gradient-mesh|split-screen|full-image|minimal-centered|dark-gradient"
  },
  "sections": [
    {"id": "hero", "type": "hero", "priority": 1},
    {"id": "social-proof", "type": "social-proof", "priority": 2},
    {"id": "services", "type": "features", "priority": 3},
    {"id": "about", "type": "about", "priority": 4},
    {"id": "testimonials", "type": "testimonials", "priority": 5},
    {"id": "cta", "type": "cta-banner", "priority": 6},
    {"id": "contact", "type": "contact", "priority": 7}
  ],
  "navigation": ["Home", "Services", "About", "Testimonials", "Contact"],
  "seo": {
    "title": "Business Name - Primary Keyword | City",
    "description": "160-char meta description with primary keyword naturally included",
    "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
  },
  "content": {
    "heroHeading": "Emotionally compelling 6-8 word headline",
    "heroSubheading": "25-35 word supporting statement with clear value proposition",
    "heroCTA": "Primary button text",
    "heroSecondaryCTA": "Secondary button text",
    "socialProof": {
      "stat1": {"value": "500+", "label": "Happy Clients"},
      "stat2": {"value": "10yr", "label": "Experience"},
      "stat3": {"value": "4.9★", "label": "Average Rating"},
      "stat4": {"value": "24hr", "label": "Response Time"}
    },
    "about": {
      "heading": "Our Story heading",
      "body": "3-4 sentence compelling about section"
    },
    "services": [
      {"name": "Service 1", "description": "30-word benefit-led description", "icon": "svg-path-data"},
      {"name": "Service 2", "description": "30-word benefit-led description", "icon": "svg-path-data"},
      {"name": "Service 3", "description": "30-word benefit-led description", "icon": "svg-path-data"},
      {"name": "Service 4", "description": "30-word benefit-led description", "icon": "svg-path-data"},
      {"name": "Service 5", "description": "30-word benefit-led description", "icon": "svg-path-data"},
      {"name": "Service 6", "description": "30-word benefit-led description", "icon": "svg-path-data"}
    ],
    "testimonials": [
      {"quote": "Specific, believable 30-word testimonial", "author": "Full Name", "role": "Job Title or Location", "initials": "FN"},
      {"quote": "Different angle testimonial", "author": "Full Name", "role": "Job Title or Location", "initials": "FN"},
      {"quote": "Result-focused testimonial", "author": "Full Name", "role": "Job Title or Location", "initials": "FN"}
    ],
    "ctaBanner": {
      "heading": "Urgent CTA heading",
      "body": "One supporting sentence",
      "button": "CTA button text"
    },
    "contact": {
      "heading": "Get In Touch",
      "subheading": "Ready to get started? We'd love to hear from you.",
      "email": "info@business.com",
      "phone": "+1 (555) 000-0000",
      "address": "City, Province/State",
      "hours": "Mon-Fri 8am-6pm"
    },
    "footer": {
      "tagline": "Short brand tagline for footer",
      "copyright": "© 2025 Business Name. All rights reserved."
    }
  }
}`
    const result = await this.generate('planner', `${systemPrompt}\n\nUser request: ${prompt}`)
    return extractJSON(result.text)
  }

  async generateCode(plan: any, prompt: string): Promise<{ html: string; usage?: any }> {
    const p = plan.design
    const c = plan.content

    // Build Google Fonts URL
    const headingFont = (p.fontHeading || 'Inter').replace(/ /g, '+')
    const bodyFont = (p.fontBody || 'Inter').replace(/ /g, '+')
    const fontsUrl = `https://fonts.googleapis.com/css2?family=${headingFont}:wght@400;500;600;700;800;900&family=${bodyFont}:wght@300;400;500;600&display=swap`

    const codePrompt = `You are a world-class frontend developer and visual designer. Generate a complete, stunning, single-page website that would impress a senior designer at Framer or Linear.

## THE WEBSITE
${JSON.stringify(plan, null, 2)}

## STRICT TECHNICAL RULES
1. **NO TAILWIND CDN** — write all styles in a <style> tag using pure modern CSS
2. **NO external CSS/JS CDN libraries** (no Bootstrap, no Font Awesome, no Alpine.js)
3. Use this Google Fonts link exactly: <link href="${fontsUrl}" rel="stylesheet">
4. All icons must be inline SVG inside the HTML — never img tags or icon fonts
5. Mobile hamburger menu using vanilla JS only (no jQuery, no libraries)
6. Smooth scroll with CSS: html { scroll-behavior: smooth }
7. Output ONLY the complete HTML — no markdown, no explanation, no code fences
8. Target output size: 45,000–80,000 characters (a genuinely complete website)

## CSS DESIGN SYSTEM (use these exact variables throughout)
\`\`\`css
:root {
  --clr-primary: ${p.primaryColor};
  --clr-primary-dark: ${p.primaryDark || p.primaryColor};
  --clr-secondary: ${p.secondaryColor};
  --clr-accent: ${p.accentColor};
  --clr-text: ${p.textPrimary || '#0f172a'};
  --clr-text-secondary: ${p.textSecondary || '#475569'};
  --clr-text-muted: ${p.textMuted || '#94a3b8'};
  --clr-bg: ${p.bgPrimary || '#ffffff'};
  --clr-bg-card: ${p.bgCard || '#f8fafc'};
  --clr-bg-section: ${p.bgSection || '#f1f5f9'};
  --clr-border: ${p.borderColor || '#e2e8f0'};
  --radius: ${p.borderRadius || '8px'};
  --font-heading: '${p.fontHeading || 'Inter'}', system-ui, sans-serif;
  --font-body: '${p.fontBody || 'Inter'}', system-ui, sans-serif;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md: 0 4px 16px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
  --shadow-lg: 0 20px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08);
  --shadow-xl: 0 32px 64px rgba(0,0,0,0.16);
  --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --max-width: 1200px;
}
\`\`\`

## REQUIRED CSS PATTERNS (implement all of these)

### Typography Scale (use clamp for fluid type)
\`\`\`css
.display { font-size: clamp(2.5rem, 6vw, 5rem); line-height: 1.05; letter-spacing: -0.03em; font-weight: 800; }
.h1 { font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.1; letter-spacing: -0.02em; font-weight: 700; }
.h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); line-height: 1.2; letter-spacing: -0.02em; font-weight: 700; }
.h3 { font-size: clamp(1.125rem, 2vw, 1.5rem); line-height: 1.3; font-weight: 600; }
.body-lg { font-size: clamp(1rem, 1.5vw, 1.25rem); line-height: 1.7; }
.body { font-size: 1rem; line-height: 1.7; }
.caption { font-size: 0.875rem; line-height: 1.6; }
\`\`\`

### Scroll Reveal Animation
\`\`\`css
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
\`\`\`
\`\`\`js
// Add this JS to initialize scroll reveal:
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
\`\`\`

### Card Hover Effect
\`\`\`css
.card { background: var(--clr-bg-card); border: 1px solid var(--clr-border); border-radius: var(--radius); box-shadow: var(--shadow-sm); transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition); }
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--clr-primary); }
\`\`\`

### Glassmorphism Navbar (on scroll)
\`\`\`css
.navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 1.25rem 0; transition: background var(--transition), box-shadow var(--transition), padding var(--transition); }
.navbar.scrolled { background: rgba(255,255,255,0.90); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 1px 0 var(--clr-border); padding: 0.75rem 0; }
/* Dark hero variant: */
.navbar.dark-hero { color: white; }
.navbar.dark-hero .nav-link { color: rgba(255,255,255,0.85); }
.navbar.dark-hero .nav-link:hover { color: white; }
.navbar.dark-hero.scrolled { color: var(--clr-text); }
.navbar.dark-hero.scrolled .nav-link { color: var(--clr-text-secondary); }
\`\`\`

### Button System
\`\`\`css
.btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.75rem; border-radius: var(--radius); font-weight: 600; font-size: 0.9375rem; cursor: pointer; border: none; transition: all var(--transition); text-decoration: none; white-space: nowrap; }
.btn-primary { background: var(--clr-primary); color: white; box-shadow: 0 0 0 0 var(--clr-primary); }
.btn-primary:hover { background: var(--clr-primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
.btn-outline { background: transparent; color: var(--clr-primary); border: 2px solid var(--clr-primary); }
.btn-outline:hover { background: var(--clr-primary); color: white; transform: translateY(-2px); }
.btn-ghost { background: rgba(255,255,255,0.12); color: white; border: 1px solid rgba(255,255,255,0.25); }
.btn-ghost:hover { background: rgba(255,255,255,0.22); border-color: rgba(255,255,255,0.5); }
.btn-lg { padding: 1rem 2.25rem; font-size: 1.0625rem; }
\`\`\`

### Section Layout
\`\`\`css
.section { padding: clamp(4rem, 8vw, 8rem) 0; }
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 clamp(1rem, 4vw, 2rem); }
.section-label { font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--clr-primary); margin-bottom: 0.75rem; }
.section-header { text-align: center; max-width: 640px; margin: 0 auto 4rem; }
\`\`\`

### Grid Systems
\`\`\`css
.grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr)); gap: 2rem; }
.grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 1.5rem; }
.grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr)); gap: 1.25rem; }
\`\`\`

## REQUIRED SECTIONS (build all of them with exceptional quality)

### 1. NAVBAR
- Logo left, links center/right, CTA button
- Mobile hamburger (vanilla JS toggle)
- Glassmorphism on scroll (JS adds .scrolled class)
- Smooth underline hover on links

### 2. HERO — style: "${p.heroStyle || 'gradient-mesh'}"
${p.heroStyle === 'dark-gradient' ? `
- Dark background with animated gradient: background: linear-gradient(135deg, #0f172a 0%, ${p.primaryColor}22 50%, #0f172a 100%)
- Large display headline in white
- Two CTAs: .btn-primary and .btn-ghost
- Subtle animated floating shapes in background (CSS keyframes, low opacity)
- Social proof bar below hero (logos or stats strip)` : ''}
${p.heroStyle === 'gradient-mesh' || !p.heroStyle ? `
- Mesh gradient hero: background is a multi-stop CSS gradient with soft color blobs
- Example: background: radial-gradient(ellipse 80% 80% at 50% -20%, ${p.primaryColor}25 0%, transparent 50%), linear-gradient(135deg, var(--clr-bg) 60%, ${p.secondaryColor}12 100%)
- Large display headline 
- Two CTAs: .btn-primary and .btn-outline
- Scroll-down indicator (animated chevron)` : ''}
${p.heroStyle === 'split-screen' ? `
- 50/50 split: text left, visual right
- Right side: gradient background or SVG illustration
- Two CTAs stacked left-aligned
- Trust badges (icons + text) below CTAs` : ''}
${p.heroStyle === 'minimal-centered' ? `
- White background, centered content
- Eyebrow label above heading
- Large display headline with gradient text on 1-2 key words
- Subtle background: very faint grid or dot pattern` : ''}

### 3. SOCIAL PROOF STRIP
- Four stats: ${JSON.stringify(c.socialProof || {})}
- Horizontal flexbox, dividers between stats
- Background: var(--clr-bg-section) or gradient
- Reveal animation on scroll

### 4. SERVICES/FEATURES — 6 items in a 3-column grid
Items: ${JSON.stringify(c.services || [])}
- Each card: inline SVG icon (24×24, styled with currentColor), heading, description
- Card hover: translateY(-4px) + border-color change
- Icon in a colored circle/square accent block
- Reveal with staggered delay

### 5. ABOUT SECTION — split layout
- Heading + body text left
- Visual element right: either a styled blockquote/testimonial card, or a decorative element with accent colors
- Include the company values or a key differentiator list (3 bullet points with checkmark SVGs)

### 6. TESTIMONIALS — 3 cards in a row
Items: ${JSON.stringify(c.testimonials || [])}
- Each card has avatar (initials in colored circle), quote text, author name, role
- Star rating (5 stars, inline SVG)
- Card style with shadow

### 7. CTA BANNER
- ${JSON.stringify(c.ctaBanner || {})}
- Full-width section with primary color background or gradient
- Large heading + body + button (.btn-ghost or white variant)

### 8. CONTACT SECTION
- Left: contact info (email, phone, address, hours) with SVG icons
- Right: contact form (name, email, message, submit button)
- Form inputs: clean styling with focus ring using --clr-primary
- ${JSON.stringify(c.contact || {})}

### 9. FOOTER
- Logo + tagline + nav links
- Social media icons (SVG, inline)
- Copyright: ${c.footer?.copyright || '© 2025'}
- Legal links: Privacy Policy, Terms of Service

## JAVASCRIPT REQUIREMENTS
Include a single <script> block at the end with:
1. Navbar scroll handler (adds .scrolled class at 50px)
2. Mobile menu toggle (hamburger)
3. Intersection Observer for .reveal elements
4. Contact form submission prevention with success message
5. Active nav link on scroll (highlight current section)

## FINAL QUALITY CHECKS (do all of these)
- [ ] Every section has a .reveal class for scroll animation
- [ ] No broken Tailwind classes anywhere
- [ ] Nav links use smooth scroll to section IDs
- [ ] Hero has NO blank/empty sections
- [ ] All 9 sections are implemented with real, specific content from the plan
- [ ] Contact form has real placeholder text matching the business
- [ ] Footer has all required links
- [ ] Page looks great on 375px mobile AND 1440px desktop

OUTPUT: The complete HTML document starting with <!DOCTYPE html>. Nothing else.`

    const result = await this.generate('coder', codePrompt, 32768)
    const raw = result.text.trim()
    const html = raw.startsWith('<!') ? raw : extractCode(raw)
    return { html, usage: result.usage }
  }

  async reviewAndImprove(html: string, plan: any): Promise<{ html: string; usage?: any }> {
    // If the coder produced a large, high-quality output, only do targeted fixes
    if (html.length > 30000) {
      const prompt = `You are a senior frontend developer doing a final QA pass. Make TARGETED fixes only — do not rewrite sections that already look good.

CHECK AND FIX ONLY:
1. Broken or missing nav links (href="#section-id" must match the section's id attribute)
2. Missing .reveal class on any section that doesn't animate in
3. Any section that shows only empty/placeholder content with no real text
4. Mobile menu toggle — ensure the button works
5. Contact form — ensure the submit button preventDefault works
6. Any CSS syntax errors or unclosed tags

Do NOT change the overall design, layout, or working content. Return ONLY the complete fixed HTML.

Code to fix:
${html.substring(0, 60000)}`

      const result = await this.generate('qa', prompt, 32768)
      const improved = result.text.trim()
      const cleanHtml = improved.startsWith('<!') ? improved : extractCode(improved)
      return { html: cleanHtml.length > html.length * 0.5 ? cleanHtml : html, usage: result.usage }
    }

    // Small output — full rewrite pass
    const prompt = `You are a senior frontend developer and UX expert. This website code is too short and low quality. Expand and improve it significantly.

MANDATORY IMPROVEMENTS:
1. Every section must have real, specific content — NO Lorem ipsum, NO placeholders
2. Add scroll reveal animations to every section (.reveal + IntersectionObserver)
3. Improve the hero — it needs a compelling gradient background and animations
4. Expand the services section to 6 items in a proper 3-column CSS Grid
5. Add a testimonials section if missing
6. Add a stats/social proof section if missing
7. Ensure the navbar is properly sticky with glassmorphism on scroll
8. Fix mobile responsiveness — test at 375px width mentally
9. Make all hover effects smooth and satisfying

Target at least 40,000 characters in the output.

Return ONLY the improved HTML document.

Original plan: ${JSON.stringify(plan.seo || {})}

Code to improve:
${html}`

    const result = await this.generate('qa', prompt, 32768)
    const improved = result.text.trim()
    const cleanHtml = improved.startsWith('<!') ? improved : extractCode(improved)
    return { html: cleanHtml.length > 5000 ? cleanHtml : html, usage: result.usage }
  }

  /**
   * Generate a single premium section as a self-contained HTML fragment.
   * All CSS is in a scoped <style> block — NO Tailwind, NO external CSS.
   */
  async generateSection(
    plan: any,
    style: any,     // DesignStyle from design-styles.ts
    sectionType: string,
    previousHtml: string = ''
  ): Promise<string> {
    const tok = style?.tokens
    const colors = tok?.colors ?? {}
    const typo = tok?.typography ?? {}
    const shape = tok?.shape ?? {}
    const effects = tok?.effects ?? {}
    const content = plan?.content ?? {}
    const planDesign = plan?.design ?? {}
    const curatedImages = plan?._images ?? {}

    // Merge plan colors with style tokens (plan colors take precedence for brand specifics)
    const primary = planDesign.primaryColor || colors.primary || '#2563EB'
    const primaryDark = planDesign.primaryDark || colors.primaryDark || '#1D4ED8'
    const accent = planDesign.accentColor || colors.accent || '#F59E0B'
    const bg = colors.bg || '#FFFFFF'
    const bgCard = colors.bgCard || '#F8FAFC'
    const bgSection = colors.bgSection || '#F1F5F9'
    const text = colors.text || '#0F172A'
    const textSec = colors.textSecondary || '#475569'
    const textMuted = colors.textMuted || '#94A3B8'
    const border = colors.border || '#E2E8F0'
    const fontHeading = typo.fontHeading || planDesign.fontHeading || 'Inter'
    const fontBody = typo.fontBody || planDesign.fontBody || 'Inter'
    const radius = shape.borderRadius || planDesign.borderRadius || '8px'
    const heroStyle = shape.heroStyle || planDesign.heroStyle || 'gradient-mesh'
    const glassmorph = effects.glassmorphism ?? false
    const shadowStyle = effects.shadow || 'medium'
    const motifs = (shape.motifs || []).join(', ')

    const sectionGuidance: Record<string, string> = {
      hero: `
HERO SECTION — The most important section. Webflow-template quality. Visually stunning.

STRUCTURE:
- Include a STICKY NAVIGATION BAR at the top of this section (it's the first section):
  - backdrop-filter: blur(16px), background: ${bg} at 92% opacity
  - border-bottom: 1px solid ${border}
  - Layout: logo name left | nav links center (hidden on mobile) | CTA button right
  - Hamburger icon for mobile (inline SVG)
  - Position: sticky, top: 0, z-index: 1000

- HERO CONTENT below nav:
${heroStyle === 'dark-gradient' ? `  - Dark full-width background (${bg}), min-height: 85vh
  - Centered or left-aligned layout
  - Animated gradient orbs using CSS @keyframes (soft glow circles in ${primary} and ${accent} at low opacity)
  - Large display heading in white, one word in ${accent}` : ''}
${heroStyle === 'gradient-mesh' ? `  - Background: warm neutral (${bg}) with decorative radial gradient: radial-gradient(ellipse 60% 60% at 70% 50%, ${primary}18 0%, transparent 60%)
  - Split layout: text left (55%) | floating card/image right (45%)
  - The right side: a floating card or mockup with shadow, slightly rotated 2deg, showing a relevant UI element or stat
  - Min-height: 80vh, align-items center` : ''}
${heroStyle === 'split-screen' ? `  - True 50/50 split: left side solid ${primary} with white text | right side ${bg} with dark text
  - OR: left text, right large photography image (border-radius 0 on the edge touching split)
  - Min-height: 85vh` : ''}
${heroStyle === 'minimal-centered' ? `  - Pure warm neutral background (${bg}), centered layout
  - Very large display heading (clamp(56px,8vw,100px)), minimal UI
  - Subtle dot-grid or line-grid CSS background pattern
  - Badge/pill above heading: "✦ [Industry tagline]" styled pill
  - Min-height: 75vh` : ''}
${heroStyle === 'editorial' ? `  - Black or very dark background, full viewport height
  - Oversized editorial heading (clamp(60px,8vw,120px)), tight line-height 0.95
  - White text, one word in ${accent}
  - Simple single CTA button, outlined white` : ''}
${heroStyle === 'full-bleed' ? `  - Full bleed photography or color (${bg}), content overlaid
  - Dark text on light or white text on dark, depends on background
  - Min-height: 90vh, content centered vertically` : ''}

HERO CONTENT DETAILS:
- Eyebrow pill badge above headline: small rounded pill with a ✦ icon + short tagline (MAX 5 words)
- Main heading: "${content.heroHeading || 'Transform Your Business'}" — wrap ONE key word in <span class="accent-word"> (MAX 8 words total)
- Subheading (18px, ${textSec}): "${content.heroSubheading || 'Professional services tailored to your needs'}" (MAX 20 words)
- Button pair side by side: Primary ("${content.heroCTA || 'Get Started'}") + Secondary ("${content.heroSecondaryCTA || 'Learn More'}")
- BELOW the main content: a horizontal row of 3-4 trust indicators (small avatars + "X+ clients" or star rating badges)
- Visual motifs to include: ${motifs}
${glassmorph ? '- Include a glassmorphic floating card element (backdrop-filter blur, semi-transparent bg, border 1px rgba(255,255,255,0.2))' : ''}

CURATED IMAGE (use this EXACT URL — it is a real, verified Unsplash image):
${content._heroImage ? `- Hero image: ${content._heroImage}` : '- No hero image — use CSS gradients and decorative shapes only'}
${(curatedImages.hero || []).length > 1 ? `- Alt hero images: ${curatedImages.hero.slice(1).join(', ')}` : ''}`,
      
      'social-proof': `
SOCIAL PROOF STRIP — Horizontal stats row that builds immediate trust.
- Background: ${bgSection}
- Layout: 4 stats in a horizontal flex row with subtle vertical dividers (1px solid ${border})
- Each stat: use class="counter" with data-target for animated counting
  - Number: clamp(40px,5vw,64px), font-weight 700, color ${primary}
  - Label: 13px, ${textMuted}, uppercase, letter-spacing 0.1em (MAX 2 words per label)
- Stats: ${JSON.stringify(content.socialProof || { stat1: {value:'500+', label:'Clients'}, stat2: {value:'12', label:'Years'}, stat3: {value:'4.9', label:'Rating'}, stat4: {value:'24/7', label:'Support'} })}
- BELOW stats: a marquee logo strip
  - Use class="marquee-wrap" > "marquee-track" with 6 company name pills (plain text logos, no images)
  - Style: font-size 14px, font-weight 600, opacity 0.4, gap 48px, uppercase
- Section padding: 48px 0 (tighter than other sections — this is a strip)`,

      features: `
FEATURES/SERVICES SECTION — 3-column card grid with hover effects.
- Section background: ${bg}
- Eyebrow: "WHAT WE OFFER" in ${primary} (MAX 3 words)
- Heading with ONE accented word (MAX 7 words)
- Supporting paragraph (MAX 25 words)
- 6 service cards in CSS grid (3 cols desktop, 2 tablet, 1 mobile)
- Services: ${JSON.stringify(content.services || [])}
- Each card:
  - 48×48px icon container (background ${primary} at 12% opacity, border-radius 14px) with one of these EXACT SVGs:
    Card 1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
    Card 2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    Card 3: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
    Card 4: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
    Card 5: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
    Card 6: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
  - H3 heading (MAX 3 words), description (MAX 15 words), "Learn more →" link
  - Card: background ${bgCard}, border 1px ${border}, border-radius 20px, padding 32px
  - Hover: translateY(-6px), shadow 0 20px 40px rgba(0,0,0,0.08), border-color ${primary}
- Use class="reveal-stagger" on the grid parent for staggered reveal`,

      about: `
ABOUT/WHO WE ARE SECTION — Split layout, 50/50, image left / text right (or reverse).
- Background: ${bg}
- Image side: use this EXACT image URL: ${content._aboutImage || 'CSS gradient placeholder'}
  - Style: aspect-ratio 4/5, border-radius 24px, object-fit cover, class="img-zoom-wrap"
  - Overlapping stat badge: position absolute, bottom -20px right -20px, background white, border-radius 16px, shadow, one impressive stat counter
  - Add class="float-slow" on the badge for gentle floating animation
- Text side: eyebrow label (MAX 3 words), large heading with accented word, body text (MAX 50 words), 3 checkmark bullet points, dual CTA buttons
- Checkmark bullets: use this SVG: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
- Content: ${JSON.stringify(content.about || {})}`,

      testimonials: `
TESTIMONIALS — Horizontal card scroller (Webflow-style).
- Background: ${bgSection}
- Eyebrow (MAX 2 words) + heading with ONE accented word (MAX 6 words)
- Scroller: display flex, overflow-x auto, scroll-snap-type x mandatory, scrollbar-width none, gap 24px
  - Hide scrollbar: ::-webkit-scrollbar { display: none }
  - Mask edges: -webkit-mask: linear-gradient(90deg,transparent,black 5%,black 95%,transparent); mask: same
- 4 cards, each: width min(380px, 85vw), scroll-snap-align start, flex 0 0 auto
- Each card: background ${bgCard}, border 1px solid ${border}, border-radius 20px, padding 32px
  - 5 star SVGs at top: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="${accent}" stroke="${accent}" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  - Quote text: MAX 30 words, 16px, line-height 1.7, color ${text}
  - Author row: 44px initials circle (background ${primary}18, color ${primary}, font-weight 700, border-radius 50%) + name bold 15px + role 13px ${textMuted}
- Cards: ${JSON.stringify(content.testimonials || [])}`,

      pricing: `
PRICING TABLE — 3-tier horizontal layout.
- Background: ${bg}
- Eyebrow + heading, centered
- 3 columns: Starter | Pro (featured) | Enterprise
- Featured "Pro" card: border 2px ${primary}, scale(1.03), "Most Popular" pill badge (${primary} bg, white text) at top
- Each tier: price large (clamp(40px,5vw,60px), font-weight 700), /month label, feature list with SVG checkmarks in ${primary}, CTA button
- Starter CTA: outlined secondary button | Pro CTA: solid ${primary} button | Enterprise CTA: outlined
- Feature list: 5-7 items per tier, strikethrough on missing features in Starter
- Annual/monthly toggle at top (UI element, even if non-functional)`,

      cta: `
CTA BANNER — Full-width high-impact call to action.
- Background: gradient from ${primary} to ${primaryDark} (or dark solid if style is dark)
- Large white heading (clamp(36px,5vw,60px)), ONE word accented in ${accent} or a lighter tint
- Supporting text in white at 80% opacity
- Two buttons: white solid + white outlined ghost
- Subtle background decoration: CSS radial-gradient light spots, or large faded text watermark
- Generous padding: clamp(5rem,8vw,8rem) 0`,

      contact: `
CONTACT SECTION — Split layout.
- Background: ${bg}
- Eyebrow (MAX 2 words) + heading with accented word (MAX 6 words)
- Left (40%): contact details with these EXACT SVG icons:
  - Email row: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> — "${content.contact?.email || 'hello@business.com'}"
  - Phone row: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> — "${content.contact?.phone || '+1 (555) 000-0000'}"
  - Location row: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> — "${content.contact?.address || 'City, State'}"
  - Hours row: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> — "${content.contact?.hours || 'Mon–Fri 9am–6pm'}"
  - Each row: 44px icon circle (background ${primary}12, color ${primary}) + text
- Right (60%): contact form with class="contact-form"
  - Inputs: border 1px solid ${border}, border-radius 12px, padding 14px 18px, focus: outline 2px solid ${primary}, outline-offset 2px
  - Fields: Name (required), Email (required, type=email), Message (textarea, 4 rows, required)
  - Submit button: full-width, background ${primary}, color white, padding 16px, border-radius 12px, font-weight 600
  - Add button type="submit"
- Grid gap: 64px between left and right`,

      footer: `
FOOTER — Professional 4-column footer.
- Background: dark (${colors.secondary || '#0f172a'}) or very dark version of primary
- 4 columns: (1) Logo + tagline + social icons | (2) Quick Links | (3) Services | (4) Contact info
- Logo: business name in white, large, bold; tagline in muted
- Social icons: inline SVG, 40px circles with light border, Twitter/X, LinkedIn, Instagram, Facebook
- Link columns: heading in uppercase ${primary} 13px, links in gray-300 hover white
- Bottom bar: 1px top border, copyright left, Privacy + Terms links right
- All text content from: ${JSON.stringify(content.footer || {})}`
    }

    const guidance = sectionGuidance[sectionType] || `Generate the "${sectionType}" section with all relevant content from the plan.`

    const systemPrompt = `You are a world-class frontend developer building premium websites at Webflow-template quality level. You are generating ONE section of a multi-section page.

## BUSINESS CONTEXT
- Name: ${plan?.title || 'Business'}
- Industry: ${plan?.industry || 'general'}
- Style: ${style?.name || 'modern'} — ${style?.description || ''}
- Tone: ${plan?.tone || 'professional'}
- Target Audience: ${plan?.targetAudience || 'general audience'}

## CSS DESIGN TOKENS (already defined globally — use these variables)
\`\`\`
--clr-primary: ${primary}
--clr-primary-dark: ${primaryDark}
--clr-accent: ${accent}
--clr-text: ${text}
--clr-text-sec: ${textSec}
--clr-text-muted: ${textMuted}
--clr-bg: ${bg}
--clr-bg-card: ${bgCard}
--clr-bg-section: ${bgSection}
--clr-border: ${border}
--font-heading: '${fontHeading}', system-ui, sans-serif
--font-body: '${fontBody}', system-ui, sans-serif
--radius: ${radius}
--transition: 250ms cubic-bezier(0.4, 0, 0.2, 1)
\`\`\`

## WEBFLOW-QUALITY DESIGN STANDARDS (mandatory)

### Color Usage
- Use warm neutral backgrounds (${bg}) — never pure #ffffff or #000000 unless that IS the token
- ONE accent word per headline: wrap a key word in <span class="accent-word"> styled with --clr-accent color
- Accent color appears on: that one word, icons, badge backgrounds (at 15% opacity), hover states
- Never use more than 3 colors in any single section

### Typography
- Hero headline: clamp(48px, 6vw, 80px), font-weight 700, line-height 1.05, letter-spacing -0.025em
- H2 sections: clamp(36px, 4vw, 56px), font-weight 600, line-height 1.1
- H3 cards: clamp(18px, 2vw, 24px), font-weight 600
- Body text: 17-18px, line-height 1.65, color var(--clr-text-sec)
- Eyebrow labels: 12-13px, font-weight 600, letter-spacing 0.12em, UPPERCASE, color var(--clr-primary)

### Spacing (8px base unit system)
- Section padding: clamp(5rem, 10vw, 9rem) 0 (top and bottom)
- Container max-width: 1280px, auto margins, padding: 0 clamp(1.5rem, 5vw, 4rem)
- Grid gaps: 24px (tight), 32px (standard), 48px (loose)
- Between elements within a section: multiples of 8px

### Cards & UI Elements
- Cards: background var(--clr-bg-card), border-radius 20px, padding 32-40px
- Card border: 1px solid var(--clr-border)
- Card hover: transform translateY(-6px), box-shadow 0 20px 40px rgba(0,0,0,0.08), border-color var(--clr-primary)
- Transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- Buttons: padding 15px 32px, border-radius 12px, font-weight 600, font-size 15px
  - Primary: background var(--clr-primary), color #fff
  - Secondary: background transparent, border 2px solid var(--clr-text), color var(--clr-text)
  - Always provide BOTH primary and secondary CTA together

### Trust & Social Proof Elements
- Badges/pills: border-radius 999px, padding 6px 14px, font-size 13px, font-weight 600
- Star ratings: inline SVG, filled color var(--clr-accent)
- Statistics: large number (56-72px, font-weight 700, color var(--clr-primary)), small label below
- User avatars: initials circles, background var(--clr-primary) at 15% opacity, text var(--clr-primary)

### Navigation (hero section only if generating nav)
- Sticky header: position sticky, top 0, backdrop-filter blur(16px), background color at 90% opacity
- Logo left | nav links center | CTA button right
- Border-bottom: 1px solid var(--clr-border)

### Horizontal Card Scroller Pattern (use for testimonials, features on mobile)
- display: flex, overflow-x: auto, scroll-snap-type: x mandatory, scrollbar-width: none
- Each card: scroll-snap-align: start, flex: 0 0 auto, width: min(380px, 85vw)

### Image Treatment (Webflow-quality)
- Wrap every image in: <div class="img-zoom-wrap img-rounded"><img ...></div> for zoom-on-hover
- Images in cards: aspect-ratio 4/3, object-fit cover, border-radius 16px
- Portrait photos: class="img-portrait" (aspect-ratio 3/4)
- Full-width hero images: position absolute, inset 0, object-fit cover, z-index 0; add overlay div above
- Floating stat cards over images: position absolute, right/left offset, background white, shadow, border-radius 16px
- Add class="tilt" to hero image containers for subtle 3D mouse-tilt effect (JS handles it)
- Unsplash placeholder URLs: https://images.unsplash.com/photo-[PHOTO_ID]?w=800&q=80&auto=format&fit=crop
  Use REAL Unsplash photo IDs relevant to the industry — never use placeholder.com

### Animations (ALL built into global JS/CSS — just use these classes)
SCROLL REVEALS (JS observes these and adds .visible):
- class="reveal" — fade up (default for most elements)
- class="reveal reveal-left" — slide from left
- class="reveal reveal-right" — slide from right  
- class="reveal reveal-scale" — scale in
- class="reveal-stagger" on the parent — children stagger in sequence
- Add delay: class="reveal reveal-d1" through "reveal-d6"

FLOATING ANIMATIONS (CSS keyframes, always active):
- class="float" — gentle vertical bob (5s)
- class="float-slow" — slow bob (7s)
- class="float-xy" — XY drift (8s)
- class="float-d1/d2/d3" — offset start time
- Use on: hero mockups, floating stat cards, badge overlays

MARQUEE (infinite scroll):
- Wrap items: <div class="marquee-wrap"><div class="marquee-track">[items doubled]</div></div>

COUNTERS (JS counts up when in viewport):
- <span class="counter" data-target="500" data-suffix="+">500+</span>
- data-prefix="$", data-suffix="%", data-decimals="1"

PROGRESS BARS (JS fills when in viewport):
- <div style="height:8px;background:var(--clr-border);border-radius:999px;overflow:hidden">
    <div class="progress-fill" data-progress="80" style="height:100%;background:var(--clr-primary);width:0;border-radius:999px;transition:width 1.2s cubic-bezier(0.4,0,0.2,1)"></div>
  </div>

PARALLAX:
- Add data-parallax="0.2" to background images/decorative elements (subtle 0.1-0.3 values)

TILT (3D hover):
- class="tilt" on image containers — JS adds perspective tilt on mousemove

LINE DRAW:
- SVG paths with class="draw-line" animate stroke on scroll

BLOB SHAPE:
- class="blob" on any element for morphing border-radius animation

GLASSMORPHISM:
- class="glass" — dark/on-dark-bg glass card
- class="glass-light" — light glass card on light bg

GRADIENT BORDER:
- class="gradient-border" — animated gradient border on cards

BACKGROUND PATTERNS:
- class="bg-dots" — dot grid background
- class="bg-grid" — line grid background  
- class="bg-noise" — subtle film grain (via ::before pseudo)

GLOW ORBS (decorative):
- <div class="glow-orb" style="width:400px;height:400px;background:${primary}20;top:-100px;right:-100px;"></div>
- Place absolutely inside a relative section for aurora-like background glow

## SECTION TO BUILD: ${sectionType.toUpperCase()}
${guidance}

## ABSOLUTE RULES
1. Output ONLY the section HTML — no <!DOCTYPE>, no <html>, no <head>, no <body> tags
2. NO Tailwind, NO Bootstrap, NO external CSS — only vanilla CSS in a <style> block
3. Start output with: <style>/* ${sectionType} */
4. All icons must be inline SVG — never img tags, never icon fonts
5. Section MUST have: id="${sectionType}", class="section"
6. CSS Grid or Flexbox only — never tables or floats
7. Mobile-first responsive — perfect at 375px AND 1440px — use @media (min-width: 768px) and (min-width: 1024px)
8. Write at least 10,000 characters of real, production-quality HTML+CSS
9. ALL content specific and real — no Lorem ipsum, no "[placeholder]" text — use actual business-relevant copy
10. Every section needs: eyebrow label, main heading with ONE accented word, supporting text, and a clear CTA or action element

## PREVIOUS SECTIONS (maintain visual continuity — same font imports, CSS variables are already defined)
${previousHtml ? previousHtml.substring(0, 1500) + '...[truncated]' : '(First section — establish the visual language)'}

Output ONLY the section HTML, starting with <style>/* ${sectionType} */`

    const result = await this.generate('coder', systemPrompt, 16384)
    const raw = result.text.trim()
    // Extract if wrapped in fences
    if (raw.includes('```')) return extractCode(raw)
    return raw
  }

  /**
   * Assemble all sections into a complete standalone HTML document.
   * Pure CSS, no CDN dependencies.
   */
  assembleWebsite(
    sections: Array<{ type: string; html: string }>,
    plan: any,
    style: any
  ): string {
    const tok = style?.tokens
    const colors = tok?.colors ?? {}
    const typo = tok?.typography ?? {}
    const p = plan?.design ?? {}

    const headingFont = (typo.fontHeading || p.fontHeading || 'Inter').replace(/ /g, '+')
    const bodyFont = (typo.fontBody || p.fontBody || 'Inter').replace(/ /g, '+')

    const fontsUrl = headingFont === bodyFont
      ? `https://fonts.googleapis.com/css2?family=${headingFont}:wght@300;400;500;600;700;800;900&display=swap`
      : `https://fonts.googleapis.com/css2?family=${headingFont}:wght@300;400;600;700;800;900&family=${bodyFont}:wght@300;400;500;600&display=swap`

    const primary = p.primaryColor || colors.primary || '#2563EB'
    const primaryDark = p.primaryDark || colors.primaryDark || '#1D4ED8'
    const accent = p.accentColor || colors.accent || '#F59E0B'
    const textColor = colors.text || '#0F172A'
    const textSec = colors.textSecondary || '#475569'
    const textMuted = colors.textMuted || '#94A3B8'
    const bg = colors.bg || '#FFFFFF'
    const bgCard = colors.bgCard || '#F8FAFC'
    const bgSection = colors.bgSection || '#F1F5F9'
    const border = colors.border || '#E2E8F0'
    const radius = tok?.shape?.borderRadius || p.borderRadius || '8px'
    const fontHeading = typo.fontHeading || p.fontHeading || 'Inter'
    const fontBody = typo.fontBody || p.fontBody || 'Inter'
    const hw = typo.headingWeight || '700'
    const ls = typo.letterSpacing || '-0.02em'

    const sectionsHtml = sections.map((s) => s.html).join('\n\n')

    const title = plan?.seo?.title || plan?.title || 'Website'
    const description = plan?.seo?.description || plan?.tagline || ''
    const keywords = (plan?.seo?.keywords || []).join(', ')

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  ${keywords ? `<meta name="keywords" content="${keywords}">` : ''}
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${fontsUrl}" rel="stylesheet">
  <style>
    /* ── Reset ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; font-size: 16px; }

    /* ── Design Tokens ── */
    :root {
      --clr-primary: ${primary};
      --clr-primary-dark: ${primaryDark};
      --clr-accent: ${accent};
      --clr-text: ${textColor};
      --clr-text-sec: ${textSec};
      --clr-text-muted: ${textMuted};
      --clr-bg: ${bg};
      --clr-bg-card: ${bgCard};
      --clr-bg-section: ${bgSection};
      --clr-border: ${border};
      --font-heading: '${fontHeading}', system-ui, sans-serif;
      --font-body: '${fontBody}', system-ui, sans-serif;
      --radius: ${radius};
      --max-width: 1200px;
      --transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
      --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
      --shadow-md: 0 4px 16px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
      --shadow-lg: 0 20px 48px rgba(0,0,0,0.12), 0 8px 24px rgba(0,0,0,0.08);
      --shadow-xl: 0 32px 64px rgba(0,0,0,0.16);
    }

    /* ── Base ── */
    body {
      font-family: var(--font-body);
      background: var(--clr-bg);
      color: var(--clr-text);
      line-height: 1.7;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: var(--font-heading);
      font-weight: ${hw};
      letter-spacing: ${ls};
      line-height: 1.15;
      color: var(--clr-text);
    }
    a { color: var(--clr-primary); text-decoration: none; transition: color var(--transition); }
    img { max-width: 100%; height: auto; display: block; }
    button { cursor: pointer; font-family: var(--font-body); border: none; }

    /* ── Layout helpers ── */
    .container { max-width: var(--max-width); margin: 0 auto; padding: 0 clamp(1rem, 4vw, 2rem); }
    .section { padding: clamp(4rem, 8vw, 8rem) 0; }
    .section-label { font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--clr-primary); margin-bottom: 0.75rem; display: block; }
    .section-header { text-align: center; max-width: 640px; margin: 0 auto 4rem; }
    .display { font-size: clamp(2.5rem, 6vw, 5rem); line-height: 1.05; letter-spacing: -0.03em; font-weight: 800; }
    .h1 { font-size: clamp(2rem, 4vw, 3.5rem); line-height: 1.1; letter-spacing: -0.025em; font-weight: 700; }
    .h2 { font-size: clamp(1.5rem, 3vw, 2.5rem); line-height: 1.2; letter-spacing: -0.02em; }
    .h3 { font-size: clamp(1.125rem, 2vw, 1.5rem); line-height: 1.3; }
    .lead { font-size: clamp(1rem, 1.5vw, 1.25rem); line-height: 1.7; color: var(--clr-text-sec); }
    .grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 480px), 1fr)); gap: 2rem; }
    .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 1.5rem; }
    .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 1.25rem; }
    .flex-center { display: flex; align-items: center; justify-content: center; }
    .flex-between { display: flex; align-items: center; justify-content: space-between; }
    .flex-gap { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }

    /* ── Buttons ── */
    .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.75rem; border-radius: var(--radius); font-weight: 600; font-size: 0.9375rem; cursor: pointer; text-decoration: none; white-space: nowrap; transition: all var(--transition); }
    .btn-primary { background: var(--clr-primary); color: #fff; border: 2px solid var(--clr-primary); }
    .btn-primary:hover { background: var(--clr-primary-dark); border-color: var(--clr-primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
    .btn-outline { background: transparent; color: var(--clr-primary); border: 2px solid var(--clr-primary); }
    .btn-outline:hover { background: var(--clr-primary); color: #fff; transform: translateY(-2px); }
    .btn-ghost { background: rgba(255,255,255,0.12); color: #fff; border: 1.5px solid rgba(255,255,255,0.3); }
    .btn-ghost:hover { background: rgba(255,255,255,0.22); border-color: rgba(255,255,255,0.6); }
    .btn-lg { padding: 1rem 2.25rem; font-size: 1.0625rem; }

    /* ── Cards ── */
    .card { background: var(--clr-bg-card); border: 1px solid var(--clr-border); border-radius: var(--radius); box-shadow: var(--shadow-sm); transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition); }
    .card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); border-color: var(--clr-primary); }

    /* ── Scroll Reveal ── */
    .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1); }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1); }
    .reveal-left.visible { opacity: 1; transform: translateX(0); }
    .reveal-right { opacity: 0; transform: translateX(40px); transition: opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1); }
    .reveal-right.visible { opacity: 1; transform: translateX(0); }
    .reveal-scale { opacity: 0; transform: scale(0.92); transition: opacity 0.75s cubic-bezier(0.4,0,0.2,1), transform 0.75s cubic-bezier(0.4,0,0.2,1); }
    .reveal-scale.visible { opacity: 1; transform: scale(1); }
    .reveal-d1 { transition-delay: 0.1s; } .reveal-d2 { transition-delay: 0.2s; }
    .reveal-d3 { transition-delay: 0.3s; } .reveal-d4 { transition-delay: 0.4s; }
    .reveal-d5 { transition-delay: 0.5s; } .reveal-d6 { transition-delay: 0.6s; }
    .reveal-stagger > * { opacity: 0; transform: translateY(24px); transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1); }
    .reveal-stagger.visible > *:nth-child(1){opacity:1;transform:none;transition-delay:0.05s;}
    .reveal-stagger.visible > *:nth-child(2){opacity:1;transform:none;transition-delay:0.12s;}
    .reveal-stagger.visible > *:nth-child(3){opacity:1;transform:none;transition-delay:0.19s;}
    .reveal-stagger.visible > *:nth-child(4){opacity:1;transform:none;transition-delay:0.26s;}
    .reveal-stagger.visible > *:nth-child(5){opacity:1;transform:none;transition-delay:0.33s;}
    .reveal-stagger.visible > *:nth-child(6){opacity:1;transform:none;transition-delay:0.40s;}

    /* ── Float animations ── */
    @keyframes float-y { 0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)} }
    @keyframes float-y-slow { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }
    @keyframes float-xy { 0%,100%{transform:translate(0,0)}33%{transform:translate(6px,-14px)}66%{transform:translate(-5px,-8px)} }
    .float { animation: float-y 5s ease-in-out infinite; }
    .float-slow { animation: float-y-slow 7s ease-in-out infinite; }
    .float-xy { animation: float-xy 8s ease-in-out infinite; }
    .float-d1 { animation-delay: 0.5s; } .float-d2 { animation-delay: 1s; } .float-d3 { animation-delay: 1.5s; }

    /* ── Marquee ── */
    @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .marquee-track { display:flex; width:max-content; animation:marquee 30s linear infinite; }
    .marquee-track:hover { animation-play-state:paused; }
    .marquee-wrap { overflow:hidden; -webkit-mask:linear-gradient(90deg,transparent,black 10%,black 90%,transparent); mask:linear-gradient(90deg,transparent,black 10%,black 90%,transparent); }

    /* ── Image treatments ── */
    .img-zoom-wrap { overflow:hidden; border-radius:inherit; }
    .img-zoom-wrap img { transition:transform 0.6s cubic-bezier(0.4,0,0.2,1); width:100%; height:100%; object-fit:cover; display:block; }
    .img-zoom-wrap:hover img { transform:scale(1.07); }
    .img-rounded { border-radius:20px; overflow:hidden; }
    .img-circle { border-radius:50%; overflow:hidden; aspect-ratio:1; }
    .img-portrait { aspect-ratio:3/4; object-fit:cover; border-radius:20px; width:100%; }
    .img-landscape { aspect-ratio:16/9; object-fit:cover; border-radius:20px; width:100%; }
    .img-square { aspect-ratio:1; object-fit:cover; border-radius:20px; width:100%; }

    /* ── Gradient overlays ── */
    .overlay-dark::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.5)); border-radius:inherit; pointer-events:none; }
    .overlay-brand::after { content:''; position:absolute; inset:0; background:linear-gradient(135deg,${primary}60,${primaryDark}80); border-radius:inherit; mix-blend-mode:multiply; pointer-events:none; }

    /* ── Background decorations ── */
    .bg-dots { background-image:radial-gradient(circle,${primary}22 1.5px,transparent 1.5px); background-size:24px 24px; }
    .bg-grid { background-image:linear-gradient(${border} 1px,transparent 1px),linear-gradient(90deg,${border} 1px,transparent 1px); background-size:40px 40px; }
    .bg-noise { position:relative; }
    .bg-noise::before { content:''; position:absolute; inset:0; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events:none; z-index:0; }
    .glow-orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; }

    /* ── Scroll progress bar ── */
    #scroll-progress { position:fixed; top:0; left:0; height:3px; background:linear-gradient(90deg,${primary},${accent}); width:0%; z-index:9999; transition:width 0.1s; }

    /* ── Counters ── */
    .counter { font-variant-numeric:tabular-nums; }

    /* ── Animated gradient border ── */
    .gradient-border { position:relative; }
    .gradient-border::before { content:''; position:absolute; inset:-2px; background:linear-gradient(135deg,${primary},${accent},${primary}); background-size:300% 300%; border-radius:calc(var(--radius) + 2px); z-index:-1; animation:grad-spin 4s linear infinite; }
    @keyframes grad-spin { 0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%} }

    /* ── Glassmorphism ── */
    .glass { background:rgba(255,255,255,0.08); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(255,255,255,0.15); }
    .glass-light { background:rgba(255,255,255,0.7); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); border:1px solid rgba(255,255,255,0.5); }

    /* ── Link underline animation ── */
    .link-hover { position:relative; text-decoration:none; }
    .link-hover::after { content:''; position:absolute; bottom:-1px; left:0; width:0; height:1.5px; background:currentColor; transition:width 0.3s ease; }
    .link-hover:hover::after { width:100%; }

    /* ── Accordion ── */
    .accordion-body { display:grid; grid-template-rows:0fr; transition:grid-template-rows 0.35s ease; }
    .accordion-body > div { overflow:hidden; }
    .accordion-item.open .accordion-body { grid-template-rows:1fr; }
    .accordion-icon { transition:transform 0.35s ease; }
    .accordion-item.open .accordion-icon { transform:rotate(45deg); }

    /* ── Blob shape ── */
    @keyframes blob-morph { 0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} }
    .blob { animation:blob-morph 10s ease-in-out infinite; }

    /* ── Pulse badge ── */
    @keyframes pulse-ring { 0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.8);opacity:0} }
    .pulse-dot::before { content:''; position:absolute; inset:0; border-radius:50%; background:${primary}; animation:pulse-ring 1.8s ease-out infinite; }
  </style>
</head>
<body>

<div id="scroll-progress"></div>

${sectionsHtml}

<script>
(function(){
  'use strict';

  /* ── Scroll reveal (all variants) ── */
  var revealClasses = ['.reveal','.reveal-left','.reveal-right','.reveal-scale','.reveal-stagger'];
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('visible'); } });
  },{threshold:0.1,rootMargin:'0px 0px -60px 0px'});
  revealClasses.forEach(function(sel){
    document.querySelectorAll(sel).forEach(function(el){ io.observe(el); });
  });

  /* ── Animated number counters ── */
  var counterIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(!entry.isIntersecting) return;
      counterIO.unobserve(entry.target);
      var el = entry.target;
      var target = parseFloat(el.dataset.target || el.textContent.replace(/[^0-9.]/g,''));
      var suffix = el.dataset.suffix || el.textContent.replace(/[0-9.]/g,'');
      var prefix = el.dataset.prefix || '';
      var decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      var duration = 1800;
      var start = performance.now();
      function tick(now){
        var progress = Math.min((now - start) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        var val = target * ease;
        el.textContent = prefix + (decimals ? val.toFixed(decimals) : Math.floor(val).toLocaleString()) + suffix;
        if(progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  },{threshold:0.5});
  document.querySelectorAll('.counter').forEach(function(el){ counterIO.observe(el); });

  /* ── Progress bar fills ── */
  var progressIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(!e.isIntersecting) return;
      var bar = e.target;
      var w = bar.dataset.progress || '0';
      bar.style.width = w + '%';
      progressIO.unobserve(bar);
    });
  },{threshold:0.5});
  document.querySelectorAll('.progress-fill').forEach(function(el){ progressIO.observe(el); });

  /* ── Scroll progress bar ── */
  var progressBar = document.getElementById('scroll-progress');
  window.addEventListener('scroll',function(){
    if(!progressBar) return;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = ((window.scrollY / max) * 100) + '%';
  },{passive:true});

  /* ── Navbar: blur on scroll + active states ── */
  var nav = document.querySelector('.navbar, nav, header');
  if(nav){
    window.addEventListener('scroll',function(){
      nav.classList.toggle('scrolled', window.scrollY > 50);
    },{passive:true});
  }

  /* ── Mobile menu ── */
  var toggle = document.querySelector('.menu-toggle, .nav-toggle, .hamburger');
  var menu = document.querySelector('.nav-menu, .mobile-menu, [data-menu]');
  if(toggle && menu){
    toggle.addEventListener('click',function(){
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    document.querySelectorAll('.nav-menu a, .mobile-menu a').forEach(function(a){
      a.addEventListener('click',function(){
        menu.classList.remove('open');
        document.body.style.overflow = '';
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }

  /* ── Active nav link on scroll ── */
  var sections = document.querySelectorAll('section[id], div[id].section');
  var navLinks = document.querySelectorAll('.nav-link, .nav-menu a');
  window.addEventListener('scroll',function(){
    var cur='';
    sections.forEach(function(s){ if(window.scrollY >= s.offsetTop - 150) cur = s.id; });
    navLinks.forEach(function(l){
      l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
    });
  },{passive:true});

  /* ── Accordion ── */
  document.querySelectorAll('.accordion-trigger').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item = btn.closest('.accordion-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item.open').forEach(function(i){ i.classList.remove('open'); });
      if(!isOpen) item.classList.add('open');
    });
  });

  /* ── Image lazy tilt on hover (subtle) ── */
  document.querySelectorAll('.tilt').forEach(function(el){
    el.addEventListener('mousemove',function(e){
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = 'perspective(800px) rotateY('+(x*8)+'deg) rotateX('+(-y*8)+'deg) translateZ(10px)';
    });
    el.addEventListener('mouseleave',function(){
      el.style.transform = '';
    });
  });

  /* ── Parallax (subtle) ── */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if(parallaxEls.length){
    window.addEventListener('scroll',function(){
      parallaxEls.forEach(function(el){
        var speed = parseFloat(el.dataset.parallax || '0.3');
        var offset = window.scrollY * speed;
        el.style.transform = 'translateY('+offset+'px)';
      });
    },{passive:true});
  }

  /* ── SVG line draw on scroll ── */
  document.querySelectorAll('.draw-line').forEach(function(el){
    var len = el.getTotalLength ? el.getTotalLength() : 400;
    el.style.strokeDasharray = len;
    el.style.strokeDashoffset = len;
    var lineIO = new IntersectionObserver(function(entries){
      if(entries[0].isIntersecting){
        el.style.transition = 'stroke-dashoffset 1.5s ease';
        el.style.strokeDashoffset = '0';
        lineIO.unobserve(el);
      }
    });
    lineIO.observe(el);
  });

  /* ── Contact form ── */
  var form = document.querySelector('.contact-form, form[data-contact]');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type=submit]');
      if(btn){ btn.textContent = "Sent! We'll be in touch."; btn.disabled = true; btn.style.background = '#22c55e'; }
    });
  }

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id = a.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
    });
  });

})();
</script>
</body>
</html>`
  }
}

export const gemini = new GeminiService()
