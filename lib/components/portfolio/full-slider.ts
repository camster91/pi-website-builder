import type { ComponentVariant } from '../types'
export const portfolioFullSlider: ComponentVariant = {
  id: 'portfolio-slider', name: 'Portfolio Full-Width Slider', section: 'portfolio' as any,
  description: 'Full-width cinematic slider for high-quality project showcase',
  bestFor: ['agency','portfolio','design'], tags: ['slider','full-width','cinematic','showcase'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* portfolio-slider */
#port-sl{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.psl-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.psl-hd{text-align:center;margin-bottom:3rem}
.psl-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.psl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.psl-stage{position:relative;aspect-ratio:16/7;background:linear-gradient(135deg,{{PRIMARY}},{{ACCENT}});border-radius:24px;margin-bottom:3rem}
.psl-ft{text-align:center}
.psl-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.psl-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="port-sl"><div class="psl-in"><div class="psl-hd"><span class="psl-ey reveal">{{eyebrow}}</span><h2 class="psl-h2 reveal">{{heading}}</h2></div><div class="psl-stage reveal"></div><div class="psl-ft reveal"><a href="#contact" class="psl-cta">{{ctaText}} →</a></div></div></section>`,
}
