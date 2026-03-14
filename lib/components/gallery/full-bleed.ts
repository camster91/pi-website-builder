import type { ComponentVariant } from '../types'
export const galleryFullBleed: ComponentVariant = {
  id: 'gallery-fullbleed', name: 'Gallery Full Bleed Parallax', section: 'gallery' as any,
  description: 'Edge-to-edge full bleed image sections stacked vertically with parallax captions — cinematic storytelling',
  bestFor: ['restaurant','real-estate','fitness','agency','beauty'], tags: ['fullbleed','edge-to-edge','parallax','cinematic','stacked','storytelling'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'images', type: 'array', description: '4 full bleed images', required: true, minItems: 3, maxItems: 4,
      itemSlots: [
        { name: 'caption', type: 'text', maxWords: 6, description: 'Image caption/title', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-fullbleed */
#gallery-fb{background:#080c14;padding:0}
.gfb-header{padding:clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,3rem);text-align:center;max-width:680px;margin:0 auto}
.gfb-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.gfb-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff}
.gfb-images{display:flex;flex-direction:column}
.gfb-img{position:relative;height:60vh;min-height:320px;overflow:hidden}
.gfb-img:nth-child(1){background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.gfb-img:nth-child(2){background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.gfb-img:nth-child(3){background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gfb-img:nth-child(4){background:linear-gradient(135deg,#06b6d4,#0891b2)}
.gfb-img-inner{width:100%;height:120%;margin-top:-10%;object-fit:cover;display:block}
.gfb-caption{position:absolute;bottom:2rem;left:2rem;background:rgba(0,0,0,.5);backdrop-filter:blur(8px);color:#fff;font-size:1rem;font-weight:600;padding:10px 20px;border-radius:12px}
.gfb-footer{padding:3rem clamp(1.5rem,5vw,3rem);text-align:center}
.gfb-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.7);border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gfb-cta:hover{border-color:rgba(255,255,255,.5);color:#fff}`,
  template: `<section id="gallery-fb"><div class="gfb-header"><span class="gfb-ey reveal">{{eyebrow}}</span><h2 class="gfb-h2 reveal reveal-d1">{{heading}}</h2></div><div class="gfb-images reveal">{{#images}}<div class="gfb-img"><img class="gfb-img-inner" src="{{HERO_IMAGE}}" alt="Gallery" loading="lazy"><div class="gfb-caption">{{.caption}}</div></div>{{/images}}</div><div class="gfb-footer reveal"><a href="#contact" class="gfb-cta">{{ctaText}} →</a></div></section>`,
}
