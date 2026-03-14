import type { ComponentVariant } from '../types'

export const featuresComparisonHighlight: ComponentVariant = {
  id: 'features-comparison',
  name: 'Features Without vs With Comparison',
  section: 'features',
  description: '"Without us" pain points (red X) vs "With us" solutions (green check) — high-converting split panel',
  bestFor: ['saas', 'agency', 'fitness', 'healthcare', 'education'],
  tags: ['comparison', 'before-after', 'pain-points', 'conversion', 'split', 'x-check'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'withoutLabel', type: 'text', maxWords: 3, description: 'Left column label', required: true },
    { name: 'withLabel', type: 'text', maxWords: 3, description: 'Right column label', required: true },
    {
      name: 'pains', type: 'array', description: '5 pain points', required: true,
      minItems: 5, maxItems: 5,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 12, description: 'Pain point', required: true }],
    },
    {
      name: 'solutions', type: 'array', description: '5 solutions', required: true,
      minItems: 5, maxItems: 5,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 12, description: 'Solution', required: true }],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
  ],
  css: `/* features-comparison */
#features-cmp {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.fcmp-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fcmp-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.fcmp-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.fcmp-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.fcmp-heading .accent-word { color: {{ACCENT}}; }
/* Split panels */
.fcmp-panels { display: grid; grid-template-columns: 1fr; gap: 1.5rem; }
@media (min-width: 768px) { .fcmp-panels { grid-template-columns: 1fr 1fr; } }
.fcmp-panel { border-radius: 20px; overflow: hidden; }
.fcmp-panel-header {
  padding: 1.5rem 2rem;
  display: flex; align-items: center; gap: 0.75rem;
}
.fcmp-panel-header h3 { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 800; }
.fcmp-panel-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.fcmp-panel-icon svg { width: 16px; height: 16px; }
/* Without panel */
.fcmp-without .fcmp-panel-header { background: rgba(239,68,68,0.08); border-bottom: 1px solid rgba(239,68,68,0.15); }
.fcmp-without .fcmp-panel-header h3 { color: #ef4444; }
.fcmp-without .fcmp-panel-icon { background: rgba(239,68,68,0.15); color: #ef4444; }
.fcmp-without { border: 1px solid rgba(239,68,68,0.2); }
.fcmp-without .fcmp-body { background: {{BG_CARD}}; }
/* With panel */
.fcmp-with .fcmp-panel-header { background: rgba(34,197,94,0.08); border-bottom: 1px solid rgba(34,197,94,0.15); }
.fcmp-with .fcmp-panel-header h3 { color: #16a34a; }
.fcmp-with .fcmp-panel-icon { background: rgba(34,197,94,0.15); color: #16a34a; }
.fcmp-with { border: 1px solid rgba(34,197,94,0.25); }
.fcmp-with .fcmp-body { background: {{BG_CARD}}; }
.fcmp-body { padding: 0.5rem 0; }
.fcmp-item { display: flex; align-items: flex-start; gap: 0.875rem; padding: 0.875rem 2rem; }
.fcmp-item + .fcmp-item { border-top: 1px solid {{BORDER}}; }
.fcmp-item-icon { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.fcmp-item-icon svg { width: 11px; height: 11px; }
.fcmp-without .fcmp-item-icon { background: rgba(239,68,68,0.12); color: #ef4444; }
.fcmp-with .fcmp-item-icon { background: rgba(34,197,94,0.12); color: #16a34a; }
.fcmp-item-text { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.55; }
.fcmp-footer { text-align: center; margin-top: 3rem; }
.fcmp-cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.fcmp-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="features-cmp">
  <div class="fcmp-inner">
    <div class="fcmp-header">
      <span class="fcmp-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="fcmp-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="fcmp-panels reveal">
      <div class="fcmp-panel fcmp-without">
        <div class="fcmp-panel-header">
          <div class="fcmp-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
          <h3>{{withoutLabel}}</h3>
        </div>
        <div class="fcmp-body">
          {{#pains}}<div class="fcmp-item">
            <div class="fcmp-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
            <span class="fcmp-item-text">{{.text}}</span>
          </div>{{/pains}}
        </div>
      </div>
      <div class="fcmp-panel fcmp-with">
        <div class="fcmp-panel-header">
          <div class="fcmp-panel-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
          <h3>{{withLabel}}</h3>
        </div>
        <div class="fcmp-body">
          {{#solutions}}<div class="fcmp-item">
            <div class="fcmp-item-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
            <span class="fcmp-item-text">{{.text}}</span>
          </div>{{/solutions}}
        </div>
      </div>
    </div>
    <div class="fcmp-footer reveal">
      <a href="#contact" class="fcmp-cta">{{ctaText}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>
  </div>
</section>`,
}
