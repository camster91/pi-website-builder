import type { ComponentVariant } from '../types'
export const pricingAnnualToggle: ComponentVariant = {
  id: 'pricing-toggle', name: 'Pricing Annual/Monthly Toggle', section: 'pricing',
  description: '3-tier pricing with monthly/annual billing toggle showing savings badge — drives annual upgrades',
  bestFor: ['saas','education','fitness'], tags: ['toggle','annual','monthly','savings','billing'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'savings', type: 'text', maxWords: 4, description: 'Savings badge (e.g. "Save 20%")', required: true },
    { name: 'p1Name', type: 'text', maxWords: 2, description: 'Plan 1 name', required: true },
    { name: 'p1Mon', type: 'text', maxWords: 1, description: 'Plan 1 monthly price', required: true },
    { name: 'p1Ann', type: 'text', maxWords: 1, description: 'Plan 1 annual price', required: true },
    { name: 'p1Cta', type: 'cta-text', maxWords: 3, description: 'Plan 1 CTA', required: true },
    { name: 'p2Name', type: 'text', maxWords: 2, description: 'Plan 2 name', required: true },
    { name: 'p2Mon', type: 'text', maxWords: 1, description: 'Plan 2 monthly price', required: true },
    { name: 'p2Ann', type: 'text', maxWords: 1, description: 'Plan 2 annual price', required: true },
    { name: 'p2Cta', type: 'cta-text', maxWords: 3, description: 'Plan 2 CTA', required: true },
    { name: 'p3Name', type: 'text', maxWords: 2, description: 'Plan 3 name', required: true },
    { name: 'p3Mon', type: 'text', maxWords: 1, description: 'Plan 3 monthly price', required: true },
    { name: 'p3Ann', type: 'text', maxWords: 1, description: 'Plan 3 annual price', required: true },
    { name: 'p3Cta', type: 'cta-text', maxWords: 3, description: 'Plan 3 CTA', required: true },
    { name: 'features', type: 'array', description: '5 plan 2 features', required: true, minItems: 5, maxItems: 6,
      itemSlots: [{ name: 'f', type: 'text', maxWords: 6, description: 'Feature', required: true }] },
  ],
  css: `/* pricing-toggle */
#pricing-tg{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.ptg-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.ptg-hd{text-align:center;margin-bottom:3rem}
.ptg-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.ptg-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:2rem}
.ptg-toggle{display:flex;align-items:center;justify-content:center;gap:.75rem;margin-bottom:3rem}
.ptg-lbl{font-size:.9375rem;font-weight:600;color:{{TEXT_SEC}}}
.ptg-switch{position:relative;width:52px;height:28px;background:{{PRIMARY}};border-radius:14px;cursor:pointer;transition:background .3s;border:none}
.ptg-switch::before{content:'';position:absolute;top:3px;left:3px;width:22px;height:22px;background:#fff;border-radius:50%;transition:transform .3s}
.ptg-switch.annual::before{transform:translateX(24px)}
.ptg-badge{font-size:.75rem;font-weight:700;padding:3px 10px;background:rgba(34,197,94,.1);color:#16a34a;border-radius:999px}
.ptg-grid{display:grid;grid-template-columns:1fr;gap:1.25rem}
@media(min-width:768px){.ptg-grid{grid-template-columns:repeat(3,1fr)}}
.ptg-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem}
.ptg-card.feat{border-color:{{PRIMARY}};box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.ptg-pname{font-size:.875rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:{{TEXT_MUTED}};margin-bottom:1rem}
.ptg-card.feat .ptg-pname{color:{{PRIMARY}}}
.ptg-price{font-family:var(--font-heading);font-size:3rem;font-weight:900;letter-spacing:-.05em;color:{{TEXT}};line-height:1}
.ptg-period{font-size:.875rem;color:{{TEXT_MUTED}};margin-bottom:1.25rem;display:block}
.ptg-feats{display:flex;flex-direction:column;gap:.625rem;margin-bottom:1.5rem}
.ptg-feat{display:flex;align-items:center;gap:.625rem;font-size:.875rem;color:{{TEXT_SEC}}}
.ptg-feat::before{content:'✓';color:{{PRIMARY}};font-weight:700}
.ptg-btn{display:block;padding:12px 20px;border-radius:12px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);transition:all .3s}
.ptg-card.feat .ptg-btn{background:{{PRIMARY}};color:#fff;border:none}
.ptg-card.feat .ptg-btn:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.ptg-card:not(.feat) .ptg-btn{border:2px solid {{BORDER}};color:{{TEXT}}}
.ptg-card:not(.feat) .ptg-btn:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="pricing-tg"><div class="ptg-in"><div class="ptg-hd"><span class="ptg-ey reveal">{{eyebrow}}</span><h2 class="ptg-h2 reveal reveal-d1">{{heading}}</h2><div class="ptg-toggle reveal"><span class="ptg-lbl">Monthly</span><button class="ptg-switch" id="ptgSwitch" onclick="ptgToggle()"></button><span class="ptg-lbl">Annual</span><span class="ptg-badge">{{savings}}</span></div></div><div class="ptg-grid reveal-stagger"><div class="ptg-card"><div class="ptg-pname">{{p1Name}}</div><div class="ptg-price" id="ptgP1">{{p1Mon}}</div><span class="ptg-period">/month</span><a href="#contact" class="ptg-btn">{{p1Cta}}</a></div><div class="ptg-card feat"><div class="ptg-pname">{{p2Name}}</div><div class="ptg-price" id="ptgP2">{{p2Mon}}</div><span class="ptg-period">/month</span><div class="ptg-feats">{{#features}}<div class="ptg-feat">{{.f}}</div>{{/features}}</div><a href="#contact" class="ptg-btn">{{p2Cta}}</a></div><div class="ptg-card"><div class="ptg-pname">{{p3Name}}</div><div class="ptg-price" id="ptgP3">{{p3Mon}}</div><span class="ptg-period">/month</span><a href="#contact" class="ptg-btn">{{p3Cta}}</a></div></div></div></section><script>var ptgAnn=false,ptgData={P1:['{{p1Mon}}','{{p1Ann}}'],P2:['{{p2Mon}}','{{p2Ann}}'],P3:['{{p3Mon}}','{{p3Ann}}']};function ptgToggle(){ptgAnn=!ptgAnn;document.getElementById('ptgSwitch').classList.toggle('annual',ptgAnn);['P1','P2','P3'].forEach(k=>{document.getElementById('ptg'+k).textContent=ptgData[k][ptgAnn?1:0];});}</script>`,
}
