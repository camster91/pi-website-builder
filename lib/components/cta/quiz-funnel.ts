import type { ComponentVariant } from '../types'

export const ctaQuizFunnel: ComponentVariant = {
  id: 'cta-quiz',
  name: 'CTA Quiz / Assessment Funnel',
  section: 'cta',
  description: 'Interactive quiz-style CTA: question + 3 answer options leading to personalized recommendation — high engagement funnel entry',
  bestFor: ['saas', 'healthcare', 'fitness', 'beauty', 'education', 'real-estate'],
  tags: ['quiz', 'interactive', 'funnel', 'assessment', 'personalized', 'engagement'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Quiz intro heading', required: true },
    { name: 'subtext', type: 'text', maxWords: 18, description: 'Quiz intro text', required: true },
    { name: 'question', type: 'text', maxWords: 12, description: 'The quiz question', required: true },
    { name: 'opt1', type: 'text', maxWords: 5, description: 'Answer option 1', required: true },
    { name: 'opt2', type: 'text', maxWords: 5, description: 'Answer option 2', required: true },
    { name: 'opt3', type: 'text', maxWords: 5, description: 'Answer option 3', required: true },
    { name: 'opt1Emoji', type: 'text', maxWords: 1, description: 'Emoji for option 1', required: true },
    { name: 'opt2Emoji', type: 'text', maxWords: 1, description: 'Emoji for option 2', required: true },
    { name: 'opt3Emoji', type: 'text', maxWords: 1, description: 'Emoji for option 3', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'Final CTA after selection', required: true },
    { name: 'ctaNote', type: 'text', maxWords: 8, description: 'Trust note below', required: false },
  ],
  css: `/* cta-quiz */
#cta-qz {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.cqz-inner { max-width: 680px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); text-align: center; }
.cqz-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.cqz-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.cqz-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; margin-bottom: 3rem; }
/* Card */
.cqz-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 24px; padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
}
/* Progress */
.cqz-progress { display: flex; gap: 4px; justify-content: center; margin-bottom: 2rem; }
.cqz-step { height: 4px; flex: 1; border-radius: 2px; background: {{BORDER}}; }
.cqz-step.active { background: {{PRIMARY}}; }
/* Question */
.cqz-question { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 1.75rem; }
/* Options */
.cqz-options { display: flex; flex-direction: column; gap: 0.875rem; margin-bottom: 2rem; }
.cqz-opt {
  display: flex; align-items: center; gap: 1rem;
  padding: 1rem 1.25rem;
  border: 2px solid {{BORDER}};
  border-radius: 14px; cursor: pointer;
  text-align: left; transition: all 0.2s;
  font-family: var(--font-body); font-size: 1rem; font-weight: 500; color: {{TEXT}};
  background: {{BG}};
}
.cqz-opt:hover { border-color: {{PRIMARY}}; background: rgba(99,102,241,0.04); }
.cqz-opt.selected { border-color: {{PRIMARY}}; background: rgba(99,102,241,0.06); }
.cqz-opt-emoji { font-size: 1.5rem; flex-shrink: 0; }
.cqz-cta-row { display: none; flex-direction: column; align-items: center; gap: 1rem; }
.cqz-cta-row.visible { display: flex; }
.cqz-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background: {{PRIMARY}}; color: #fff; border-radius: 12px; font-weight: 700; font-size: 1rem; text-decoration: none; transition: all 0.3s; }
.cqz-btn:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
.cqz-note { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="cta-qz">
  <div class="cqz-inner">
    <span class="cqz-eyebrow reveal">{{eyebrow}}</span>
    <h2 class="cqz-heading reveal reveal-d1">{{heading}}</h2>
    <p class="cqz-sub reveal reveal-d2">{{subtext}}</p>
    <div class="cqz-card reveal">
      <div class="cqz-progress"><div class="cqz-step active"></div><div class="cqz-step"></div><div class="cqz-step"></div></div>
      <p class="cqz-question">{{question}}</p>
      <div class="cqz-options" id="cqzOpts">
        <button class="cqz-opt" onclick="cqzSelect(this)"><span class="cqz-opt-emoji">{{opt1Emoji}}</span>{{opt1}}</button>
        <button class="cqz-opt" onclick="cqzSelect(this)"><span class="cqz-opt-emoji">{{opt2Emoji}}</span>{{opt2}}</button>
        <button class="cqz-opt" onclick="cqzSelect(this)"><span class="cqz-opt-emoji">{{opt3Emoji}}</span>{{opt3}}</button>
      </div>
      <div class="cqz-cta-row" id="cqzCta">
        <a href="#contact" class="cqz-btn">{{ctaText}} →</a>
        <p class="cqz-note">{{ctaNote}}</p>
      </div>
    </div>
  </div>
  <script>
  function cqzSelect(el){document.querySelectorAll('.cqz-opt').forEach(function(o){o.classList.remove('selected');});el.classList.add('selected');document.getElementById('cqzCta').classList.add('visible');}
  </script>
</section>`,
}
