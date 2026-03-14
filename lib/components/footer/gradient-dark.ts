import type { ComponentVariant } from '../types'

export const footerGradientDark: ComponentVariant = {
  id: 'footer-gradient',
  name: 'Footer Gradient Dark',
  section: 'footer',
  description: 'Dramatic gradient dark footer with large brand name, short tagline, horizontal links, and social icons',
  bestFor: ['agency', 'fitness', 'beauty', 'saas', 'portfolio'],
  tags: ['gradient', 'dark', 'dramatic', 'brand', 'minimal', 'premium'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'tagline', type: 'text', maxWords: 10, description: 'Brand tagline', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright', required: true },
    {
      name: 'links', type: 'array', description: '5 footer links', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
  ],
  css: `/* footer-gradient */
#footer {
  background: linear-gradient(135deg, #0a0f1e, #1a0f3e, #0a1520);
  padding: 4rem 0 2rem;
  position: relative; overflow: hidden;
}
.fgd-glow { position: absolute; width: 500px; height: 500px; border-radius: 50%; background: {{PRIMARY}}; opacity: 0.07; filter: blur(100px); bottom: -200px; right: -100px; pointer-events: none; }
.fgd-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fgd-top { text-align: center; margin-bottom: 3rem; }
.fgd-brand { font-family: var(--font-heading); font-size: clamp(2.5rem,5vw,5rem); font-weight: 900; letter-spacing: -0.05em; color: rgba(255,255,255,0.12); display: block; line-height: 1; margin-bottom: 1rem; text-decoration: none; transition: color 0.3s; }
.fgd-brand:hover { color: rgba(255,255,255,0.25); }
.fgd-tagline { font-size: 1.0625rem; color: rgba(255,255,255,0.45); }
.fgd-divider { height: 1px; background: rgba(255,255,255,0.06); margin-bottom: 2rem; }
.fgd-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
.fgd-links { display: flex; flex-wrap: wrap; gap: 0.25rem 1.5rem; }
.fgd-link { font-size: 0.875rem; color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
.fgd-link:hover { color: rgba(255,255,255,0.75); }
.fgd-right { display: flex; align-items: center; gap: 1.5rem; }
.fgd-copy { font-size: 0.8125rem; color: rgba(255,255,255,0.25); }
.fgd-socials { display: flex; gap: 0.75rem; }
.fgd-social { width: 32px; height: 32px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.35); text-decoration: none; transition: all 0.2s; }
.fgd-social:hover { color: #fff; border-color: rgba(255,255,255,0.3); }
.fgd-social svg { width: 14px; height: 14px; }
`,
  template: `<footer id="footer">
  <div class="fgd-glow"></div>
  <div class="fgd-inner">
    <div class="fgd-top">
      <a href="/" class="fgd-brand">{{brandName}}</a>
      <p class="fgd-tagline">{{tagline}}</p>
    </div>
    <div class="fgd-divider"></div>
    <div class="fgd-bottom">
      <nav class="fgd-links">
        {{#links}}<a href="#" class="fgd-link">{{.label}}</a>{{/links}}
      </nav>
      <div class="fgd-right">
        <p class="fgd-copy">{{copyright}}</p>
        <div class="fgd-socials">
          <a href="#" class="fgd-social"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg></a>
          <a href="#" class="fgd-social"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="#" class="fgd-social"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>
      </div>
    </div>
  </div>
</footer>`,
}
