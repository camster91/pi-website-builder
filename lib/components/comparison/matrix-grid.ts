import type { ComponentVariant } from '../types'
export const comparisonMatrixGrid: ComponentVariant = {
  id: 'comparison-matrix', name: 'Comparison Matrix Grid', section: 'comparison' as any,
  description: 'Grid of features with checkmarks — versatile, fits multiple competitors',
  bestFor: ['saas','ecommerce','fitness','education'], tags: ['matrix','grid','features','comparison','b2b'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'features', type: 'array', description: '6 features', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 4, description: 'Feature', required: true },
        { name: 'us', type: 'text', maxWords: 1, description: 'Checkmark (✓/✕)', required: true },
        { name: 'them', type: 'text', maxWords: 1, description: 'Checkmark (✓/✕)', required: true },
      ] },
  ],
  css: `/* comparison-matrix */
#comp-mt{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.cmt-in{max-width:1000px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.cmt-hd{text-align:center;margin-bottom:3rem}
.cmt-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.cmt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.cmt-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}
.cmt-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:1.5rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.cmt-name{font-weight:700;color:{{TEXT}}}
.cmt-checks{display:flex;gap:1.5rem}
.cmt-col{text-align:center;font-size:.8125rem;color:{{TEXT_MUTED}}}
.cmt-check{display:block;font-size:1.25rem;font-weight:700;margin-top:.25rem;color:{{PRIMARY}}}.cmt-cross{color:{{BORDER}}}`,
  template: `<section id="comp-mt"><div class="cmt-in"><div class="cmt-hd"><span class="cmt-ey reveal">{{eyebrow}}</span><h2 class="cmt-h2 reveal reveal-d1">{{heading}}</h2></div><div class="cmt-grid reveal-stagger">{{#features}}<div class="cmt-card"><span class="cmt-name">{{.name}}</span><div class="cmt-checks"><div class="cmt-col">Us<span class="cmt-check">{{.us}}</span></div><div class="cmt-col">Them<span class="cmt-cross">{{.them}}</span></div></div></div>{{/features}}</div></div></section>`,
}
