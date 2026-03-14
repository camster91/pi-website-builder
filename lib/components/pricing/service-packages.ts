import type { ComponentVariant } from '../types'
export const pricingServicePackages: ComponentVariant = {
  id: 'pricing-packages', name: 'Pricing Service Packages', section: 'pricing',
  description: 'Service business packages with emoji icons, deliverables list, and CTA — agencies, local services, freelancers',
  bestFor: ['agency','local-service','beauty','fitness','real-estate'], tags: ['packages','services','deliverables','agency','local','freelance'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'packages', type: 'array', description: '3 packages', required: true, minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Emoji', required: true },
        { name: 'name', type: 'text', maxWords: 2, description: 'Package name', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: true },
        { name: 'desc', type: 'text', maxWords: 12, description: 'Package description', required: true },
        { name: 'i1', type: 'text', maxWords: 5, description: 'Included 1', required: true },
        { name: 'i2', type: 'text', maxWords: 5, description: 'Included 2', required: true },
        { name: 'i3', type: 'text', maxWords: 5, description: 'Included 3', required: true },
        { name: 'i4', type: 'text', maxWords: 5, description: 'Included 4', required: true },
        { name: 'cta', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
        { name: 'featured', type: 'text', maxWords: 1, description: 'true or false', required: false },
      ] },
  ],
  css: `/* pricing-packages */
#pricing-pk{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.ppk-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.ppk-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.ppk-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.ppk-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.ppk-h2 .accent-word{color:{{ACCENT}}}
.ppk-grid{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:768px){.ppk-grid{grid-template-columns:repeat(3,1fr)}}
.ppk-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:24px;padding:2rem;display:flex;flex-direction:column;position:relative}
.ppk-card.feat{border-color:{{PRIMARY}};box-shadow:0 0 0 3px rgba(99,102,241,.1)}
.ppk-card.feat::before{content:"Popular";position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:{{PRIMARY}};color:#fff;font-size:.75rem;font-weight:700;padding:3px 14px;border-radius:999px}
.ppk-icon{font-size:2rem;margin-bottom:1rem}
.ppk-name{font-family:var(--font-heading);font-size:1.125rem;font-weight:700;color:{{TEXT}};margin-bottom:.25rem}
.ppk-desc{font-size:.875rem;color:{{TEXT_MUTED}};margin-bottom:1.25rem}
.ppk-price{font-family:var(--font-heading);font-size:2.25rem;font-weight:900;letter-spacing:-.04em;color:{{PRIMARY}};margin-bottom:1.5rem;line-height:1}
.ppk-includes{display:flex;flex-direction:column;gap:.625rem;margin-bottom:1.75rem;flex:1}
.ppk-inc{display:flex;align-items:center;gap:.625rem;font-size:.875rem;color:{{TEXT_SEC}}}
.ppk-inc::before{content:"✓";color:#22c55e;font-weight:700;flex-shrink:0}
.ppk-btn{display:block;padding:12px 20px;border-radius:12px;font-weight:700;text-align:center;text-decoration:none;font-family:var(--font-body);transition:all .3s;margin-top:auto}
.ppk-card.feat .ppk-btn{background:{{PRIMARY}};color:#fff}
.ppk-card.feat .ppk-btn:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.ppk-card:not(.feat) .ppk-btn{border:2px solid {{BORDER}};color:{{TEXT}}}
.ppk-card:not(.feat) .ppk-btn:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="pricing-pk"><div class="ppk-in"><div class="ppk-hd"><span class="ppk-ey reveal">{{eyebrow}}</span><h2 class="ppk-h2 reveal reveal-d1">{{heading}}</h2></div><div class="ppk-grid reveal-stagger">{{#packages}}<div class="ppk-card{{#if_feat .featured}} feat{{/if_feat}}"><div class="ppk-icon">{{.emoji}}</div><div class="ppk-name">{{.name}}</div><div class="ppk-desc">{{.desc}}</div><div class="ppk-price">{{.price}}</div><div class="ppk-includes"><div class="ppk-inc">{{.i1}}</div><div class="ppk-inc">{{.i2}}</div><div class="ppk-inc">{{.i3}}</div><div class="ppk-inc">{{.i4}}</div></div><a href="#contact" class="ppk-btn">{{.cta}}</a></div>{{/packages}}</div></div></section>`,
}
