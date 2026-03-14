import type { ComponentVariant } from '../types'

export const aboutMissionStatement: ComponentVariant = {
  id: 'about-mission',
  name: 'About Mission Statement',
  section: 'about',
  description: 'Large typographic mission statement with 3 core value pillars below — purpose-led, nonprofit, brand story',
  bestFor: ['nonprofit', 'education', 'healthcare', 'agency', 'local-service'],
  tags: ['mission', 'values', 'purpose', 'brand-story', 'typographic', 'centered'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'missionStatement', type: 'text', maxWords: 35, description: 'The mission statement (large text)', required: true },
    { name: 'missionAccent', type: 'text', maxWords: 3, description: 'Accent phrase in the mission', required: true },
    { name: 'supportingText', type: 'text', maxWords: 30, description: 'Supporting paragraph', required: true },
    { name: 'value1Icon', type: 'text', maxWords: 1, description: 'Value 1 emoji', required: true },
    { name: 'value1Title', type: 'heading', maxWords: 3, description: 'Value 1 title', required: true },
    { name: 'value1Desc', type: 'text', maxWords: 15, description: 'Value 1 description', required: true },
    { name: 'value2Icon', type: 'text', maxWords: 1, description: 'Value 2 emoji', required: true },
    { name: 'value2Title', type: 'heading', maxWords: 3, description: 'Value 2 title', required: true },
    { name: 'value2Desc', type: 'text', maxWords: 15, description: 'Value 2 description', required: true },
    { name: 'value3Icon', type: 'text', maxWords: 1, description: 'Value 3 emoji', required: true },
    { name: 'value3Title', type: 'heading', maxWords: 3, description: 'Value 3 title', required: true },
    { name: 'value3Desc', type: 'text', maxWords: 15, description: 'Value 3 description', required: true },
  ],
  css: `/* about-mission */
#about-ms {
  background: {{BG}};
  padding: clamp(5rem,10vw,9rem) 0;
}
.ams-inner { max-width: 1100px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.ams-top { max-width: 860px; margin: 0 auto; text-align: center; margin-bottom: 5rem; }
.ams-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 2rem; }
.ams-mission {
  font-family: var(--font-heading); font-size: clamp(1.875rem,4vw,3.25rem);
  font-weight: 800; letter-spacing: -0.03em; line-height: 1.2; color: {{TEXT}};
  margin-bottom: 2rem;
}
.ams-mission .accent-phrase { color: {{PRIMARY}}; }
.ams-support { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.8; max-width: 600px; margin: 0 auto; }
/* Divider */
.ams-divider { width: 64px; height: 3px; background: linear-gradient(90deg,{{PRIMARY}},{{ACCENT}}); border-radius: 2px; margin: 3rem auto; }
/* Values */
.ams-values { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 768px) { .ams-values { grid-template-columns: repeat(3,1fr); } }
.ams-value { text-align: center; padding: 2rem; }
.ams-value-icon { font-size: 2.5rem; display: block; margin-bottom: 1.25rem; }
.ams-value-title { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.75rem; }
.ams-value-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.7; }
`,
  template: `<section id="about-ms">
  <div class="ams-inner">
    <div class="ams-top">
      <span class="ams-eyebrow reveal">{{eyebrow}}</span>
      <p class="ams-mission reveal reveal-d1">{{missionStatement}}</p>
      <p class="ams-support reveal reveal-d2">{{supportingText}}</p>
    </div>
    <div class="ams-divider"></div>
    <div class="ams-values reveal-stagger">
      <div class="ams-value">
        <span class="ams-value-icon">{{value1Icon}}</span>
        <h3 class="ams-value-title">{{value1Title}}</h3>
        <p class="ams-value-desc">{{value1Desc}}</p>
      </div>
      <div class="ams-value">
        <span class="ams-value-icon">{{value2Icon}}</span>
        <h3 class="ams-value-title">{{value2Title}}</h3>
        <p class="ams-value-desc">{{value2Desc}}</p>
      </div>
      <div class="ams-value">
        <span class="ams-value-icon">{{value3Icon}}</span>
        <h3 class="ams-value-title">{{value3Title}}</h3>
        <p class="ams-value-desc">{{value3Desc}}</p>
      </div>
    </div>
  </div>
</section>`,
}
