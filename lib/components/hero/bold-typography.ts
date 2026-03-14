import type { ComponentVariant } from '../types'

export const heroBoldTypography: ComponentVariant = {
  id: 'hero-bold-typography',
  name: 'Hero Bold Typography',
  section: 'hero',
  description: 'Viewport-filling ultra-bold headline with minimal imagery — pure typographic power, Dropbox/Stripe style',
  bestFor: ['agency', 'saas', 'portfolio', 'ecommerce', 'nonprofit'],
  tags: ['bold', 'type-heavy', 'minimal', 'editorial', 'modern', 'impact'],
  slots: [
    { name: 'headline1', type: 'heading', maxWords: 3, description: 'First line of giant heading', required: true },
    { name: 'headline2', type: 'heading', maxWords: 3, description: 'Second line (can include accent word)', required: true },
    { name: 'headlineAccent', type: 'text', maxWords: 2, description: 'Word(s) to show in outline/stroke style', required: true },
    { name: 'headline3', type: 'heading', maxWords: 3, description: 'Third line of heading', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Supporting description below heading', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'scrollLabel', type: 'text', maxWords: 2, description: 'Scroll indicator label (e.g. Scroll down)', required: false },
  ],
  css: `/* hero-bold-typography */
#hero-bold {
  background: {{BG}};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(6rem, 10vw, 9rem) 0 4rem;
  position: relative;
  overflow: hidden;
}
/* Soft tint blob top-right */
.hbt-blob {
  position: absolute;
  top: -20vh; right: -10vw;
  width: 60vw; height: 60vw;
  max-width: 700px; max-height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, {{ACCENT}}, transparent 70%);
  opacity: 0.06;
  pointer-events: none;
}
/* Decorative letter behind heading */
.hbt-deco-letter {
  position: absolute;
  right: -0.1em; bottom: -0.15em;
  font-family: var(--font-heading);
  font-size: 40vw; font-weight: 900;
  line-height: 1;
  color: {{PRIMARY}};
  opacity: 0.03;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.1em;
}
.hbt-inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
/* Giant heading */
.hbt-h1 {
  font-family: var(--font-heading);
  font-size: clamp(4rem, 11vw, 10rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 0.92;
  color: {{TEXT}};
  margin-bottom: 2.5rem;
}
.hbt-h1 .line { display: block; overflow: hidden; }
.hbt-h1 .accent-stroke {
  -webkit-text-stroke: 2px {{PRIMARY}};
  color: transparent;
}
.hbt-h1 .accent-fill { color: {{PRIMARY}}; }
/* Bottom row: sub + ctas */
.hbt-bottom {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
}
@media (min-width: 768px) {
  .hbt-bottom { grid-template-columns: 1fr auto; align-items: end; }
}
.hbt-sub {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  color: {{TEXT_SEC}};
  line-height: 1.75;
  max-width: 480px;
}
.hbt-ctas { display: flex; flex-direction: column; gap: 0.75rem; align-items: flex-start; }
@media (min-width: 480px) { .hbt-ctas { flex-direction: row; align-items: center; } }
@media (min-width: 768px) { .hbt-ctas { flex-direction: column; align-items: flex-end; } }
.hbt-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: {{TEXT}}; color: {{BG}};
  border-radius: 999px; font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
  white-space: nowrap;
}
.hbt-btn-p:hover { background: {{PRIMARY}}; transform: scale(1.04); }
.hbt-btn-s {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 14px 24px; border: 1.5px solid {{BORDER}};
  color: {{TEXT}}; border-radius: 999px;
  font-weight: 600; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
  white-space: nowrap;
}
.hbt-btn-s:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
/* Scroll indicator */
.hbt-scroll {
  position: absolute;
  bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{TEXT_MUTED}};
}
.hbt-scroll-line {
  width: 1px; height: 40px;
  background: linear-gradient(to bottom, {{TEXT_MUTED}}, transparent);
  animation: hbt-scroll-pulse 2s ease-in-out infinite;
}
@keyframes hbt-scroll-pulse { 0%,100%{opacity:0.3;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.1)} }
/* Horizontal rule between headline and bottom */
.hbt-rule {
  width: 100%; height: 1px;
  background: {{BORDER}};
  margin-bottom: 2.5rem;
}
`,
  template: `<section id="hero-bold">
  <div class="hbt-blob"></div>

  <div class="hbt-inner">
    <h1 class="hbt-h1 reveal">
      <span class="line">{{headline1}}</span>
      <span class="line"><span class="accent-stroke">{{headlineAccent}}</span></span>
      <span class="line">{{headline3}}</span>
    </h1>
    <div class="hbt-rule"></div>
    <div class="hbt-bottom">
      <p class="hbt-sub reveal reveal-d2">{{subtext}}</p>
      <div class="hbt-ctas reveal reveal-d3">
        <a href="#contact" class="hbt-btn-p">{{ctaPrimary}}</a>
        <a href="#features" class="hbt-btn-s">{{ctaSecondary}}</a>
      </div>
    </div>
  </div>

  <div class="hbt-scroll reveal">
    <span>{{scrollLabel}}</span>
    <div class="hbt-scroll-line"></div>
  </div>
</section>`,
}
