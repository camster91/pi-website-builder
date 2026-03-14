import type { ComponentVariant } from '../types'

export const processSplitZigzag: ComponentVariant = {
  id: 'process-zigzag',
  name: 'Process Split Zigzag',
  section: 'process' as any,
  description: 'Alternating image + text content rows with step numbers — visual story-telling for multi-step transformations',
  bestFor: ['fitness', 'beauty', 'healthcare', 'education', 'real-estate', 'local-service'],
  tags: ['zigzag', 'alternating', 'image-text', 'visual', 'story', 'transformation'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    {
      name: 'steps', type: 'array', description: '3 alternating steps', required: true,
      minItems: 3, maxItems: 4,
      itemSlots: [
        { name: 'number', type: 'text', maxWords: 1, description: 'Step number', required: true },
        { name: 'title', type: 'heading', maxWords: 5, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 30, description: 'Step description', required: true },
        { name: 'bullet1', type: 'text', maxWords: 6, description: 'Bullet point 1', required: true },
        { name: 'bullet2', type: 'text', maxWords: 6, description: 'Bullet point 2', required: true },
      ],
    },
  ],
  css: `/* process-zigzag */
#process-zz {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.pzz-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.pzz-header { text-align: center; max-width: 680px; margin: 0 auto 5rem; }
.pzz-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.pzz-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.pzz-heading .accent-word { color: {{ACCENT}}; }
.pzz-steps { display: flex; flex-direction: column; gap: 5rem; }
.pzz-step { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 1024px) {
  .pzz-step { grid-template-columns: 1fr 1fr; }
  .pzz-step:nth-child(even) .pzz-visual { order: 2; }
  .pzz-step:nth-child(even) .pzz-text { order: 1; }
}
.pzz-visual { position: relative; }
.pzz-img { border-radius: 24px; overflow: hidden; aspect-ratio: 4/3; }
.pzz-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.pzz-img-fallback { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 5rem; }
.pzz-step:nth-child(1) .pzz-img-fallback { background: linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}}); }
.pzz-step:nth-child(2) .pzz-img-fallback { background: linear-gradient(135deg,{{ACCENT}},#f97316); }
.pzz-step:nth-child(3) .pzz-img-fallback { background: linear-gradient(135deg,#8b5cf6,#6d28d9); }
/* Step number badge */
.pzz-num { position: absolute; top: -1rem; left: -1rem; width: 48px; height: 48px; border-radius: 12px; background: {{BG_CARD}}; border: 2px solid {{BORDER}}; display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 1rem; font-weight: 900; color: {{PRIMARY}}; box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
.pzz-step-label { font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.pzz-title { font-family: var(--font-heading); font-size: clamp(1.75rem,3vw,2.5rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.25rem; }
.pzz-desc { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.75; margin-bottom: 1.5rem; }
.pzz-bullets { display: flex; flex-direction: column; gap: 0.625rem; }
.pzz-bullet { display: flex; align-items: center; gap: 0.75rem; font-size: 0.9375rem; color: {{TEXT_SEC}}; }
.pzz-bullet-dot { width: 6px; height: 6px; border-radius: 50%; background: {{PRIMARY}}; flex-shrink: 0; }
`,
  template: `<section id="process-zz">
  <div class="pzz-inner">
    <div class="pzz-header">
      <span class="pzz-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pzz-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="pzz-steps">
      {{#steps}}
      <div class="pzz-step reveal">
        <div class="pzz-visual">
          <div class="pzz-img">
            <div class="pzz-img-fallback">✦</div>
          </div>
          <div class="pzz-num">{{.number}}</div>
        </div>
        <div class="pzz-text">
          <div class="pzz-step-label">Step {{.number}}</div>
          <h3 class="pzz-title">{{.title}}</h3>
          <p class="pzz-desc">{{.desc}}</p>
          <div class="pzz-bullets">
            <div class="pzz-bullet"><span class="pzz-bullet-dot"></span>{{.bullet1}}</div>
            <div class="pzz-bullet"><span class="pzz-bullet-dot"></span>{{.bullet2}}</div>
          </div>
        </div>
      </div>
      {{/steps}}
    </div>
  </div>
</section>`,
}
