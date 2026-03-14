import type { ComponentVariant } from '../types'
export const pricingTwoTier: ComponentVariant = {
  id: 'pricing-two-tier', name: 'Pricing Two Tier', section: 'pricing',
  description: 'Simple 2-tier pricing: free/starter + paid/pro — clean, clear, conversion optimized',
  bestFor: ['saas','education','fitness'], tags: ['two-tier','simple','free','pro','clean'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'plan1Name', type: 'text', maxWords: 2, description: 'Plan 1 name', required: true },
    { name: 'plan1Price', type: 'text', maxWords: 2, description: 'Plan 1 price', required: true },
    { name: 'plan1Period', type: 'text', maxWords: 2, description: 'Period', required: false },
    { name: 'plan1Desc', type: 'text', maxWords: 10, description: 'Plan 1 description', required: true },
    { name: 'plan1Cta', type: 'cta-text', maxWords: 3, description: 'Plan 1 CTA', required: true },
    { name: 'plan2Name', type: 'text', maxWords: 2, description: 'Plan 2 name', required: true },
    { name: 'plan2Price', type: 'text', maxWords: 2, description: 'Plan 2 price', required: true },
    { name: 'plan2Period', type: 'text', maxWords: 2, description: 'Period', required: false },
    { name: 'plan2Desc', type: 'text', maxWords: 10, description: 'Plan 2 description', required: true },
    { name: 'plan2Cta', type: 'cta-text', maxWords: 3, description: 'Plan 2 CTA', required: true },
    { name: 'features', type: 'array', description: '6 features compared', required: true, minItems: 6, maxItems: 8,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 5, description: 'Feature', required: true },
        { name: 'f1', type: 'text', maxWords: 2, description: 'Plan 1 value', required: true },
        { name: 'f2', type: 'text', maxWords: 2, description: 'Plan 2 value', required: true },
      ] },
  ],
  css: `/* pricing-two-tier */
#pricing-2t{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.p2t-in{max-width:860px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.p2t-hd{text-align:center;margin-bottom:3.5rem}
.p2t-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.p2t-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.p2t-cards{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-bottom:2.5rem}
@media(min-width:640px){.p2t-cards{grid-template-columns:repeat(2,1fr)}}
.p2t-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:24px;padding:2rem}
.p2t-card.featured{border-color:{{PRIMARY}};box-shadow:0 0 0 4px rgba(99,102,241,.1)}
.p2t-name{font-family:var(--font-heading);font-size:.875rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:{{TEXT_MUTED}};margin-bottom:1rem}
.p2t-card.featured .p2t-name{color:{{PRIMARY}}}
.p2t-price-row{display:flex;align-items:baseline;gap:.375rem;margin-bottom:.5rem}
.p2t-price{font-family:var(--font-heading);font-size:3rem;font-weight:900;letter-spacing:-.05em;color:{{TEXT}}}
.p2t-period{font-size:.875rem;color:{{TEXT_MUTED}}}
.p2t-desc{font-size:.9375rem;color:{{TEXT_SEC}};margin-bottom:1.5rem}
.p2t-btn{display:block;width:100%;padding:12px 20px;border-radius:12px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);transition:all .3s}
.p2t-card.featured .p2t-btn{background:{{PRIMARY}};color:#fff;border:none;cursor:pointer}
.p2t-card.featured .p2t-btn:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.p2t-card:not(.featured) .p2t-btn{border:2px solid {{BORDER}};color:{{TEXT}};background:{{BG}};cursor:pointer}
.p2t-card:not(.featured) .p2t-btn:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}
/* Feature comparison */
.p2t-table{width:100%;border-collapse:collapse;background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;overflow:hidden}
.p2t-th{padding:1rem 1.25rem;text-align:left;font-size:.8125rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:{{TEXT_MUTED}};border-bottom:1px solid {{BORDER}}}
.p2t-th:last-child,.p2t-td:last-child{text-align:center}
.p2t-th:nth-child(2),.p2t-td:nth-child(2){text-align:center}
.p2t-tr td{padding:.875rem 1.25rem;border-bottom:1px solid {{BORDER}};font-size:.9375rem;color:{{TEXT_SEC}}}
.p2t-tr:last-child td{border-bottom:none}
.p2t-fn{font-weight:500;color:{{TEXT}}}
.p2t-check{color:#22c55e;display:flex;justify-content:center}.p2t-check svg{width:18px;height:18px}
.p2t-x{color:{{TEXT_MUTED}};opacity:.35;display:flex;justify-content:center}.p2t-x svg{width:16px;height:16px}`,
  template: `<section id="pricing-2t"><div class="p2t-in"><div class="p2t-hd"><span class="p2t-ey reveal">{{eyebrow}}</span><h2 class="p2t-h2 reveal reveal-d1">{{heading}}</h2></div><div class="p2t-cards reveal"><div class="p2t-card"><div class="p2t-name">{{plan1Name}}</div><div class="p2t-price-row"><span class="p2t-price">{{plan1Price}}</span><span class="p2t-period">{{plan1Period}}</span></div><p class="p2t-desc">{{plan1Desc}}</p><a href="#contact" class="p2t-btn">{{plan1Cta}}</a></div><div class="p2t-card featured"><div class="p2t-name">{{plan2Name}}</div><div class="p2t-price-row"><span class="p2t-price">{{plan2Price}}</span><span class="p2t-period">{{plan2Period}}</span></div><p class="p2t-desc">{{plan2Desc}}</p><a href="#contact" class="p2t-btn">{{plan2Cta}}</a></div></div><table class="p2t-table reveal"><thead><tr><th class="p2t-th">Feature</th><th class="p2t-th">{{plan1Name}}</th><th class="p2t-th">{{plan2Name}}</th></tr></thead><tbody>{{#features}}<tr class="p2t-tr"><td class="p2t-fn">{{.name}}</td><td>{{.f1}}</td><td>{{.f2}}</td></tr>{{/features}}</tbody></table></div></section>`,
}
