import type { ComponentVariant } from '../types'

export const footerDarkRich: ComponentVariant = {
  id: 'footer-dark-rich',
  name: 'Footer Dark Rich with Newsletter',
  section: 'footer',
  description: 'Dark full-featured footer with newsletter capture at top, 4 link columns, social icons, and legal links at bottom',
  bestFor: ['saas', 'ecommerce', 'agency', 'education', 'nonprofit'],
  tags: ['dark', 'rich', 'newsletter', 'multi-column', 'full', 'ecommerce'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'brandDesc', type: 'text', maxWords: 15, description: 'Brand description', required: true },
    { name: 'newsletterHeading', type: 'heading', maxWords: 6, description: 'Newsletter CTA heading', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 3, description: 'Email input placeholder', required: true },
    { name: 'col1Title', type: 'text', maxWords: 2, description: 'Column 1 title', required: true },
    { name: 'col2Title', type: 'text', maxWords: 2, description: 'Column 2 title', required: true },
    { name: 'col3Title', type: 'text', maxWords: 2, description: 'Column 3 title', required: true },
    {
      name: 'col1Links', type: 'array', description: '4 links col 1', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
    {
      name: 'col2Links', type: 'array', description: '4 links col 2', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
    {
      name: 'col3Links', type: 'array', description: '4 links col 3', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright', required: true },
  ],
  css: `/* footer-dark-rich */
#footer {
  background: #080c14;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.fdr-nl {
  border-bottom: 1px solid rgba(255,255,255,0.06);
  padding: 3rem 0;
}
.fdr-nl-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1.5rem;
}
.fdr-nl-heading { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: #fff; }
.fdr-nl-form { display: flex; gap: 0; border-radius: 10px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12); }
.fdr-nl-input {
  padding: 11px 16px; background: rgba(255,255,255,0.04); border: none; outline: none;
  color: #fff; font-family: var(--font-body); font-size: 0.9375rem; min-width: 260px;
}
.fdr-nl-input::placeholder { color: rgba(255,255,255,0.3); }
.fdr-nl-btn {
  padding: 11px 20px; background: {{PRIMARY}}; color: #fff;
  border: none; font-weight: 700; font-size: 0.875rem;
  font-family: var(--font-body); cursor: pointer; white-space: nowrap;
  transition: background 0.3s;
}
.fdr-nl-btn:hover { background: {{PRIMARY_DARK}}; }
/* Main footer grid */
.fdr-main {
  max-width: 1280px; margin: 0 auto;
  padding: 3.5rem clamp(1.5rem, 5vw, 3rem) 3rem;
  display: grid; grid-template-columns: 2fr repeat(3, 1fr);
  gap: 3rem;
}
@media (max-width: 768px) { .fdr-main { grid-template-columns: 1fr 1fr; gap: 2rem; } }
@media (max-width: 480px) { .fdr-main { grid-template-columns: 1fr; } }
.fdr-brand-name {
  font-family: var(--font-heading); font-size: 1.25rem; font-weight: 900;
  letter-spacing: -0.03em; color: #fff; margin-bottom: 0.75rem; display: block; text-decoration: none;
}
.fdr-brand-desc { font-size: 0.875rem; color: rgba(255,255,255,0.4); line-height: 1.65; margin-bottom: 1.5rem; }
.fdr-socials { display: flex; gap: 0.625rem; }
.fdr-social {
  width: 32px; height: 32px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.45); text-decoration: none;
  transition: all 0.2s;
}
.fdr-social:hover { color: #fff; border-color: rgba(255,255,255,0.3); }
.fdr-social svg { width: 14px; height: 14px; }
.fdr-col-title { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 1.25rem; }
.fdr-links { display: flex; flex-direction: column; gap: 0.75rem; }
.fdr-link { font-size: 0.875rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
.fdr-link:hover { color: #fff; }
/* Bottom bar */
.fdr-bottom {
  border-top: 1px solid rgba(255,255,255,0.06);
  max-width: 1280px; margin: 0 auto;
  padding: 1.5rem clamp(1.5rem, 5vw, 3rem);
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem;
}
.fdr-copy { font-size: 0.8125rem; color: rgba(255,255,255,0.25); }
.fdr-legal { display: flex; gap: 1.5rem; }
.fdr-legal a { font-size: 0.8125rem; color: rgba(255,255,255,0.25); text-decoration: none; transition: color 0.2s; }
.fdr-legal a:hover { color: rgba(255,255,255,0.6); }
`,
  template: `<footer id="footer">
  <div class="fdr-nl">
    <div class="fdr-nl-inner">
      <h3 class="fdr-nl-heading">{{newsletterHeading}}</h3>
      <form onsubmit="return false" style="display:flex">
        <div class="fdr-nl-form">
          <input class="fdr-nl-input" type="email" placeholder="{{emailPlaceholder}}">
          <button type="submit" class="fdr-nl-btn">Subscribe</button>
        </div>
      </form>
    </div>
  </div>
  <div class="fdr-main">
    <div>
      <a href="/" class="fdr-brand-name">{{brandName}}</a>
      <p class="fdr-brand-desc">{{brandDesc}}</p>
      <div class="fdr-socials">
        <a href="#" class="fdr-social" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg></a>
        <a href="#" class="fdr-social" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        <a href="#" class="fdr-social" aria-label="GitHub"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
      </div>
    </div>
    <div>
      <div class="fdr-col-title">{{col1Title}}</div>
      <div class="fdr-links">
        {{#col1Links}}<a href="#" class="fdr-link">{{.label}}</a>{{/col1Links}}
      </div>
    </div>
    <div>
      <div class="fdr-col-title">{{col2Title}}</div>
      <div class="fdr-links">
        {{#col2Links}}<a href="#" class="fdr-link">{{.label}}</a>{{/col2Links}}
      </div>
    </div>
    <div>
      <div class="fdr-col-title">{{col3Title}}</div>
      <div class="fdr-links">
        {{#col3Links}}<a href="#" class="fdr-link">{{.label}}</a>{{/col3Links}}
      </div>
    </div>
  </div>
  <div class="fdr-bottom">
    <p class="fdr-copy">{{copyright}}</p>
    <nav class="fdr-legal">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Cookies</a>
    </nav>
  </div>
</footer>`,
}
