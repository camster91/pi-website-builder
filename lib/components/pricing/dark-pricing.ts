import type { ComponentVariant } from '../types'
export const pricingDark: ComponentVariant = {
  id: 'pricing-dark', name: 'Pricing Dark Premium', section: 'pricing',
  description: 'Dark background premium 3-tier pricing with gradient featured card — high-end SaaS/agency',
  bestFor: ['saas','agency','fitness'], tags: ['dark','premium','gradient','3-tier','high-end'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'p1Name', type: 'text', maxWords: 2, description: 'Plan 1 name', required: true },
    { name: 'p1Price', type: 'text', maxWords: 2, description: 'Plan 1 price', required: true },
    { name: 'p1Cta', type: 'cta-text', maxWords: 3, description: 'Plan 1 CTA', required: true },
    { name: 'p2Name', type: 'text', maxWords: 2, description: 'Plan 2 name', required: true },
    { name: 'p2Price', type: 'text', maxWords: 2, description: 'Plan 2 price', required: true },
    { name: 'p2Cta', type: 'cta-text', maxWords: 3, description: 'Plan 2 CTA', required: true },
    { name: 'p3Name', type: 'text', maxWords: 2, description: 'Plan 3 name', required: true },
    { name: 'p3Price', type: 'text', maxWords: 2, description: 'Plan 3 price (e.g. Custom)', required: true },
    { name: 'p3Cta', type: 'cta-text', maxWords: 3, description: 'Plan 3 CTA', required: true },
    { name: 'features', type: 'array', description: '5 plan 2 features', required: true, minItems: 5, maxItems: 6,
      itemSlots: [{ name: 'f', type: 'text', maxWords: 6, description: 'Feature', required: true }] },
    { name: 'period', type: 'text', maxWords: 2, description: 'Billing period', required: false },
  ],
  css: `/* pricing-dark */
#pricing-dk{background:#080c14;padding:clamp(4rem,8vw,7rem) 0}
.pdk-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pdk-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.pdk-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.pdk-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff;margin-bottom:1rem}
.pdk-sub{font-size:1.0625rem;color:rgba(255,255,255,.45);line-height:1.7}
.pdk-grid{display:grid;grid-template-columns:1fr;gap:1.25rem}
@media(min-width:768px){.pdk-grid{grid-template-columns:repeat(3,1fr)}}
.pdk-card{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:2rem}
.pdk-card.feat{background:linear-gradient(135deg,{{PRIMARY}},#7c3aed);border:none;box-shadow:0 24px 48px rgba(99,102,241,.35)}
.pdk-pname{font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:1.5rem}
.pdk-card.feat .pdk-pname{color:rgba(255,255,255,.7)}
.pdk-price{font-family:var(--font-heading);font-size:3rem;font-weight:900;letter-spacing:-.05em;color:#fff;line-height:1;display:block;margin-bottom:.25rem}
.pdk-period{font-size:.875rem;color:rgba(255,255,255,.35);margin-bottom:1.5rem;display:block}
.pdk-card.feat .pdk-period{color:rgba(255,255,255,.65)}
.pdk-feats{display:flex;flex-direction:column;gap:.625rem;margin-bottom:1.5rem}
.pdk-feat{display:flex;align-items:center;gap:.625rem;font-size:.875rem;color:rgba(255,255,255,.5)}
.pdk-card.feat .pdk-feat{color:rgba(255,255,255,.8)}
.pdk-feat::before{content:'';width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.3);flex-shrink:0}
.pdk-card.feat .pdk-feat::before{background:rgba(255,255,255,.7)}
.pdk-btn{display:block;padding:12px 20px;border-radius:12px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);transition:all .3s}
.pdk-card:not(.feat) .pdk-btn{border:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6)}
.pdk-card:not(.feat) .pdk-btn:hover{border-color:rgba(255,255,255,.35);color:#fff}
.pdk-card.feat .pdk-btn{background:rgba(255,255,255,.15);color:#fff;border:none}
.pdk-card.feat .pdk-btn:hover{background:rgba(255,255,255,.25)}`,
  template: `<section id="pricing-dk"><div class="pdk-in"><div class="pdk-hd"><span class="pdk-ey reveal">{{eyebrow}}</span><h2 class="pdk-h2 reveal reveal-d1">{{heading}}</h2><p class="pdk-sub reveal reveal-d2">{{subtext}}</p></div><div class="pdk-grid reveal-stagger"><div class="pdk-card"><div class="pdk-pname">{{p1Name}}</div><span class="pdk-price">{{p1Price}}</span><span class="pdk-period">{{period}}</span><a href="#contact" class="pdk-btn">{{p1Cta}}</a></div><div class="pdk-card feat"><div class="pdk-pname">{{p2Name}}</div><span class="pdk-price">{{p2Price}}</span><span class="pdk-period">{{period}}</span><div class="pdk-feats">{{#features}}<div class="pdk-feat">{{.f}}</div>{{/features}}</div><a href="#contact" class="pdk-btn">{{p2Cta}}</a></div><div class="pdk-card"><div class="pdk-pname">{{p3Name}}</div><span class="pdk-price">{{p3Price}}</span><span class="pdk-period">Custom billing</span><a href="#contact" class="pdk-btn">{{p3Cta}}</a></div></div></div></section>`,
}
