import type { ComponentVariant } from '../types'
export const pricingFreemium: ComponentVariant = {
  id: 'pricing-freemium', name: 'Pricing Freemium Model', section: 'pricing',
  description: 'Free forever + Pro + Enterprise freemium tiers with detailed feature matrix rows',
  bestFor: ['saas','education','nonprofit'], tags: ['freemium','free','enterprise','matrix','B2B'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'freeName', type: 'text', maxWords: 2, description: 'Free tier name', required: true },
    { name: 'proName', type: 'text', maxWords: 2, description: 'Pro tier name', required: true },
    { name: 'proPrice', type: 'text', maxWords: 2, description: 'Pro price', required: true },
    { name: 'properiod', type: 'text', maxWords: 2, description: 'Pro period', required: false },
    { name: 'entName', type: 'text', maxWords: 2, description: 'Enterprise name', required: true },
    { name: 'freeCta', type: 'cta-text', maxWords: 3, description: 'Free CTA', required: true },
    { name: 'proCta', type: 'cta-text', maxWords: 3, description: 'Pro CTA', required: true },
    { name: 'entCta', type: 'cta-text', maxWords: 3, description: 'Enterprise CTA', required: true },
    { name: 'rows', type: 'array', description: '6 feature rows', required: true, minItems: 6, maxItems: 8,
      itemSlots: [
        { name: 'feature', type: 'text', maxWords: 5, description: 'Feature name', required: true },
        { name: 'free', type: 'text', maxWords: 3, description: 'Free value', required: true },
        { name: 'pro', type: 'text', maxWords: 3, description: 'Pro value', required: true },
        { name: 'ent', type: 'text', maxWords: 3, description: 'Enterprise value', required: true },
      ] },
  ],
  css: `/* pricing-freemium */
#pricing-fm{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.pfm-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pfm-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.pfm-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pfm-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.pfm-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.pfm-wrap{overflow-x:auto;border-radius:20px;border:1px solid {{BORDER}};box-shadow:0 8px 32px rgba(0,0,0,.06)}
.pfm-table{width:100%;border-collapse:collapse;min-width:560px}
.pfm-thead th{padding:2rem 1.5rem;border-bottom:1px solid {{BORDER}};text-align:center;background:{{BG_CARD}}}
.pfm-thead th:first-child{text-align:left}
.pfm-tname{font-family:var(--font-heading);font-size:1.0625rem;font-weight:700;color:{{TEXT}};display:block;margin-bottom:.25rem}
.pfm-tprice{font-family:var(--font-heading);font-size:1.5rem;font-weight:900;letter-spacing:-.04em;color:{{PRIMARY}};display:block;margin-bottom:.5rem}
.pfm-thead th:nth-child(3){background:rgba(99,102,241,.04)}
.pfm-btn{display:block;padding:10px 20px;border-radius:10px;font-weight:700;text-decoration:none;font-family:var(--font-body);transition:all .3s;font-size:.875rem}
.pfm-btn-free{border:1.5px solid {{BORDER}};color:{{TEXT}};background:{{BG}}}
.pfm-btn-free:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}
.pfm-btn-pro{background:{{PRIMARY}};color:#fff}
.pfm-btn-pro:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.pfm-btn-ent{border:1.5px solid {{BORDER}};color:{{TEXT}};background:{{BG}}}
.pfm-btn-ent:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}
.pfm-tr td{padding:.875rem 1.5rem;border-bottom:1px solid {{BORDER}};font-size:.875rem;text-align:center;color:{{TEXT_SEC}}}
.pfm-tr:last-child td{border-bottom:none}
.pfm-fn{text-align:left!important;font-weight:600;color:{{TEXT}}}
.pfm-tr td:nth-child(3){background:rgba(99,102,241,.03)}
.pfm-yes{color:#22c55e;display:flex;justify-content:center}.pfm-yes svg{width:17px;height:17px}
.pfm-no{color:{{TEXT_MUTED}};opacity:.3;display:flex;justify-content:center}.pfm-no svg{width:15px;height:15px}`,
  template: `<section id="pricing-fm"><div class="pfm-in"><div class="pfm-hd"><span class="pfm-ey reveal">{{eyebrow}}</span><h2 class="pfm-h2 reveal reveal-d1">{{heading}}</h2><p class="pfm-sub reveal reveal-d2">{{subtext}}</p></div><div class="pfm-wrap reveal"><table class="pfm-table"><thead class="pfm-thead"><tr><th></th><th><span class="pfm-tname">{{freeName}}</span><span class="pfm-tprice">Free</span><a href="#" class="pfm-btn pfm-btn-free">{{freeCta}}</a></th><th><span class="pfm-tname">{{proName}}</span><span class="pfm-tprice">{{proPrice}}</span><a href="#contact" class="pfm-btn pfm-btn-pro">{{proCta}}</a></th><th><span class="pfm-tname">{{entName}}</span><span class="pfm-tprice">Custom</span><a href="#contact" class="pfm-btn pfm-btn-ent">{{entCta}}</a></th></tr></thead><tbody>{{#rows}}<tr class="pfm-tr"><td class="pfm-fn">{{.feature}}</td><td>{{.free}}</td><td>{{.pro}}</td><td>{{.ent}}</td></tr>{{/rows}}</tbody></table></div></div></section>`,
}
