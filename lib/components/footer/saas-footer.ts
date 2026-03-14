import type { ComponentVariant } from '../types'

export const footerSaas: ComponentVariant = {
  id: 'footer-saas',
  name: 'Footer SaaS Product',
  section: 'footer',
  description: 'Standard SaaS footer: product columns, company columns, status indicator, social, legal — clean light bg',
  bestFor: ['saas', 'ecommerce', 'education', 'nonprofit'],
  tags: ['saas', 'product', 'multi-column', 'light', 'professional', 'standard'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'brandDesc', type: 'text', maxWords: 12, description: 'Brand short description', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright text', required: true },
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
  css: `/* footer-saas */
#footer { background: {{BG_SECTION}}; border-top: 1px solid {{BORDER}}; padding: 4rem 0 1.5rem; }
.fss-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fss-grid { display: grid; grid-template-columns: 2fr repeat(3,1fr); gap: 3rem; margin-bottom: 3rem; }
@media (max-width: 768px) { .fss-grid { grid-template-columns: 1fr 1fr; gap: 2rem; } }
@media (max-width: 480px) { .fss-grid { grid-template-columns: 1fr; } }
.fss-brand-name { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 900; letter-spacing: -0.03em; color: {{TEXT}}; margin-bottom: 0.625rem; display: block; text-decoration: none; }
.fss-brand-desc { font-size: 0.875rem; color: {{TEXT_MUTED}}; line-height: 1.65; margin-bottom: 1.25rem; }
.fss-status { display: inline-flex; align-items: center; gap: 6px; font-size: 0.75rem; font-weight: 600; color: #16a34a; background: rgba(22,163,74,0.08); padding: 4px 12px; border-radius: 999px; }
.fss-status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; }
.fss-col-title { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 1.25rem; }
.fss-links { display: flex; flex-direction: column; gap: 0.75rem; }
.fss-link { font-size: 0.875rem; color: {{TEXT_SEC}}; text-decoration: none; transition: color 0.2s; }
.fss-link:hover { color: {{PRIMARY}}; }
.fss-bottom { border-top: 1px solid {{BORDER}}; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.fss-copy { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.fss-right { display: flex; align-items: center; gap: 1.5rem; }
.fss-legal { display: flex; gap: 1.25rem; }
.fss-legal a { font-size: 0.8125rem; color: {{TEXT_MUTED}}; text-decoration: none; transition: color 0.2s; }
.fss-legal a:hover { color: {{PRIMARY}}; }
.fss-socials { display: flex; gap: 0.625rem; }
.fss-social { width: 30px; height: 30px; border-radius: 8px; border: 1px solid {{BORDER}}; display: flex; align-items: center; justify-content: center; color: {{TEXT_MUTED}}; transition: all 0.2s; }
.fss-social:hover { color: {{PRIMARY}}; border-color: {{PRIMARY}}; }
.fss-social svg { width: 13px; height: 13px; }
`,
  template: `<footer id="footer">
  <div class="fss-inner">
    <div class="fss-grid">
      <div>
        <a href="/" class="fss-brand-name">{{brandName}}</a>
        <p class="fss-brand-desc">{{brandDesc}}</p>
        <span class="fss-status">All systems operational</span>
      </div>
      <div><div class="fss-col-title">{{col1Title}}</div><div class="fss-links">{{#col1Links}}<a href="#" class="fss-link">{{.label}}</a>{{/col1Links}}</div></div>
      <div><div class="fss-col-title">{{col2Title}}</div><div class="fss-links">{{#col2Links}}<a href="#" class="fss-link">{{.label}}</a>{{/col2Links}}</div></div>
      <div><div class="fss-col-title">{{col3Title}}</div><div class="fss-links">{{#col3Links}}<a href="#" class="fss-link">{{.label}}</a>{{/col3Links}}</div></div>
    </div>
    <div class="fss-bottom">
      <p class="fss-copy">{{copyright}}</p>
      <div class="fss-right">
        <nav class="fss-legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></nav>
        <div class="fss-socials">
          <a href="#" class="fss-social"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg></a>
          <a href="#" class="fss-social"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" class="fss-social"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</footer>`,
}
