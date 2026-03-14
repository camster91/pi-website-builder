import type { ComponentVariant } from '../types'

export const socialProofCaseResults: ComponentVariant = {
  id: 'social-proof-results',
  name: 'Social Proof Case Results',
  section: 'social-proof',
  description: '4 result cards with before→after stat metrics and client industry — quantified proof section for B2B',
  bestFor: ['saas', 'agency', 'fitness', 'healthcare', 'education'],
  tags: ['results', 'metrics', 'before-after', 'ROI', 'B2B', 'proof', 'numbers'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    {
      name: 'results', type: 'array', description: '4 result cards', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'industry', type: 'text', maxWords: 2, description: 'Client industry', required: true },
        { name: 'metric', type: 'text', maxWords: 3, description: 'What improved', required: true },
        { name: 'before', type: 'text', maxWords: 2, description: 'Before value', required: true },
        { name: 'after', type: 'text', maxWords: 2, description: 'After value', required: true },
        { name: 'change', type: 'text', maxWords: 2, description: 'Change % (e.g. +340%)', required: true },
        { name: 'timeframe', type: 'text', maxWords: 3, description: 'Timeframe (e.g. in 90 days)', required: true },
      ],
    },
  ],
  css: `/* social-proof-results */
#sp-results {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.spr2-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.spr2-header { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; }
.spr2-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.spr2-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.spr2-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.25rem; }
@media (max-width: 640px) { .spr2-grid { grid-template-columns: 1fr; } }
@media (min-width: 1024px) { .spr2-grid { grid-template-columns: repeat(4,1fr); } }
.spr2-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 20px; padding: 2rem; position: relative; overflow: hidden; }
.spr2-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg,{{PRIMARY}},{{ACCENT}}); }
.spr2-industry { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 0.875rem; }
.spr2-metric { font-size: 0.9375rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 1.5rem; }
.spr2-before-after { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
.spr2-before { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: {{TEXT_MUTED}}; }
.spr2-arrow { color: {{TEXT_MUTED}}; font-size: 1.25rem; }
.spr2-after { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; color: {{TEXT}}; }
.spr2-change { display: inline-block; font-size: 1rem; font-weight: 800; color: #22c55e; background: rgba(34,197,94,0.1); padding: 4px 12px; border-radius: 999px; margin-bottom: 0.5rem; }
.spr2-timeframe { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="sp-results">
  <div class="spr2-inner">
    <div class="spr2-header">
      <span class="spr2-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="spr2-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="spr2-grid reveal-stagger">
      {{#results}}
      <div class="spr2-card">
        <div class="spr2-industry">{{.industry}}</div>
        <div class="spr2-metric">{{.metric}}</div>
        <div class="spr2-before-after">
          <span class="spr2-before">{{.before}}</span>
          <span class="spr2-arrow">→</span>
          <span class="spr2-after">{{.after}}</span>
        </div>
        <div class="spr2-change">{{.change}}</div>
        <div class="spr2-timeframe">{{.timeframe}}</div>
      </div>
      {{/results}}
    </div>
  </div>
</section>`,
}
