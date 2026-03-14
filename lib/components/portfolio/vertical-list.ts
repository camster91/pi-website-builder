import type { ComponentVariant } from '../types'
export const portfolioVerticalList: ComponentVariant = {
  id: 'portfolio-vlist', name: 'Portfolio Vertical List', section: 'portfolio' as any,
  description: 'Clean vertical list of projects with hover-reveal image previews — minimal, professional',
  bestFor: ['agency','portfolio','design'], tags: ['vertical','list','minimal','hover','professional'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* portfolio-vlist */
#port-vl{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.pvl-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pvl-hd{text-align:center;margin-bottom:3rem}
.pvl-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pvl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pvl-list{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:3rem}
.pvl-item{display:flex;align-items:center;justify-content:space-between;padding:1.5rem 0;border-bottom:1px solid {{BORDER}};cursor:pointer}
.pvl-item:hover .pvl-title{color:{{PRIMARY}}}
.pvl-title{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:{{TEXT}};transition:color .2s}
.pvl-cat{font-size:.875rem;color:{{TEXT_MUTED}}}
.pvl-ft{text-align:center}
.pvl-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.pvl-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="port-vl"><div class="pvl-in"><div class="pvl-hd"><span class="pvl-ey reveal">{{eyebrow}}</span><h2 class="pvl-h2 reveal">{{heading}}</h2></div><div class="pvl-list reveal-stagger"><div class="pvl-item"><h3 class="pvl-title">Project Alpha</h3><span class="pvl-cat">Web Design</span></div><div class="pvl-item"><h3 class="pvl-title">Project Beta</h3><span class="pvl-cat">Branding</span></div><div class="pvl-item"><h3 class="pvl-title">Project Gamma</h3><span class="pvl-cat">UX Research</span></div></div><div class="pvl-ft reveal"><a href="#contact" class="pvl-cta">{{ctaText}} →</a></div></div></section>`,
}
