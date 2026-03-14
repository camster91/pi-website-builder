import type { ComponentVariant } from '../types'
export const blogListView: ComponentVariant = {
  id: 'blog-list', name: 'Blog List View', section: 'blog' as any,
  description: 'Horizontal list of blog posts with small thumbnail — dense, scannable, content-first',
  bestFor: ['saas','healthcare','education','nonprofit'], tags: ['list','horizontal','dense','scannable','content-heavy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'posts', type: 'array', description: '5 blog posts', required: true, minItems: 5, maxItems: 7,
      itemSlots: [
        { name: 'category', type: 'text', maxWords: 2, description: 'Category', required: true },
        { name: 'title', type: 'heading', maxWords: 9, description: 'Post title', required: true },
        { name: 'excerpt', type: 'text', maxWords: 20, description: 'Short excerpt', required: true },
        { name: 'date', type: 'text', maxWords: 3, description: 'Date', required: true },
        { name: 'readTime', type: 'text', maxWords: 2, description: 'Read time', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* blog-list */
#blog-lv{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.blv-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.blv-hd{margin-bottom:3rem}
.blv-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.blv-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.blv-list{display:flex;flex-direction:column;gap:0;margin-bottom:2.5rem}
.blv-item{display:flex;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid {{BORDER}};align-items:flex-start}
.blv-item:first-child{border-top:1px solid {{BORDER}}}
.blv-thumb{width:80px;height:80px;border-radius:12px;flex-shrink:0;overflow:hidden}
.blv-item:nth-child(odd) .blv-thumb{background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.blv-item:nth-child(even) .blv-thumb{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.blv-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.blv-content{flex:1;min-width:0}
.blv-cat{font-size:.75rem;font-weight:700;color:{{PRIMARY}};margin-bottom:.375rem}
.blv-title{font-family:var(--font-heading);font-size:1.0625rem;font-weight:700;color:{{TEXT}};line-height:1.3;margin-bottom:.375rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.blv-excerpt{font-size:.875rem;color:{{TEXT_SEC}};line-height:1.6;margin-bottom:.5rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.blv-meta{display:flex;align-items:center;gap:.75rem;font-size:.75rem;color:{{TEXT_MUTED}}}
.blv-meta-sep{width:3px;height:3px;border-radius:50%;background:{{TEXT_MUTED}}}
.blv-ft{text-align:center}
.blv-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.blv-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="blog-lv"><div class="blv-in"><div class="blv-hd"><span class="blv-ey reveal">{{eyebrow}}</span><h2 class="blv-h2 reveal reveal-d1">{{heading}}</h2></div><div class="blv-list reveal-stagger">{{#posts}}<div class="blv-item"><div class="blv-thumb"><img src="{{HERO_IMAGE}}" alt="{{.title}}" loading="lazy"></div><div class="blv-content"><div class="blv-cat">{{.category}}</div><h3 class="blv-title">{{.title}}</h3><p class="blv-excerpt">{{.excerpt}}</p><div class="blv-meta"><span>{{.date}}</span><span class="blv-meta-sep"></span><span>{{.readTime}}</span></div></div></div>{{/posts}}</div><div class="blv-ft reveal"><a href="#" class="blv-cta">{{ctaText}} →</a></div></div></section>`,
}
