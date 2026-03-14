import type { ComponentVariant } from '../types'
export const galleryHorizontalScroll: ComponentVariant = {
  id: 'gallery-hscroll', name: 'Gallery Horizontal Scroll', section: 'gallery' as any,
  description: 'Wide horizontal scrollable gallery strip — cinematic, drag to explore, great for restaurants and travel',
  bestFor: ['restaurant','beauty','fitness','real-estate','travel'], tags: ['horizontal','scroll','drag','cinematic','strip','overflow'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-hscroll */
#gallery-hs{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0;overflow:hidden}
.ghs-in{max-width:1280px;margin:0 auto}
.ghs-hd{padding:0 clamp(1.5rem,5vw,3rem);margin-bottom:2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.ghs-eyebrow{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.5rem}
.ghs-h2{font-family:var(--font-heading);font-size:clamp(1.75rem,3vw,2.5rem);font-weight:800;letter-spacing:-.03em;color:{{TEXT}}}
.ghs-h2 .accent-word{color:{{ACCENT}}}
.ghs-hint{font-size:.8125rem;color:{{TEXT_MUTED}};display:flex;align-items:center;gap:6px;flex-shrink:0}
.ghs-track{display:flex;gap:16px;overflow-x:auto;padding:0 clamp(1.5rem,5vw,3rem) 1rem;scrollbar-width:none;cursor:grab}
.ghs-track::-webkit-scrollbar{display:none}
.ghs-track:active{cursor:grabbing}
.ghs-img{flex-shrink:0;height:400px;border-radius:16px;overflow:hidden}
.ghs-img:nth-child(1){width:400px;background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.ghs-img:nth-child(2){width:300px;background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.ghs-img:nth-child(3){width:450px;background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.ghs-img:nth-child(4){width:320px;background:linear-gradient(135deg,#06b6d4,#0891b2)}
.ghs-img:nth-child(5){width:380px;background:linear-gradient(135deg,#f43f5e,#e11d48)}
.ghs-img:nth-child(6){width:420px;background:linear-gradient(135deg,#10b981,#059669)}
.ghs-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.ghs-img:hover img{transform:scale(1.04)}
.ghs-ft{padding:1.5rem clamp(1.5rem,5vw,3rem) 0;text-align:center}
.ghs-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.ghs-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="gallery-hs"><div class="ghs-in"><div class="ghs-hd"><div><span class="ghs-eyebrow reveal">{{eyebrow}}</span><h2 class="ghs-h2 reveal">{{heading}}</h2></div><span class="ghs-hint reveal">← Drag to explore →</span></div><div class="ghs-track reveal"><div class="ghs-img"><img src="{{HERO_IMAGE}}" alt="Gallery" loading="lazy"></div><div class="ghs-img"><img src="{{SERVICE_IMAGE_0}}" alt="Gallery" loading="lazy"></div><div class="ghs-img"><img src="{{SERVICE_IMAGE_1}}" alt="Gallery" loading="lazy"></div><div class="ghs-img"><img src="{{SERVICE_IMAGE_2}}" alt="Gallery" loading="lazy"></div><div class="ghs-img"></div><div class="ghs-img"></div></div><div class="ghs-ft reveal"><a href="#contact" class="ghs-cta">{{ctaText}} →</a></div></div></section>`,
}
