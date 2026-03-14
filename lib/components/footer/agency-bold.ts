import type { ComponentVariant } from '../types'

export const footerAgencyBold: ComponentVariant = {
  id: 'footer-agency',
  name: 'Footer Agency Bold',
  section: 'footer',
  description: 'Bold agency footer: giant faded brand name background, CTA row, minimal links, location info',
  bestFor: ['agency', 'portfolio', 'fitness', 'beauty'],
  tags: ['agency', 'bold', 'typographic', 'creative', 'dark', 'oversized-text'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'ctaHeading', type: 'heading', maxWords: 6, description: 'Final CTA heading', required: true },
    { name: 'ctaBtn', type: 'cta-text', maxWords: 3, description: 'CTA button text', required: true },
    { name: 'location', type: 'text', maxWords: 4, description: 'City/location', required: false },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright', required: true },
    {
      name: 'links', type: 'array', description: '5 footer links', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
  ],
  css: `/* footer-agency */
#footer {
  background: #080c14;
  padding: 5rem 0 2rem;
  position: relative; overflow: hidden;
}
.fab-bg-text {
  position: absolute; bottom: -0.15em; left: 0; right: 0;
  font-family: var(--font-heading); font-size: clamp(6rem,15vw,14rem); font-weight: 900;
  letter-spacing: -0.05em; color: rgba(255,255,255,0.025);
  text-align: center; line-height: 1; pointer-events: none; user-select: none;
  white-space: nowrap; overflow: hidden;
}
.fab-inner { position: relative; z-index: 1; max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fab-cta-row { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 2rem; margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid rgba(255,255,255,0.06); }
.fab-cta-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3.5rem); font-weight: 900; letter-spacing: -0.04em; color: #fff; line-height: 1.05; }
.fab-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; border: 2px solid rgba(255,255,255,0.2); color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; white-space: nowrap; }
.fab-btn:hover { background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.4); }
.fab-bottom { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
.fab-links { display: flex; flex-wrap: wrap; gap: 0.25rem 1.5rem; }
.fab-link { font-size: 0.875rem; color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s; }
.fab-link:hover { color: rgba(255,255,255,0.7); }
.fab-right { display: flex; align-items: center; gap: 1.5rem; }
.fab-copy { font-size: 0.8125rem; color: rgba(255,255,255,0.2); }
.fab-loc { font-size: 0.8125rem; color: rgba(255,255,255,0.3); display: flex; align-items: center; gap: 4px; }
`,
  template: `<footer id="footer">
  <div class="fab-bg-text" aria-hidden="true">{{brandName}}</div>
  <div class="fab-inner">
    <div class="fab-cta-row">
      <h3 class="fab-cta-heading">{{ctaHeading}}</h3>
      <a href="#contact" class="fab-btn">{{ctaBtn}} →</a>
    </div>
    <div class="fab-bottom">
      <nav class="fab-links">
        {{#links}}<a href="#" class="fab-link">{{.label}}</a>{{/links}}
      </nav>
      <div class="fab-right">
        <span class="fab-loc">📍 {{location}}</span>
        <p class="fab-copy">{{copyright}}</p>
      </div>
    </div>
  </div>
</footer>`,
}
