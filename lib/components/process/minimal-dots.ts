import type { ComponentVariant } from '../types'

export const processMinimalDots: ComponentVariant = {
  id: 'process-minimal-dots',
  name: 'Process Minimal Dots',
  section: 'process' as any,
  description: 'Ultra-clean minimal process with dot-connected steps, large numbers, and light typography — modern and simple',
  bestFor: ['agency', 'portfolio', 'saas', 'beauty'],
  tags: ['minimal', 'dots', 'clean', 'numbers', 'modern', 'editorial', 'whitespace'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    {
      name: 'steps', type: 'array', description: '4 minimal steps', required: true,
      minItems: 3, maxItems: 5,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 4, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Step description', required: true },
      ],
    },
  ],
  css: `/* process-minimal-dots */
#process-md {
  background: {{BG}};
  padding: clamp(5rem,10vw,9rem) 0;
}
.pmd-inner { max-width: 1100px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.pmd-header { max-width: 560px; margin-bottom: 4.5rem; }
.pmd-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.pmd-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.04em; line-height: 1.05; color: {{TEXT}}; }
/* Steps */
.pmd-steps { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 640px) { .pmd-steps { grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px) { .pmd-steps { grid-template-columns: repeat(4,1fr); } }
.pmd-step { padding-top: 1.5rem; position: relative; }
.pmd-step::before { content: ''; position: absolute; top: 28px; left: 0; width: 100%; height: 1px; background: {{BORDER}}; }
.pmd-dot { width: 8px; height: 8px; border-radius: 50%; background: {{PRIMARY}}; margin-bottom: 1.5rem; position: relative; z-index: 1; box-shadow: 0 0 0 4px {{BG}}, 0 0 0 5px {{PRIMARY}}; opacity: 0.6; }
.pmd-step:hover .pmd-dot { opacity: 1; box-shadow: 0 0 0 4px {{BG}}, 0 0 0 5px {{PRIMARY}}, 0 0 12px {{PRIMARY}}; }
.pmd-num { font-family: var(--font-heading); font-size: 0.875rem; font-weight: 900; color: {{TEXT_MUTED}}; letter-spacing: 0.05em; margin-bottom: 0.875rem; }
.pmd-title { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.625rem; line-height: 1.3; }
.pmd-desc { font-size: 0.9375rem; color: {{TEXT_MUTED}}; line-height: 1.7; }
`,
  template: `<section id="process-md">
  <div class="pmd-inner">
    <div class="pmd-header reveal">
      <span class="pmd-eyebrow">{{eyebrow}}</span>
      <h2 class="pmd-heading">{{heading}}</h2>
    </div>
    <div class="pmd-steps reveal-stagger">
      {{#steps}}
      <div class="pmd-step">
        <div class="pmd-dot"></div>
        <div class="pmd-num">0{{@index}}</div>
        <h3 class="pmd-title">{{.title}}</h3>
        <p class="pmd-desc">{{.desc}}</p>
      </div>
      {{/steps}}
    </div>
  </div>
</section>`,
}
