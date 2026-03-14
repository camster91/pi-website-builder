import type { ComponentVariant } from '../types'
export const servicesDarkCards: ComponentVariant = {
  id: 'services-dark', name: 'Services Dark Premium Cards', section: 'services' as any,
  description: 'Dark background service cards with gradient accents — premium agencies, upscale service businesses',
  bestFor: ['agency','fitness','beauty','real-estate'], tags: ['dark','premium','gradient','cards','upscale'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading (on dark)', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'services', type: 'array', description: '4 services', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Service emoji', required: true },
        { name: 'title', type: 'heading', maxWords: 3, description: 'Service name', required: true },
        { name: 'desc', type: 'text', maxWords: 18, description: 'Description', required: true },
        { name: 'price', type: 'text', maxWords: 3, description: 'Price/starting from', required: false },
        { name: 'cta', type: 'cta-text', maxWords: 3, description: 'Card CTA', required: false },
      ] },
  ],
  css: `/* services-dark */
#services-dk{background:#0a0f1e;padding:clamp(4rem,8vw,7rem) 0;position:relative;overflow:hidden}
.sdk-glow{position:absolute;width:600px;height:600px;border-radius:50%;background:{{PRIMARY}};opacity:.05;filter:blur(120px);top:-200px;right:-200px;pointer-events:none}
.sdk-in{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.sdk-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.sdk-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.sdk-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff;margin-bottom:1rem}
.sdk-sub{font-size:1.0625rem;color:rgba(255,255,255,.4);line-height:1.7}
.sdk-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
@media(max-width:640px){.sdk-grid{grid-template-columns:1fr}}
.sdk-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem;transition:background .3s,border-color .3s}
.sdk-card:hover{background:rgba(255,255,255,.05);border-color:rgba(99,102,241,.4)}
.sdk-icon{font-size:2rem;display:block;margin-bottom:1.25rem}
.sdk-title{font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:#fff;margin-bottom:.625rem}
.sdk-desc{font-size:.9375rem;color:rgba(255,255,255,.45);line-height:1.7;margin-bottom:1.25rem}
.sdk-footer{display:flex;align-items:center;justify-content:space-between;gap:1rem}
.sdk-price{font-size:.875rem;font-weight:700;color:{{ACCENT}}}
.sdk-cta{font-size:.875rem;font-weight:700;color:rgba(255,255,255,.5);text-decoration:none;transition:color .2s}
.sdk-cta:hover{color:#fff}`,
  template: `<section id="services-dk"><div class="sdk-glow"></div><div class="sdk-in"><div class="sdk-hd"><span class="sdk-ey reveal">{{eyebrow}}</span><h2 class="sdk-h2 reveal reveal-d1">{{heading}}</h2><p class="sdk-sub reveal reveal-d2">{{subtext}}</p></div><div class="sdk-grid reveal-stagger">{{#services}}<div class="sdk-card"><span class="sdk-icon">{{.emoji}}</span><h3 class="sdk-title">{{.title}}</h3><p class="sdk-desc">{{.desc}}</p><div class="sdk-footer"><span class="sdk-price">{{.price}}</span><a href="#contact" class="sdk-cta">{{.cta}} →</a></div></div>{{/services}}</div></div></section>`,
}
