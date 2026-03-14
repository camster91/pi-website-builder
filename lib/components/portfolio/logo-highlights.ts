import type { ComponentVariant } from '../types'
export const portfolioLogoHighlights: ComponentVariant = {
  id: 'portfolio-logos', name: 'Portfolio Logo Highlights', section: 'portfolio' as any,
  description: 'Grid of client logos + select project showcase — authority-building',
  bestFor: ['saas','agency','consulting'], tags: ['logos','client-list','authority','highlight','showcase'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
  ],
  css: `/* portfolio-logos */
#port-lh{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.plh-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.plh-hd{text-align:center;margin-bottom:3rem}
.plh-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.plh-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.plh-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem}
@media(min-width:768px){.plh-grid{grid-template-columns:repeat(4,1fr)}}
.plh-logo{aspect-ratio:3/2;background:{{BG_CARD}};border-radius:12px;display:flex;align-items:center;justify-content:center;color:{{TEXT_MUTED}};font-weight:700}`,
  template: `<section id="port-lh"><div class="plh-in"><div class="plh-hd"><span class="plh-ey reveal">{{eyebrow}}</span><h2 class="plh-h2 reveal">{{heading}}</h2></div><div class="plh-grid reveal-stagger"><div class="plh-logo">Logo</div><div class="plh-logo">Logo</div><div class="plh-logo">Logo</div><div class="plh-logo">Logo</div></div></div></section>`,
}
