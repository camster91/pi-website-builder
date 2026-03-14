import type { ComponentVariant } from '../types'
export const pricingPerSeat: ComponentVariant = {
  id: 'pricing-per-seat', name: 'Pricing Per Seat / Per User', section: 'pricing',
  description: 'Per-user/per-seat pricing with interactive slider calculator — B2B SaaS team pricing',
  bestFor: ['saas','education'], tags: ['per-seat','per-user','slider','calculator','team','B2B'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'unitPrice', type: 'text', maxWords: 2, description: 'Price per user/mo (e.g. $12)', required: true },
    { name: 'unitLabel', type: 'text', maxWords: 3, description: 'Unit label (e.g. per user/month)', required: true },
    { name: 'minUsers', type: 'text', maxWords: 1, description: 'Min users', required: true },
    { name: 'maxUsers', type: 'text', maxWords: 1, description: 'Max users shown', required: true },
    { name: 'defaultUsers', type: 'text', maxWords: 1, description: 'Default slider value', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
    { name: 'features', type: 'array', description: '5 included features', required: true, minItems: 5, maxItems: 6,
      itemSlots: [{ name: 'f', type: 'text', maxWords: 6, description: 'Feature', required: true }] },
    { name: 'enterpriseText', type: 'text', maxWords: 10, description: 'Enterprise callout', required: false },
  ],
  css: `/* pricing-per-seat */
#pricing-ps{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.pps-in{max-width:780px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pps-hd{text-align:center;margin-bottom:3.5rem}
.pps-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pps-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pps-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:24px;padding:2.5rem;box-shadow:0 8px 32px rgba(0,0,0,.06)}
.pps-calc{text-align:center;margin-bottom:2.5rem}
.pps-user-label{font-size:.875rem;font-weight:600;color:{{TEXT_MUTED}};margin-bottom:.75rem;display:block}
.pps-user-count{font-family:var(--font-heading);font-size:3.5rem;font-weight:900;letter-spacing:-.05em;color:{{PRIMARY}};line-height:1;display:block;margin-bottom:.25rem}
.pps-slider{width:100%;appearance:none;height:6px;border-radius:3px;background:{{BORDER}};outline:none;margin-bottom:.75rem;accent-color:{{PRIMARY}}}
.pps-total{font-family:var(--font-heading);font-size:2rem;font-weight:800;letter-spacing:-.04em;color:{{TEXT}};line-height:1}
.pps-unit{font-size:.9375rem;color:{{TEXT_MUTED}};margin-top:.25rem}
.pps-divider{height:1px;background:{{BORDER}};margin:2rem 0}
.pps-features{display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:2rem}
@media(max-width:480px){.pps-features{grid-template-columns:1fr}}
.pps-feat{display:flex;align-items:center;gap:.625rem;font-size:.875rem;color:{{TEXT_SEC}}}
.pps-feat::before{content:"✓";color:{{PRIMARY}};font-weight:700;flex-shrink:0}
.pps-cta{display:block;width:100%;padding:14px 24px;background:{{PRIMARY}};color:#fff;border:none;border-radius:12px;font-weight:700;font-size:1rem;font-family:var(--font-body);cursor:pointer;transition:all .3s;text-align:center;text-decoration:none}
.pps-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.pps-ent{text-align:center;margin-top:1.5rem;font-size:.875rem;color:{{TEXT_MUTED}}}
.pps-ent a{color:{{PRIMARY}};font-weight:700}`,
  template: `<section id="pricing-ps"><div class="pps-in"><div class="pps-hd"><span class="pps-ey reveal">{{eyebrow}}</span><h2 class="pps-h2 reveal reveal-d1">{{heading}}</h2></div><div class="pps-card reveal"><div class="pps-calc"><span class="pps-user-label">Number of users</span><span class="pps-user-count" id="ppsUsers">{{defaultUsers}}</span><input class="pps-slider" id="ppsSlider" type="range" min="{{minUsers}}" max="{{maxUsers}}" value="{{defaultUsers}}" oninput="ppsCalc()"><div class="pps-total" id="ppsTotal">$0</div><div class="pps-unit">{{unitLabel}}</div></div><div class="pps-divider"></div><div class="pps-features">{{#features}}<div class="pps-feat">{{.f}}</div>{{/features}}</div><a href="#contact" class="pps-cta">{{ctaText}}</a><p class="pps-ent">{{enterpriseText}} <a href="#contact">Contact us →</a></p></div></div></section><script>var ppsUP={{unitPrice}};function ppsCalc(){var u=parseInt(document.getElementById('ppsSlider').value);document.getElementById('ppsUsers').textContent=u;document.getElementById('ppsTotal').textContent='$'+(u*ppsUP).toLocaleString();}ppsCalc();</script>`.replace('={{unitPrice}}', `=${parseInt('{{unitPrice}}'.replace(/\D/g,''))||12}`),
}
