import type { ComponentVariant } from '../types'
export const galleryDarkShowcase: ComponentVariant = {
  id: 'gallery-dark', name: 'Gallery Dark Showcase', section: 'gallery' as any,
  description: 'Dark background photo showcase with neon hover glow — premium, high-fashion, luxury brands',
  bestFor: ['beauty','fitness','agency','restaurant'], tags: ['dark','luxury','glow','hover','premium','fashion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading (on dark)', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-dark */
#gallery-dk{background:#080c14;padding:clamp(4rem,8vw,7rem) 0}
.gdk-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gdk-hd{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.gdk-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.gdk-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff}
.gdk-h2 .accent-word{color:{{PRIMARY}}}
.gdk-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:2.5rem}
@media(min-width:1024px){.gdk-grid{grid-template-columns:repeat(4,1fr)}}
.gdk-item{aspect-ratio:3/4;border-radius:12px;overflow:hidden;position:relative;cursor:pointer}
.gdk-item:nth-child(1){background:linear-gradient(135deg,#1e1b4b,{{PRIMARY}})}
.gdk-item:nth-child(2){background:linear-gradient(135deg,#4c0519,#e11d48)}
.gdk-item:nth-child(3){background:linear-gradient(135deg,#064e3b,#059669)}
.gdk-item:nth-child(4){background:linear-gradient(135deg,#713f12,#d97706)}
.gdk-item:nth-child(5){background:linear-gradient(135deg,#1e3a5f,#2563eb)}
.gdk-item:nth-child(6){background:linear-gradient(135deg,#2d1b69,#7c3aed)}
.gdk-item:nth-child(7){background:linear-gradient(135deg,#1f2937,#6366f1)}
.gdk-item:nth-child(8){background:linear-gradient(135deg,#0f172a,#0ea5e9)}
.gdk-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s,opacity .3s}
.gdk-item:hover img{transform:scale(1.08);opacity:.7}
.gdk-overlay{position:absolute;inset:0;border:0px solid {{PRIMARY}};border-radius:12px;transition:border-width .3s,box-shadow .3s}
.gdk-item:hover .gdk-overlay{border-width:2px;box-shadow:inset 0 0 40px rgba(99,102,241,.2),0 0 20px rgba(99,102,241,.3)}
.gdk-ft{text-align:center}
.gdk-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.7);border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gdk-cta:hover{border-color:rgba(255,255,255,.5);color:#fff}`,
  template: `<section id="gallery-dk"><div class="gdk-in"><div class="gdk-hd"><span class="gdk-ey reveal">{{eyebrow}}</span><h2 class="gdk-h2 reveal reveal-d1">{{heading}}</h2></div><div class="gdk-grid reveal"><div class="gdk-item"><img src="{{HERO_IMAGE}}" alt="Gallery" loading="lazy"><div class="gdk-overlay"></div></div><div class="gdk-item"><img src="{{SERVICE_IMAGE_0}}" alt="Gallery" loading="lazy"><div class="gdk-overlay"></div></div><div class="gdk-item"><img src="{{SERVICE_IMAGE_1}}" alt="Gallery" loading="lazy"><div class="gdk-overlay"></div></div><div class="gdk-item"><img src="{{SERVICE_IMAGE_2}}" alt="Gallery" loading="lazy"><div class="gdk-overlay"></div></div><div class="gdk-item"><div class="gdk-overlay"></div></div><div class="gdk-item"><div class="gdk-overlay"></div></div><div class="gdk-item"><div class="gdk-overlay"></div></div><div class="gdk-item"><div class="gdk-overlay"></div></div></div><div class="gdk-ft reveal"><a href="#contact" class="gdk-cta">{{ctaText}} →</a></div></div></section>`,
}
