import type { ComponentVariant } from '../types'
export const blogMagazineLayout: ComponentVariant = {
  id: 'blog-magazine', name: 'Blog Magazine Layout', section: 'blog' as any,
  description: 'Asymmetric magazine layout: 1 large + 4 small cards in mosaic — editorial, newspaper feel',
  bestFor: ['agency','education','nonprofit'], tags: ['magazine','editorial','mosaic','asymmetric','newspaper','layout'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'posts', type: 'array', description: '5 posts', required: true, minItems: 5, maxItems: 5,
      itemSlots: [
        { name: 'category', type: 'text', maxWords: 2, description: 'Category', required: true },
        { name: 'title', type: 'heading', maxWords: 9, description: 'Title', required: true },
        { name: 'excerpt', type: 'text', maxWords: 20, description: 'Excerpt', required: false },
        { name: 'date', type: 'text', maxWords: 3, description: 'Date', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: false },
  ],
  css: `/* blog-magazine */
#blog-mg{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.bmg-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.bmg-hd{margin-bottom:3rem;display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.bmg-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.5rem}
.bmg-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.bmg-cta-link{font-size:.9375rem;font-weight:700;color:{{PRIMARY}};text-decoration:none;white-space:nowrap}
.bmg-layout{display:grid;grid-template-columns:1fr;gap:1px;background:{{BORDER}};border-radius:20px;overflow:hidden;margin-bottom:2rem}
@media(min-width:1024px){.bmg-layout{grid-template-columns:3fr 2fr;grid-template-rows:auto auto}}
.bmg-main{background:{{BG_CARD}};grid-row:span 2;display:flex;flex-direction:column}
.bmg-main-img{aspect-ratio:16/9;overflow:hidden;background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
@media(min-width:1024px){.bmg-main-img{aspect-ratio:unset;flex:1;min-height:250px}}
.bmg-main-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.bmg-main:hover .bmg-main-img img{transform:scale(1.04)}
.bmg-main-body{padding:2rem}
.bmg-sub{background:{{BG_CARD}};display:flex;align-items:flex-start;gap:1rem;padding:1.25rem;transition:background .2s}
.bmg-sub:hover{background:{{BG}}}
.bmg-sub-img{width:80px;height:70px;flex-shrink:0;border-radius:10px;overflow:hidden}
.bmg-sub:nth-child(2) .bmg-sub-img{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.bmg-sub:nth-child(3) .bmg-sub-img{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.bmg-sub:nth-child(4) .bmg-sub-img{background:linear-gradient(135deg,#06b6d4,#0891b2)}
.bmg-sub:nth-child(5) .bmg-sub-img{background:linear-gradient(135deg,#f43f5e,#e11d48)}
.bmg-sub-img img{width:100%;height:100%;object-fit:cover;display:block}
.bmg-cat{font-size:.75rem;font-weight:700;color:{{PRIMARY}};margin-bottom:.375rem}
.bmg-title{font-family:var(--font-heading);font-size:.9375rem;font-weight:700;color:{{TEXT}};line-height:1.3;margin-bottom:.25rem}
.bmg-date{font-size:.75rem;color:{{TEXT_MUTED}}}
.bmg-main-cat{font-size:.75rem;font-weight:700;color:{{ACCENT}};background:rgba(245,158,11,.1);padding:3px 12px;border-radius:999px;display:inline-block;margin-bottom:.875rem}
.bmg-main-title{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:{{TEXT}};line-height:1.2;margin-bottom:.875rem;letter-spacing:-.02em}
.bmg-main-excerpt{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.7;margin-bottom:.75rem}
.bmg-main-date{font-size:.8125rem;color:{{TEXT_MUTED}}}
.bmg-ft{text-align:center}
.bmg-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.bmg-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="blog-mg"><div class="bmg-in"><div class="bmg-hd"><div><span class="bmg-ey reveal">{{eyebrow}}</span><h2 class="bmg-h2 reveal reveal-d1">{{heading}}</h2></div><a href="#" class="bmg-cta-link reveal">{{ctaText}} →</a></div><div class="bmg-layout reveal"><div class="bmg-main"><div class="bmg-main-img"><img src="{{HERO_IMAGE}}" alt="Featured" loading="lazy"></div><div class="bmg-main-body"><span class="bmg-main-cat">{{posts[0].category}}</span><h2 class="bmg-main-title">{{posts[0].title}}</h2><p class="bmg-main-excerpt">{{posts[0].excerpt}}</p><span class="bmg-main-date">{{posts[0].date}}</span></div></div><div class="bmg-sub"><div class="bmg-sub-img"></div><div><div class="bmg-cat">{{posts[1].category}}</div><h3 class="bmg-title">{{posts[1].title}}</h3><div class="bmg-date">{{posts[1].date}}</div></div></div><div class="bmg-sub"><div class="bmg-sub-img"></div><div><div class="bmg-cat">{{posts[2].category}}</div><h3 class="bmg-title">{{posts[2].title}}</h3><div class="bmg-date">{{posts[2].date}}</div></div></div><div class="bmg-sub"><div class="bmg-sub-img"></div><div><div class="bmg-cat">{{posts[3].category}}</div><h3 class="bmg-title">{{posts[3].title}}</h3><div class="bmg-date">{{posts[3].date}}</div></div></div><div class="bmg-sub"><div class="bmg-sub-img"></div><div><div class="bmg-cat">{{posts[4].category}}</div><h3 class="bmg-title">{{posts[4].title}}</h3><div class="bmg-date">{{posts[4].date}}</div></div></div></div><div class="bmg-ft reveal"><a href="#" class="bmg-cta">{{ctaText}} →</a></div></div></section>`,
}
