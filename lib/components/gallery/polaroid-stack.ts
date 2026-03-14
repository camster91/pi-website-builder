import type { ComponentVariant } from '../types'
export const galleryPolaroidStack: ComponentVariant = {
  id: 'gallery-polaroid', name: 'Gallery Polaroid Stack', section: 'gallery' as any,
  description: 'Rotated polaroid-style photo cards scattered on light bg — casual, warm, artisanal brands',
  bestFor: ['restaurant','beauty','local-service','fitness'], tags: ['polaroid','rotated','casual','warm','artisanal','scattered'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'captions', type: 'array', description: '5 photo captions', required: true, minItems: 5, maxItems: 5,
      itemSlots: [{ name: 'caption', type: 'text', maxWords: 4, description: 'Photo caption', required: true }] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-polaroid */
#gallery-po{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.gpo-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gpo-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.gpo-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gpo-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.gpo-h2 .accent-word{color:{{ACCENT}}}
.gpo-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.gpo-gallery{display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem;margin-bottom:3rem}
.gpo-card{background:#fff;padding:12px 12px 40px;box-shadow:0 4px 20px rgba(0,0,0,.12);transition:transform .3s,box-shadow .3s;cursor:pointer}
.gpo-card:hover{box-shadow:0 12px 40px rgba(0,0,0,.18)}
.gpo-card:nth-child(1){transform:rotate(-3deg);width:220px}
.gpo-card:nth-child(2){transform:rotate(2deg);width:240px}
.gpo-card:nth-child(3){transform:rotate(-1.5deg);width:200px}
.gpo-card:nth-child(4){transform:rotate(3.5deg);width:230px}
.gpo-card:nth-child(5){transform:rotate(-2.5deg);width:210px}
.gpo-card:hover{transform:rotate(0) scale(1.05)}
.gpo-img{width:100%;aspect-ratio:3/4;overflow:hidden;margin-bottom:.5rem}
.gpo-img div{width:100%;height:100%}
.gpo-card:nth-child(1) .gpo-img div{background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.gpo-card:nth-child(2) .gpo-img div{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.gpo-card:nth-child(3) .gpo-img div{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gpo-card:nth-child(4) .gpo-img div{background:linear-gradient(135deg,#06b6d4,#0891b2)}
.gpo-card:nth-child(5) .gpo-img div{background:linear-gradient(135deg,#f43f5e,#e11d48)}
.gpo-img img{width:100%;height:100%;object-fit:cover;display:block}
.gpo-caption{font-family:'Georgia',serif;font-size:.8125rem;color:#6b7280;text-align:center;font-style:italic}
.gpo-ft{text-align:center}
.gpo-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gpo-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="gallery-po"><div class="gpo-in"><div class="gpo-hd"><span class="gpo-ey reveal">{{eyebrow}}</span><h2 class="gpo-h2 reveal reveal-d1">{{heading}}</h2><p class="gpo-sub reveal reveal-d2">{{subtext}}</p></div><div class="gpo-gallery reveal">{{#captions}}<div class="gpo-card"><div class="gpo-img"><div><img src="{{HERO_IMAGE}}" alt="{{.caption}}" loading="lazy"></div></div><p class="gpo-caption">{{.caption}}</p></div>{{/captions}}</div><div class="gpo-ft reveal"><a href="#contact" class="gpo-cta">{{ctaText}} →</a></div></div></section>`,
}
