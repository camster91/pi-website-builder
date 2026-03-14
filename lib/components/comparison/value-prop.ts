import type { ComponentVariant } from '../types'
export const comparisonValueProp: ComponentVariant = {
  id: 'comparison-value', name: 'Comparison Value Proposition', section: 'comparison' as any,
  description: 'Headline and feature list highlighting unique value against industry standard',
  bestFor: ['saas','agency'], tags: ['value','proposition','comparison','b2b','unique'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'points', type: 'array', description: '3 value points', required: true, minItems: 3, maxItems: 3,
      itemSlots: [{ name: 'point', type: 'text', maxWords: 6, description: 'Point', required: true }] },
  ],
  css: `/* comparison-value */
#comp-vp{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.cvp-in{max-width:800px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.cvp-hd{text-align:center;margin-bottom:3rem}
.cvp-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.cvp-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.cvp-points{display:flex;flex-direction:column;gap:1.5rem}
.cvp-point{display:flex;align-items:center;gap:1rem;padding:1.5rem;background:{{BG_SECTION}};border-radius:16px;font-size:1.125rem;font-weight:600;color:{{TEXT}}}
.cvp-point::before{content:"★";color:{{PRIMARY}};font-size:1.5rem}`,
  template: `<section id="comp-vp"><div class="cvp-in"><div class="cvp-hd"><span class="cvp-ey reveal">{{eyebrow}}</span><h2 class="cvp-h2 reveal">{{heading}}</h2></div><div class="cvp-points reveal-stagger">{{#points}}<div class="cvp-point">{{.point}}</div>{{/points}}</div></div></section>`,
}
