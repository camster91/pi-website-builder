import type { ComponentVariant } from '../types'
export const blogMinimal: ComponentVariant = {
  id: 'blog-minimal', name: 'Blog Minimal Text List', section: 'blog' as any,
  description: 'Ultra-minimal text-only blog list — no images, all typography, maximum content density',
  bestFor: ['agency','saas','portfolio','education'], tags: ['minimal','text-only','dense','typography','no-images'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'posts', type: 'array', description: '5-7 posts', required: true, minItems: 5, maxItems: 7,
      itemSlots: [
        { name: 'num', type: 'text', maxWords: 1, description: 'Index (01,02...)', required: true },
        { name: 'category', type: 'text', maxWords: 2, description: 'Category', required: true },
        { name: 'title', type: 'heading', maxWords: 9, description: 'Post title', required: true },
        { name: 'date', type: 'text', maxWords: 3, description: 'Date', required: true },
        { name: 'readTime', type: 'text', maxWords: 2, description: 'Read time', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* blog-minimal */
#blog-mn{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.bmn-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.bmn-hd{margin-bottom:3.5rem}
.bmn-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.bmn-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.bmn-list{display:flex;flex-direction:column;margin-bottom:3rem}
.bmn-item{display:grid;grid-template-columns:48px 1fr auto;gap:1.5rem;align-items:center;padding:1.5rem 0;border-bottom:1px solid {{BORDER}};cursor:pointer;transition:all .2s}
.bmn-item:first-child{border-top:1px solid {{BORDER}}}
.bmn-item:hover .bmn-title{color:{{PRIMARY}}}
.bmn-num{font-family:var(--font-heading);font-size:.875rem;font-weight:800;color:{{TEXT_MUTED}};opacity:.4;letter-spacing:.05em}
.bmn-middle{min-width:0}
.bmn-cat{font-size:.75rem;font-weight:700;color:{{PRIMARY}};text-transform:uppercase;letter-spacing:.06em;margin-bottom:.375rem}
.bmn-title{font-family:var(--font-heading);font-size:1.0625rem;font-weight:700;color:{{TEXT}};line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:color .2s}
.bmn-right{text-align:right;flex-shrink:0}
.bmn-date{font-size:.75rem;color:{{TEXT_MUTED}};display:block}
.bmn-rt{font-size:.75rem;color:{{TEXT_MUTED}}}
.bmn-ft{text-align:left}
.bmn-cta{display:inline-flex;align-items:center;gap:6px;font-size:.9375rem;font-weight:700;color:{{PRIMARY}};text-decoration:none}
.bmn-cta:hover{gap:12px}`,
  template: `<section id="blog-mn"><div class="bmn-in"><div class="bmn-hd"><span class="bmn-ey reveal">{{eyebrow}}</span><h2 class="bmn-h2 reveal reveal-d1">{{heading}}</h2></div><div class="bmn-list reveal-stagger">{{#posts}}<div class="bmn-item"><span class="bmn-num">{{.num}}</span><div class="bmn-middle"><div class="bmn-cat">{{.category}}</div><h3 class="bmn-title">{{.title}}</h3></div><div class="bmn-right"><span class="bmn-date">{{.date}}</span><span class="bmn-rt">{{.readTime}}</span></div></div>{{/posts}}</div><div class="bmn-ft reveal"><a href="#" class="bmn-cta">{{ctaText}} →</a></div></div></section>`,
}
