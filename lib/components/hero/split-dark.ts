import type { ComponentVariant } from '../types'

export const heroSplitDark: ComponentVariant = {
  id: 'hero-split-dark',
  name: 'Hero Split Dark Panel',
  section: 'hero',
  description: 'Left light panel with text + right dark/image panel — high contrast split, luxury/premium feel',
  bestFor: ['real-estate', 'agency', 'beauty', 'fitness', 'restaurant', 'portfolio'],
  tags: ['split', 'contrast', 'dark', 'luxury', 'premium', 'image-right', 'half-half'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Small label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Main heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Highlighted words', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Description', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'imageCaption', type: 'text', maxWords: 6, description: 'Caption on the image side', required: false },
    { name: 'stat1Value', type: 'stat-value', maxWords: 1, description: 'Stat 1 value', required: true },
    { name: 'stat1Label', type: 'stat-label', maxWords: 2, description: 'Stat 1 label', required: true },
    { name: 'stat2Value', type: 'stat-value', maxWords: 1, description: 'Stat 2 value', required: true },
    { name: 'stat2Label', type: 'stat-label', maxWords: 2, description: 'Stat 2 label', required: true },
  ],
  css: `/* hero-split-dark */
#hero-split-dk {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  #hero-split-dk { grid-template-columns: 1fr 1fr; }
}
/* Left light panel */
.hsd-left {
  background: {{BG}};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(5rem, 8vw, 7rem) clamp(2rem, 6vw, 5rem);
  position: relative;
}
/* Accent line left border */
.hsd-left::before {
  content: '';
  position: absolute;
  left: 0; top: 15%; bottom: 15%;
  width: 4px;
  background: linear-gradient(to bottom, transparent, {{PRIMARY}}, transparent);
}
.hsd-eyebrow {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
  text-transform: uppercase; color: {{PRIMARY}};
  margin-bottom: 1.5rem;
  display: flex; align-items: center; gap: 10px;
}
.hsd-eyebrow::before {
  content: '';
  display: block; width: 24px; height: 2px;
  background: {{PRIMARY}};
}
.hsd-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: {{TEXT}};
  margin-bottom: 1.5rem;
}
.hsd-h1 .accent-word { color: {{PRIMARY}}; }
.hsd-sub {
  font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
  color: {{TEXT_SEC}};
  line-height: 1.75;
  max-width: 440px;
  margin-bottom: 2.5rem;
}
.hsd-ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
.hsd-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: {{TEXT}}; color: {{BG}};
  border-radius: 8px; font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.hsd-btn-p:hover { background: {{PRIMARY}}; transform: translateY(-2px); }
.hsd-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border: 2px solid {{BORDER}};
  color: {{TEXT}}; border-radius: 8px;
  font-weight: 600; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.hsd-btn-s:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
.hsd-stats { display: flex; gap: 2.5rem; }
.hsd-stat-val {
  font-family: var(--font-heading);
  font-size: 2.25rem; font-weight: 900;
  letter-spacing: -0.04em;
  color: {{PRIMARY}}; display: block; line-height: 1;
}
.hsd-stat-lbl {
  font-size: 0.8125rem; color: {{TEXT_MUTED}};
  margin-top: 4px; font-weight: 500;
}
/* Right dark image panel */
.hsd-right {
  background: #0a0f1e;
  position: relative;
  overflow: hidden;
  min-height: 50vh;
}
@media (min-width: 1024px) { .hsd-right { min-height: unset; } }
.hsd-right img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  opacity: 0.6;
}
/* Dark overlay gradient */
.hsd-right-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%);
}
/* Caption bottom-left on image */
.hsd-caption {
  position: absolute;
  bottom: 2rem; left: 2rem;
  z-index: 2;
  display: flex; align-items: center; gap: 10px;
}
.hsd-caption-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: {{ACCENT}};
  box-shadow: 0 0 12px {{ACCENT}};
}
.hsd-caption-text {
  font-size: 0.8125rem; font-weight: 600;
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.06em;
}
/* Decorative corner bracket */
.hsd-bracket {
  position: absolute;
  top: 1.5rem; right: 1.5rem;
  width: 40px; height: 40px;
  border-top: 2px solid rgba(255,255,255,0.2);
  border-right: 2px solid rgba(255,255,255,0.2);
}
`,
  template: `<section id="hero-split-dk">
  <!-- Left text panel -->
  <div class="hsd-left">
    <span class="hsd-eyebrow reveal">{{eyebrow}}</span>
    <h1 class="hsd-h1 reveal reveal-d1">{{heading}}</h1>
    <p class="hsd-sub reveal reveal-d2">{{subtext}}</p>
    <div class="hsd-ctas reveal reveal-d3">
      <a href="#contact" class="hsd-btn-p">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#features" class="hsd-btn-s">{{ctaSecondary}}</a>
    </div>
    <div class="hsd-stats reveal reveal-d4">
      <div>
        <span class="hsd-stat-val counter" data-target="{{stat1Value}}">{{stat1Value}}</span>
        <span class="hsd-stat-lbl">{{stat1Label}}</span>
      </div>
      <div>
        <span class="hsd-stat-val counter" data-target="{{stat2Value}}">{{stat2Value}}</span>
        <span class="hsd-stat-lbl">{{stat2Label}}</span>
      </div>
    </div>
  </div>
  <!-- Right image panel -->
  <div class="hsd-right reveal-right">
    <img src="{{HERO_IMAGE}}" alt="Hero" width="960" height="1080" loading="eager">
    <div class="hsd-right-overlay"></div>
    <div class="hsd-caption">
      <span class="hsd-caption-dot"></span>
      <span class="hsd-caption-text">{{imageCaption}}</span>
    </div>
    <div class="hsd-bracket"></div>
  </div>
</section>`,
}
