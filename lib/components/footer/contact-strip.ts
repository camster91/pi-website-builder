import type { ComponentVariant } from '../types'

export const footerContactStrip: ComponentVariant = {
  id: 'footer-contact-strip',
  name: 'Footer Contact Strip',
  section: 'footer',
  description: 'Primary color contact strip above footer: phone/email CTAs big and prominent — local service, healthcare, urgent contact',
  bestFor: ['local-service', 'healthcare', 'real-estate', 'restaurant', 'fitness'],
  tags: ['contact-strip', 'phone', 'prominent', 'local', 'urgent', 'call-to-action'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: true },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email', required: true },
    { name: 'stripHeading', type: 'heading', maxWords: 6, description: 'Strip heading', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright', required: true },
    {
      name: 'links', type: 'array', description: '4 nav links', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
  ],
  css: `/* footer-contact-strip */
.fcs-strip { background: {{PRIMARY}}; padding: 2.5rem 0; }
.fcs-strip-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
.fcs-strip-heading { font-family: var(--font-heading); font-size: clamp(1.5rem,3vw,2.25rem); font-weight: 800; letter-spacing: -0.03em; color: #fff; }
.fcs-contact-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.fcs-phone-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: rgba(255,255,255,0.15); color: #fff; border-radius: 10px; font-weight: 700; text-decoration: none; transition: all 0.3s; font-size: 1rem; }
.fcs-phone-btn:hover { background: rgba(255,255,255,0.25); }
.fcs-email-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.3); border-radius: 10px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
.fcs-email-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }
#footer { background: {{BG_SECTION}}; border-top: 1px solid {{BORDER}}; padding: 2.5rem 0 1.5rem; }
.fcs-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem; }
.fcs-brand-name { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 900; letter-spacing: -0.03em; color: {{TEXT}}; text-decoration: none; }
.fcs-nav { display: flex; gap: 1.25rem; flex-wrap: wrap; }
.fcs-link { font-size: 0.875rem; color: {{TEXT_SEC}}; text-decoration: none; transition: color 0.2s; }
.fcs-link:hover { color: {{PRIMARY}}; }
.fcs-copy { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
`,
  template: `<div class="fcs-strip">
  <div class="fcs-strip-inner">
    <h3 class="fcs-strip-heading">{{stripHeading}}</h3>
    <div class="fcs-contact-btns">
      <a href="tel:{{phone}}" class="fcs-phone-btn">📞 {{phone}}</a>
      <a href="mailto:{{email}}" class="fcs-email-btn">✉ {{email}}</a>
    </div>
  </div>
</div>
<footer id="footer">
  <div class="fcs-inner">
    <a href="/" class="fcs-brand-name">{{brandName}}</a>
    <nav class="fcs-nav">
      {{#links}}<a href="#" class="fcs-link">{{.label}}</a>{{/links}}
    </nav>
    <p class="fcs-copy">{{copyright}}</p>
  </div>
</footer>`,
}
