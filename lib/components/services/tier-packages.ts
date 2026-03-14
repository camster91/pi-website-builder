import type { ComponentVariant } from '../types'
export const servicesTierPackages: ComponentVariant = {
  id: 'services-tiers', name: 'Services Tiered Packages', section: 'services' as any,
  description: 'Tiered service packages with "most popular" badge, feature rows, and per-tier CTAs — spas, clinics, agencies',
  bestFor: ['beauty','healthcare','fitness','agency','local-service'], tags: ['tiers','packages','popular','features','comparison','service'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'packages', type: 'array', description: '3 tiers', required: true, minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 2, description: 'Package name', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: true },
        { name: 'period', type: 'text', maxWords: 3, description: 'Period', required: false },
        { name: 'desc', type: 'text', maxWords: 12, description: 'Package description', required: true },
        { name: 'f1', type: 'text', maxWords: 5, description: 'Feature 1', required: true },
        { name: 'f2', type: 'text', maxWords: 5, description: 'Feature 2', required: true },
        { name: 'f3', type: 'text', maxWords: 5, description: 'Feature 3', required: true },
        { name: 'f4', type: 'text', maxWords: 5, description: 'Feature 4', required: true },
        { name: 'cta', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
        { name: 'featured', type: 'text', maxWords: 1, description: 'true if featured', required: false },
      ] },
  ],
  css: `/* services-tiers */
#services-tr{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.str-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.str-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.str-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.str-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.str-h2 .accent-word{color:{{ACCENT}}}
.str-grid{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:768px){.str-grid{grid-template-columns:repeat(3,1fr)}}
.str-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:24px;padding:2rem;position:relative;display:flex;flex-direction:column}
.str-card.feat{border-color:{{PRIMARY}};box-shadow:0 0 0 3px rgba(99,102,241,.08)}
.str-card.feat::before{content:"Most Popular";position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:{{PRIMARY}};color:#fff;font-size:.75rem;font-weight:700;padding:3px 14px;border-radius:999px;white-space:nowrap}
.str-pname{font-size:.875rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:{{TEXT_MUTED}};margin-bottom:1rem}
.str-card.feat .str-pname{color:{{PRIMARY}}}
.str-price{font-family:var(--font-heading);font-size:2.5rem;font-weight:900;letter-spacing:-.05em;color:{{TEXT}};line-height:1}
.str-period{font-size:.875rem;color:{{TEXT_MUTED}};display:block;margin-bottom:.75rem}
.str-desc{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.6;margin-bottom:1.5rem}
.str-feats{display:flex;flex-direction:column;gap:.625rem;margin-bottom:1.75rem;flex:1}
.str-feat{font-size:.9375rem;color:{{TEXT_SEC}};display:flex;align-items:center;gap:.625rem}
.str-feat::before{content:"✓";color:#22c55e;font-weight:700;flex-shrink:0}
.str-btn{display:block;padding:12px 20px;border-radius:12px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);transition:all .3s;margin-top:auto}
.str-card.feat .str-btn{background:{{PRIMARY}};color:#fff}
.str-card.feat .str-btn:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.str-card:not(.feat) .str-btn{border:2px solid {{BORDER}};color:{{TEXT}}}
.str-card:not(.feat) .str-btn:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="services-tr"><div class="str-in"><div class="str-hd"><span class="str-ey reveal">{{eyebrow}}</span><h2 class="str-h2 reveal reveal-d1">{{heading}}</h2></div><div class="str-grid reveal-stagger">{{#packages}}<div class="str-card{{#if_feat .featured}} feat{{/if_feat}}"><div class="str-pname">{{.name}}</div><div class="str-price">{{.price}}</div><span class="str-period">{{.period}}</span><p class="str-desc">{{.desc}}</p><div class="str-feats"><div class="str-feat">{{.f1}}</div><div class="str-feat">{{.f2}}</div><div class="str-feat">{{.f3}}</div><div class="str-feat">{{.f4}}</div></div><a href="#contact" class="str-btn">{{.cta}}</a></div>{{/packages}}</div></div></section>`,
}
