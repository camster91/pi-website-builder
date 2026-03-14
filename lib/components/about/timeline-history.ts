import type { ComponentVariant } from '../types'

export const aboutTimelineHistory: ComponentVariant = {
  id: 'about-timeline',
  name: 'About Company Timeline',
  section: 'about',
  description: 'Company history timeline with years, milestone titles, descriptions — left/right alternating on desktop',
  bestFor: ['agency', 'nonprofit', 'healthcare', 'education', 'real-estate', 'local-service'],
  tags: ['timeline', 'history', 'milestones', 'company-story', 'alternating', 'years'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'milestones', type: 'array', description: '5 timeline milestones', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'year', type: 'text', maxWords: 1, description: 'Year', required: true },
        { name: 'title', type: 'heading', maxWords: 5, description: 'Milestone title', required: true },
        { name: 'desc', type: 'text', maxWords: 22, description: 'Milestone description', required: true },
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Milestone emoji', required: true },
      ],
    },
  ],
  css: `/* about-timeline */
#about-tl {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.atl-inner { max-width: 900px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.atl-header { text-align: center; margin-bottom: 4rem; }
.atl-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.atl-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.atl-heading .accent-word { color: {{ACCENT}}; }
.atl-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Timeline */
.atl-list { position: relative; display: flex; flex-direction: column; gap: 2.5rem; }
.atl-list::before { content: ''; position: absolute; left: 28px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom,{{PRIMARY}},{{ACCENT}}); opacity: 0.2; }
@media (min-width: 768px) { .atl-list::before { left: 50%; transform: translateX(-50%); } }
.atl-item { position: relative; display: flex; gap: 1.5rem; }
@media (min-width: 768px) {
  .atl-item { align-items: flex-start; }
  .atl-item:nth-child(even) { flex-direction: row-reverse; }
  .atl-item:nth-child(even) .atl-card { text-align: right; }
  .atl-item { justify-content: flex-end; }
  .atl-item:nth-child(odd) { justify-content: flex-start; }
  .atl-card { width: calc(50% - 60px); }
}
/* Circle node */
.atl-node {
  width: 56px; height: 56px; border-radius: 50%;
  background: {{BG_CARD}}; border: 2px solid {{PRIMARY}};
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; font-size: 1.25rem;
  box-shadow: 0 0 0 6px {{BG_SECTION}};
  position: relative; z-index: 1;
}
@media (min-width: 768px) { .atl-node { position: absolute; left: 50%; transform: translateX(-50%); } }
.atl-card { padding: 1.5rem; background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 16px; flex: 1; }
@media (min-width: 768px) { .atl-card { flex: unset; } }
.atl-year { font-family: var(--font-heading); font-size: 0.875rem; font-weight: 800; color: {{PRIMARY}}; margin-bottom: 0.5rem; }
.atl-title { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.5rem; }
.atl-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; }
`,
  template: `<section id="about-tl">
  <div class="atl-inner">
    <div class="atl-header">
      <span class="atl-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="atl-heading reveal reveal-d1">{{heading}}</h2>
      <p class="atl-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="atl-list reveal-stagger">
      {{#milestones}}
      <div class="atl-item">
        <div class="atl-node">{{.emoji}}</div>
        <div class="atl-card">
          <div class="atl-year">{{.year}}</div>
          <div class="atl-title">{{.title}}</div>
          <div class="atl-desc">{{.desc}}</div>
        </div>
      </div>
      {{/milestones}}
    </div>
  </div>
</section>`,
}
