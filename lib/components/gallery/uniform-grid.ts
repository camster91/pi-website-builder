import type { ComponentVariant } from '../types'
export const galleryUniformGrid: ComponentVariant = {
  id: 'gallery-grid', name: 'Gallery Uniform Grid', section: 'gallery' as any,
  description: 'Clean uniform square grid of images with category filter tabs — portfolio, work samples',
  bestFor: ['agency','portfolio','beauty','ecommerce','restaurant'], tags: ['grid','uniform','square','filter','portfolio','clean'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA below gallery', required: true },
  ],
  css: `/* gallery-grid */
#gallery-ug{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.gug-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gug-hd{text-align:center;max-width:680px;margin:0 auto 3rem}
.gug-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gug-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.gug-h2 .accent-word{color:{{ACCENT}}}
.gug-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:2.5rem}
@media(min-width:640px){.gug-grid{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1024px){.gug-grid{grid-template-columns:repeat(4,1fr)}}
.gug-item{aspect-ratio:1/1;border-radius:12px;overflow:hidden;position:relative}
.gug-item:nth-child(1){background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.gug-item:nth-child(2){background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.gug-item:nth-child(3){background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gug-item:nth-child(4){background:linear-gradient(135deg,#06b6d4,#0891b2)}
.gug-item:nth-child(5){background:linear-gradient(135deg,#f43f5e,#e11d48)}
.gug-item:nth-child(6){background:linear-gradient(135deg,#10b981,#059669)}
.gug-item:nth-child(7){background:linear-gradient(135deg,#f59e0b,#d97706)}
.gug-item:nth-child(8){background:linear-gradient(135deg,#3b82f6,#2563eb)}
.gug-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.gug-item:hover img{transform:scale(1.06)}
.gug-overlay{position:absolute;inset:0;background:rgba(0,0,0,.3);opacity:0;transition:opacity .3s;display:flex;align-items:center;justify-content:center}
.gug-item:hover .gug-overlay{opacity:1}
.gug-overlay-icon{color:#fff;font-size:1.5rem}
.gug-ft{text-align:center}
.gug-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gug-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}};transform:translateY(-2px)}`,
  template: `<section id="gallery-ug"><div class="gug-in"><div class="gug-hd"><span class="gug-ey reveal">{{eyebrow}}</span><h2 class="gug-h2 reveal reveal-d1">{{heading}}</h2></div><div class="gug-grid reveal"><div class="gug-item"><img src="{{HERO_IMAGE}}" alt="Gallery" loading="lazy"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><img src="{{SERVICE_IMAGE_0}}" alt="Gallery" loading="lazy"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><img src="{{SERVICE_IMAGE_1}}" alt="Gallery" loading="lazy"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><img src="{{SERVICE_IMAGE_2}}" alt="Gallery" loading="lazy"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div><div class="gug-item"><div class="gug-overlay"><span class="gug-overlay-icon">🔍</span></div></div></div><div class="gug-ft reveal"><a href="#contact" class="gug-cta">{{ctaText}} →</a></div></div></section>`,
}
