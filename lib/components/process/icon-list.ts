import type { ComponentVariant } from '../types'

export const processIconList: ComponentVariant = {
  id: 'process-icon-list',
  name: 'Process Large Icon List',
  section: 'process' as any,
  description: 'Vertical list of large emoji-icon steps with title, description, and benefit tags — visual and scannable',
  bestFor: ['local-service', 'healthcare', 'beauty', 'fitness', 'education', 'real-estate'],
  tags: ['icon', 'list', 'vertical', 'visual', 'large', 'scannable', 'simple'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    {
      name: 'steps', type: 'array', description: '5 icon steps', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Step emoji', required: true },
        { name: 'title', type: 'heading', maxWords: 4, description: 'Step title', required: true },
        { name: 'desc', type: 'text', maxWords: 20, description: 'Step description', required: true },
        { name: 'tag', type: 'text', maxWords: 3, description: 'Benefit tag', required: false },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
  ],
  css: `/* process-icon-list */
#process-il {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.pil-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
@media (min-width: 1024px) { .pil-inner { grid-template-columns: 5fr 4fr; } }
.pil-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.pil-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 2.5rem; }
.pil-heading .accent-word { color: {{ACCENT}}; }
.pil-steps { display: flex; flex-direction: column; gap: 1.25rem; }
.pil-step { display: flex; align-items: flex-start; gap: 1.25rem; padding: 1.25rem; background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 16px; transition: border-color 0.3s, box-shadow 0.3s; }
.pil-step:hover { border-color: {{PRIMARY}}; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.pil-icon { width: 52px; height: 52px; border-radius: 14px; background: {{BG_SECTION}}; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; flex-shrink: 0; }
.pil-content { flex: 1; }
.pil-title { font-family: var(--font-heading); font-size: 1rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.375rem; }
.pil-desc { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.6; }
.pil-tag { display: inline-block; margin-top: 0.5rem; font-size: 0.75rem; font-weight: 700; padding: 3px 10px; background: rgba(99,102,241,0.08); color: {{PRIMARY}}; border-radius: 999px; }
/* Right side image/graphic */
.pil-graphic { background: linear-gradient(135deg, {{PRIMARY}}, {{ACCENT}}); border-radius: 24px; aspect-ratio: 4/5; display: flex; align-items: center; justify-content: center; padding: 3rem; }
.pil-graphic-inner { text-align: center; }
.pil-graphic-num { font-family: var(--font-heading); font-size: 5rem; font-weight: 900; color: rgba(255,255,255,0.2); line-height: 1; }
.pil-graphic-label { font-size: 1.0625rem; font-weight: 700; color: rgba(255,255,255,0.7); }
.pil-cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 2.5rem; padding: 13px 28px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; text-decoration: none; transition: all 0.3s; }
.pil-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="process-il">
  <div class="pil-inner">
    <div class="reveal-left">
      <span class="pil-eyebrow">{{eyebrow}}</span>
      <h2 class="pil-heading">{{heading}}</h2>
      <div class="pil-steps">
        {{#steps}}
        <div class="pil-step">
          <div class="pil-icon">{{.emoji}}</div>
          <div class="pil-content">
            <div class="pil-title">{{.title}}</div>
            <div class="pil-desc">{{.desc}}</div>
            <span class="pil-tag">{{.tag}}</span>
          </div>
        </div>
        {{/steps}}
      </div>
      <a href="#contact" class="pil-cta">{{ctaText}} →</a>
    </div>
    <div class="pil-graphic reveal-right">
      <div class="pil-graphic-inner">
        <div class="pil-graphic-num">✓</div>
        <div class="pil-graphic-label">Proven Process</div>
      </div>
    </div>
  </div>
</section>`,
}
