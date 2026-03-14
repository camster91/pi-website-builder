import type { ComponentVariant } from '../types'

export const featuresDarkNumbered: ComponentVariant = {
  id: 'features-dark-numbered',
  name: 'Features Dark Numbered Grid',
  section: 'features',
  description: 'Dark section with 6 large numbered feature blocks in 2×3 grid — enterprise, clean, impact-first',
  bestFor: ['saas', 'agency', 'portfolio', 'education', 'nonprofit'],
  tags: ['dark', 'numbered', 'bold', 'grid', 'enterprise', 'minimal'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'items', type: 'array', description: '6 feature items', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 4, description: 'Feature title', required: true },
        { name: 'desc', type: 'text', maxWords: 18, description: 'Feature description', required: true },
      ],
    },
  ],
  css: `/* features-dark-numbered */
#features-dn {
  background: #0a0f1e;
  padding: clamp(4rem,8vw,7rem) 0;
  position: relative; overflow: hidden;
}
.fdn-grid-bg {
  position: absolute; inset: 0; pointer-events: none;
  background-image: linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px);
  background-size: 64px 64px;
}
.fdn-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.fdn-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.fdn-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 900; letter-spacing: -0.04em; color: #fff; line-height: 1.1; margin-bottom: 1rem; }
.fdn-heading .accent-word { color: {{ACCENT}}; }
.fdn-sub { font-size: 1.0625rem; color: rgba(255,255,255,0.45); line-height: 1.7; }
.fdn-grid { display: grid; grid-template-columns: 1fr; gap: 1px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; overflow: hidden; }
@media (min-width: 640px) { .fdn-grid { grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px) { .fdn-grid { grid-template-columns: repeat(3,1fr); } }
.fdn-item {
  background: rgba(255,255,255,0.02);
  padding: 2.5rem; position: relative;
  transition: background 0.3s;
  overflow: hidden;
}
.fdn-item:hover { background: rgba(99,102,241,0.06); }
.fdn-num {
  font-family: var(--font-heading); font-size: 3.5rem; font-weight: 900;
  letter-spacing: -0.05em; color: {{PRIMARY}}; opacity: 0.18; line-height: 1;
  position: absolute; top: 1.25rem; right: 1.5rem;
  pointer-events: none; user-select: none;
}
.fdn-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: #fff; margin-bottom: 0.625rem; line-height: 1.3; }
.fdn-desc { font-size: 0.9375rem; color: rgba(255,255,255,0.45); line-height: 1.7; }
.fdn-line { width: 32px; height: 2px; background: {{PRIMARY}}; margin-bottom: 1.25rem; }
`,
  template: `<section id="features-dn">
  <div class="fdn-grid-bg"></div>
  <div class="fdn-inner">
    <div class="fdn-header">
      <h2 class="fdn-heading reveal">{{heading}}</h2>
      <p class="fdn-sub reveal reveal-d1">{{subtext}}</p>
    </div>
    <div class="fdn-grid reveal-stagger">
      {{#items}}
      <div class="fdn-item">
        <div class="fdn-line"></div>
        <div class="fdn-title">{{.title}}</div>
        <div class="fdn-desc">{{.desc}}</div>
      </div>
      {{/items}}
    </div>
  </div>
</section>`,
}
