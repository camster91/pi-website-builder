import type { ComponentVariant } from '../types'
export const pricingValueComparison: ComponentVariant = {
  id: 'pricing-value', name: 'Pricing Value Comparison', section: 'pricing',
  description: '"What you get vs what you pay" — value stacking layout showing total value vs your price (classic offer stack)',
  bestFor: ['fitness','beauty','ecommerce','education','local-service'], tags: ['value-stack','offer','comparison','worth','roi','conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'totalValue', type: 'text', maxWords: 2, description: 'Total value (e.g. $2,400)', required: true },
    { name: 'yourPrice', type: 'text', maxWords: 2, description: 'Your price (e.g. $297)', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
    { name: 'note', type: 'text', maxWords: 10, description: 'Urgency/guarantee note', required: false },
    { name: 'items', type: 'array', description: '5-6 value items', required: true, minItems: 5, maxItems: 7,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 5, description: 'Item name', required: true },
        { name: 'value', type: 'text', maxWords: 2, description: 'Individual value', required: true },
        { name: 'desc', type: 'text', maxWords: 10, description: 'Short description', required: false },
      ] },
  ],
  css: `/* pricing-value */
#pricing-vl{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.pvl-in{max-width:740px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pvl-hd{text-align:center;margin-bottom:3.5rem}
.pvl-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pvl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pvl-h2 .accent-word{color:{{ACCENT}}}
.pvl-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:24px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.08)}
/* Items list */
.pvl-items{padding:0}
.pvl-item{display:flex;align-items:center;justify-content:space-between;padding:1.25rem 2rem;border-bottom:1px solid {{BORDER}};gap:1rem}
.pvl-iname{font-weight:600;font-size:.9375rem;color:{{TEXT}};flex:1}
.pvl-idesc{font-size:.8125rem;color:{{TEXT_MUTED}};margin-top:2px}
.pvl-ival{font-family:var(--font-heading);font-size:1rem;font-weight:800;color:{{TEXT_MUTED}};text-decoration:line-through;opacity:.5}
/* Total row */
.pvl-total{display:flex;align-items:center;justify-content:space-between;padding:1.5rem 2rem;background:{{BG_SECTION}};border-bottom:1px solid {{BORDER}}}
.pvl-total-label{font-size:.875rem;font-weight:700;color:{{TEXT_MUTED}};text-transform:uppercase;letter-spacing:.06em}
.pvl-total-val{font-family:var(--font-heading);font-size:1.5rem;font-weight:900;color:{{TEXT_MUTED}};text-decoration:line-through;opacity:.5}
/* Your price row */
.pvl-your{display:flex;align-items:center;justify-content:space-between;padding:2rem;background:{{PRIMARY}};gap:1.5rem;flex-wrap:wrap}
.pvl-your-left h3{font-family:var(--font-heading);font-size:1.125rem;font-weight:700;color:#fff;margin-bottom:.25rem}
.pvl-your-left p{font-size:.875rem;color:rgba(255,255,255,.65)}
.pvl-price{font-family:var(--font-heading);font-size:3rem;font-weight:900;letter-spacing:-.05em;color:#fff;line-height:1}
.pvl-btn{display:block;padding:14px 28px;background:#fff;color:{{PRIMARY}};border-radius:12px;font-weight:800;text-decoration:none;white-space:nowrap;transition:all .3s;text-align:center;font-family:var(--font-body)}
.pvl-btn:hover{transform:scale(1.04);box-shadow:0 8px 24px rgba(0,0,0,.2)}
.pvl-note{text-align:center;font-size:.8125rem;color:rgba(255,255,255,.55);margin-top:.875rem;padding:0 2rem 1.5rem}`,
  template: `<section id="pricing-vl"><div class="pvl-in"><div class="pvl-hd"><span class="pvl-ey reveal">{{eyebrow}}</span><h2 class="pvl-h2 reveal reveal-d1">{{heading}}</h2></div><div class="pvl-card reveal">{{#items}}<div class="pvl-item"><div><div class="pvl-iname">{{.name}}</div><div class="pvl-idesc">{{.desc}}</div></div><div class="pvl-ival">{{.value}}</div></div>{{/items}}<div class="pvl-total"><span class="pvl-total-label">Total Value</span><span class="pvl-total-val">{{totalValue}}</span></div><div class="pvl-your"><div class="pvl-your-left"><h3>Your Investment</h3><p>Everything above included</p></div><div class="pvl-price">{{yourPrice}}</div><a href="#contact" class="pvl-btn">{{ctaText}}</a></div><p class="pvl-note">{{note}}</p></div></div></section>`,
}
