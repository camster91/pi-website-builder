import type { ComponentVariant } from '../types'

export const processVerticalTimeline: ComponentVariant = {
  id: 'process-timeline',
  name: 'Process Vertical Timeline',
  section: 'process' as any,
  description: 'Alternating left-right timeline with numbered circles connected by a vertical spine — company history or process flow',
  bestFor: ['agency', 'saas', 'nonprofit', 'education', 'healthcare', 'real-estate'],
  tags: ['timeline', 'alternating', 'history', 'process', 'milestones', 'vertical'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'steps', type: 'array', description: '5 timeline steps', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'number', type: 'text', maxWords: 1, description: 'Step number or year', required: true },
        { name: 'title', type: 'heading', maxWords: 5, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 25, description: 'Step description', required: true },
      ],
    },
  ],
  css: `/* process-vertical-timeline */
#process-vt {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.pvt-inner { max-width: 900px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.pvt-header { text-align: center; margin-bottom: 4rem; }
.pvt-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.pvt-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.pvt-heading .accent-word { color: {{ACCENT}}; }
.pvt-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Timeline */
.pvt-timeline { position: relative; }
/* Vertical spine */
.pvt-timeline::before {
  content: '';
  position: absolute;
  left: 50%; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, {{PRIMARY}}, {{ACCENT}});
  transform: translateX(-50%);
  opacity: 0.3;
}
@media (max-width: 767px) {
  .pvt-timeline::before { left: 28px; transform: none; }
}
.pvt-item {
  display: grid; grid-template-columns: 1fr; gap: 0;
  margin-bottom: 3rem; position: relative;
}
@media (min-width: 768px) {
  .pvt-item { grid-template-columns: 1fr 80px 1fr; align-items: center; }
  .pvt-item:nth-child(even) .pvt-card { order: 3; }
  .pvt-item:nth-child(even) .pvt-empty { order: 1; }
}
.pvt-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 16px; padding: 1.5rem;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
}
.pvt-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.09); }
.pvt-empty { display: none; }
@media (min-width: 768px) { .pvt-empty { display: block; } }
/* Circle */
.pvt-circle-wrap {
  display: flex; justify-content: center; align-items: center;
  padding: 1rem 0;
}
@media (max-width: 767px) {
  .pvt-circle-wrap { position: absolute; left: 0; top: 0; width: 56px; }
  .pvt-card { margin-left: 72px; }
}
.pvt-circle {
  width: 56px; height: 56px;
  border-radius: 50%;
  background: {{BG_CARD}};
  border: 2px solid {{PRIMARY}};
  display: flex; align-items: center; justify-content: center;
  position: relative; z-index: 1;
  box-shadow: 0 0 0 6px {{BG_SECTION}};
  transition: background 0.3s;
}
.pvt-item:hover .pvt-circle { background: {{PRIMARY}}; }
.pvt-circle:hover .pvt-num { color: #fff; }
.pvt-num {
  font-family: var(--font-heading); font-size: 1rem; font-weight: 800;
  color: {{PRIMARY}}; transition: color 0.3s;
}
.pvt-item:hover .pvt-num { color: #fff; }
.pvt-title { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.5rem; }
.pvt-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; }
`,
  template: `<section id="process-vt">
  <div class="pvt-inner">
    <div class="pvt-header">
      <span class="pvt-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pvt-heading reveal reveal-d1">{{heading}}</h2>
      <p class="pvt-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="pvt-timeline">
      {{#steps}}
      <div class="pvt-item reveal">
        <div class="pvt-card">
          <h3 class="pvt-title">{{.title}}</h3>
          <p class="pvt-desc">{{.desc}}</p>
        </div>
        <div class="pvt-circle-wrap">
          <div class="pvt-circle">
            <span class="pvt-num">{{.number}}</span>
          </div>
        </div>
        <div class="pvt-empty"></div>
      </div>
      {{/steps}}
    </div>
  </div>
</section>`,
}
