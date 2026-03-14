import type { ComponentVariant } from '../types'

export const socialProofLogoWall: ComponentVariant = {
  id: 'social-proof-logo-wall',
  name: 'Client Logo Wall + Stats',
  section: 'social-proof',
  description: 'Static grid of styled client/company names with grayscale-to-color hover effect, plus 3 inline stats below',
  bestFor: ['saas', 'agency', 'healthcare', 'education', 'nonprofit', 'local-service', 'real-estate'],
  tags: ['logos', 'brands', 'trust', 'clients', 'b2b', 'corporate'],
  slots: [
    { name: 'trustedByLabel', type: 'text', maxWords: 4, description: 'Label above logos (e.g. "Trusted by industry leaders")', required: true },
    {
      name: 'companies', type: 'array', description: '8 company names', required: true,
      minItems: 8, maxItems: 8,
      itemSlots: [{ name: 'name', type: 'text', maxWords: 3, description: 'Company or brand name', required: true }],
    },
    { name: 'stat1Value', type: 'stat-value', maxWords: 1, description: 'Stat 1 number', required: true },
    { name: 'stat1Label', type: 'stat-label', maxWords: 3, description: 'Stat 1 label', required: true },
    { name: 'stat2Value', type: 'stat-value', maxWords: 1, description: 'Stat 2 number', required: true },
    { name: 'stat2Label', type: 'stat-label', maxWords: 3, description: 'Stat 2 label', required: true },
    { name: 'stat3Value', type: 'stat-value', maxWords: 1, description: 'Stat 3 number', required: true },
    { name: 'stat3Label', type: 'stat-label', maxWords: 3, description: 'Stat 3 label', required: true },
  ],
  css: `/* social-proof-logo-wall */
#social-proof {
  background: {{BG}};
  padding: clamp(3rem, 6vw, 5.5rem) 0;
  border-top: 1px solid {{BORDER}};
  border-bottom: 1px solid {{BORDER}};
}
.sp-lw-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.sp-lw-label {
  text-align: center;
  font-size: 0.8125rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.12em;
  color: {{TEXT_MUTED}};
  margin-bottom: 2.5rem;
}
/* Logo grid */
.sp-lw-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 3.5rem;
}
@media (min-width: 640px) { .sp-lw-grid { grid-template-columns: repeat(4, 1fr); } }

.sp-lw-logo {
  display: flex; align-items: center; justify-content: center;
  height: 72px;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  cursor: default;
}
.sp-lw-logo:hover {
  border-color: {{PRIMARY}};
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
  transform: translateY(-2px);
}
.sp-lw-logo-text {
  font-family: var(--font-heading);
  font-size: 1rem; font-weight: 800;
  letter-spacing: -0.02em;
  color: {{TEXT_MUTED}};
  filter: grayscale(1);
  opacity: 0.4;
  transition: all 0.3s;
  user-select: none;
  padding: 0 1rem;
  text-align: center;
}
.sp-lw-logo:hover .sp-lw-logo-text {
  color: {{PRIMARY}};
  filter: grayscale(0);
  opacity: 1;
}

/* Stats strip */
.sp-lw-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-top: 2.5rem;
  border-top: 1px solid {{BORDER}};
}
.sp-lw-stat {
  text-align: center;
  padding: 0.5rem;
}
.sp-lw-stat-val {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: 900; letter-spacing: -0.05em;
  color: {{PRIMARY}}; display: block; line-height: 1;
  margin-bottom: 0.5rem;
}
.sp-lw-stat-lbl {
  font-size: 0.875rem; color: {{TEXT_MUTED}};
  font-weight: 600;
}
`,
  template: `<section id="social-proof">
  <div class="sp-lw-inner">
    <p class="sp-lw-label reveal">{{trustedByLabel}}</p>

    <div class="sp-lw-grid reveal-stagger">
      {{#companies}}
      <div class="sp-lw-logo">
        <span class="sp-lw-logo-text">{{.name}}</span>
      </div>
      {{/companies}}
    </div>

    <div class="sp-lw-stats">
      <div class="sp-lw-stat reveal">
        <span class="sp-lw-stat-val counter" data-target="{{stat1Value}}">{{stat1Value}}</span>
        <span class="sp-lw-stat-lbl">{{stat1Label}}</span>
      </div>
      <div class="sp-lw-stat reveal reveal-d2">
        <span class="sp-lw-stat-val counter" data-target="{{stat2Value}}">{{stat2Value}}</span>
        <span class="sp-lw-stat-lbl">{{stat2Label}}</span>
      </div>
      <div class="sp-lw-stat reveal reveal-d3">
        <span class="sp-lw-stat-val counter" data-target="{{stat3Value}}">{{stat3Value}}</span>
        <span class="sp-lw-stat-lbl">{{stat3Label}}</span>
      </div>
    </div>
  </div>
</section>`,
}
