import type { ComponentVariant } from '../types'

export const processDarkSteps: ComponentVariant = {
  id: 'process-dark',
  name: 'Process Dark Premium Steps',
  section: 'process' as any,
  description: 'Dark section with large gradient-numbered steps side by side — premium, SaaS, high-impact',
  bestFor: ['saas', 'agency', 'fitness', 'portfolio'],
  tags: ['dark', 'premium', 'gradient-numbers', 'large', 'modern', 'impact'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading (on dark)', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'steps', type: 'array', description: '3-4 steps', required: true,
      minItems: 3, maxItems: 4,
      itemSlots: [
        { name: 'number', type: 'text', maxWords: 1, description: 'Step number', required: true },
        { name: 'title', type: 'heading', maxWords: 4, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 20, description: 'Step description', required: true },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: false },
  ],
  css: `/* process-dark */
#process-dk2 {
  background: #080c14;
  padding: clamp(4rem,8vw,7rem) 0;
  position: relative; overflow: hidden;
}
.pdk2-glow { position: absolute; width: 600px; height: 600px; border-radius: 50%; background: {{PRIMARY}}; opacity: 0.06; filter: blur(120px); top: -200px; right: -200px; pointer-events: none; }
.pdk2-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.pdk2-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.pdk2-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{ACCENT}}; margin-bottom: 0.875rem; }
.pdk2-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 900; letter-spacing: -0.04em; line-height: 1.05; color: #fff; margin-bottom: 1rem; }
.pdk2-heading .accent-word { color: {{PRIMARY}}; }
.pdk2-sub { font-size: 1.0625rem; color: rgba(255,255,255,0.45); line-height: 1.7; }
.pdk2-steps { display: grid; grid-template-columns: 1fr; gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 24px; overflow: hidden; }
@media (min-width: 768px) { .pdk2-steps { grid-template-columns: repeat(var(--cols,3),1fr); } }
.pdk2-step { background: rgba(255,255,255,0.02); padding: 2.5rem; transition: background 0.3s; }
.pdk2-step:hover { background: rgba(99,102,241,0.06); }
.pdk2-num {
  font-family: var(--font-heading); font-size: 3.5rem; font-weight: 900;
  letter-spacing: -0.05em; line-height: 1; display: block; margin-bottom: 1.25rem;
  background: linear-gradient(135deg,{{PRIMARY}},{{ACCENT}});
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.pdk2-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: #fff; margin-bottom: 0.625rem; }
.pdk2-desc { font-size: 0.9375rem; color: rgba(255,255,255,0.45); line-height: 1.7; }
.pdk2-footer { text-align: center; margin-top: 3rem; }
.pdk2-cta { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.pdk2-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="process-dk2">
  <div class="pdk2-glow"></div>
  <div class="pdk2-inner">
    <div class="pdk2-header">
      <span class="pdk2-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pdk2-heading reveal reveal-d1">{{heading}}</h2>
      <p class="pdk2-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="pdk2-steps reveal-stagger" style="--cols:{{steps.length}}">
      {{#steps}}
      <div class="pdk2-step">
        <span class="pdk2-num">{{.number}}</span>
        <h3 class="pdk2-title">{{.title}}</h3>
        <p class="pdk2-desc">{{.desc}}</p>
      </div>
      {{/steps}}
    </div>
    <div class="pdk2-footer reveal"><a href="#contact" class="pdk2-cta">{{ctaText}} →</a></div>
  </div>
</section>`,
}
