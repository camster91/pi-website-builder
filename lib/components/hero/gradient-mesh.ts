import type { ComponentVariant } from '../types'

export const heroGradientMesh: ComponentVariant = {
  id: 'hero-gradient-mesh',
  name: 'Hero Gradient Mesh',
  section: 'hero',
  description: 'Animated CSS gradient mesh background with centered minimal text — Stripe / Figma homepage aesthetic',
  bestFor: ['saas', 'agency', 'ecommerce', 'portfolio'],
  tags: ['gradient', 'animated', 'minimal', 'centered', 'colorful', 'modern'],
  slots: [
    { name: 'pill', type: 'eyebrow', maxWords: 5, description: 'Top pill badge text', required: false },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Main centered heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Gradient text words', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Supporting description', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'trust1', type: 'text', maxWords: 3, description: 'Trust item 1', required: false },
    { name: 'trust2', type: 'text', maxWords: 3, description: 'Trust item 2', required: false },
    { name: 'trust3', type: 'text', maxWords: 3, description: 'Trust item 3', required: false },
  ],
  css: `/* hero-gradient-mesh */
#hero-mesh {
  background: {{BG}};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 7rem 0 5rem;
  position: relative;
  overflow: hidden;
}
/* Animated mesh blobs */
.hgm-mesh {
  position: absolute; inset: 0;
  pointer-events: none;
}
.hgm-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
}
.hgm-orb-1 {
  width: 600px; height: 600px;
  background: {{PRIMARY}};
  opacity: 0.15;
  top: -200px; left: -150px;
  animation: hgm-drift 15s ease-in-out infinite;
}
.hgm-orb-2 {
  width: 500px; height: 500px;
  background: {{ACCENT}};
  opacity: 0.1;
  bottom: -150px; right: -100px;
  animation: hgm-drift 18s ease-in-out infinite reverse;
}
.hgm-orb-3 {
  width: 400px; height: 400px;
  background: #8b5cf6;
  opacity: 0.08;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: hgm-drift 12s ease-in-out infinite 2s;
}
@keyframes hgm-drift {
  0%,100% { transform: translate(0, 0) scale(1); }
  33%     { transform: translate(60px, -40px) scale(1.1); }
  66%     { transform: translate(-40px, 60px) scale(0.95); }
}
/* Noise overlay */
.hgm-noise {
  position: absolute; inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  pointer-events: none;
}

.hgm-inner {
  position: relative; z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.hgm-pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 18px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 999px;
  font-size: 0.8125rem; font-weight: 600;
  color: {{TEXT}};
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.hgm-pill-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: linear-gradient(135deg, {{PRIMARY}}, {{ACCENT}});
}
.hgm-h1 {
  font-family: var(--font-heading);
  font-size: clamp(3rem, 7vw, 6rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1.0;
  color: {{TEXT}};
  margin-bottom: 1.5rem;
}
.hgm-h1 .gradient-word {
  background: linear-gradient(135deg, {{PRIMARY}} 0%, {{ACCENT}} 50%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hgm-sub {
  font-size: clamp(1rem, 1.75vw, 1.25rem);
  color: {{TEXT_SEC}};
  line-height: 1.7;
  max-width: 580px;
  margin: 0 auto 2.5rem;
}
.hgm-ctas {
  display: flex; justify-content: center; gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
.hgm-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 32px;
  background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}});
  color: #fff; border-radius: 14px;
  font-weight: 700; font-size: 1rem;
  text-decoration: none; border: none;
  box-shadow: 0 8px 32px rgba(99,102,241,0.35);
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hgm-btn-p:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(99,102,241,0.45); }
.hgm-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 32px;
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.6);
  color: {{TEXT}}; border-radius: 14px;
  font-weight: 600; font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s;
}
.hgm-btn-s:hover { background: rgba(255,255,255,0.9); }
.hgm-trust {
  display: flex; justify-content: center;
  align-items: center; gap: 1.5rem; flex-wrap: wrap;
  font-size: 0.8125rem; color: {{TEXT_MUTED}};
}
.hgm-trust-item { display: flex; align-items: center; gap: 6px; }
.hgm-trust-item svg { width: 14px; height: 14px; color: {{PRIMARY}}; }
.hgm-trust-divider { width: 4px; height: 4px; border-radius: 50%; background: {{BORDER}}; }
`,
  template: `<section id="hero-mesh">
  <div class="hgm-mesh">
    <div class="hgm-orb hgm-orb-1"></div>
    <div class="hgm-orb hgm-orb-2"></div>
    <div class="hgm-orb hgm-orb-3"></div>
  </div>
  <div class="hgm-noise"></div>

  <div class="hgm-inner">
    <div class="hgm-pill reveal">
      <span class="hgm-pill-dot"></span>
      {{pill}}
    </div>
    <h1 class="hgm-h1 reveal reveal-d1">
      {{heading}} <span class="gradient-word">{{headingAccent}}</span>
    </h1>
    <p class="hgm-sub reveal reveal-d2">{{subtext}}</p>
    <div class="hgm-ctas reveal reveal-d3">
      <a href="#contact" class="hgm-btn-p">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#features" class="hgm-btn-s">{{ctaSecondary}}</a>
    </div>
    <div class="hgm-trust reveal reveal-d4">
      <span class="hgm-trust-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{trust1}}
      </span>
      <div class="hgm-trust-divider"></div>
      <span class="hgm-trust-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{trust2}}
      </span>
      <div class="hgm-trust-divider"></div>
      <span class="hgm-trust-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{trust3}}
      </span>
    </div>
  </div>
</section>`,
}
