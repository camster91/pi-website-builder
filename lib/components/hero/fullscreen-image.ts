import type { ComponentVariant } from '../types'

export const heroFullscreenImage: ComponentVariant = {
  id: 'hero-fullscreen-image',
  name: 'Hero Fullscreen Background Image',
  section: 'hero',
  description: 'Classic fullscreen hero with image background, dark overlay, centered white text — universal high-impact',
  bestFor: ['restaurant', 'real-estate', 'fitness', 'beauty', 'healthcare', 'local-service', 'agency'],
  tags: ['fullscreen', 'image-bg', 'overlay', 'cinematic', 'classic', 'photo-heavy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 4, description: 'Small label above heading', required: false },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Main heading (white on dark overlay)', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Words to highlight in accent color', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Supporting text', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'scrollLabel', type: 'text', maxWords: 3, description: 'Scroll down label', required: false },
  ],
  css: `/* hero-fullscreen-image */
#hero-fs {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hfs-bg {
  position: absolute; inset: 0;
  background: #1a1a2e;
}
.hfs-bg img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transform: scale(1.05);
  animation: hfs-subtle-zoom 20s ease-in-out infinite alternate;
}
@keyframes hfs-subtle-zoom {
  from { transform: scale(1.05); }
  to   { transform: scale(1.15); }
}
/* Multi-layer overlay for maximum legibility */
.hfs-overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.3) 100%);
}
.hfs-overlay-vignette {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%);
}
.hfs-inner {
  position: relative; z-index: 2;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 8rem clamp(1.5rem, 5vw, 3rem) 6rem;
}
.hfs-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(255,255,255,0.8);
  margin-bottom: 1.5rem;
}
.hfs-eyebrow::before, .hfs-eyebrow::after {
  content: '';
  display: block; width: 28px; height: 1px;
  background: rgba(255,255,255,0.5);
}
.hfs-h1 {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 7vw, 7rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
  margin-bottom: 1.5rem;
}
.hfs-h1 .accent-word { color: {{ACCENT}}; }
.hfs-sub {
  font-size: clamp(1rem, 1.75vw, 1.25rem);
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4);
}
.hfs-ctas { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
.hfs-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 36px;
  background: {{PRIMARY}};
  color: #fff; border-radius: 10px;
  font-weight: 700; font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}
.hfs-btn-p:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
.hfs-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 36px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: 10px;
  font-weight: 600; font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
}
.hfs-btn-s:hover { background: rgba(255,255,255,0.22); border-color: rgba(255,255,255,0.6); }
/* Scroll indicator at bottom */
.hfs-scroll {
  position: absolute;
  bottom: 2.5rem; left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  color: rgba(255,255,255,0.5);
  font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.14em;
  text-transform: uppercase;
}
.hfs-mouse {
  width: 24px; height: 38px;
  border: 1.5px solid rgba(255,255,255,0.3);
  border-radius: 12px;
  display: flex; justify-content: center; padding-top: 6px;
}
.hfs-mouse-dot {
  width: 3px; height: 6px;
  background: rgba(255,255,255,0.6);
  border-radius: 2px;
  animation: hfs-scroll 2s ease-in-out infinite;
}
@keyframes hfs-scroll {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
}
`,
  template: `<section id="hero-fs">
  <div class="hfs-bg">
    <img src="{{HERO_IMAGE}}" alt="Hero background" width="1920" height="1080" loading="eager">
  </div>
  <div class="hfs-overlay"></div>
  <div class="hfs-overlay-vignette"></div>

  <div class="hfs-inner">
    <div class="hfs-eyebrow reveal">{{eyebrow}}</div>
    <h1 class="hfs-h1 reveal reveal-d1">{{heading}}</h1>
    <p class="hfs-sub reveal reveal-d2">{{subtext}}</p>
    <div class="hfs-ctas reveal reveal-d3">
      <a href="#contact" class="hfs-btn-p">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#features" class="hfs-btn-s">{{ctaSecondary}}</a>
    </div>
  </div>

  <div class="hfs-scroll">
    <div class="hfs-mouse"><div class="hfs-mouse-dot"></div></div>
    <span>{{scrollLabel}}</span>
  </div>
</section>`,
}
