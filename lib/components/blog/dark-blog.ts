import type { ComponentVariant } from '../types'
export const blogDark: ComponentVariant = {
  id: 'blog-dark', name: 'Blog Dark Theme', section: 'blog' as any,
  description: 'Dark background blog cards with neon category pills — tech, SaaS, agency editorial style',
  bestFor: ['saas','agency','portfolio'], tags: ['dark','neon','tech','editorial','minimal','premium'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'articles', type: 'array', description: '3 articles', required: true, minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'category', type: 'text', maxWords: 2, description: 'Category', required: true },
        { name: 'title', type: 'heading', maxWords: 9, description: 'Title', required: true },
        { name: 'excerpt', type: 'text', maxWords: 25, description: 'Excerpt', required: true },
        { name: 'date', type: 'text', maxWords: 3, description: 'Date', required: true },
        { name: 'readTime', type: 'text', maxWords: 2, description: 'Read time', required: false },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Author initials', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: false },
  ],
  css: `/* blog-dark */
#blog-dk{background:#080c14;padding:clamp(4rem,8vw,7rem) 0}
.bdk-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.bdk-hd{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.bdk-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.bdk-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff}
.bdk-h2 .accent-word{color:{{PRIMARY}}}
.bdk-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:2.5rem}
@media(min-width:768px){.bdk-grid{grid-template-columns:repeat(3,1fr)}}
.bdk-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:20px;overflow:hidden;transition:border-color .3s,background .3s}
.bdk-card:hover{border-color:rgba(99,102,241,.4);background:rgba(255,255,255,.04)}
.bdk-img{aspect-ratio:16/9;overflow:hidden}
.bdk-card:nth-child(1) .bdk-img{background:linear-gradient(135deg,#1e1b4b,{{PRIMARY}})}
.bdk-card:nth-child(2) .bdk-img{background:linear-gradient(135deg,#064e3b,#059669)}
.bdk-card:nth-child(3) .bdk-img{background:linear-gradient(135deg,#4c0519,#e11d48)}
.bdk-img img{width:100%;height:100%;object-fit:cover;display:block;opacity:.6;transition:opacity .3s,transform .5s}
.bdk-card:hover .bdk-img img{opacity:.8;transform:scale(1.04)}
.bdk-body{padding:1.5rem}
.bdk-cat{font-size:.75rem;font-weight:700;color:{{PRIMARY}};background:rgba(99,102,241,.15);padding:3px 12px;border-radius:999px;display:inline-block;margin-bottom:.875rem}
.bdk-title{font-family:var(--font-heading);font-size:1.0625rem;font-weight:700;color:#fff;line-height:1.3;margin-bottom:.75rem}
.bdk-excerpt{font-size:.875rem;color:rgba(255,255,255,.4);line-height:1.65;margin-bottom:1.25rem}
.bdk-meta{display:flex;align-items:center;gap:.75rem;padding-top:1rem;border-top:1px solid rgba(255,255,255,.06)}
.bdk-av{width:28px;height:28px;border-radius:50%;background:rgba(99,102,241,.2);color:{{PRIMARY}};display:flex;align-items:center;justify-content:center;font-size:.6875rem;font-weight:800;flex-shrink:0}
.bdk-date{font-size:.75rem;color:rgba(255,255,255,.3)}
.bdk-sep{width:3px;height:3px;border-radius:50%;background:rgba(255,255,255,.2)}
.bdk-rt{font-size:.75rem;color:rgba(255,255,255,.3)}
.bdk-ft{text-align:center}
.bdk-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6);border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.bdk-cta:hover{border-color:rgba(255,255,255,.4);color:#fff}`,
  template: `<section id="blog-dk"><div class="bdk-in"><div class="bdk-hd"><span class="bdk-ey reveal">{{eyebrow}}</span><h2 class="bdk-h2 reveal reveal-d1">{{heading}}</h2></div><div class="bdk-grid reveal-stagger">{{#articles}}<div class="bdk-card"><div class="bdk-img"><img src="{{SERVICE_IMAGE_0}}" alt="{{.title}}" loading="lazy"></div><div class="bdk-body"><span class="bdk-cat">{{.category}}</span><h3 class="bdk-title">{{.title}}</h3><p class="bdk-excerpt">{{.excerpt}}</p><div class="bdk-meta"><div class="bdk-av">{{.initials}}</div><span class="bdk-date">{{.date}}</span><span class="bdk-sep"></span><span class="bdk-rt">{{.readTime}}</span></div></div></div>{{/articles}}</div><div class="bdk-ft reveal"><a href="#" class="bdk-cta">{{ctaText}} →</a></div></div></section>`,
}
