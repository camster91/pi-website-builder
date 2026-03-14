import type { ComponentVariant } from '../types'
export const galleryFeaturedLarge: ComponentVariant = {
  id: 'gallery-featured', name: 'Gallery Featured Large', section: 'gallery' as any,
  description: 'One large hero image + 4 smaller thumbnails in asymmetric layout — editorial magazine feel',
  bestFor: ['restaurant','beauty','fitness','real-estate','agency'], tags: ['featured','asymmetric','editorial','large','magazine'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-featured */
#gallery-fl{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.gfl-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gfl-hd{max-width:680px;margin:0 auto 3.5rem;text-align:center}
.gfl-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gfl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.gfl-h2 .accent-word{color:{{ACCENT}}}
.gfl-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.gfl-layout{display:grid;grid-template-columns:1fr;gap:12px;margin-bottom:2.5rem}
@media(min-width:768px){.gfl-layout{grid-template-columns:3fr 2fr;grid-template-rows:auto auto}}
.gfl-main{border-radius:20px;overflow:hidden;aspect-ratio:4/3;background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
@media(min-width:768px){.gfl-main{grid-row:span 2;aspect-ratio:unset;min-height:500px}}
.gfl-main img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.gfl-main:hover img{transform:scale(1.04)}
.gfl-thumbs{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.gfl-thumb{border-radius:16px;overflow:hidden;aspect-ratio:4/3}
.gfl-thumb:nth-child(1){background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.gfl-thumb:nth-child(2){background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gfl-thumb:nth-child(3){background:linear-gradient(135deg,#06b6d4,#0891b2)}
.gfl-thumb:nth-child(4){background:linear-gradient(135deg,#10b981,#059669)}
.gfl-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.gfl-thumb:hover img{transform:scale(1.06)}
.gfl-ft{text-align:center}
.gfl-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gfl-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="gallery-fl"><div class="gfl-in"><div class="gfl-hd"><span class="gfl-ey reveal">{{eyebrow}}</span><h2 class="gfl-h2 reveal reveal-d1">{{heading}}</h2><p class="gfl-sub reveal reveal-d2">{{subtext}}</p></div><div class="gfl-layout reveal"><div class="gfl-main"><img src="{{HERO_IMAGE}}" alt="Featured" loading="lazy"></div><div class="gfl-thumbs"><div class="gfl-thumb"><img src="{{SERVICE_IMAGE_0}}" alt="Gallery" loading="lazy"></div><div class="gfl-thumb"><img src="{{SERVICE_IMAGE_1}}" alt="Gallery" loading="lazy"></div><div class="gfl-thumb"><img src="{{SERVICE_IMAGE_2}}" alt="Gallery" loading="lazy"></div><div class="gfl-thumb"></div></div></div><div class="gfl-ft reveal"><a href="#contact" class="gfl-cta">{{ctaText}} →</a></div></div></section>`,
}
