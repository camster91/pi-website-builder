import type { ComponentVariant } from '../types'
export const pricingUsageBased: ComponentVariant = {
  id: 'pricing-usage', name: 'Pricing Usage Based', section: 'pricing',
  description: 'Tiered usage-based pricing with included credits/units per tier — API products, credits, token-based',
  bestFor: ['saas'], tags: ['usage-based','credits','api','tiers','consumption','pay-as-you-go'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'unitName', type: 'text', maxWords: 2, description: 'Unit name (e.g. credits, tokens)', required: true },
    { name: 'tiers', type: 'array', description: '4 usage tiers', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 2, description: 'Tier name', required: true },
        { name: 'units', type: 'text', maxWords: 3, description: 'Units included', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: true },
        { name: 'overage', type: 'text', maxWords: 5, description: 'Overage cost', required: false },
        { name: 'bestFor', type: 'text', maxWords: 8, description: 'Best for description', required: true },
        { name: 'featured', type: 'text', maxWords: 1, description: 'true or false', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
    { name: 'footnote', type: 'text', maxWords: 15, description: 'Pricing footnote', required: false },
  ],
  css: `/* pricing-usage */
#pricing-ub{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.pub-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pub-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.pub-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pub-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pub-grid{display:grid;grid-template-columns:1fr;gap:1px;background:{{BORDER}};border:1px solid {{BORDER}};border-radius:20px;overflow:hidden;margin-bottom:2rem}
@media(min-width:640px){.pub-grid{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.pub-grid{grid-template-columns:repeat(4,1fr)}}
.pub-tier{background:{{BG_CARD}};padding:2rem;transition:background .3s;position:relative}
.pub-tier.feat{background:rgba(99,102,241,.04)}
.pub-tier.feat::before{content:"Popular";position:absolute;top:.875rem;right:.875rem;background:{{PRIMARY}};color:#fff;font-size:.6875rem;font-weight:700;padding:2px 10px;border-radius:999px}
.pub-tier-name{font-size:.8125rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:{{TEXT_MUTED}};margin-bottom:1rem}
.pub-tier.feat .pub-tier-name{color:{{PRIMARY}}}
.pub-units{font-family:var(--font-heading);font-size:1.5rem;font-weight:900;letter-spacing:-.04em;color:{{TEXT}};line-height:1;margin-bottom:.25rem}
.pub-unit-label{font-size:.75rem;color:{{TEXT_MUTED}};margin-bottom:1.25rem;display:block}
.pub-price{font-family:var(--font-heading);font-size:2.25rem;font-weight:900;letter-spacing:-.05em;color:{{PRIMARY}};line-height:1;margin-bottom:.25rem}
.pub-overage{font-size:.75rem;color:{{TEXT_MUTED}};margin-bottom:1.25rem}
.pub-best{font-size:.8125rem;color:{{TEXT_SEC}};line-height:1.55;margin-bottom:1.25rem}
.pub-btn{display:block;padding:10px 16px;border-radius:10px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);font-size:.875rem;transition:all .3s}
.pub-tier.feat .pub-btn{background:{{PRIMARY}};color:#fff}
.pub-tier.feat .pub-btn:hover{background:{{PRIMARY_DARK}}}
.pub-tier:not(.feat) .pub-btn{border:1.5px solid {{BORDER}};color:{{TEXT}}}
.pub-tier:not(.feat) .pub-btn:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}
.pub-fn{text-align:center;font-size:.8125rem;color:{{TEXT_MUTED}}}`,
  template: `<section id="pricing-ub"><div class="pub-in"><div class="pub-hd"><span class="pub-ey reveal">{{eyebrow}}</span><h2 class="pub-h2 reveal reveal-d1">{{heading}}</h2></div><div class="pub-grid reveal-stagger">{{#tiers}}<div class="pub-tier{{#if_feat .featured}} feat{{/if_feat}}"><div class="pub-tier-name">{{.name}}</div><div class="pub-units">{{.units}}</div><span class="pub-unit-label">{{unitName}} included</span><div class="pub-price">{{.price}}</div><div class="pub-overage">{{.overage}}</div><p class="pub-best">{{.bestFor}}</p><a href="#contact" class="pub-btn">{{ctaText}}</a></div>{{/tiers}}</div><p class="pub-fn reveal">{{footnote}}</p></div></section>`,
}
