import type { ComponentVariant } from '../types'
export const servicesMiniIcons: ComponentVariant = {
  id: 'services-mini', name: 'Services Mini Icon Strip', section: 'services' as any,
  description: 'Compact horizontal icon strip of services — fits many services, great above-the-fold insert',
  bestFor: ['local-service','healthcare','beauty','restaurant','fitness'], tags: ['compact','mini','strip','icons','horizontal','many-services'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 5, description: 'Heading', required: false },
    { name: 'services', type: 'array', description: '6-8 services', required: true, minItems: 6, maxItems: 8,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Emoji icon', required: true },
        { name: 'title', type: 'text', maxWords: 3, description: 'Service name', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price tag', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'CTA', required: true },
  ],
  css: `/* services-mini */
#services-mn{background:{{BG_SECTION}};padding:clamp(3rem,6vw,5rem) 0;border-top:1px solid {{BORDER}};border-bottom:1px solid {{BORDER}}}
.smn-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.smn-h2{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;letter-spacing:-.03em;color:{{TEXT}};text-align:center;margin-bottom:2rem}
.smn-row{display:flex;flex-wrap:wrap;justify-content:center;gap:.75rem;margin-bottom:2rem}
.smn-item{display:flex;align-items:center;gap:.625rem;padding:.75rem 1.25rem;background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:12px;transition:all .2s}
.smn-item:hover{border-color:{{PRIMARY}};box-shadow:0 4px 12px rgba(0,0,0,.06)}
.smn-emoji{font-size:1.25rem;flex-shrink:0}
.smn-name{font-size:.875rem;font-weight:700;color:{{TEXT}}}
.smn-price{font-size:.75rem;color:{{PRIMARY}};font-weight:700;margin-left:.25rem}
.smn-ft{text-align:center}
.smn-cta{display:inline-flex;align-items:center;gap:8px;padding:11px 24px;background:{{PRIMARY}};color:#fff;border-radius:10px;font-weight:700;text-decoration:none;transition:all .3s}
.smn-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="services-mn"><div class="smn-in"><h2 class="smn-h2 reveal">{{heading}}</h2><div class="smn-row reveal-stagger">{{#services}}<div class="smn-item"><span class="smn-emoji">{{.emoji}}</span><span class="smn-name">{{.title}}</span><span class="smn-price">{{.price}}</span></div>{{/services}}</div><div class="smn-ft reveal"><a href="#contact" class="smn-cta">{{ctaText}} →</a></div></div></section>`,
}
