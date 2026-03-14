import type { ComponentVariant } from '../types'
export const pricingEnterprise: ComponentVariant = {
  id: 'pricing-enterprise', name: 'Pricing Enterprise Contact', section: 'pricing',
  description: 'Starter/Pro cards + Enterprise "Contact Us" wide card — standard B2B SaaS enterprise upsell pattern',
  bestFor: ['saas','agency','education'], tags: ['enterprise','contact','B2B','upsell','sales','custom'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'p1Name', type: 'text', maxWords: 2, description: 'Plan 1 name', required: true },
    { name: 'p1Price', type: 'text', maxWords: 2, description: 'Plan 1 price', required: true },
    { name: 'p1Cta', type: 'cta-text', maxWords: 3, description: 'Plan 1 CTA', required: true },
    { name: 'p2Name', type: 'text', maxWords: 2, description: 'Plan 2 name', required: true },
    { name: 'p2Price', type: 'text', maxWords: 2, description: 'Plan 2 price', required: true },
    { name: 'p2Cta', type: 'cta-text', maxWords: 3, description: 'Plan 2 CTA', required: true },
    { name: 'entHeading', type: 'heading', maxWords: 5, description: 'Enterprise heading', required: true },
    { name: 'entDesc', type: 'text', maxWords: 20, description: 'Enterprise description', required: true },
    { name: 'entCta', type: 'cta-text', maxWords: 3, description: 'Enterprise CTA', required: true },
    { name: 'period', type: 'text', maxWords: 2, description: 'Billing period', required: false },
    { name: 'features', type: 'array', description: '4 plan 2 features', required: true, minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'f', type: 'text', maxWords: 6, description: 'Feature', required: true }] },
    { name: 'entFeatures', type: 'array', description: '4 enterprise features', required: true, minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'f', type: 'text', maxWords: 6, description: 'Feature', required: true }] },
  ],
  css: `/* pricing-enterprise */
#pricing-en{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.pen-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pen-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.pen-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pen-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pen-top{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:1.25rem}
@media(min-width:640px){.pen-top{grid-template-columns:repeat(2,1fr)}}
.pen-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem}
.pen-card.feat{border-color:{{PRIMARY}};box-shadow:0 0 0 3px rgba(99,102,241,.08)}
.pen-pname{font-size:.875rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:{{TEXT_MUTED}};margin-bottom:1rem}
.pen-card.feat .pen-pname{color:{{PRIMARY}}}
.pen-price{font-family:var(--font-heading);font-size:2.5rem;font-weight:900;letter-spacing:-.05em;color:{{TEXT}};line-height:1;margin-bottom:.25rem}
.pen-period{font-size:.875rem;color:{{TEXT_MUTED}};display:block;margin-bottom:1.25rem}
.pen-feats{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.5rem}
.pen-feat{font-size:.875rem;color:{{TEXT_SEC}};display:flex;align-items:center;gap:.5rem}
.pen-feat::before{content:"✓";color:#22c55e;font-weight:700}
.pen-btn{display:block;padding:11px 20px;border-radius:12px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);transition:all .3s;font-size:.875rem}
.pen-card.feat .pen-btn{background:{{PRIMARY}};color:#fff}
.pen-card.feat .pen-btn:hover{background:{{PRIMARY_DARK}}}
.pen-card:not(.feat) .pen-btn{border:2px solid {{BORDER}};color:{{TEXT}}}
.pen-card:not(.feat) .pen-btn:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}
/* Enterprise row */
.pen-ent{background:linear-gradient(135deg,#0a0f1e,#1a0f3e);border-radius:20px;padding:2.5rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:2rem}
.pen-ent-left{flex:1}
.pen-ent-h{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:#fff;margin-bottom:.75rem}
.pen-ent-d{font-size:.9375rem;color:rgba(255,255,255,.5);line-height:1.65;margin-bottom:1.25rem}
.pen-ent-feats{display:flex;flex-wrap:wrap;gap:.5rem .75rem}
.pen-ent-feat{font-size:.8125rem;color:rgba(255,255,255,.55);display:flex;align-items:center;gap:.375rem}
.pen-ent-feat::before{content:"✓";color:{{ACCENT}};font-weight:700}
.pen-ent-btn{padding:13px 28px;background:{{ACCENT}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;white-space:nowrap;transition:all .3s;flex-shrink:0}
.pen-ent-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,158,11,.35)}`,
  template: `<section id="pricing-en"><div class="pen-in"><div class="pen-hd"><span class="pen-ey reveal">{{eyebrow}}</span><h2 class="pen-h2 reveal reveal-d1">{{heading}}</h2></div><div class="pen-top reveal"><div class="pen-card"><div class="pen-pname">{{p1Name}}</div><div class="pen-price">{{p1Price}}</div><span class="pen-period">{{period}}</span><a href="#contact" class="pen-btn">{{p1Cta}}</a></div><div class="pen-card feat"><div class="pen-pname">{{p2Name}}</div><div class="pen-price">{{p2Price}}</div><span class="pen-period">{{period}}</span><div class="pen-feats">{{#features}}<div class="pen-feat">{{.f}}</div>{{/features}}</div><a href="#contact" class="pen-btn">{{p2Cta}}</a></div></div><div class="pen-ent reveal"><div class="pen-ent-left"><h3 class="pen-ent-h">{{entHeading}}</h3><p class="pen-ent-d">{{entDesc}}</p><div class="pen-ent-feats">{{#entFeatures}}<div class="pen-ent-feat">{{.f}}</div>{{/entFeatures}}</div></div><a href="#contact" class="pen-ent-btn">{{entCta}} →</a></div></div></section>`,
}
