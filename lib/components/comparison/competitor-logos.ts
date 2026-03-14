import type { ComponentVariant } from '../types'
export const comparisonCompetitorLogos: ComponentVariant = {
  id: 'comparison-logos', name: 'Comparison Competitor Logos', section: 'comparison' as any,
  description: 'Grid of competitor logos with "not this" crossed out — punchy and visual',
  bestFor: ['saas','ecommerce'], tags: ['logos','competitors','visual','punchy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'logos', type: 'array', description: '4 logos', required: true, minItems: 4, maxItems: 4,
      itemSlots: [{ name: 'name', type: 'text', maxWords: 2, description: 'Name', required: true }] },
  ],
  css: `/* comparison-logos */
#comp-lg{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.clg-in{max-width:1000px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.clg-hd{text-align:center;margin-bottom:3rem}
.clg-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.clg-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.clg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem}
@media(min-width:768px){.clg-grid{grid-template-columns:repeat(4,1fr)}}
.clg-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem;text-align:center;position:relative}
.clg-card::before{content:'✕';position:absolute;top:10px;right:10px;color:{{PRIMARY}};font-weight:700}
.clg-name{font-weight:700;color:{{TEXT_MUTED}}}`,
  template: `<section id="comp-lg"><div class="clg-in"><div class="clg-hd"><span class="clg-ey reveal">{{eyebrow}}</span><h2 class="clg-h2 reveal">{{heading}}</h2></div><div class="clg-grid reveal-stagger">{{#logos}}<div class="clg-card"><span class="clg-name">{{.name}}</span></div>{{/logos}}</div></div></section>`,
}
