import type { ComponentVariant } from '../types'

export const processHorizontalArrows: ComponentVariant = {
  id: 'process-horizontal',
  name: 'Process Horizontal Arrows',
  section: 'process' as any,
  description: 'Horizontal 4-step flow with arrow connectors between numbered circles — simple clean process visualization',
  bestFor: ['saas', 'agency', 'ecommerce', 'education', 'local-service'],
  tags: ['horizontal', 'arrows', 'steps', 'numbered', 'simple', 'clean', 'flow'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'steps', type: 'array', description: '4 process steps', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'number', type: 'text', maxWords: 1, description: 'Step number', required: true },
        { name: 'title', type: 'heading', maxWords: 3, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Step description', required: true },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: false },
  ],
  css: `/* process-horizontal */
#process-ha {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.pha-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.pha-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.pha-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.pha-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.pha-heading .accent-word { color: {{ACCENT}}; }
.pha-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Steps */
.pha-steps { display: grid; grid-template-columns: 1fr; gap: 2rem; position: relative; }
@media (min-width: 768px) {
  .pha-steps { grid-template-columns: repeat(4,1fr); gap: 0; }
  .pha-step { position: relative; }
  .pha-step:not(:last-child)::after { content: '→'; position: absolute; right: -12%; top: 28px; font-size: 1.5rem; color: {{BORDER}}; z-index: 1; }
}
.pha-step { text-align: center; padding: 0 1.5rem; }
.pha-circle {
  width: 56px; height: 56px; border-radius: 50%;
  background: {{BG_CARD}}; border: 2px solid {{BORDER}};
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
  font-family: var(--font-heading); font-size: 1.125rem; font-weight: 900;
  color: {{PRIMARY}}; position: relative; z-index: 1;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}
.pha-step:hover .pha-circle { background: {{PRIMARY}}; color: #fff; border-color: {{PRIMARY}}; box-shadow: 0 8px 24px rgba(99,102,241,0.3); }
.pha-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.5rem; }
.pha-desc { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.65; }
.pha-footer { text-align: center; margin-top: 3rem; }
.pha-cta { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.pha-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="process-ha">
  <div class="pha-inner">
    <div class="pha-header">
      <span class="pha-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pha-heading reveal reveal-d1">{{heading}}</h2>
      <p class="pha-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="pha-steps reveal-stagger">
      {{#steps}}
      <div class="pha-step">
        <div class="pha-circle">{{.number}}</div>
        <h3 class="pha-title">{{.title}}</h3>
        <p class="pha-desc">{{.desc}}</p>
      </div>
      {{/steps}}
    </div>
    <div class="pha-footer reveal"><a href="#contact" class="pha-cta">{{ctaText}} →</a></div>
  </div>
</section>`,
}
