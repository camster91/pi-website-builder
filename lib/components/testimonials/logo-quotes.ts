import type { ComponentVariant } from '../types'

export const testimonialsLogoQuotes: ComponentVariant = {
  id: 'testimonials-logo-quotes',
  name: 'Testimonials Company Logo + Quotes',
  section: 'testimonials',
  description: '3 large company logos with testimonial quote below each + person avatar — B2B enterprise trust signal',
  bestFor: ['saas', 'agency', 'healthcare', 'education', 'nonprofit'],
  tags: ['B2B', 'logos', 'enterprise', 'clean', 'corporate', 'quotes', 'brands'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    {
      name: 'companies', type: 'array', description: '3 company quotes', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'companyName', type: 'text', maxWords: 2, description: 'Company name', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-char company initials', required: true },
        { name: 'quote', type: 'text', maxWords: 35, description: 'Testimonial quote', required: true },
        { name: 'personName', type: 'text', maxWords: 3, description: 'Person name', required: true },
        { name: 'personRole', type: 'text', maxWords: 4, description: 'Person role', required: true },
        { name: 'personInitials', type: 'text', maxWords: 1, description: 'Person initials', required: true },
      ],
    },
  ],
  css: `/* testimonials-logo-quotes */
#testimonials-lq {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
  border-top: 1px solid {{BORDER}};
  border-bottom: 1px solid {{BORDER}};
}
.tlq-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.tlq-header { text-align: center; max-width: 640px; margin: 0 auto 4rem; }
.tlq-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.tlq-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Grid */
.tlq-grid { display: grid; grid-template-columns: 1fr; gap: 0; }
@media (min-width: 768px) {
  .tlq-grid { grid-template-columns: repeat(3,1fr); gap: 0; }
  .tlq-item + .tlq-item { border-left: 1px solid {{BORDER}}; }
}
.tlq-item { padding: 2.5rem; display: flex; flex-direction: column; }
.tlq-item + .tlq-item { border-top: 1px solid {{BORDER}}; }
@media (min-width: 768px) { .tlq-item + .tlq-item { border-top: none; } }
/* Company logo area */
.tlq-logo-area { margin-bottom: 2rem; }
.tlq-logo-name {
  font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900;
  letter-spacing: -0.04em; color: {{TEXT}}; opacity: 0.2;
  transition: opacity 0.3s;
}
.tlq-item:hover .tlq-logo-name { opacity: 0.5; }
/* Divider */
.tlq-divider { width: 40px; height: 2px; background: {{PRIMARY}}; margin-bottom: 1.5rem; }
/* Quote */
.tlq-quote { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.75; font-style: italic; flex: 1; margin-bottom: 2rem; }
/* Person */
.tlq-person { display: flex; align-items: center; gap: 0.875rem; }
.tlq-avatar { width: 40px; height: 40px; border-radius: 50%; background: rgba(99,102,241,0.1); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 800; flex-shrink: 0; }
.tlq-item:nth-child(2) .tlq-avatar { background: rgba(245,158,11,0.1); color: {{ACCENT}}; }
.tlq-item:nth-child(3) .tlq-avatar { background: rgba(139,92,246,0.1); color: #8b5cf6; }
.tlq-pname { font-weight: 700; font-size: 0.9375rem; color: {{TEXT}}; }
.tlq-prole { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="testimonials-lq">
  <div class="tlq-inner">
    <div class="tlq-header">
      <span class="tlq-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="tlq-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="tlq-grid reveal-stagger">
      {{#companies}}
      <div class="tlq-item">
        <div class="tlq-logo-area"><div class="tlq-logo-name">{{.companyName}}</div></div>
        <div class="tlq-divider"></div>
        <p class="tlq-quote">&ldquo;{{.quote}}&rdquo;</p>
        <div class="tlq-person">
          <div class="tlq-avatar">{{.personInitials}}</div>
          <div><div class="tlq-pname">{{.personName}}</div><div class="tlq-prole">{{.personRole}}</div></div>
        </div>
      </div>
      {{/companies}}
    </div>
  </div>
</section>`,
}
