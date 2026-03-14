import type { ComponentVariant } from '../types'

export const footerSmallBusiness: ComponentVariant = {
  id: 'footer-small-biz',
  name: 'Footer Small Business',
  section: 'footer',
  description: 'Local business footer with prominent address, phone, hours, Google Maps CTA, and short nav links',
  bestFor: ['local-service', 'restaurant', 'healthcare', 'beauty', 'fitness', 'real-estate'],
  tags: ['local', 'address', 'phone', 'hours', 'business', 'practical'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'tagline', type: 'text', maxWords: 8, description: 'Short tagline', required: false },
    { name: 'address', type: 'text', maxWords: 10, description: 'Full address', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: true },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email', required: true },
    { name: 'hours', type: 'text', maxWords: 8, description: 'Business hours', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright', required: true },
    {
      name: 'links', type: 'array', description: '4 nav links', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
  ],
  css: `/* footer-small-biz */
#footer { background: {{BG_SECTION}}; border-top: 1px solid {{BORDER}}; padding: 3rem 0 1.5rem; }
.fsb-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fsb-main { display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-bottom: 2rem; }
@media (min-width: 768px) { .fsb-main { grid-template-columns: 2fr 1fr 1fr; } }
.fsb-brand-name { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 900; color: {{TEXT}}; margin-bottom: 0.5rem; letter-spacing: -0.03em; display: block; text-decoration: none; }
.fsb-tagline { font-size: 0.875rem; color: {{TEXT_MUTED}}; margin-bottom: 1.25rem; }
.fsb-info { display: flex; flex-direction: column; gap: 0.625rem; }
.fsb-info-row { display: flex; align-items: flex-start; gap: 0.625rem; font-size: 0.875rem; color: {{TEXT_SEC}}; }
.fsb-info-icon { color: {{PRIMARY}}; flex-shrink: 0; margin-top: 1px; }
.fsb-info-icon svg { width: 14px; height: 14px; }
.fsb-col-title { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 1.25rem; }
.fsb-links { display: flex; flex-direction: column; gap: 0.75rem; }
.fsb-link { font-size: 0.875rem; color: {{TEXT_SEC}}; text-decoration: none; transition: color 0.2s; }
.fsb-link:hover { color: {{PRIMARY}}; }
.fsb-map-btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid {{BORDER}}; border-radius: 8px; font-size: 0.8125rem; font-weight: 600; color: {{PRIMARY}}; text-decoration: none; transition: all 0.2s; margin-top: 0.75rem; }
.fsb-map-btn:hover { background: rgba(99,102,241,0.06); }
.fsb-bottom { border-top: 1px solid {{BORDER}}; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.fsb-copy { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.fsb-legal { display: flex; gap: 1.25rem; }
.fsb-legal a { font-size: 0.8125rem; color: {{TEXT_MUTED}}; text-decoration: none; transition: color 0.2s; }
.fsb-legal a:hover { color: {{PRIMARY}}; }
`,
  template: `<footer id="footer">
  <div class="fsb-inner">
    <div class="fsb-main">
      <div>
        <a href="/" class="fsb-brand-name">{{brandName}}</a>
        <p class="fsb-tagline">{{tagline}}</p>
        <div class="fsb-info">
          <div class="fsb-info-row"><span class="fsb-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></span>{{address}}</div>
          <div class="fsb-info-row"><span class="fsb-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.58 4.84 2 2 0 0 1 3.55 2.66h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.76 2.92a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 5.69 5.69l.97-.97a2 2 0 0 1 2.11-.45c.95.36 1.92.63 2.92.76a2 2 0 0 1 1.72 2.02z"/></svg></span><a href="tel:{{phone}}" style="color:inherit;text-decoration:none">{{phone}}</a></div>
          <div class="fsb-info-row"><span class="fsb-info-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></span>{{hours}}</div>
        </div>
        <a href="#" class="fsb-map-btn">📍 Get Directions</a>
      </div>
      <div>
        <div class="fsb-col-title">Navigation</div>
        <div class="fsb-links">
          {{#links}}<a href="#" class="fsb-link">{{.label}}</a>{{/links}}
        </div>
      </div>
      <div>
        <div class="fsb-col-title">Contact</div>
        <div class="fsb-links">
          <a href="tel:{{phone}}" class="fsb-link">{{phone}}</a>
          <a href="mailto:{{email}}" class="fsb-link">{{email}}</a>
        </div>
      </div>
    </div>
    <div class="fsb-bottom">
      <p class="fsb-copy">{{copyright}}</p>
      <nav class="fsb-legal"><a href="#">Privacy</a><a href="#">Terms</a></nav>
    </div>
  </div>
</footer>`,
}
