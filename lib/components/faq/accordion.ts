import type { ComponentVariant } from '../types'

export const faqAccordion: ComponentVariant = {
  id: 'faq-accordion',
  name: 'FAQ Accordion',
  section: 'faq' as any,
  description: 'Side-by-side FAQ layout with heading and CTA on left, smooth accordion on right',
  bestFor: ['healthcare', 'saas', 'real-estate', 'education', 'fitness', 'beauty', 'local-service', 'nonprofit', 'restaurant', 'agency'],
  tags: ['faq', 'accordion', 'questions', 'trust', 'informational', 'conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'text', maxWords: 20, description: 'Section subtext', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button text', required: true },
    {
      name: 'faqs', type: 'array', description: '8 FAQ items', required: true,
      minItems: 6, maxItems: 8,
      itemSlots: [
        { name: 'question', type: 'text', maxWords: 12, description: 'FAQ question', required: true },
        { name: 'answer', type: 'text', maxWords: 40, description: 'FAQ answer', required: true },
      ],
    },
  ],
  css: `/* faq-accordion */
#faq {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.faq-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: start;
}
@media (min-width: 1024px) {
  .faq-inner { grid-template-columns: 38% 1fr; gap: 6rem; }
}

/* Left heading side */
.faq-left { position: sticky; top: 7rem; }
.faq-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.faq-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1.25rem;
}
.faq-heading .accent-word { color: {{ACCENT}}; }
.faq-sub {
  font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.75;
  margin-bottom: 2rem;
}
.faq-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; background: {{PRIMARY}}; color: #fff;
  border-radius: 10px; font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.faq-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }

/* Illustration for left side */
.faq-illustration {
  margin-top: 2rem;
  padding: 1.5rem;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 0.875rem;
}
.faq-illus-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: {{PRIMARY}};
  opacity: 0.12;
  flex-shrink: 0;
}
.faq-illus-text { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.5; }
.faq-illus-text strong { color: {{TEXT}}; display: block; margin-bottom: 2px; }

/* Accordion list */
.faq-list { display: flex; flex-direction: column; gap: 0; }
.accordion-item {
  border-bottom: 1px solid {{BORDER}};
}
.accordion-item:first-child { border-top: 1px solid {{BORDER}}; }
.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
}
.accordion-q {
  font-size: 1rem; font-weight: 600;
  color: {{TEXT}};
  line-height: 1.4;
}
.accordion-icon {
  flex-shrink: 0;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: {{BG}};
  border: 1px solid {{BORDER}};
  display: flex; align-items: center; justify-content: center;
  color: {{PRIMARY}};
  transition: transform 0.35s ease, background 0.2s, border-color 0.2s;
}
.accordion-icon svg { width: 14px; height: 14px; }
.accordion-item.open .accordion-icon {
  transform: rotate(45deg);
  background: {{PRIMARY}};
  border-color: {{PRIMARY}};
  color: #fff;
}
.accordion-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.accordion-item.open .accordion-body { grid-template-rows: 1fr; }
.accordion-body > div { overflow: hidden; }
.accordion-a {
  padding-bottom: 1.25rem;
  font-size: 0.9375rem;
  color: {{TEXT_SEC}};
  line-height: 1.75;
  padding-right: 2rem;
}
`,
  template: `<section id="faq">
  <div class="faq-inner">
    <!-- Left heading + CTA -->
    <div class="faq-left">
      <span class="faq-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="faq-heading reveal reveal-d1">{{heading}}</h2>
      <p class="faq-sub reveal reveal-d2">{{subtext}}</p>
      <a href="#contact" class="faq-cta reveal reveal-d3">{{ctaText}}</a>
      <div class="faq-illustration reveal reveal-d4">
        <div class="faq-illus-icon"></div>
        <div class="faq-illus-text">
          <strong>Still have questions?</strong>
          Our team typically responds within 24 hours.
        </div>
      </div>
    </div>

    <!-- Accordion -->
    <div class="faq-list reveal">
      {{#faqs}}
      <div class="accordion-item">
        <button class="accordion-trigger" aria-expanded="false">
          <span class="accordion-q">{{.question}}</span>
          <span class="accordion-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </span>
        </button>
        <div class="accordion-body">
          <div><p class="accordion-a">{{.answer}}</p></div>
        </div>
      </div>
      {{/faqs}}
    </div>
  </div>
</section>`,
}
