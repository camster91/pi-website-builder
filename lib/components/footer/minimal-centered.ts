import type { ComponentVariant } from '../types'

export const footerMinimalCentered: ComponentVariant = {
  id: 'footer-minimal',
  name: 'Footer Minimal Centered',
  section: 'footer',
  description: 'Ultra-minimal centered footer with logo, a few nav links, social icons, and copyright — clean, modern',
  bestFor: ['agency', 'portfolio', 'saas', 'ecommerce'],
  tags: ['minimal', 'centered', 'clean', 'simple', 'modern', 'light'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand/company name', required: true },
    { name: 'tagline', type: 'text', maxWords: 8, description: 'Short brand tagline', required: false },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright text', required: true },
    {
      name: 'links', type: 'array', description: '4-6 footer navigation links', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link label', required: true }],
    },
  ],
  css: `/* footer-minimal */
#footer {
  background: {{BG_SECTION}};
  border-top: 1px solid {{BORDER}};
  padding: 3rem 0 2rem;
}
.fm-inner {
  max-width: 960px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: flex; flex-direction: column;
  align-items: center; gap: 1.5rem;
}
.fm-brand {
  font-family: var(--font-heading);
  font-size: 1.25rem; font-weight: 900;
  letter-spacing: -0.03em; color: {{TEXT}};
  text-decoration: none;
}
.fm-brand span { color: {{PRIMARY}}; }
.fm-tagline { font-size: 0.875rem; color: {{TEXT_MUTED}}; text-align: center; }
.fm-links {
  display: flex; flex-wrap: wrap; justify-content: center; gap: 0.25rem 1.5rem;
}
.fm-link {
  font-size: 0.875rem; color: {{TEXT_SEC}};
  text-decoration: none; transition: color 0.2s;
}
.fm-link:hover { color: {{PRIMARY}}; }
.fm-divider { width: 100%; height: 1px; background: {{BORDER}}; }
.fm-bottom {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; flex-wrap: wrap; gap: 1rem;
}
.fm-copy { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.fm-socials { display: flex; gap: 0.75rem; }
.fm-social {
  width: 32px; height: 32px; border-radius: 8px;
  border: 1px solid {{BORDER}};
  display: flex; align-items: center; justify-content: center;
  color: {{TEXT_MUTED}}; text-decoration: none;
  transition: all 0.2s;
}
.fm-social:hover { color: {{PRIMARY}}; border-color: {{PRIMARY}}; }
.fm-social svg { width: 14px; height: 14px; }
`,
  template: `<footer id="footer">
  <div class="fm-inner">
    <a href="/" class="fm-brand">{{brandName}}</a>
    <p class="fm-tagline">{{tagline}}</p>
    <nav class="fm-links">
      {{#links}}
      <a href="#" class="fm-link">{{.label}}</a>
      {{/links}}
    </nav>
    <div class="fm-divider"></div>
    <div class="fm-bottom">
      <p class="fm-copy">{{copyright}}</p>
      <div class="fm-socials">
        <a href="#" class="fm-social" aria-label="Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        </a>
        <a href="#" class="fm-social" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="#" class="fm-social" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
      </div>
    </div>
  </div>
</footer>`,
}
