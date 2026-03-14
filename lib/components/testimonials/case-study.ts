import type { ComponentVariant } from '../types'

export const testimonialsCaseStudy: ComponentVariant = {
  id: 'testimonials-case-study',
  name: 'Testimonials Case Study Cards',
  section: 'testimonials',
  description: '2 detailed case study cards: company, challenge, solution, result metrics — B2B enterprise social proof',
  bestFor: ['saas', 'agency', 'healthcare', 'education', 'nonprofit'],
  tags: ['case-study', 'results', 'metrics', 'enterprise', 'B2B', 'detailed', 'challenge-solution'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    {
      name: 'cases', type: 'array', description: '2 case studies', required: true,
      minItems: 2, maxItems: 2,
      itemSlots: [
        { name: 'companyName', type: 'text', maxWords: 3, description: 'Company name', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-char initials', required: true },
        { name: 'industry', type: 'text', maxWords: 2, description: 'Industry label', required: true },
        { name: 'challenge', type: 'text', maxWords: 25, description: 'The challenge', required: true },
        { name: 'solution', type: 'text', maxWords: 25, description: 'The solution', required: true },
        { name: 'stat1Value', type: 'stat-value', maxWords: 1, description: 'Stat 1 value', required: true },
        { name: 'stat1Label', type: 'text', maxWords: 3, description: 'Stat 1 label', required: true },
        { name: 'stat2Value', type: 'stat-value', maxWords: 1, description: 'Stat 2 value', required: true },
        { name: 'stat2Label', type: 'text', maxWords: 3, description: 'Stat 2 label', required: true },
        { name: 'quote', type: 'text', maxWords: 30, description: 'Client quote', required: true },
        { name: 'personName', type: 'text', maxWords: 3, description: 'Quote person name', required: true },
        { name: 'personRole', type: 'text', maxWords: 4, description: 'Quote person role', required: true },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'CTA text', required: false },
  ],
  css: `/* testimonials-case-study */
#testimonials-cs {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.tcs-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.tcs-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.tcs-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.tcs-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.tcs-heading .accent-word { color: {{ACCENT}}; }
.tcs-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 1024px) { .tcs-grid { grid-template-columns: repeat(2,1fr); } }
.tcs-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
/* Card header */
.tcs-card-head {
  padding: 1.75rem 2rem;
  border-bottom: 1px solid {{BORDER}};
  display: flex; align-items: center; justify-content: space-between;
}
.tcs-company { display: flex; align-items: center; gap: 0.875rem; }
.tcs-logo { width: 48px; height: 48px; border-radius: 12px; background: rgba(99,102,241,0.1); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 1rem; font-weight: 800; }
.tcs-card:nth-child(2) .tcs-logo { background: rgba(245,158,11,0.1); color: {{ACCENT}}; }
.tcs-company-name { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 800; color: {{TEXT}}; }
.tcs-industry { display: inline-block; font-size: 0.75rem; font-weight: 600; padding: 3px 10px; background: rgba(99,102,241,0.08); color: {{PRIMARY}}; border-radius: 999px; }
/* Body */
.tcs-body { padding: 2rem; }
.tcs-section-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 0.5rem; }
.tcs-text { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; margin-bottom: 1.5rem; }
/* Results row */
.tcs-results { display: flex; gap: 2rem; padding: 1.25rem 0; border-top: 1px solid {{BORDER}}; border-bottom: 1px solid {{BORDER}}; margin-bottom: 1.5rem; }
.tcs-stat-val { font-family: var(--font-heading); font-size: 2rem; font-weight: 900; letter-spacing: -0.04em; color: {{PRIMARY}}; display: block; line-height: 1; }
.tcs-stat-lbl { font-size: 0.8125rem; color: {{TEXT_MUTED}}; margin-top: 4px; }
/* Quote */
.tcs-quote-block { background: {{BG_SECTION}}; border-radius: 12px; padding: 1.25rem; }
.tcs-quote-text { font-size: 0.9375rem; font-style: italic; color: {{TEXT}}; line-height: 1.65; margin-bottom: 0.875rem; }
.tcs-quotee { font-size: 0.8125rem; font-weight: 700; color: {{TEXT_MUTED}}; }
/* Footer CTA */
.tcs-footer { text-align: center; margin-top: 3rem; }
.tcs-cta { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; border: 2px solid {{BORDER}}; color: {{TEXT}}; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.tcs-cta:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
`,
  template: `<section id="testimonials-cs">
  <div class="tcs-inner">
    <div class="tcs-header">
      <span class="tcs-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="tcs-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="tcs-grid reveal-stagger">
      {{#cases}}
      <div class="tcs-card">
        <div class="tcs-card-head">
          <div class="tcs-company">
            <div class="tcs-logo">{{.initials}}</div>
            <div>
              <div class="tcs-company-name">{{.companyName}}</div>
              <span class="tcs-industry">{{.industry}}</span>
            </div>
          </div>
        </div>
        <div class="tcs-body">
          <div class="tcs-section-label">Challenge</div>
          <p class="tcs-text">{{.challenge}}</p>
          <div class="tcs-section-label">Solution</div>
          <p class="tcs-text">{{.solution}}</p>
          <div class="tcs-results">
            <div><span class="tcs-stat-val">{{.stat1Value}}</span><span class="tcs-stat-lbl">{{.stat1Label}}</span></div>
            <div><span class="tcs-stat-val">{{.stat2Value}}</span><span class="tcs-stat-lbl">{{.stat2Label}}</span></div>
          </div>
          <div class="tcs-quote-block">
            <p class="tcs-quote-text">&ldquo;{{.quote}}&rdquo;</p>
            <span class="tcs-quotee">— {{.personName}}, {{.personRole}}</span>
          </div>
        </div>
      </div>
      {{/cases}}
    </div>
    <div class="tcs-footer reveal">
      <a href="#contact" class="tcs-cta">{{ctaText}} →</a>
    </div>
  </div>
</section>`,
}
