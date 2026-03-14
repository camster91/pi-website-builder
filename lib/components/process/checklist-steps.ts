import type { ComponentVariant } from '../types'

export const processChecklistSteps: ComponentVariant = {
  id: 'process-checklist',
  name: 'Process Checklist Steps',
  section: 'process' as any,
  description: 'Checklist-style process with check icons, green accents, and progress feeling — great for onboarding steps',
  bestFor: ['saas', 'education', 'healthcare', 'local-service', 'fitness'],
  tags: ['checklist', 'check', 'onboarding', 'steps', 'progress', 'linear'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'steps', type: 'array', description: '5 process steps', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 4, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 20, description: 'Step description', required: true },
        { name: 'timeHint', type: 'text', maxWords: 3, description: 'Time estimate (e.g. 5 min)', required: false },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
  ],
  css: `/* process-checklist */
#process-cl {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.pcl-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 4rem; }
@media (min-width: 1024px) { .pcl-inner { grid-template-columns: 1fr 1fr; align-items: center; } }
.pcl-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.pcl-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.25rem; }
.pcl-heading .accent-word { color: {{ACCENT}}; }
.pcl-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; margin-bottom: 2.5rem; }
.pcl-cta { display: inline-flex; align-items: center; gap: 8px; padding: 13px 28px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.pcl-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
/* Checklist */
.pcl-list { display: flex; flex-direction: column; gap: 1.5rem; }
.pcl-item { display: flex; align-items: flex-start; gap: 1rem; padding: 1.25rem; background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 16px; transition: border-color 0.3s, box-shadow 0.3s; }
.pcl-item:hover { border-color: {{PRIMARY}}; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
.pcl-check { width: 36px; height: 36px; border-radius: 50%; background: rgba(34,197,94,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px; }
.pcl-check svg { width: 18px; height: 18px; color: #16a34a; }
.pcl-content { flex: 1; }
.pcl-title-row { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.375rem; }
.pcl-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: {{TEXT}}; }
.pcl-time { font-size: 0.75rem; font-weight: 600; color: {{TEXT_MUTED}}; padding: 2px 8px; background: {{BG_SECTION}}; border-radius: 999px; white-space: nowrap; }
.pcl-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.6; }
`,
  template: `<section id="process-cl">
  <div class="pcl-inner">
    <div class="reveal-left">
      <span class="pcl-eyebrow">{{eyebrow}}</span>
      <h2 class="pcl-heading">{{heading}}</h2>
      <p class="pcl-sub">{{subtext}}</p>
      <a href="#contact" class="pcl-cta">{{ctaText}} →</a>
    </div>
    <div class="pcl-list reveal-stagger">
      {{#steps}}
      <div class="pcl-item">
        <div class="pcl-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
        <div class="pcl-content">
          <div class="pcl-title-row"><span class="pcl-title">{{.title}}</span><span class="pcl-time">{{.timeHint}}</span></div>
          <p class="pcl-desc">{{.desc}}</p>
        </div>
      </div>
      {{/steps}}
    </div>
  </div>
</section>`,
}
