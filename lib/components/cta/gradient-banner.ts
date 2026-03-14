import type { ComponentVariant } from '../types'

export const ctaGradientBanner: ComponentVariant = {
  id: 'cta-gradient-banner',
  name: 'CTA Gradient Banner',
  section: 'cta',
  description: 'Full-width gradient CTA with large heading, subtext, and dual buttons on a branded background',
  bestFor: ['saas', 'agency', 'fitness', 'ecommerce', 'local-service', 'healthcare', 'beauty', 'real-estate', 'education', 'nonprofit', 'restaurant', 'portfolio'],
  tags: ['cta', 'conversion', 'bold', 'full-width'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 4, description: 'Small label above heading', required: false },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Main CTA heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word(s) in heading', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Supporting text', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary button text', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary button text', required: true },
    { name: 'microcopy', type: 'text', maxWords: 8, description: 'Trust microcopy below buttons (e.g. "No credit card required")', required: false },
  ],
  css: `/* cta-gradient-banner */
#cta {
  background: linear-gradient(135deg, {{PRIMARY}} 0%, {{PRIMARY_DARK}} 60%, color-mix(in srgb, {{PRIMARY_DARK}} 80%, #000) 100%);
  padding: clamp(4rem, 8vw, 8rem) 0;
  position: relative;
  overflow: hidden;
}
/* Background decorations */
.cta-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(80px);
}
.cta-orb-1 {
  width: 500px; height: 500px;
  background: rgba(255,255,255,0.08);
  top: -150px; right: -100px;
  animation: cta-float 18s ease-in-out infinite;
}
.cta-orb-2 {
  width: 300px; height: 300px;
  background: color-mix(in srgb, {{ACCENT}} 25%, transparent);
  bottom: -80px; left: -50px;
  animation: cta-float 22s ease-in-out infinite reverse;
}
@keyframes cta-float { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-40px)} }

/* Noise overlay */
.cta-noise {
  position: absolute; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
}

.cta-inner {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  text-align: center;
}
.cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
}
.cta-heading {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: #fff;
  margin-bottom: 1.25rem;
}
.cta-heading .accent-word { color: {{ACCENT}}; }
.cta-sub {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  line-height: 1.7;
  color: rgba(255,255,255,0.8);
  margin-bottom: 2.5rem;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.cta-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.25rem; }
.cta-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 32px; background: #fff;
  color: {{PRIMARY}}; border: 2px solid transparent;
  border-radius: 12px; font-weight: 700; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.cta-btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.25); background: rgba(255,255,255,0.95); }
.cta-btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 32px; background: transparent;
  color: #fff; border: 2px solid rgba(255,255,255,0.4);
  border-radius: 12px; font-weight: 600; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.cta-btn-secondary:hover { border-color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.08); transform: translateY(-2px); }
.cta-microcopy {
  font-size: 0.875rem;
  color: rgba(255,255,255,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.cta-microcopy svg { width: 14px; height: 14px; }
`,
  template: `<section id="cta">
  <div class="cta-orb cta-orb-1"></div>
  <div class="cta-orb cta-orb-2"></div>
  <div class="cta-noise"></div>

  <div class="cta-inner">
    <div class="cta-eyebrow reveal">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"></path></svg>
      {{eyebrow}}
    </div>
    <h2 class="cta-heading reveal reveal-d1">{{heading}}</h2>
    <p class="cta-sub reveal reveal-d2">{{subtext}}</p>
    <div class="cta-buttons reveal reveal-d3">
      <a href="#contact" class="cta-btn-primary">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#features" class="cta-btn-secondary">{{ctaSecondary}}</a>
    </div>
    <p class="cta-microcopy reveal reveal-d4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      {{microcopy}}
    </p>
  </div>
</section>`,
}
