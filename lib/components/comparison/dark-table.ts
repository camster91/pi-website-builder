import type { ComponentVariant } from '../types'
export const comparisonDarkTable: ComponentVariant = {
  id: 'comparison-dark-table', name: 'Comparison Dark Feature Table', section: 'comparison' as any,
  description: 'Dark-mode feature comparison table with checkmarks — technical, SaaS, B2B software',
  bestFor: ['saas','agency','education'], tags: ['dark','table','features','comparison','b2b','technical'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading (on dark)', required: true },
    { name: 'features', type: 'array', description: '6 features', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'feature', type: 'text', maxWords: 5, description: 'Feature name', required: true },
        { name: 'us', type: 'text', maxWords: 1, description: 'Checkmark (✓/✕)', required: true },
        { name: 'them', type: 'text', maxWords: 1, description: 'Competitor (✓/✕)', required: true },
      ] },
  ],
  css: `/* comparison-dark-table */
#comp-dt{background:#080c14;padding:clamp(4rem,8vw,7rem) 0}
.cdt-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.cdt-hd{text-align:center;max-width:600px;margin:0 auto 3rem}
.cdt-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.cdt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;color:#fff;margin-bottom:1rem}
.cdt-table{width:100%;border-collapse:separate;border-spacing:0;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;overflow:hidden}
.cdt-th{padding:1.5rem;text-align:left;color:rgba(255,255,255,.5);font-size:.875rem;border-bottom:1px solid rgba(255,255,255,.08)}
.cdt-td{padding:1.5rem;color:#fff;font-weight:600;border-bottom:1px solid rgba(255,255,255,.08)}
.cdt-tr:last-child .cdt-td{border-bottom:none}
.cdt-check{color:{{PRIMARY}}}.cdt-cross{color:rgba(255,255,255,.2)}`,
  template: `<section id="comp-dt"><div class="cdt-in"><div class="cdt-hd"><span class="cdt-ey reveal">{{eyebrow}}</span><h2 class="cdt-h2 reveal reveal-d1">{{heading}}</h2></div><table class="cdt-table reveal"><thead><tr><th class="cdt-th">Feature</th><th class="cdt-th">Us</th><th class="cdt-th">Them</th></tr></thead><tbody>{{#features}}<tr class="cdt-tr"><td class="cdt-td">{{.feature}}</td><td class="cdt-td cdt-check">{{.us}}</td><td class="cdt-td cdt-cross">{{.them}}</td></tr>{{/features}}</tbody></table></div></section>`,
}
