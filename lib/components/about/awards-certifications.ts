import type { ComponentVariant } from '../types'

export const aboutAwardsCertifications: ComponentVariant = {
  id: 'about-awards',
  name: 'About Awards & Certifications',
  section: 'about',
  description: 'Trust-builder: company description + credential badges (awards, certifications, memberships) + team count stats',
  bestFor: ['healthcare', 'legal', 'real-estate', 'finance', 'education', 'local-service'],
  tags: ['awards', 'certifications', 'trust', 'credentials', 'professional', 'badges'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'description', type: 'text', maxWords: 50, description: 'Company description', required: true },
    {
      name: 'credentials', type: 'array', description: '6 awards/certifications', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 5, description: 'Credential name', required: true },
        { name: 'org', type: 'text', maxWords: 4, description: 'Issuing organization', required: true },
        { name: 'year', type: 'text', maxWords: 1, description: 'Year earned', required: false },
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Icon emoji', required: true },
      ],
    },
    { name: 'stat1Val', type: 'stat-value', maxWords: 1, description: 'Stat 1 value', required: true },
    { name: 'stat1Lbl', type: 'stat-label', maxWords: 3, description: 'Stat 1 label', required: true },
    { name: 'stat2Val', type: 'stat-value', maxWords: 1, description: 'Stat 2 value', required: true },
    { name: 'stat2Lbl', type: 'stat-label', maxWords: 3, description: 'Stat 2 label', required: true },
  ],
  css: `/* about-awards */
#about-aw {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.aaw-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 4rem; }
@media (min-width: 1024px) { .aaw-inner { grid-template-columns: 5fr 4fr; align-items: center; } }
.aaw-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.aaw-heading { font-family: var(--font-heading); font-size: clamp(1.875rem,3.5vw,2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.5rem; }
.aaw-heading .accent-word { color: {{ACCENT}}; }
.aaw-desc { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.8; margin-bottom: 2.5rem; }
.aaw-stats { display: flex; gap: 3rem; padding-top: 2rem; border-top: 1px solid {{BORDER}}; }
.aaw-stat-val { font-family: var(--font-heading); font-size: 2.25rem; font-weight: 900; letter-spacing: -0.04em; color: {{PRIMARY}}; line-height: 1; display: block; }
.aaw-stat-lbl { font-size: 0.875rem; color: {{TEXT_MUTED}}; margin-top: 4px; }
/* Credentials grid */
.aaw-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }
.aaw-cred {
  background: {{BG_CARD}}; border: 1px solid {{BORDER}};
  border-radius: 14px; padding: 1.25rem;
  display: flex; align-items: flex-start; gap: 0.875rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.aaw-cred:hover { border-color: {{PRIMARY}}; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.aaw-cred-icon { font-size: 1.5rem; flex-shrink: 0; }
.aaw-cred-name { font-size: 0.875rem; font-weight: 700; color: {{TEXT}}; line-height: 1.3; margin-bottom: 2px; }
.aaw-cred-org { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
.aaw-cred-year { font-size: 0.6875rem; color: {{PRIMARY}}; font-weight: 600; margin-top: 3px; }
`,
  template: `<section id="about-aw">
  <div class="aaw-inner">
    <div class="reveal-left">
      <span class="aaw-eyebrow">{{eyebrow}}</span>
      <h2 class="aaw-heading">{{heading}}</h2>
      <p class="aaw-desc">{{description}}</p>
      <div class="aaw-stats">
        <div><span class="aaw-stat-val counter" data-target="{{stat1Val}}">{{stat1Val}}</span><span class="aaw-stat-lbl">{{stat1Lbl}}</span></div>
        <div><span class="aaw-stat-val counter" data-target="{{stat2Val}}">{{stat2Val}}</span><span class="aaw-stat-lbl">{{stat2Lbl}}</span></div>
      </div>
    </div>
    <div class="aaw-grid reveal-stagger">
      {{#credentials}}
      <div class="aaw-cred">
        <span class="aaw-cred-icon">{{.emoji}}</span>
        <div>
          <div class="aaw-cred-name">{{.name}}</div>
          <div class="aaw-cred-org">{{.org}}</div>
          <div class="aaw-cred-year">{{.year}}</div>
        </div>
      </div>
      {{/credentials}}
    </div>
  </div>
</section>`,
}
