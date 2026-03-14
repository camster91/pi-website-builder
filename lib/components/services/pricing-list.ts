import type { ComponentVariant } from '../types'
export const servicesPricingList: ComponentVariant = {
  id: 'services-pricing-list', name: 'Services Pricing List', section: 'services' as any,
  description: 'Menu-style pricing list with service name + price in columns — restaurants, spas, salons, studios',
  bestFor: ['restaurant','beauty','fitness','local-service'], tags: ['menu','pricing','list','transparent','spa','salon'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'cat1Title', type: 'text', maxWords: 3, description: 'Category 1 title', required: true },
    { name: 'cat2Title', type: 'text', maxWords: 3, description: 'Category 2 title', required: true },
    { name: 'cat1Items', type: 'array', description: '4 items in cat 1', required: true, minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 4, description: 'Item name', required: true },
        { name: 'desc', type: 'text', maxWords: 8, description: 'Brief desc', required: false },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: true },
      ] },
    { name: 'cat2Items', type: 'array', description: '4 items in cat 2', required: true, minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 4, description: 'Item name', required: true },
        { name: 'desc', type: 'text', maxWords: 8, description: 'Brief desc', required: false },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* services-pricing-list */
#services-pl{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.spl-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.spl-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.spl-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.spl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.spl-h2 .accent-word{color:{{ACCENT}}}
.spl-cols{display:grid;grid-template-columns:1fr;gap:3rem;margin-bottom:3rem}
@media(min-width:768px){.spl-cols{grid-template-columns:repeat(2,1fr)}}
.spl-cat-title{font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:{{TEXT}};margin-bottom:1.5rem;padding-bottom:.75rem;border-bottom:2px solid {{PRIMARY}}}
.spl-item{display:flex;align-items:baseline;gap:1rem;padding:.875rem 0;border-bottom:1px solid {{BORDER}}}
.spl-item:last-child{border-bottom:none}
.spl-name{font-weight:600;font-size:.9375rem;color:{{TEXT}};flex:1}
.spl-dots{flex:1;border-bottom:1px dotted {{BORDER}};margin:0 .5rem;min-width:20px}
.spl-price{font-weight:800;font-size:1rem;color:{{PRIMARY}};white-space:nowrap}
.spl-desc{font-size:.8125rem;color:{{TEXT_MUTED}};width:100%;margin-top:.25rem}
.spl-ft{text-align:center}
.spl-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.spl-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="services-pl"><div class="spl-in"><div class="spl-hd"><span class="spl-ey reveal">{{eyebrow}}</span><h2 class="spl-h2 reveal reveal-d1">{{heading}}</h2></div><div class="spl-cols reveal"><div><h3 class="spl-cat-title">{{cat1Title}}</h3>{{#cat1Items}}<div class="spl-item"><div style="flex:1"><div class="spl-name">{{.name}}</div><div class="spl-desc">{{.desc}}</div></div><div class="spl-price">{{.price}}</div></div>{{/cat1Items}}</div><div><h3 class="spl-cat-title">{{cat2Title}}</h3>{{#cat2Items}}<div class="spl-item"><div style="flex:1"><div class="spl-name">{{.name}}</div><div class="spl-desc">{{.desc}}</div></div><div class="spl-price">{{.price}}</div></div>{{/cat2Items}}</div></div><div class="spl-ft reveal"><a href="#contact" class="spl-cta">{{ctaText}} →</a></div></div></section>`,
}
