import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

const MODELS = {
  planner: 'gemini-2.0-flash',
  coder: 'gemini-2.5-pro-exp-03-25',
  qa: 'gemini-2.0-flash',
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

  private async generate(agent: AgentType, prompt: string, maxTokens?: number): Promise<GenerationResult> {
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
}

export const gemini = new GeminiService()
