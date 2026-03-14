import type { ComponentVariant } from '../types'
export const faqTwoColumn: ComponentVariant = {
  id: 'faq-two-col', name: 'FAQ Two Column Grid', section: 'faq',
  description: '2-column FAQ grid layout — compact, scannable, all visible at once',
  bestFor: ['saas','agency','healthcare','education'], tags: ['two-col','grid','compact','all-visible'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'faqs', type: 'array', description: '8 FAQs', required: true, minItems: 8, maxItems: 8,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 10, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 30, description: 'Answer', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 5, description: 'CTA', required: false },
  ],
  css: `/* faq-two-col */
#faq-2c{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.f2c-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.f2c-hd{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.f2c-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.f2c-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.f2c-h2 .accent-word{color:{{ACCENT}}}
.f2c-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:3rem}
@media(min-width:768px){.f2c-grid{grid-template-columns:repeat(2,1fr)}}
.f2c-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;padding:1.75rem}
.f2c-q{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};margin-bottom:.625rem}
.f2c-a{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.65}
.f2c-ft{text-align:center}
.f2c-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.f2c-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="faq-2c"><div class="f2c-in"><div class="f2c-hd"><span class="f2c-ey reveal">{{eyebrow}}</span><h2 class="f2c-h2 reveal reveal-d1">{{heading}}</h2></div><div class="f2c-grid reveal-stagger">{{#faqs}}<div class="f2c-card"><p class="f2c-q">{{.q}}</p><p class="f2c-a">{{.a}}</p></div>{{/faqs}}</div><div class="f2c-ft reveal"><a href="#contact" class="f2c-cta">{{ctaText}} →</a></div></div></section>`,
}
