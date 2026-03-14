import type { ComponentVariant } from '../types'
export const servicesListStyle: ComponentVariant = {
  id: 'services-list', name: 'Services Bullet List', section: 'services' as any,
  description: 'Simple bullet list of services with icon, title, description, and price tag — clear and scannable',
  bestFor: ['local-service','healthcare','beauty','fitness','real-estate'], tags: ['list','bullet','simple','scannable','price','local'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'services', type: 'array', description: '6 services', required: true, minItems: 5, maxItems: 8,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Service emoji', required: true },
        { name: 'title', type: 'heading', maxWords: 4, description: 'Service name', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Description', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price/range', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* services-list */
#services-ls{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.sls-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem}
@media(min-width:1024px){.sls-in{grid-template-columns:1fr 2fr;align-items:start}}
.sls-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.sls-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:2rem}
.sls-h2 .accent-word{color:{{ACCENT}}}
.sls-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.sls-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.sls-list{display:flex;flex-direction:column;gap:0}
.sls-item{display:flex;align-items:flex-start;gap:1.25rem;padding:1.5rem 0;border-bottom:1px solid {{BORDER}}}
.sls-item:first-child{border-top:1px solid {{BORDER}}}
.sls-icon{width:44px;height:44px;border-radius:12px;background:{{BG_SECTION}};display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0}
.sls-content{flex:1}
.sls-title-row{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:.375rem}
.sls-title{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}}}
.sls-price{font-size:.875rem;font-weight:700;color:{{PRIMARY}}}
.sls-desc{font-size:.875rem;color:{{TEXT_SEC}};line-height:1.6}`,
  template: `<section id="services-ls"><div class="sls-in"><div class="reveal-left"><span class="sls-ey">{{eyebrow}}</span><h2 class="sls-h2">{{heading}}</h2><a href="#contact" class="sls-cta">{{ctaText}} →</a></div><div class="sls-list reveal-stagger">{{#services}}<div class="sls-item"><div class="sls-icon">{{.emoji}}</div><div class="sls-content"><div class="sls-title-row"><span class="sls-title">{{.title}}</span><span class="sls-price">{{.price}}</span></div><p class="sls-desc">{{.desc}}</p></div></div>{{/services}}</div></div></section>`,
}
