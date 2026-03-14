import type { ComponentVariant } from '../types'

export const statsNumbersShowcase: ComponentVariant = {
  id: 'stats-numbers',
  name: 'Stats Numbers Showcase',
  section: 'stats' as any,
  description: 'Standalone statistics section — 4-6 large animated numbers with labels and icons, multiple background styles',
  bestFor: ['saas', 'agency', 'nonprofit', 'fitness', 'healthcare', 'education', 'real-estate', 'local-service'],
  tags: ['stats', 'numbers', 'metrics', 'impact', 'animated', 'standalone'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: false },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Optional section heading', required: false },
    {
      name: 'stats', type: 'array', description: '4 key statistics', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'The number or value (e.g. 10,000+)', required: true },
        { name: 'label', type: 'stat-label', maxWords: 4, description: 'Stat label', required: true },
        { name: 'desc', type: 'text', maxWords: 10, description: 'Short description (optional)', required: false },
      ],
    },
  ],
  css: `/* stats-numbers */
#stats {
  background: {{PRIMARY}};
  padding: clamp(4rem, 8vw, 6rem) 0;
  position: relative; overflow: hidden;
}
.sns-bg {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}
.sns-glow {
  position: absolute;
  width: 600px; height: 600px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  top: -300px; right: -150px;
  pointer-events: none;
}
.sns-inner {
  position: relative; z-index: 1;
  max-width: 1280px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.sns-header {
  text-align: center; margin-bottom: 3.5rem;
}
.sns-eyebrow {
  display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: rgba(255,255,255,0.6);
  margin-bottom: 0.75rem;
}
.sns-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800;
  letter-spacing: -0.03em; color: #fff;
}
.sns-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
@media (min-width: 768px) { .sns-grid { grid-template-columns: repeat(4, 1fr); } }
.sns-stat {
  text-align: center;
  padding: 1.5rem;
  border-radius: 16px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  transition: background 0.3s, transform 0.3s;
}
.sns-stat:hover { background: rgba(255,255,255,0.14); transform: translateY(-4px); }
.sns-val {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 900; letter-spacing: -0.05em;
  color: #fff; line-height: 1; display: block; margin-bottom: 0.5rem;
}
.sns-lbl {
  font-size: 0.9375rem; font-weight: 600;
  color: rgba(255,255,255,0.75); display: block; margin-bottom: 0.375rem;
}
.sns-desc { font-size: 0.8125rem; color: rgba(255,255,255,0.45); line-height: 1.4; }
`,
  template: `<section id="stats">
  <div class="sns-bg"></div>
  <div class="sns-glow"></div>
  <div class="sns-inner">
    <div class="sns-header">
      <span class="sns-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="sns-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="sns-grid reveal-stagger">
      {{#stats}}
      <div class="sns-stat">
        <span class="sns-val counter" data-target="{{.value}}">{{.value}}</span>
        <span class="sns-lbl">{{.label}}</span>
        <span class="sns-desc">{{.desc}}</span>
      </div>
      {{/stats}}
    </div>
  </div>
</section>`,
}
