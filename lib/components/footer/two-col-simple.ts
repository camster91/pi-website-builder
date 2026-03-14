import type { ComponentVariant } from '../types'

export const footerTwoColSimple: ComponentVariant = {
  id: 'footer-two-col',
  name: 'Footer Two Column Simple',
  section: 'footer',
  description: 'Simple 2-column footer: left brand + desc, right nav + social. Light. Perfect for small businesses.',
  bestFor: ['local-service', 'beauty', 'fitness', 'restaurant', 'education'],
  tags: ['two-col', 'simple', 'clean', 'light', 'minimal', 'small-business'],
  slots: [
    { name: 'brandName', type: 'text', maxWords: 2, description: 'Brand name', required: true },
    { name: 'brandDesc', type: 'text', maxWords: 15, description: 'Brand description', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright text', required: true },
    {
      name: 'links', type: 'array', description: '6 nav links', required: true,
      minItems: 5, maxItems: 8,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Link', required: true }],
    },
  ],
  css: `/* footer-two-col */
#footer { background: {{BG_SECTION}}; border-top: 1px solid {{BORDER}}; padding: 3rem 0 1.5rem; }
.ftc-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.ftc-main { display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-bottom: 2.5rem; }
@media (min-width: 768px) { .ftc-main { grid-template-columns: 1fr 1fr; align-items: start; } }
.ftc-brand-name { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 900; letter-spacing: -0.03em; color: {{TEXT}}; margin-bottom: 0.75rem; display: block; text-decoration: none; }
.ftc-brand-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.7; }
.ftc-links { display: flex; flex-wrap: wrap; gap: 0.5rem 2rem; }
.ftc-link { font-size: 0.9375rem; color: {{TEXT_SEC}}; text-decoration: none; transition: color 0.2s; }
.ftc-link:hover { color: {{PRIMARY}}; }
.ftc-bottom { border-top: 1px solid {{BORDER}}; padding-top: 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.ftc-copy { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.ftc-legal { display: flex; gap: 1.25rem; }
.ftc-legal a { font-size: 0.8125rem; color: {{TEXT_MUTED}}; text-decoration: none; transition: color 0.2s; }
.ftc-legal a:hover { color: {{PRIMARY}}; }
`,
  template: `<footer id="footer">
  <div class="ftc-inner">
    <div class="ftc-main">
      <div>
        <a href="/" class="ftc-brand-name">{{brandName}}</a>
        <p class="ftc-brand-desc">{{brandDesc}}</p>
      </div>
      <nav class="ftc-links">
        {{#links}}<a href="#" class="ftc-link">{{.label}}</a>{{/links}}
      </nav>
    </div>
    <div class="ftc-bottom">
      <p class="ftc-copy">{{copyright}}</p>
      <nav class="ftc-legal"><a href="#">Privacy</a><a href="#">Terms</a></nav>
    </div>
  </div>
</footer>`,
}
