import type { ComponentVariant } from '../types'
export const comparisonCardsCompare: ComponentVariant = {
  id: 'comparison-cards', name: 'Comparison Cards', section: 'comparison' as any,
  description: 'Two large feature cards comparing "Old Way" vs "New Way" — emotional conversion',
  bestFor: ['fitness','saas','health'], tags: ['cards','comparison','emotional','old-new','conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'oldTitle', type: 'heading', maxWords: 3, description: 'Old way title', required: true },
    { name: 'newTitle', type: 'heading', maxWords: 3, description: 'New way title', required: true },
  ],
  css: `/* comparison-cards */
#comp-cd{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.ccd-in{max-width:1000px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.ccd-hd{text-align:center;margin-bottom:3rem}
.ccd-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.ccd-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.ccd-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem}
.ccd-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem}
.ccd-title{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;margin-bottom:1.5rem}
.ccd-card:nth-child(1) .ccd-title{color:{{TEXT_MUTED}}}
.ccd-card:nth-child(2) .ccd-title{color:{{PRIMARY}}}`,
  template: `<section id="comp-cd"><div class="ccd-in"><div class="ccd-hd"><span class="ccd-ey reveal">{{eyebrow}}</span><h2 class="ccd-h2 reveal">{{heading}}</h2></div><div class="ccd-grid reveal-stagger"><div class="ccd-card"><h3 class="ccd-title">{{oldTitle}}</h3></div><div class="ccd-card"><h3 class="ccd-title">{{newTitle}}</h3></div></div></div></section>`,
}
