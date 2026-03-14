import type { ComponentVariant } from '../types'

export const ctaImageOverlay: ComponentVariant = {
  id: 'cta-image-overlay',
  name: 'CTA Fullscreen Image Overlay',
  section: 'cta',
  description: 'Full-width image background with gradient overlay and bold centered CTA — cinematic, high emotional impact',
  bestFor: ['restaurant', 'fitness', 'beauty', 'real-estate', 'travel', 'nonprofit'],
  tags: ['image', 'fullscreen', 'overlay', 'cinematic', 'emotional', 'bold'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 8, description: 'CTA heading (white on dark)', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Highlighted word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Supporting text', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'trustText', type: 'text', maxWords: 8, description: 'Trust line below CTAs', required: false },
  ],
  css: `/* cta-image-overlay */
#cta-img {
  position: relative; overflow: hidden;
  min-height: 600px;
  display: flex; align-items: center; justify-content: center;
}
.cio-bg {
  position: absolute; inset: 0;
}
.cio-bg img { width: 100%; height: 100%; object-fit: cover; display: block; }
.cio-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.5) 100%);
}
.cio-inner {
  position: relative; z-index: 1; text-align: center;
  max-width: 760px; padding: 5rem clamp(1.5rem, 5vw, 3rem);
}
.cio-h2 {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 4.5rem);
  font-weight: 900; letter-spacing: -0.04em;
  line-height: 1.0; color: #fff;
  text-shadow: 0 4px 20px rgba(0,0,0,0.3);
  margin-bottom: 1.25rem;
}
.cio-h2 .accent-word { color: {{ACCENT}}; }
.cio-sub {
  font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
  color: rgba(255,255,255,0.8); line-height: 1.7;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
.cio-ctas { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
.cio-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 36px; background: {{PRIMARY}}; color: #fff;
  border-radius: 10px; font-weight: 700; font-size: 1rem;
  text-decoration: none; transition: all 0.3s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}
.cio-btn-p:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
.cio-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 36px; background: rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  color: #fff; border: 1.5px solid rgba(255,255,255,0.35);
  border-radius: 10px; font-weight: 600; font-size: 1rem;
  text-decoration: none; transition: all 0.3s;
}
.cio-btn-s:hover { background: rgba(255,255,255,0.22); }
.cio-trust { font-size: 0.8125rem; color: rgba(255,255,255,0.5); display: flex; align-items: center; justify-content: center; gap: 8px; }
.cio-trust::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e; }
`,
  template: `<section id="cta-img">
  <div class="cio-bg">
    <img src="{{ABOUT_IMAGE}}" alt="CTA background" width="1600" height="600" loading="lazy">
  </div>
  <div class="cio-overlay"></div>
  <div class="cio-inner">
    <h2 class="cio-h2 reveal">{{heading}}</h2>
    <p class="cio-sub reveal reveal-d1">{{subtext}}</p>
    <div class="cio-ctas reveal reveal-d2">
      <a href="#contact" class="cio-btn-p">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#features" class="cio-btn-s">{{ctaSecondary}}</a>
    </div>
    <p class="cio-trust reveal reveal-d3">{{trustText}}</p>
  </div>
</section>`,
}
