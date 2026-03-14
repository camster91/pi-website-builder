import type { ComponentVariant } from '../types'
export const servicesFeaturedService: ComponentVariant = {
  id: 'services-featured', name: 'Services Featured + Grid', section: 'services' as any,
  description: 'One large featured service card on left + smaller 4-service grid on right — hierarchy and depth',
  bestFor: ['agency','healthcare','beauty','fitness','real-estate'], tags: ['featured','hierarchy','split','hero-service','depth'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'featEmoji', type: 'text', maxWords: 1, description: 'Featured service emoji', required: true },
    { name: 'featTitle', type: 'heading', maxWords: 4, description: 'Featured service title', required: true },
    { name: 'featDesc', type: 'text', maxWords: 30, description: 'Featured description', required: true },
    { name: 'featPrice', type: 'text', maxWords: 3, description: 'Featured price', required: false },
    { name: 'featCta', type: 'cta-text', maxWords: 3, description: 'Featured CTA', required: true },
    { name: 'services', type: 'array', description: '4 other services', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Emoji', required: true },
        { name: 'title', type: 'text', maxWords: 3, description: 'Service name', required: true },
        { name: 'desc', type: 'text', maxWords: 12, description: 'Brief description', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: false },
      ] },
  ],
  css: `/* services-featured */
#services-ft{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.sft-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.sft-hd{max-width:680px;margin:0 auto 3.5rem;text-align:center}
.sft-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.sft-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.sft-layout{display:grid;grid-template-columns:1fr;gap:1.25rem}
@media(min-width:1024px){.sft-layout{grid-template-columns:1fr 1fr;align-items:start}}
.sft-feat{background:{{PRIMARY}};border-radius:24px;padding:2.5rem;display:flex;flex-direction:column;height:100%}
.sft-feat-icon{font-size:3rem;display:block;margin-bottom:1.5rem}
.sft-feat-title{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:#fff;margin-bottom:1rem}
.sft-feat-desc{font-size:1rem;color:rgba(255,255,255,.7);line-height:1.75;margin-bottom:1.5rem;flex:1}
.sft-feat-price{font-size:.9375rem;font-weight:700;color:rgba(255,255,255,.65);margin-bottom:1.5rem}
.sft-feat-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:rgba(255,255,255,.15);color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s;border:1px solid rgba(255,255,255,.25)}
.sft-feat-cta:hover{background:rgba(255,255,255,.25)}
.sft-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}
.sft-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:1.5rem;transition:border-color .3s,box-shadow .3s}
.sft-card:hover{border-color:{{PRIMARY}};box-shadow:0 8px 24px rgba(0,0,0,.07)}
.sft-card-icon{font-size:1.75rem;display:block;margin-bottom:.875rem}
.sft-card-title{font-family:var(--font-heading);font-size:.9375rem;font-weight:700;color:{{TEXT}};margin-bottom:.375rem}
.sft-card-desc{font-size:.8125rem;color:{{TEXT_SEC}};line-height:1.6;margin-bottom:.625rem}
.sft-card-price{font-size:.8125rem;font-weight:700;color:{{PRIMARY}}}`,
  template: `<section id="services-ft"><div class="sft-in"><div class="sft-hd"><span class="sft-ey reveal">{{eyebrow}}</span><h2 class="sft-h2 reveal reveal-d1">{{heading}}</h2></div><div class="sft-layout reveal"><div class="sft-feat"><span class="sft-feat-icon">{{featEmoji}}</span><h3 class="sft-feat-title">{{featTitle}}</h3><p class="sft-feat-desc">{{featDesc}}</p><p class="sft-feat-price">{{featPrice}}</p><a href="#contact" class="sft-feat-cta">{{featCta}} →</a></div><div class="sft-grid">{{#services}}<div class="sft-card"><span class="sft-card-icon">{{.emoji}}</span><div class="sft-card-title">{{.title}}</div><div class="sft-card-desc">{{.desc}}</div><div class="sft-card-price">{{.price}}</div></div>{{/services}}</div></div></div></section>`,
}
