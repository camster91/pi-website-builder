import type { ComponentVariant } from '../types'

export const heroDarkEditorial: ComponentVariant = {
  id: 'hero-dark-editorial',
  name: 'Hero Dark Editorial',
  section: 'hero',
  description: 'Premium dark-background editorial hero with dramatic typography, organic image frame, floating stat badges',
  bestFor: ['agency', 'portfolio', 'saas', 'real-estate', 'beauty', 'fitness'],
  tags: ['dark', 'editorial', 'premium', 'bold', 'agency', 'dramatic'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 4, description: 'Short all-caps label', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Dramatic headline — short, punchy', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'One or two words to highlight in accent color', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Supporting subtext', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA button text', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA (e.g. Watch demo)', required: true },
    { name: 'badge1Value', type: 'stat-value', maxWords: 1, description: 'Stat 1 number (e.g. 500+)', required: true },
    { name: 'badge1Label', type: 'stat-label', maxWords: 2, description: 'Stat 1 label', required: true },
    { name: 'badge2Value', type: 'stat-value', maxWords: 1, description: 'Stat 2 number', required: true },
    { name: 'badge2Label', type: 'stat-label', maxWords: 2, description: 'Stat 2 label', required: true },
    { name: 'badge3Value', type: 'stat-value', maxWords: 1, description: 'Stat 3 number', required: true },
    { name: 'badge3Label', type: 'stat-label', maxWords: 2, description: 'Stat 3 label', required: true },
    { name: 'trustText', type: 'text', maxWords: 6, description: 'Trust line (e.g. Trusted by 500+ companies)', required: false },
  ],
  css: `/* hero-dark-editorial */
#hero-editorial {
  background: #080c14;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 7rem 0 5rem;
}
/* Ambient glow background */
.hed-glow {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(100px);
}
.hed-glow-1 {
  width: 600px; height: 600px;
  background: {{PRIMARY}};
  opacity: 0.12;
  top: -100px; right: -50px;
}
.hed-glow-2 {
  width: 400px; height: 400px;
  background: {{ACCENT}};
  opacity: 0.07;
  bottom: -100px; left: 10%;
}
/* Dot grid texture */
.hed-dots {
  position: absolute; inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 32px 32px;
  pointer-events: none;
}

.hed-inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .hed-inner { grid-template-columns: 55% 45%; }
}

/* LEFT TEXT */
.hed-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: {{ACCENT}};
  margin-bottom: 1.75rem;
}
.hed-eyebrow::before {
  content: '';
  display: block;
  width: 32px;
  height: 1.5px;
  background: {{ACCENT}};
}
.hed-h1 {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 6.5vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.0;
  color: #fff;
  margin-bottom: 1.5rem;
}
.hed-h1 .accent-word { color: {{ACCENT}}; }
.hed-sub {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  color: rgba(255,255,255,0.6);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 2.5rem;
}
.hed-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.hed-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: {{PRIMARY}};
  color: #fff; border: none; border-radius: 10px;
  font-weight: 700; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hed-btn-p:hover {
  background: {{PRIMARY_DARK}};
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.35);
}
.hed-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.85); border: 1.5px solid rgba(255,255,255,0.15);
  border-radius: 10px; font-weight: 600; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hed-btn-s:hover {
  border-color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.1);
}
.hed-trust {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.35);
  display: flex; align-items: center; gap: 8px;
}
.hed-trust::before {
  content: '';
  display: block;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px #22c55e;
}

/* RIGHT VISUAL */
.hed-visual { position: relative; display: flex; justify-content: center; }

.hed-img-frame {
  position: relative;
  width: clamp(280px, 42vw, 480px);
  height: clamp(340px, 52vw, 580px);
}
.hed-img-blob {
  width: 100%; height: 100%;
  border-radius: 62% 38% 46% 54% / 52% 48% 52% 48%;
  overflow: hidden;
  animation: hed-morph 12s ease-in-out infinite;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.06),
    0 32px 80px rgba(0,0,0,0.5);
}
@keyframes hed-morph {
  0%,100% { border-radius: 62% 38% 46% 54% / 52% 48% 52% 48%; }
  33% { border-radius: 42% 58% 60% 40% / 44% 56% 44% 56%; }
  66% { border-radius: 56% 44% 36% 64% / 58% 42% 58% 42%; }
}
.hed-img-blob img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
/* Gradient overlay on image for text legibility */
.hed-img-blob::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.25));
}

/* Floating stat badges */
.hed-badge {
  position: absolute;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 12px 18px;
  min-width: 110px;
}
.hed-badge-1 { top: 12%; left: -16%; animation: hed-float 8s ease-in-out infinite; }
.hed-badge-2 { bottom: 20%; right: -14%; animation: hed-float 10s ease-in-out infinite 1s; }
.hed-badge-3 { bottom: -4%; left: -8%; animation: hed-float 9s ease-in-out infinite 0.5s; }
@keyframes hed-float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
.hed-badge-val {
  font-family: var(--font-heading);
  font-size: 1.5rem; font-weight: 800;
  color: #fff; line-height: 1; display: block;
}
.hed-badge-lbl {
  font-size: 0.6875rem; font-weight: 600;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase; letter-spacing: 0.08em;
}
`,
  template: `<section id="hero-editorial">
  <div class="hed-glow hed-glow-1"></div>
  <div class="hed-glow hed-glow-2"></div>
  <div class="hed-dots"></div>

  <div class="hed-inner">
    <!-- Text -->
    <div>
      <div class="hed-eyebrow reveal">{{eyebrow}}</div>
      <h1 class="hed-h1 reveal reveal-d1">{{heading}}</h1>
      <p class="hed-sub reveal reveal-d2">{{subtext}}</p>
      <div class="hed-ctas reveal reveal-d3">
        <a href="#contact" class="hed-btn-p">
          {{ctaPrimary}}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="#features" class="hed-btn-s">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          {{ctaSecondary}}
        </a>
      </div>
      <p class="hed-trust reveal reveal-d4">{{trustText}}</p>
    </div>

    <!-- Visual -->
    <div class="hed-visual reveal-right">
      <div class="hed-img-frame">
        <div class="hed-img-blob">
          <img src="{{HERO_IMAGE}}" alt="Hero" width="480" height="580" loading="eager">
        </div>
        <div class="hed-badge hed-badge-1">
          <span class="hed-badge-val counter" data-target="{{badge1Value}}">{{badge1Value}}</span>
          <span class="hed-badge-lbl">{{badge1Label}}</span>
        </div>
        <div class="hed-badge hed-badge-2">
          <span class="hed-badge-val counter" data-target="{{badge2Value}}">{{badge2Value}}</span>
          <span class="hed-badge-lbl">{{badge2Label}}</span>
        </div>
        <div class="hed-badge hed-badge-3">
          <span class="hed-badge-val counter" data-target="{{badge3Value}}">{{badge3Value}}</span>
          <span class="hed-badge-lbl">{{badge3Label}}</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
}
