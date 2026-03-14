import type { ComponentVariant } from '../types'

export const comparisonFeatureTable: ComponentVariant = {
  id: 'comparison-table',
  name: 'Comparison Feature Table',
  section: 'comparison' as any,
  description: 'Product vs competitor comparison table with highlighted "Your product" column — SaaS/service businesses',
  bestFor: ['saas', 'fitness', 'beauty', 'education', 'healthcare'],
  tags: ['comparison', 'vs', 'table', 'features', 'competitive', 'saas'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Comparison heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'yourProduct', type: 'text', maxWords: 2, description: 'Your product column name', required: true },
    { name: 'competitor1', type: 'text', maxWords: 2, description: 'Competitor 1 name', required: true },
    { name: 'competitor2', type: 'text', maxWords: 2, description: 'Competitor 2 name', required: true },
    {
      name: 'rows', type: 'array', description: '8 comparison rows', required: true,
      minItems: 8, maxItems: 10,
      itemSlots: [
        { name: 'feature', type: 'text', maxWords: 5, description: 'Feature name', required: true },
        { name: 'you', type: 'text', maxWords: 1, description: '"yes", "no", or custom text', required: true },
        { name: 'comp1', type: 'text', maxWords: 1, description: '"yes", "no", or custom text', required: true },
        { name: 'comp2', type: 'text', maxWords: 1, description: '"yes", "no", or custom text', required: true },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA below table', required: true },
  ],
  css: `/* comparison-table */
#comparison {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.cmp-inner { max-width: 900px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.cmp-header { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; }
.cmp-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.cmp-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.cmp-heading .accent-word { color: {{ACCENT}}; }
/* Table */
.cmp-wrap { overflow-x: auto; border-radius: 16px; border: 1px solid {{BORDER}}; box-shadow: 0 8px 32px rgba(0,0,0,0.06); margin-bottom: 2.5rem; }
.cmp-table { width: 100%; border-collapse: collapse; min-width: 480px; background: {{BG_CARD}}; }
/* Header row */
.cmp-thead th { padding: 1.25rem 1.5rem; text-align: left; border-bottom: 1px solid {{BORDER}}; }
.cmp-thead th:first-child { font-size: 0.8125rem; font-weight: 600; color: {{TEXT_MUTED}}; background: {{BG_CARD}}; }
.cmp-col-you { background: {{PRIMARY}}; }
.cmp-col-you .cmp-col-name { font-family: var(--font-heading); font-size: 1rem; font-weight: 800; color: #fff; }
.cmp-col-you .cmp-col-badge { font-size: 0.6875rem; background: rgba(255,255,255,0.2); color: #fff; padding: 2px 8px; border-radius: 999px; margin-top: 4px; display: inline-block; }
.cmp-col-other .cmp-col-name { font-size: 0.9375rem; font-weight: 600; color: {{TEXT_MUTED}}; }
/* Body rows */
.cmp-row td { padding: 1rem 1.5rem; border-bottom: 1px solid {{BORDER}}; vertical-align: middle; }
.cmp-row:last-child td { border-bottom: none; }
.cmp-row:nth-child(even) td { background: rgba(0,0,0,0.015); }
.cmp-feature { font-size: 0.9375rem; font-weight: 500; color: {{TEXT}}; }
.cmp-cell-you { background: rgba(99,102,241,0.04); text-align: center; }
.cmp-cell-other { text-align: center; }
/* Check / X icons */
.cmp-yes { color: #22c55e; display: flex; justify-content: center; }
.cmp-yes svg { width: 20px; height: 20px; }
.cmp-no { color: {{TEXT_MUTED}}; display: flex; justify-content: center; opacity: 0.4; }
.cmp-no svg { width: 20px; height: 20px; }
.cmp-custom { font-size: 0.8125rem; font-weight: 600; color: {{TEXT_SEC}}; }
.cmp-custom-you { color: {{PRIMARY}}; font-weight: 700; }
/* CTA */
.cmp-footer { text-align: center; }
.cmp-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 32px; background: {{PRIMARY}}; color: #fff;
  border-radius: 12px; font-weight: 700; font-size: 1rem;
  text-decoration: none; transition: all 0.3s;
}
.cmp-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="comparison">
  <div class="cmp-inner">
    <div class="cmp-header">
      <span class="cmp-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="cmp-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="cmp-wrap reveal">
      <table class="cmp-table">
        <thead class="cmp-thead">
          <tr>
            <th></th>
            <th class="cmp-col-you">
              <div class="cmp-col-name">{{yourProduct}}</div>
              <span class="cmp-col-badge">Recommended</span>
            </th>
            <th class="cmp-col-other"><div class="cmp-col-name">{{competitor1}}</div></th>
            <th class="cmp-col-other"><div class="cmp-col-name">{{competitor2}}</div></th>
          </tr>
        </thead>
        <tbody>
          {{#rows}}
          <tr class="cmp-row">
            <td class="cmp-feature">{{.feature}}</td>
            <td class="cmp-cell-you">
              {{#if_yes .you}}<span class="cmp-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>{{/if_yes}}
              {{#if_no .you}}<span class="cmp-no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></span>{{/if_no}}
              <span class="cmp-custom cmp-custom-you">{{.you}}</span>
            </td>
            <td class="cmp-cell-other">
              <span class="cmp-custom">{{.comp1}}</span>
            </td>
            <td class="cmp-cell-other">
              <span class="cmp-custom">{{.comp2}}</span>
            </td>
          </tr>
          {{/rows}}
        </tbody>
      </table>
    </div>
    <div class="cmp-footer reveal">
      <a href="#contact" class="cmp-cta">{{ctaText}}</a>
    </div>
  </div>
</section>`,
}
