import type { ComponentVariant } from '../types'

export const processNumberedSteps: ComponentVariant = {
  id: 'process-numbered-steps',
  name: 'Process Numbered Steps',
  section: 'process' as any,
  description: '4-step horizontal process with large circled numbers connected by a dashed line — service business "How It Works"',
  bestFor: ['local-service', 'healthcare', 'fitness', 'beauty', 'restaurant', 'real-estate', 'education', 'nonprofit', 'agency'],
  tags: ['process', 'steps', 'how-it-works', 'numbered', 'service-business', 'timeline'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Section subtext', required: true },
    {
      name: 'steps', type: 'array', description: '4 process steps', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'number', type: 'text', maxWords: 1, description: 'Step number (01, 02, 03, 04)', required: true },
        { name: 'title', type: 'heading', maxWords: 4, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 18, description: 'Step description', required: true },
      ],
    },
  ],
  css: `/* process-numbered-steps */
#process {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.pns-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.pns-header {
  text-align: center; max-width: 680px;
  margin: 0 auto 4.5rem;
}
.pns-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.pns-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.pns-heading .accent-word { color: {{ACCENT}}; }
.pns-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

/* Steps grid */
.pns-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}
@media (min-width: 640px) {
  .pns-steps { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .pns-steps { grid-template-columns: repeat(4, 1fr); gap: 0; }
}

.pns-step {
  position: relative;
  text-align: center;
  padding: 0 1.5rem;
}
/* Connecting line between steps (desktop only) */
@media (min-width: 1024px) {
  .pns-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 32px;
    left: calc(50% + 36px);
    right: calc(-50% + 36px);
    height: 2px;
    border-top: 2px dashed {{BORDER}};
  }
}

.pns-circle {
  width: 64px; height: 64px;
  border-radius: 50%;
  border: 2px solid {{PRIMARY}};
  background: {{BG}};
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 1;
  transition: all 0.3s;
}
.pns-step:hover .pns-circle {
  background: {{PRIMARY}};
  box-shadow: 0 0 0 8px rgba(99,102,241,0.1);
}
.pns-step:hover .pns-num { color: #fff; }

.pns-num {
  font-family: var(--font-heading);
  font-size: 1.125rem; font-weight: 800;
  color: {{PRIMARY}};
  transition: color 0.3s;
  line-height: 1;
}
.pns-title {
  font-family: var(--font-heading);
  font-size: 1.125rem; font-weight: 700;
  color: {{TEXT}};
  margin-bottom: 0.625rem;
  letter-spacing: -0.01em;
}
.pns-desc {
  font-size: 0.9375rem;
  color: {{TEXT_SEC}};
  line-height: 1.65;
}

/* Step accent dot */
.pns-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: {{PRIMARY}};
  margin: 1.25rem auto 0;
}
`,
  template: `<section id="process">
  <div class="pns-inner">
    <div class="pns-header">
      <span class="pns-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pns-heading reveal reveal-d1">{{heading}}</h2>
      <p class="pns-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="pns-steps reveal-stagger">
      {{#steps}}
      <div class="pns-step">
        <div class="pns-circle">
          <span class="pns-num">{{.number}}</span>
        </div>
        <h3 class="pns-title">{{.title}}</h3>
        <p class="pns-desc">{{.desc}}</p>
        <div class="pns-dot"></div>
      </div>
      {{/steps}}
    </div>
  </div>
</section>`,
}
