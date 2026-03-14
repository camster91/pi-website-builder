import type { ComponentVariant } from '../types'

export const featuresStatsHighlight: ComponentVariant = {
  id: 'features-stats-highlight',
  name: 'Features Stats + Highlights',
  section: 'features',
  description: 'Dark section with 4 huge animated stat numbers + a grid of text features below — impact-first, SaaS/agency',
  bestFor: ['saas', 'agency', 'nonprofit', 'fitness', 'real-estate'],
  tags: ['stats', 'dark', 'numbers', 'impact', 'bold', 'animated', 'metrics'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'stat1Value', type: 'stat-value', maxWords: 1, description: 'Stat 1 value', required: true },
    { name: 'stat1Label', type: 'stat-label', maxWords: 3, description: 'Stat 1 label', required: true },
    { name: 'stat2Value', type: 'stat-value', maxWords: 1, description: 'Stat 2 value', required: true },
    { name: 'stat2Label', type: 'stat-label', maxWords: 3, description: 'Stat 2 label', required: true },
    { name: 'stat3Value', type: 'stat-value', maxWords: 1, description: 'Stat 3 value', required: true },
    { name: 'stat3Label', type: 'stat-label', maxWords: 3, description: 'Stat 3 label', required: true },
    { name: 'stat4Value', type: 'stat-value', maxWords: 1, description: 'Stat 4 value', required: true },
    { name: 'stat4Label', type: 'stat-label', maxWords: 3, description: 'Stat 4 label', required: true },
    {
      name: 'highlights', type: 'array', description: '6 text highlights below stats', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 3, description: 'Highlight title', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Highlight description', required: true },
      ],
    },
  ],
  css: `/* features-stats-highlight */
#features-stats {
  background: #0a0f1e;
  padding: clamp(4rem, 8vw, 7rem) 0;
  position: relative; overflow: hidden;
}
.fsh-glow {
  position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none;
}
.fsh-glow-1 { width: 500px; height: 500px; background: {{PRIMARY}}; opacity: 0.08; top: -100px; left: -100px; }
.fsh-glow-2 { width: 400px; height: 400px; background: {{ACCENT}}; opacity: 0.06; bottom: -100px; right: -50px; }
.fsh-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.fsh-header { text-align: center; margin-bottom: 4rem; }
.fsh-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{ACCENT}}; margin-bottom: 0.875rem; }
.fsh-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: #fff; }
/* Stats row */
.fsh-stats {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 1px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px; overflow: hidden;
  margin-bottom: 1.5rem;
}
@media (min-width: 768px) { .fsh-stats { grid-template-columns: repeat(4, 1fr); } }
.fsh-stat {
  background: rgba(255,255,255,0.02);
  padding: 2.5rem 2rem; text-align: center;
  transition: background 0.3s;
}
.fsh-stat:hover { background: rgba(99,102,241,0.1); }
.fsh-stat-val {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900; letter-spacing: -0.05em;
  color: #fff; line-height: 1; display: block; margin-bottom: 0.5rem;
}
.fsh-stat-lbl { font-size: 0.875rem; color: rgba(255,255,255,0.45); font-weight: 500; }
/* Highlights grid */
.fsh-grid {
  display: grid; grid-template-columns: 1fr;
  gap: 1px; background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 20px; overflow: hidden;
}
@media (min-width: 640px) { .fsh-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .fsh-grid { grid-template-columns: repeat(3, 1fr); } }
.fsh-item {
  background: rgba(255,255,255,0.02);
  padding: 2rem; transition: background 0.3s;
}
.fsh-item:hover { background: rgba(255,255,255,0.04); }
.fsh-item-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
.fsh-item-desc { font-size: 0.875rem; color: rgba(255,255,255,0.45); line-height: 1.65; }
`,
  template: `<section id="features-stats">
  <div class="fsh-glow fsh-glow-1"></div>
  <div class="fsh-glow fsh-glow-2"></div>
  <div class="fsh-inner">
    <div class="fsh-header">
      <span class="fsh-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="fsh-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="fsh-stats reveal">
      <div class="fsh-stat"><span class="fsh-stat-val counter" data-target="{{stat1Value}}">{{stat1Value}}</span><span class="fsh-stat-lbl">{{stat1Label}}</span></div>
      <div class="fsh-stat"><span class="fsh-stat-val counter" data-target="{{stat2Value}}">{{stat2Value}}</span><span class="fsh-stat-lbl">{{stat2Label}}</span></div>
      <div class="fsh-stat"><span class="fsh-stat-val counter" data-target="{{stat3Value}}">{{stat3Value}}</span><span class="fsh-stat-lbl">{{stat3Label}}</span></div>
      <div class="fsh-stat"><span class="fsh-stat-val counter" data-target="{{stat4Value}}">{{stat4Value}}</span><span class="fsh-stat-lbl">{{stat4Label}}</span></div>
    </div>
    <div class="fsh-grid reveal-stagger">
      {{#highlights}}
      <div class="fsh-item">
        <div class="fsh-item-title">{{.title}}</div>
        <div class="fsh-item-desc">{{.desc}}</div>
      </div>
      {{/highlights}}
    </div>
  </div>
</section>`,
}
