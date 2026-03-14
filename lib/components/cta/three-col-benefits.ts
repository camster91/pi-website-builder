import type { ComponentVariant } from '../types'

export const ctaThreeColBenefits: ComponentVariant = {
  id: 'cta-three-col',
  name: 'CTA Three Column Benefits',
  section: 'cta',
  description: '3 benefit columns with icon, title, desc — then full-width CTA row below. Trust builder + conversion.',
  bestFor: ['saas', 'education', 'healthcare', 'nonprofit', 'real-estate'],
  tags: ['benefits', 'three-col', 'trust', 'icons', 'pre-cta', 'conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'benefit1Icon', type: 'text', maxWords: 1, description: 'Benefit 1 emoji', required: true },
    { name: 'benefit1Title', type: 'heading', maxWords: 3, description: 'Benefit 1 title', required: true },
    { name: 'benefit1Desc', type: 'text', maxWords: 18, description: 'Benefit 1 description', required: true },
    { name: 'benefit2Icon', type: 'text', maxWords: 1, description: 'Benefit 2 emoji', required: true },
    { name: 'benefit2Title', type: 'heading', maxWords: 3, description: 'Benefit 2 title', required: true },
    { name: 'benefit2Desc', type: 'text', maxWords: 18, description: 'Benefit 2 description', required: true },
    { name: 'benefit3Icon', type: 'text', maxWords: 1, description: 'Benefit 3 emoji', required: true },
    { name: 'benefit3Title', type: 'heading', maxWords: 3, description: 'Benefit 3 title', required: true },
    { name: 'benefit3Desc', type: 'text', maxWords: 18, description: 'Benefit 3 description', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'guaranteeText', type: 'text', maxWords: 10, description: 'Guarantee/trust line', required: false },
  ],
  css: `/* cta-three-col */
#cta-3col {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.c3c-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.c3c-header { text-align: center; max-width: 680px; margin: 0 auto 3.5rem; }
.c3c-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.c3c-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.c3c-heading .accent-word { color: {{ACCENT}}; }
.c3c-benefits { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 4rem; }
@media (min-width: 768px) { .c3c-benefits { grid-template-columns: repeat(3,1fr); } }
.c3c-benefit { text-align: center; padding: 2rem; background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 20px; }
.c3c-icon { font-size: 2.5rem; margin-bottom: 1rem; display: block; }
.c3c-btitle { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.625rem; }
.c3c-bdesc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; }
.c3c-cta-bar {
  background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}});
  border-radius: 24px; padding: 3rem;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 2rem;
}
.c3c-cta-text h3 { font-family: var(--font-heading); font-size: clamp(1.5rem,3vw,2rem); font-weight: 800; color: #fff; margin-bottom: 0.5rem; }
.c3c-cta-text p { font-size: 0.9375rem; color: rgba(255,255,255,0.7); }
.c3c-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.c3c-btn-p { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; background: #fff; color: {{PRIMARY}}; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.c3c-btn-p:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
.c3c-btn-s { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border: 2px solid rgba(255,255,255,0.4); color: #fff; border-radius: 12px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
.c3c-btn-s:hover { background: rgba(255,255,255,0.1); }
.c3c-guarantee { font-size: 0.8125rem; color: rgba(255,255,255,0.55); width: 100%; text-align: center; }
`,
  template: `<section id="cta-3col">
  <div class="c3c-inner">
    <div class="c3c-header">
      <span class="c3c-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="c3c-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="c3c-benefits reveal-stagger">
      <div class="c3c-benefit">
        <span class="c3c-icon">{{benefit1Icon}}</span>
        <h3 class="c3c-btitle">{{benefit1Title}}</h3>
        <p class="c3c-bdesc">{{benefit1Desc}}</p>
      </div>
      <div class="c3c-benefit">
        <span class="c3c-icon">{{benefit2Icon}}</span>
        <h3 class="c3c-btitle">{{benefit2Title}}</h3>
        <p class="c3c-bdesc">{{benefit2Desc}}</p>
      </div>
      <div class="c3c-benefit">
        <span class="c3c-icon">{{benefit3Icon}}</span>
        <h3 class="c3c-btitle">{{benefit3Title}}</h3>
        <p class="c3c-bdesc">{{benefit3Desc}}</p>
      </div>
    </div>
    <div class="c3c-cta-bar reveal">
      <div class="c3c-cta-text">
        <h3>Ready to get started?</h3>
        <p>{{guaranteeText}}</p>
      </div>
      <div class="c3c-btns">
        <a href="#contact" class="c3c-btn-p">{{ctaPrimary}}</a>
        <a href="#features" class="c3c-btn-s">{{ctaSecondary}}</a>
      </div>
    </div>
  </div>
</section>`,
}
