import type { ComponentVariant } from '../types'
export const blogFeaturedPost: ComponentVariant = {
  id: 'blog-featured', name: 'Blog Featured + Grid', section: 'blog' as any,
  description: 'Large featured article (hero) with 2 secondary articles below — editorial magazine layout',
  bestFor: ['saas','agency','healthcare','education','nonprofit'], tags: ['featured','hero-post','editorial','magazine','hierarchy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'featTitle', type: 'heading', maxWords: 10, description: 'Featured article title', required: true },
    { name: 'featExcerpt', type: 'text', maxWords: 30, description: 'Featured excerpt', required: true },
    { name: 'featCategory', type: 'text', maxWords: 2, description: 'Featured category', required: true },
    { name: 'featAuthor', type: 'text', maxWords: 3, description: 'Author', required: true },
    { name: 'featDate', type: 'text', maxWords: 3, description: 'Date', required: true },
    { name: 'featInitials', type: 'text', maxWords: 1, description: 'Author initials', required: true },
    { name: 'art2Title', type: 'heading', maxWords: 8, description: 'Article 2 title', required: true },
    { name: 'art2Cat', type: 'text', maxWords: 2, description: 'Article 2 category', required: true },
    { name: 'art2Date', type: 'text', maxWords: 3, description: 'Article 2 date', required: true },
    { name: 'art3Title', type: 'heading', maxWords: 8, description: 'Article 3 title', required: true },
    { name: 'art3Cat', type: 'text', maxWords: 2, description: 'Article 3 category', required: true },
    { name: 'art3Date', type: 'text', maxWords: 3, description: 'Article 3 date', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* blog-featured */
#blog-ft{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.bft-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.bft-hd{margin-bottom:3rem;display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.bft-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.5rem}
.bft-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.bft-cta-link{font-size:.9375rem;font-weight:700;color:{{PRIMARY}};text-decoration:none;white-space:nowrap}
.bft-layout{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:1024px){.bft-layout{grid-template-columns:3fr 2fr}}
/* Featured post */
.bft-feat{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:24px;overflow:hidden;display:flex;flex-direction:column}
.bft-feat-img{aspect-ratio:16/9;overflow:hidden;background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.bft-feat-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.bft-feat:hover .bft-feat-img img{transform:scale(1.04)}
.bft-feat-body{padding:2rem;flex:1}
.bft-cat{display:inline-block;font-size:.75rem;font-weight:700;color:{{ACCENT}};background:rgba(245,158,11,.1);padding:3px 12px;border-radius:999px;margin-bottom:1rem}
.bft-title{font-family:var(--font-heading);font-size:1.375rem;font-weight:700;color:{{TEXT}};line-height:1.3;margin-bottom:.875rem;letter-spacing:-.02em}
.bft-excerpt{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.7;margin-bottom:1.5rem}
.bft-author{display:flex;align-items:center;gap:.75rem;padding-top:1rem;border-top:1px solid {{BORDER}}}
.bft-av{width:36px;height:36px;border-radius:50%;background:rgba(99,102,241,.12);color:{{PRIMARY}};display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;flex-shrink:0}
.bft-aname{font-weight:700;font-size:.875rem;color:{{TEXT}}}
.bft-adate{font-size:.75rem;color:{{TEXT_MUTED}}}
/* Secondary grid */
.bft-secondary{display:flex;flex-direction:column;gap:1rem}
.bft-art{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;overflow:hidden;display:flex;flex-direction:column;flex:1;transition:border-color .3s}
.bft-art:hover{border-color:{{PRIMARY}}}
.bft-art-img{aspect-ratio:16/9;overflow:hidden}
.bft-art:nth-child(1) .bft-art-img{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.bft-art:nth-child(2) .bft-art-img{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.bft-art-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.bft-art:hover .bft-art-img img{transform:scale(1.05)}
.bft-art-body{padding:1.25rem;flex:1}
.bft-art-cat{font-size:.75rem;font-weight:700;color:{{PRIMARY}};margin-bottom:.5rem}
.bft-art-title{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};line-height:1.3;margin-bottom:.5rem}
.bft-art-date{font-size:.75rem;color:{{TEXT_MUTED}}}`,
  template: `<section id="blog-ft"><div class="bft-in"><div class="bft-hd"><div><span class="bft-ey reveal">{{eyebrow}}</span><h2 class="bft-h2 reveal reveal-d1">{{heading}}</h2></div><a href="#" class="bft-cta-link reveal">{{ctaText}} →</a></div><div class="bft-layout reveal"><div class="bft-feat"><div class="bft-feat-img"><img src="{{HERO_IMAGE}}" alt="Featured" loading="lazy"></div><div class="bft-feat-body"><span class="bft-cat">{{featCategory}}</span><h3 class="bft-title">{{featTitle}}</h3><p class="bft-excerpt">{{featExcerpt}}</p><div class="bft-author"><div class="bft-av">{{featInitials}}</div><div><div class="bft-aname">{{featAuthor}}</div><div class="bft-adate">{{featDate}}</div></div></div></div></div><div class="bft-secondary"><div class="bft-art"><div class="bft-art-img"><img src="{{SERVICE_IMAGE_0}}" alt="Article" loading="lazy"></div><div class="bft-art-body"><div class="bft-art-cat">{{art2Cat}}</div><h3 class="bft-art-title">{{art2Title}}</h3><div class="bft-art-date">{{art2Date}}</div></div></div><div class="bft-art"><div class="bft-art-img"><img src="{{SERVICE_IMAGE_1}}" alt="Article" loading="lazy"></div><div class="bft-art-body"><div class="bft-art-cat">{{art3Cat}}</div><h3 class="bft-art-title">{{art3Title}}</h3><div class="bft-art-date">{{art3Date}}</div></div></div></div></div></div></section>`,
}
