import type { ComponentVariant } from '../types'
export const portfolioSpotlight: ComponentVariant = {
  id: 'portfolio-spotlight', name: 'Portfolio Spotlight', section: 'portfolio' as any,
  description: 'Single large featured project with deep details — high engagement, conversion',
  bestFor: ['design','agency','architecture'], tags: ['spotlight','featured','deep-dive','conversion','engagement'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* portfolio-spotlight */
#port-slp{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.pslp-in{max-width:1000px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pslp-hd{text-align:center;margin-bottom:3rem}
.pslp-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pslp-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pslp-stage{background:{{BG}};border-radius:24px;overflow:hidden;margin-bottom:2.5rem;display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}
.pslp-img{aspect-ratio:4/3;background:linear-gradient(135deg,{{PRIMARY}},{{ACCENT}})}
.pslp-body{padding:2rem}
.pslp-ft{text-align:center}
.pslp-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.pslp-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="port-slp"><div class="pslp-in"><div class="pslp-hd"><span class="pslp-ey reveal">{{eyebrow}}</span><h2 class="pslp-h2 reveal">{{heading}}</h2></div><div class="pslp-stage reveal"><div class="pslp-img"></div><div class="pslp-body"><h3>Project Spotlight</h3><p>Detailed project insights...</p></div></div><div class="pslp-ft reveal"><a href="#contact" class="pslp-cta">{{ctaText}} →</a></div></div></section>`,
}
