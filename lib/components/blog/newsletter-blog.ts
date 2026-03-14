import type { ComponentVariant } from '../types'
export const blogNewsletterBlog: ComponentVariant = {
  id: 'blog-newsletter', name: 'Blog + Newsletter Signup', section: 'blog' as any,
  description: '2-column blog cards + sidebar newsletter signup — content strategy + email capture combined',
  bestFor: ['saas','education','nonprofit','healthcare'], tags: ['newsletter','sidebar','combined','capture','email','strategy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'articles', type: 'array', description: '4 articles', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'category', type: 'text', maxWords: 2, description: 'Category', required: true },
        { name: 'title', type: 'heading', maxWords: 8, description: 'Title', required: true },
        { name: 'date', type: 'text', maxWords: 3, description: 'Date', required: true },
        { name: 'readTime', type: 'text', maxWords: 2, description: 'Read time', required: false },
      ] },
    { name: 'nlHeading', type: 'heading', maxWords: 5, description: 'Newsletter heading', required: true },
    { name: 'nlDesc', type: 'text', maxWords: 15, description: 'Newsletter description', required: true },
    { name: 'nlPlaceholder', type: 'text', maxWords: 3, description: 'Email placeholder', required: true },
    { name: 'nlBtn', type: 'cta-text', maxWords: 2, description: 'Subscribe button', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'All articles CTA', required: true },
  ],
  css: `/* blog-newsletter */
#blog-nl{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.bnl-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:3rem}
@media(min-width:1024px){.bnl-in{grid-template-columns:1fr 340px;align-items:start}}
.bnl-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.bnl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:2rem}
.bnl-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:2rem}
@media(min-width:640px){.bnl-grid{grid-template-columns:repeat(2,1fr)}}
.bnl-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;overflow:hidden;transition:border-color .3s,box-shadow .3s}
.bnl-card:hover{border-color:{{PRIMARY}};box-shadow:0 8px 24px rgba(0,0,0,.07)}
.bnl-card-img{aspect-ratio:16/9}
.bnl-card:nth-child(1) .bnl-card-img{background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.bnl-card:nth-child(2) .bnl-card-img{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.bnl-card:nth-child(3) .bnl-card-img{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.bnl-card:nth-child(4) .bnl-card-img{background:linear-gradient(135deg,#06b6d4,#0891b2)}
.bnl-card-body{padding:1.25rem}
.bnl-card-cat{font-size:.75rem;font-weight:700;color:{{ACCENT}};margin-bottom:.5rem}
.bnl-card-title{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};line-height:1.3;margin-bottom:.5rem}
.bnl-card-meta{font-size:.75rem;color:{{TEXT_MUTED}}}
.bnl-cta-link{display:inline-flex;align-items:center;gap:6px;font-size:.9375rem;font-weight:700;color:{{PRIMARY}};text-decoration:none}
/* Sidebar newsletter */
.bnl-sidebar{position:sticky;top:2rem}
.bnl-nl-card{background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}});border-radius:20px;padding:2rem;margin-bottom:1.5rem}
.bnl-nl-h{font-family:var(--font-heading);font-size:1.25rem;font-weight:800;color:#fff;margin-bottom:.75rem}
.bnl-nl-d{font-size:.9375rem;color:rgba(255,255,255,.7);line-height:1.65;margin-bottom:1.25rem}
.bnl-nl-form{display:flex;flex-direction:column;gap:.75rem}
.bnl-nl-input{padding:11px 14px;border:1.5px solid rgba(255,255,255,.2);border-radius:10px;background:rgba(255,255,255,.1);color:#fff;font-family:var(--font-body);font-size:.875rem;outline:none}
.bnl-nl-input::placeholder{color:rgba(255,255,255,.5)}
.bnl-nl-input:focus{border-color:rgba(255,255,255,.5)}
.bnl-nl-btn{padding:11px 20px;background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);border-radius:10px;font-weight:700;cursor:pointer;font-family:var(--font-body);transition:all .3s}
.bnl-nl-btn:hover{background:rgba(255,255,255,.25)}`,
  template: `<section id="blog-nl"><div class="bnl-in"><div class="reveal-left"><span class="bnl-ey">{{eyebrow}}</span><h2 class="bnl-h2">{{heading}}</h2><div class="bnl-grid">{{#articles}}<div class="bnl-card"><div class="bnl-card-img"></div><div class="bnl-card-body"><div class="bnl-card-cat">{{.category}}</div><h3 class="bnl-card-title">{{.title}}</h3><div class="bnl-card-meta">{{.date}} · {{.readTime}}</div></div></div>{{/articles}}</div><a href="#" class="bnl-cta-link">{{ctaText}} →</a></div><div class="bnl-sidebar reveal-right"><div class="bnl-nl-card"><h3 class="bnl-nl-h">{{nlHeading}}</h3><p class="bnl-nl-d">{{nlDesc}}</p><form class="bnl-nl-form" onsubmit="return false"><input class="bnl-nl-input" type="email" placeholder="{{nlPlaceholder}}"><button class="bnl-nl-btn">{{nlBtn}}</button></form></div></div></div></section>`,
}
