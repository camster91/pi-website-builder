import type { ComponentVariant } from '../types'
export const pricingMinimalCard: ComponentVariant = {
  id: 'pricing-minimal', name: 'Pricing Single Minimal Card', section: 'pricing',
  description: 'Single pricing card centered on page — one product, one price, clear CTA. No confusion.',
  bestFor: ['saas','fitness','beauty','education'], tags: ['minimal','single','clean','one-price','simple','conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'planName', type: 'text', maxWords: 2, description: 'Plan/product name', required: true },
    { name: 'price', type: 'text', maxWords: 2, description: 'Price', required: true },
    { name: 'period', type: 'text', maxWords: 3, description: 'Period', required: false },
    { name: 'desc', type: 'text', maxWords: 20, description: 'What you get', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
    { name: 'note', type: 'text', maxWords: 8, description: 'Trust note below CTA', required: false },
    { name: 'includes', type: 'array', description: '5 key inclusions', required: true, minItems: 5, maxItems: 8,
      itemSlots: [{ name: 'f', type: 'text', maxWords: 6, description: 'Inclusion', required: true }] },
  ],
  css: `/* pricing-minimal */
#pricing-mn{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.pmn-in{max-width:560px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pmn-hd{text-align:center;margin-bottom:3rem}
.pmn-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pmn-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pmn-card{background:{{BG_CARD}};border:2px solid {{PRIMARY}};border-radius:28px;padding:2.5rem;box-shadow:0 0 0 8px rgba(99,102,241,.06),0 20px 48px rgba(0,0,0,.08);text-align:center}
.pmn-pname{display:inline-block;font-size:.8125rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1.5rem;padding:4px 14px;background:rgba(99,102,241,.08);border-radius:999px}
.pmn-price{font-family:var(--font-heading);font-size:4rem;font-weight:900;letter-spacing:-.06em;color:{{TEXT}};line-height:1;display:block}
.pmn-period{font-size:.9375rem;color:{{TEXT_MUTED}};margin-bottom:1.25rem;display:block}
.pmn-desc{font-size:1rem;color:{{TEXT_SEC}};line-height:1.7;margin-bottom:2rem}
.pmn-divider{height:1px;background:{{BORDER}};margin-bottom:1.5rem}
.pmn-includes{display:flex;flex-direction:column;gap:.625rem;text-align:left;margin-bottom:2rem}
.pmn-inc{display:flex;align-items:center;gap:.75rem;font-size:.9375rem;color:{{TEXT_SEC}}}
.pmn-inc::before{content:"✓";color:{{PRIMARY}};font-weight:800;flex-shrink:0}
.pmn-cta{display:block;padding:15px 32px;background:{{PRIMARY}};color:#fff;border-radius:14px;font-weight:800;font-size:1rem;text-decoration:none;transition:all .3s;margin-bottom:.875rem}
.pmn-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px);box-shadow:0 8px 24px rgba(99,102,241,.35)}
.pmn-note{font-size:.8125rem;color:{{TEXT_MUTED}}}`,
  template: `<section id="pricing-mn"><div class="pmn-in"><div class="pmn-hd"><span class="pmn-ey reveal">{{eyebrow}}</span><h2 class="pmn-h2 reveal reveal-d1">{{heading}}</h2></div><div class="pmn-card reveal"><div class="pmn-pname">{{planName}}</div><span class="pmn-price">{{price}}</span><span class="pmn-period">{{period}}</span><p class="pmn-desc">{{desc}}</p><div class="pmn-divider"></div><div class="pmn-includes">{{#includes}}<div class="pmn-inc">{{.f}}</div>{{/includes}}</div><a href="#contact" class="pmn-cta">{{ctaText}}</a><p class="pmn-note">{{note}}</p></div></div></section>`,
}
