import type { ComponentVariant } from '../types'
export const portfolioSplitHero: ComponentVariant = {
  id: 'portfolio-split', name: 'Portfolio Split Hero', section: 'portfolio' as any,
  description: 'Big text content on left, vertical scrolling project gallery on right',
  bestFor: ['design','portfolio','fashion'], tags: ['split','scrolling','hero','asymmetric','modern'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* portfolio-split */
#port-sh{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.psh-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem;align-items:center}
@media(min-width:1024px){.psh-in{grid-template-columns:1fr 1fr}}
.psh-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.psh-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:2rem}
.psh-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.psh-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.psh-gallery{display:grid;gap:1.5rem;aspect-ratio:3/4;background:{{BG_SECTION}};border-radius:20px}`,
  template: `<section id="port-sh"><div class="psh-in"><div class="reveal-left"><span class="psh-ey">{{eyebrow}}</span><h2 class="psh-h2">{{heading}}</h2><a href="#contact" class="psh-cta">{{ctaText}} →</a></div><div class="psh-gallery reveal-right">Gallery</div></div></section>`,
}
