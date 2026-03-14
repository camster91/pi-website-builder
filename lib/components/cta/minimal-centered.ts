import type { ComponentVariant } from '../types'

export const ctaMinimalCentered: ComponentVariant = {
  id: 'cta-minimal',
  name: 'CTA Minimal Centered',
  section: 'cta',
  description: 'Ultra-minimal centered CTA — big heading, one-line sub, two buttons, lots of white space. Clean and direct.',
  bestFor: ['agency', 'portfolio', 'saas', 'ecommerce'],
  tags: ['minimal', 'clean', 'centered', 'whitespace', 'direct', 'simple'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Bold CTA heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent words', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'One line of supporting copy', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
  ],
  css: `/* cta-minimal */
#cta-min {
  background: {{BG}};
  padding: clamp(6rem, 12vw, 10rem) 0;
  text-align: center;
  border-top: 1px solid {{BORDER}};
}
.cmin-inner { max-width: 760px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.cmin-h2 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900; letter-spacing: -0.05em;
  line-height: 1.0; color: {{TEXT}};
  margin-bottom: 1.25rem;
}
.cmin-h2 .accent-word { color: {{PRIMARY}}; }
.cmin-sub { font-size: clamp(1rem, 1.5vw, 1.1875rem); color: {{TEXT_SEC}}; line-height: 1.7; margin-bottom: 2.5rem; }
.cmin-ctas { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
.cmin-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 16px 40px; background: {{TEXT}}; color: {{BG}};
  border-radius: 999px; font-weight: 800; font-size: 1.0625rem;
  text-decoration: none; transition: all 0.3s;
}
.cmin-btn-p:hover { background: {{PRIMARY}}; transform: scale(1.04); }
.cmin-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 16px 32px; border: 2px solid {{BORDER}};
  color: {{TEXT}}; border-radius: 999px;
  font-weight: 600; font-size: 1.0625rem;
  text-decoration: none; transition: all 0.3s;
}
.cmin-btn-s:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
`,
  template: `<section id="cta-min">
  <div class="cmin-inner">
    <h2 class="cmin-h2 reveal">{{heading}}</h2>
    <p class="cmin-sub reveal reveal-d1">{{subtext}}</p>
    <div class="cmin-ctas reveal reveal-d2">
      <a href="#contact" class="cmin-btn-p">{{ctaPrimary}}</a>
      <a href="#features" class="cmin-btn-s">{{ctaSecondary}}</a>
    </div>
  </div>
</section>`,
}
