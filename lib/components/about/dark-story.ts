import type { ComponentVariant } from '../types'

export const aboutDarkStory: ComponentVariant = {
  id: 'about-dark',
  name: 'About Dark Dramatic Story',
  section: 'about',
  description: 'Dark section: large pull quote, company story text, year founded badge — premium agency/startup feel',
  bestFor: ['agency', 'portfolio', 'saas', 'fitness'],
  tags: ['dark', 'dramatic', 'pull-quote', 'agency', 'premium', 'editorial'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'pullQuote', type: 'text', maxWords: 20, description: 'Large dramatic pull quote', required: true },
    { name: 'pullAccent', type: 'text', maxWords: 3, description: 'Accent words in pull quote', required: true },
    { name: 'story', type: 'text', maxWords: 70, description: 'Company story (2-3 paragraphs)', required: true },
    { name: 'founded', type: 'text', maxWords: 1, description: 'Year founded', required: true },
    { name: 'teamSize', type: 'stat-value', maxWords: 1, description: 'Team size number', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button text', required: true },
  ],
  css: `/* about-dark */
#about-dk {
  background: #0a0f1e;
  padding: clamp(4rem,8vw,7rem) 0;
  position: relative; overflow: hidden;
}
.adk-glow { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: {{PRIMARY}}; opacity: 0.06; filter: blur(120px); top: -200px; right: -200px; pointer-events: none; }
.adk-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 5rem; align-items: center; }
@media (min-width: 1024px) { .adk-inner { grid-template-columns: 1fr 1fr; } }
/* Left: pull quote */
.adk-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{ACCENT}}; margin-bottom: 2rem; }
.adk-quote-mark { font-family: Georgia, serif; font-size: 10rem; color: {{PRIMARY}}; opacity: 0.12; line-height: 0.7; display: block; margin-bottom: 1rem; }
.adk-pull { font-family: var(--font-heading); font-size: clamp(1.75rem,3.5vw,2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.2; color: #fff; margin-bottom: 3rem; }
.adk-pull .accent-word { color: {{ACCENT}}; }
/* Badges */
.adk-badges { display: flex; gap: 1rem; flex-wrap: wrap; }
.adk-badge { padding: 10px 20px; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.6); }
.adk-badge strong { color: #fff; font-size: 1.125rem; display: block; }
/* Right: story */
.adk-story { font-size: 1.0625rem; color: rgba(255,255,255,0.55); line-height: 1.8; margin-bottom: 2.5rem; }
.adk-cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 30px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.adk-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="about-dk">
  <div class="adk-glow"></div>
  <div class="adk-inner">
    <div class="reveal-left">
      <span class="adk-eyebrow">{{eyebrow}}</span>
      <span class="adk-quote-mark">&ldquo;</span>
      <p class="adk-pull">{{pullQuote}}</p>
      <div class="adk-badges">
        <div class="adk-badge"><strong>{{founded}}</strong>Founded</div>
        <div class="adk-badge"><strong>{{teamSize}}</strong>Team members</div>
      </div>
    </div>
    <div class="reveal-right">
      <p class="adk-story">{{story}}</p>
      <a href="#contact" class="adk-cta">{{ctaText}} →</a>
    </div>
  </div>
</section>`,
}
