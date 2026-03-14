import type { ComponentVariant } from '../types'

export const featuresTwoColList: ComponentVariant = {
  id: 'features-two-col-list',
  name: 'Features Two Column List',
  section: 'features',
  description: 'Clean 2-column bullet list with left image + right 2x4 feature list — simple, readable, enterprise friendly',
  bestFor: ['healthcare', 'nonprofit', 'local-service', 'real-estate', 'education', 'fitness'],
  tags: ['list', 'clean', 'enterprise', 'simple', 'readable', 'detailed'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Section description', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button text', required: true },
    {
      name: 'features', type: 'array', description: '8 feature items', required: true,
      minItems: 8, maxItems: 8,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 3, description: 'Feature title', required: true },
        { name: 'desc', type: 'text', maxWords: 12, description: 'Feature description', required: true },
      ],
    },
  ],
  css: `/* features-two-col-list */
#features-2col {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.f2c-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem; align-items: center;
}
@media (min-width: 1024px) { .f2c-inner { grid-template-columns: 42% 1fr; } }
.f2c-eyebrow {
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
  display: block;
}
.f2c-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.f2c-heading .accent-word { color: {{ACCENT}}; }
.f2c-sub { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.75; margin-bottom: 2rem; }
.f2c-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; background: {{PRIMARY}}; color: #fff;
  border-radius: 10px; font-weight: 700; text-decoration: none;
  transition: all 0.3s;
}
.f2c-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
/* Right feature list */
.f2c-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
@media (max-width: 640px) { .f2c-list { grid-template-columns: 1fr; } }
.f2c-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 1.25rem;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.f2c-item:hover { border-color: {{PRIMARY}}; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.f2c-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: {{PRIMARY}}; flex-shrink: 0; margin-top: 6px;
}
.f2c-item-title {
  font-size: 0.9375rem; font-weight: 700; color: {{TEXT}};
  margin-bottom: 4px; letter-spacing: -0.01em;
}
.f2c-item-desc { font-size: 0.8125rem; color: {{TEXT_SEC}}; line-height: 1.55; }
`,
  template: `<section id="features-2col">
  <div class="f2c-inner">
    <div class="reveal-left">
      <span class="f2c-eyebrow">{{eyebrow}}</span>
      <h2 class="f2c-heading">{{heading}}</h2>
      <p class="f2c-sub">{{subtext}}</p>
      <a href="#contact" class="f2c-cta">
        {{ctaText}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
    <div class="f2c-list reveal-stagger">
      {{#features}}
      <div class="f2c-item">
        <span class="f2c-dot"></span>
        <div>
          <div class="f2c-item-title">{{.title}}</div>
          <div class="f2c-item-desc">{{.desc}}</div>
        </div>
      </div>
      {{/features}}
    </div>
  </div>
</section>`,
}
