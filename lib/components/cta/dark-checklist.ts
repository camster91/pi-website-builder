import type { ComponentVariant } from '../types'

export const ctaDarkChecklist: ComponentVariant = {
  id: 'cta-dark-checklist',
  name: 'CTA Dark Checklist Split',
  section: 'cta',
  description: 'Dark-background split CTA with heading + checklist on left, stat/quote card + CTA button on right',
  bestFor: ['saas', 'agency', 'ecommerce', 'fitness', 'real-estate', 'education'],
  tags: ['dark', 'conversion', 'checklist', 'high-contrast', 'persuasive', 'split'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 4, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Main heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'text', maxWords: 22, description: 'Supporting text', required: true },
    {
      name: 'checks', type: 'array', description: '4 checklist items', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 9, description: 'Checklist item', required: true }],
    },
    { name: 'cardStat', type: 'stat-value', maxWords: 1, description: 'Right card stat (e.g. 10,000+)', required: true },
    { name: 'cardStatLabel', type: 'stat-label', maxWords: 4, description: 'Stat label', required: true },
    { name: 'cardQuote', type: 'text', maxWords: 22, description: 'Short trust quote in card', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary button text', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary link text', required: true },
  ],
  css: `/* cta-dark-checklist */
#cta {
  background: #080c14;
  padding: clamp(4rem, 8vw, 8rem) 0;
  position: relative;
  overflow: hidden;
}
/* Ambient glows */
.cdc-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(120px);
}
.cdc-glow-1 {
  width: 500px; height: 500px;
  background: {{PRIMARY}};
  opacity: 0.1;
  top: -100px; left: -100px;
}
.cdc-glow-2 {
  width: 400px; height: 400px;
  background: {{ACCENT}};
  opacity: 0.06;
  bottom: -100px; right: -50px;
}
/* Grid texture */
.cdc-grid-bg {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
}

.cdc-inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .cdc-inner { grid-template-columns: 55% 45%; }
}

/* Left side */
.cdc-eyebrow {
  display: inline-block;
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
  text-transform: uppercase; color: {{ACCENT}};
  margin-bottom: 1.5rem;
}
.cdc-heading {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4.5vw, 3.75rem); font-weight: 800;
  letter-spacing: -0.04em; line-height: 1.05;
  color: #fff; margin-bottom: 1.25rem;
}
.cdc-heading .accent-word { color: {{ACCENT}}; }
.cdc-sub {
  font-size: 1.0625rem; color: rgba(255,255,255,0.55);
  line-height: 1.75; margin-bottom: 2rem;
}
.cdc-checks { display: flex; flex-direction: column; gap: 1rem; }
.cdc-check {
  display: flex; align-items: center; gap: 12px;
  font-size: 0.9375rem; color: rgba(255,255,255,0.8);
}
.cdc-check-icon {
  width: 24px; height: 24px; border-radius: 50%;
  background: rgba(99,102,241,0.2);
  border: 1px solid rgba(99,102,241,0.3);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  color: {{PRIMARY}};
}
.cdc-check-icon svg { width: 14px; height: 14px; }

/* Right card */
.cdc-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: clamp(1.75rem, 4vw, 2.5rem);
  backdrop-filter: blur(12px);
}
.cdc-card-stat {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 6vw, 5rem); font-weight: 900;
  letter-spacing: -0.06em; color: #fff;
  line-height: 1; display: block;
}
.cdc-card-stat-lbl {
  font-size: 0.875rem; color: rgba(255,255,255,0.45);
  margin-bottom: 1.5rem; display: block;
}
.cdc-card-divider {
  height: 1px; background: rgba(255,255,255,0.08);
  margin-bottom: 1.5rem;
}
.cdc-card-quote {
  font-size: 0.9375rem; color: rgba(255,255,255,0.6);
  line-height: 1.7; margin-bottom: 2rem;
  font-style: italic;
}
.cdc-card-quote::before { content: open-quote; color: {{PRIMARY}}; }
.cdc-card-quote::after { content: close-quote; color: {{PRIMARY}}; }
.cdc-btns { display: flex; flex-direction: column; gap: 0.75rem; }
.cdc-btn-p {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 24px; background: {{PRIMARY}};
  color: #fff; border-radius: 12px;
  font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.cdc-btn-p:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.35); }
.cdc-btn-s {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 14px 24px; background: transparent;
  color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px; font-weight: 600; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.cdc-btn-s:hover { border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.9); }
`,
  template: `<section id="cta">
  <div class="cdc-glow cdc-glow-1"></div>
  <div class="cdc-glow cdc-glow-2"></div>
  <div class="cdc-grid-bg"></div>

  <div class="cdc-inner">
    <!-- Left -->
    <div>
      <span class="cdc-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="cdc-heading reveal reveal-d1">{{heading}}</h2>
      <p class="cdc-sub reveal reveal-d2">{{subtext}}</p>
      <div class="cdc-checks reveal-stagger">
        {{#checks}}
        <div class="cdc-check">
          <span class="cdc-check-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </span>
          {{.text}}
        </div>
        {{/checks}}
      </div>
    </div>

    <!-- Right card -->
    <div class="cdc-card reveal-right">
      <span class="cdc-card-stat counter" data-target="{{cardStat}}">{{cardStat}}</span>
      <span class="cdc-card-stat-lbl">{{cardStatLabel}}</span>
      <div class="cdc-card-divider"></div>
      <p class="cdc-card-quote">{{cardQuote}}</p>
      <div class="cdc-btns">
        <a href="#contact" class="cdc-btn-p">
          {{ctaPrimary}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="#features" class="cdc-btn-s">{{ctaSecondary}}</a>
      </div>
    </div>
  </div>
</section>`,
}
