import type { ComponentVariant } from '../types'
export const portfolioMasonry: ComponentVariant = {
  id: 'portfolio-masonry', name: 'Portfolio Masonry Grid', section: 'portfolio' as any,
  description: 'Asymmetric masonry grid layout for creative agencies — modern, high-end artistic feel',
  bestFor: ['agency','portfolio','design'], tags: ['masonry','creative','grid','asymmetric','high-end'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* portfolio-masonry */
#port-ms{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.pms-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pms-hd{text-align:center;margin-bottom:3rem}
.pms-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pms-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pms-grid{display:grid;grid-template-columns:repeat(2,1fr);grid-auto-flow:dense;gap:1.5rem;margin-bottom:3rem}
@media(min-width:768px){.pms-grid{grid-template-columns:repeat(3,1fr)}}
.pms-item{border-radius:20px;overflow:hidden;background:{{BG_SECTION}};aspect-ratio:3/4}
.pms-item:nth-child(2){grid-row:span 2}
.pms-item:nth-child(4){grid-row:span 2}
.pms-item img{width:100%;height:100%;object-fit:cover;display:block}
.pms-ft{text-align:center}
.pms-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.pms-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="port-ms"><div class="pms-in"><div class="pms-hd"><span class="pms-ey reveal">{{eyebrow}}</span><h2 class="pms-h2 reveal">{{heading}}</h2></div><div class="pms-grid reveal-stagger"><div class="pms-item"><img src="{{HERO_IMAGE}}" alt="Work" loading="lazy"></div><div class="pms-item"><img src="{{SERVICE_IMAGE_0}}" alt="Work" loading="lazy"></div><div class="pms-item"><img src="{{SERVICE_IMAGE_1}}" alt="Work" loading="lazy"></div><div class="pms-item"><img src="{{SERVICE_IMAGE_2}}" alt="Work" loading="lazy"></div><div class="pms-item"><img src="{{ABOUT_IMAGE}}" alt="Work" loading="lazy"></div></div><div class="pms-ft reveal"><a href="#contact" class="pms-cta">{{ctaText}} →</a></div></div></section>`,
}
