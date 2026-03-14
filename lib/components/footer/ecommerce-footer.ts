import type { ComponentVariant } from '../types'

export const footerEcommerce: ComponentVariant = {
  id: 'footer-ecommerce',
  name: 'Footer Ecommerce',
  section: 'footer',
  description: 'Ecommerce footer: product/support/company columns, payment icons row, trust badges, security note',
  bestFor: ['ecommerce', 'beauty', 'fitness', 'restaurant'],
  tags: ['ecommerce', 'payment-icons', 'shop', 'trust', 'products', 'full'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'brandDesc', type: 'text', maxWords: 12, description: 'Brand tagline', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright', required: true },
    { name: 'col1Title', type: 'text', maxWords: 2, description: 'Column 1 title', required: true },
    { name: 'col2Title', type: 'text', maxWords: 2, description: 'Column 2 title', required: true },
    { name: 'col3Title', type: 'text', maxWords: 2, description: 'Column 3 title', required: true },
    {
      name: 'col1Links', type: 'array', description: '4 links', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
    {
      name: 'col2Links', type: 'array', description: '4 links', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
    {
      name: 'col3Links', type: 'array', description: '4 links', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
  ],
  css: `/* footer-ecommerce */
#footer { background: {{BG_SECTION}}; border-top: 1px solid {{BORDER}}; padding: 4rem 0 1.5rem; }
.fec-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fec-grid { display: grid; grid-template-columns: 2fr repeat(3,1fr); gap: 3rem; margin-bottom: 3rem; }
@media (max-width: 768px) { .fec-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
@media (max-width: 480px) { .fec-grid { grid-template-columns: 1fr; } }
.fec-brand-name { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 900; letter-spacing: -0.03em; color: {{TEXT}}; margin-bottom: 0.5rem; display: block; text-decoration: none; }
.fec-brand-desc { font-size: 0.875rem; color: {{TEXT_MUTED}}; line-height: 1.6; margin-bottom: 1.5rem; }
/* Newsletter mini */
.fec-nl { display: flex; border-radius: 10px; overflow: hidden; border: 1px solid {{BORDER}}; }
.fec-nl-input { flex: 1; padding: 10px 12px; border: none; outline: none; font-family: var(--font-body); font-size: 0.875rem; color: {{TEXT}}; background: {{BG}}; }
.fec-nl-input::placeholder { color: {{TEXT_MUTED}}; }
.fec-nl-btn { padding: 10px 14px; background: {{PRIMARY}}; color: #fff; border: none; font-weight: 700; font-size: 0.8125rem; font-family: var(--font-body); cursor: pointer; transition: background 0.3s; white-space: nowrap; }
.fec-nl-btn:hover { background: {{PRIMARY_DARK}}; }
.fec-col-title { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 1.25rem; }
.fec-links { display: flex; flex-direction: column; gap: 0.75rem; }
.fec-link { font-size: 0.875rem; color: {{TEXT_SEC}}; text-decoration: none; transition: color 0.2s; }
.fec-link:hover { color: {{PRIMARY}}; }
/* Payment icons strip */
.fec-payments { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 2rem; }
.fec-pay-icon { height: 28px; padding: 4px 10px; border: 1px solid {{BORDER}}; border-radius: 6px; display: flex; align-items: center; font-size: 0.75rem; font-weight: 700; color: {{TEXT_MUTED}}; background: {{BG_CARD}}; }
/* Bottom bar */
.fec-bottom { border-top: 1px solid {{BORDER}}; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.fec-copy { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.fec-trust { display: flex; align-items: center; gap: 6px; font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.fec-trust svg { width: 14px; height: 14px; color: #22c55e; }
`,
  template: `<footer id="footer">
  <div class="fec-inner">
    <div class="fec-grid">
      <div>
        <a href="/" class="fec-brand-name">{{brandName}}</a>
        <p class="fec-brand-desc">{{brandDesc}}</p>
        <div class="fec-nl">
          <input class="fec-nl-input" type="email" placeholder="Your email...">
          <button class="fec-nl-btn">Subscribe</button>
        </div>
      </div>
      <div><div class="fec-col-title">{{col1Title}}</div><div class="fec-links">{{#col1Links}}<a href="#" class="fec-link">{{.label}}</a>{{/col1Links}}</div></div>
      <div><div class="fec-col-title">{{col2Title}}</div><div class="fec-links">{{#col2Links}}<a href="#" class="fec-link">{{.label}}</a>{{/col2Links}}</div></div>
      <div><div class="fec-col-title">{{col3Title}}</div><div class="fec-links">{{#col3Links}}<a href="#" class="fec-link">{{.label}}</a>{{/col3Links}}</div></div>
    </div>
    <div class="fec-payments">
      <span class="fec-pay-icon">VISA</span>
      <span class="fec-pay-icon">MC</span>
      <span class="fec-pay-icon">AMEX</span>
      <span class="fec-pay-icon">PayPal</span>
      <span class="fec-pay-icon">Apple Pay</span>
      <span class="fec-pay-icon">GPay</span>
    </div>
    <div class="fec-bottom">
      <p class="fec-copy">{{copyright}}</p>
      <div class="fec-trust">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Secure & encrypted checkout
      </div>
    </div>
  </div>
</footer>`,
}
