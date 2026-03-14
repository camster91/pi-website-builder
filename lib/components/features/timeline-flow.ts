import type { ComponentVariant } from '../types'

export const featuresTimelineFlow: ComponentVariant = {
  id: 'features-timeline',
  name: 'Features Horizontal Timeline Flow',
  section: 'features',
  description: '4-step horizontal timeline with gradient connector line, icon badges, and expandable descriptions',
  bestFor: ['saas', 'agency', 'education', 'healthcare', 'nonprofit'],
  tags: ['timeline', 'steps', 'horizontal', 'connected', 'flow', 'process', 'sequential'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'steps', type: 'array', description: '4 steps', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Step emoji icon', required: true },
        { name: 'title', type: 'heading', maxWords: 4, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 20, description: 'Step description', required: true },
      ],
    },
  ],
  css: `/* features-timeline */
#features-tl {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.ftl-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.ftl-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.ftl-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.ftl-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.ftl-heading .accent-word { color: {{ACCENT}}; }
.ftl-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Timeline wrapper */
.ftl-timeline { position: relative; }
/* Connector line — desktop */
.ftl-line {
  display: none;
  position: absolute; top: 40px; left: 12%; right: 12%;
  height: 2px;
  background: linear-gradient(90deg, {{PRIMARY}}, {{ACCENT}}, {{PRIMARY}});
  opacity: 0.25;
}
@media (min-width: 768px) { .ftl-line { display: block; } }
.ftl-steps { display: grid; grid-template-columns: 1fr; gap: 2rem; position: relative; z-index: 1; }
@media (min-width: 640px) { .ftl-steps { grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px) { .ftl-steps { grid-template-columns: repeat(4,1fr); } }
.ftl-step { text-align: center; padding: 0 1rem; }
.ftl-badge {
  width: 80px; height: 80px; border-radius: 50%;
  background: {{BG_CARD}};
  border: 2px solid {{BORDER}};
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem; line-height: 1;
  position: relative;
  box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  transition: border-color 0.3s, box-shadow 0.3s;
}
.ftl-step:hover .ftl-badge { border-color: {{PRIMARY}}; box-shadow: 0 8px 24px rgba(99,102,241,0.2); }
.ftl-num {
  position: absolute; bottom: -4px; right: -4px;
  width: 22px; height: 22px; border-radius: 50%;
  background: {{PRIMARY}}; color: #fff;
  font-size: 0.6875rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
  border: 2px solid {{BG}};
}
.ftl-title { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.625rem; }
.ftl-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; }
`,
  template: `<section id="features-tl">
  <div class="ftl-inner">
    <div class="ftl-header">
      <span class="ftl-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="ftl-heading reveal reveal-d1">{{heading}}</h2>
      <p class="ftl-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="ftl-timeline reveal">
      <div class="ftl-line"></div>
      <div class="ftl-steps">
        {{#steps}}
        <div class="ftl-step">
          <div class="ftl-badge">
            {{.emoji}}
            <span class="ftl-num">{{@index}}</span>
          </div>
          <h3 class="ftl-title">{{.title}}</h3>
          <p class="ftl-desc">{{.desc}}</p>
        </div>
        {{/steps}}
      </div>
    </div>
  </div>
</section>`,
}
