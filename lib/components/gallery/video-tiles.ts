import type { ComponentVariant } from '../types'
export const galleryVideoTiles: ComponentVariant = {
  id: 'gallery-video', name: 'Gallery Mixed Photo/Video Tiles', section: 'gallery' as any,
  description: 'Mixed grid with photo tiles and video play tiles — dynamic, modern, great for content creators',
  bestFor: ['fitness','beauty','agency','education'], tags: ['mixed','video','tiles','dynamic','content','creator'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-video */
#gallery-vt{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.gvt-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gvt-hd{text-align:center;max-width:640px;margin:0 auto 3rem}
.gvt-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gvt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.gvt-h2 .accent-word{color:{{ACCENT}}}
.gvt-grid{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto auto;gap:12px;margin-bottom:2.5rem}
@media(max-width:640px){.gvt-grid{grid-template-columns:repeat(2,1fr)}}
.gvt-tile{border-radius:14px;overflow:hidden;position:relative;cursor:pointer}
.gvt-tile img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.gvt-tile:hover img{transform:scale(1.06)}
.gvt-tile:nth-child(1){aspect-ratio:1/1;background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.gvt-tile:nth-child(2){aspect-ratio:1/1;background:linear-gradient(135deg,{{ACCENT}},#f97316);grid-column:span 1;grid-row:span 2}
.gvt-tile:nth-child(3){aspect-ratio:1/1;background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gvt-tile:nth-child(4){aspect-ratio:16/9;background:linear-gradient(135deg,#06b6d4,#0891b2);grid-column:span 2}
.gvt-tile:nth-child(5){aspect-ratio:1/1;background:linear-gradient(135deg,#f43f5e,#e11d48)}
.gvt-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.25)}
.gvt-play-btn{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;transition:transform .3s}
.gvt-tile:hover .gvt-play-btn{transform:scale(1.1)}
.gvt-play-btn svg{width:20px;height:20px;color:{{PRIMARY}};margin-left:3px}
.gvt-ft{text-align:center}
.gvt-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gvt-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="gallery-vt"><div class="gvt-in"><div class="gvt-hd"><span class="gvt-ey reveal">{{eyebrow}}</span><h2 class="gvt-h2 reveal reveal-d1">{{heading}}</h2></div><div class="gvt-grid reveal"><div class="gvt-tile"><img src="{{HERO_IMAGE}}" alt="" loading="lazy"></div><div class="gvt-tile"><div class="gvt-play"><div class="gvt-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div><div class="gvt-tile"><img src="{{SERVICE_IMAGE_0}}" alt="" loading="lazy"></div><div class="gvt-tile"><img src="{{SERVICE_IMAGE_1}}" alt="" loading="lazy"></div><div class="gvt-tile"><div class="gvt-play"><div class="gvt-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div></div><div class="gvt-ft reveal"><a href="#contact" class="gvt-cta">{{ctaText}} →</a></div></div></section>`,
}
