import type { ComponentVariant } from '../types'
export const comparisonCheckList: ComponentVariant = {
  id: 'comparison-checklist', name: 'Comparison Feature Check List', section: 'comparison' as any,
  description: 'Simple two-column checklist showing why we are better — high contrast',
  bestFor: ['fitness','local-service','saas'], tags: ['checklist','b2b','simple','contrast','b2c'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'features', type: 'array', description: '5 features', required: true, minItems: 4, maxItems: 6,
      itemSlots: [{ name: 'feat', type: 'text', maxWords: 6, description: 'Feature', required: true }] },
  ],
  css: `/* comparison-checklist */
#comp-cl{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.ccl-in{max-width:800px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.ccl-hd{text-align:center;margin-bottom:3rem}
.ccl-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.ccl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.ccl-grid{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:640px){.ccl-grid{grid-template-columns:repeat(2,1fr)}}
.ccl-item{display:flex;align-items:center;gap:.75rem;padding:1.25rem;background:{{BG_SECTION}};border-radius:12px}
.ccl-item::before{content:"✓";color:{{PRIMARY}};font-weight:900}
.ccl-feat{font-weight:600;color:{{TEXT}}}`,
  template: `<section id="comp-cl"><div class="ccl-in"><div class="ccl-hd"><span class="ccl-ey reveal">{{eyebrow}}</span><h2 class="ccl-h2 reveal">{{heading}}</h2></div><div class="ccl-grid reveal-stagger">{{#features}}<div class="ccl-item"><span class="ccl-feat">{{.feat}}</span></div>{{/features}}</div></div></section>`,
}
