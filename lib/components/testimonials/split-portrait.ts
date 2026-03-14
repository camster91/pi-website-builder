import type { ComponentVariant } from '../types'

export const testimonialsSplitPortrait: ComponentVariant = {
  id: 'testimonials-split-portrait',
  name: 'Testimonials Split Portrait',
  section: 'testimonials',
  description: 'Customer portrait photo left, testimonial quote and details right — personal, human, high-trust',
  bestFor: ['healthcare', 'fitness', 'beauty', 'real-estate', 'education', 'local-service'],
  tags: ['portrait', 'split', 'human', 'personal', 'photo', 'trust', 'single'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'quote', type: 'text', maxWords: 60, description: 'Main testimonial quote', required: true },
    { name: 'name', type: 'text', maxWords: 3, description: 'Customer name', required: true },
    { name: 'role', type: 'text', maxWords: 5, description: 'Customer role/description', required: true },
    { name: 'initials', type: 'text', maxWords: 1, description: '2-char initials', required: true },
    { name: 'result1Label', type: 'text', maxWords: 3, description: 'Result metric 1 label', required: true },
    { name: 'result1Value', type: 'stat-value', maxWords: 1, description: 'Result metric 1 value', required: true },
    { name: 'result2Label', type: 'text', maxWords: 3, description: 'Result metric 2 label', required: true },
    { name: 'result2Value', type: 'stat-value', maxWords: 1, description: 'Result metric 2 value', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'CTA link text', required: false },
  ],
  css: `/* testimonials-split-portrait */
#testimonials-sp {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.tsp-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.tsp-header { text-align: center; margin-bottom: 3.5rem; }
.tsp-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.tsp-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Main card */
.tsp-card {
  display: grid; grid-template-columns: 1fr;
  gap: 0;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 24px; overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.07);
}
@media (min-width: 1024px) { .tsp-card { grid-template-columns: 40% 1fr; } }
/* Photo side */
.tsp-photo {
  position: relative; min-height: 400px; overflow: hidden;
  background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}});
}
.tsp-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.tsp-photo-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%);
}
/* Photo fallback: initials */
.tsp-initials {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-heading);
  font-size: 6rem; font-weight: 900;
  color: rgba(255,255,255,0.4);
}
/* Content side */
.tsp-content { padding: clamp(2rem, 5vw, 4rem); display: flex; flex-direction: column; justify-content: center; }
.tsp-stars { display: flex; gap: 3px; margin-bottom: 1.5rem; color: {{ACCENT}}; }
.tsp-stars svg { width: 18px; height: 18px; }
.tsp-quote-mark {
  font-family: Georgia, serif; font-size: 5rem; line-height: 1;
  color: {{PRIMARY}}; opacity: 0.15; margin-bottom: -1.5rem; display: block;
}
.tsp-quote {
  font-size: clamp(1.0625rem, 1.75vw, 1.25rem);
  color: {{TEXT}}; line-height: 1.65; font-style: italic;
  margin-bottom: 2rem; font-weight: 500;
}
.tsp-author { display: flex; align-items: center; gap: 1rem; margin-bottom: 2.5rem; }
.tsp-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(99,102,241,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.875rem; font-weight: 800; color: {{PRIMARY}};
  flex-shrink: 0;
}
.tsp-name { font-weight: 700; color: {{TEXT}}; }
.tsp-role { font-size: 0.875rem; color: {{TEXT_MUTED}}; }
/* Result metrics */
.tsp-results { display: flex; gap: 2rem; padding-top: 2rem; border-top: 1px solid {{BORDER}}; }
.tsp-result-val {
  font-family: var(--font-heading);
  font-size: 2rem; font-weight: 900; letter-spacing: -0.04em;
  color: {{PRIMARY}}; display: block; line-height: 1;
}
.tsp-result-lbl { font-size: 0.8125rem; color: {{TEXT_MUTED}}; margin-top: 4px; }
`,
  template: `<section id="testimonials-sp">
  <div class="tsp-inner">
    <div class="tsp-header">
      <span class="tsp-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="tsp-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="tsp-card reveal">
      <div class="tsp-photo">
        <img src="{{ABOUT_IMAGE}}" alt="{{name}}" width="480" height="600" loading="lazy" onerror="this.style.display='none'">
        <div class="tsp-photo-overlay"></div>
        <div class="tsp-initials">{{initials}}</div>
      </div>
      <div class="tsp-content">
        <div class="tsp-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <span class="tsp-quote-mark">&ldquo;</span>
        <p class="tsp-quote">{{quote}}</p>
        <div class="tsp-author">
          <div class="tsp-avatar">{{initials}}</div>
          <div>
            <div class="tsp-name">{{name}}</div>
            <div class="tsp-role">{{role}}</div>
          </div>
        </div>
        <div class="tsp-results">
          <div>
            <span class="tsp-result-val counter" data-target="{{result1Value}}">{{result1Value}}</span>
            <span class="tsp-result-lbl">{{result1Label}}</span>
          </div>
          <div>
            <span class="tsp-result-val counter" data-target="{{result2Value}}">{{result2Value}}</span>
            <span class="tsp-result-lbl">{{result2Label}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
}
