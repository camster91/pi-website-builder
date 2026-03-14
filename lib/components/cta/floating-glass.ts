import type { ComponentVariant } from '../types'

export const ctaFloatingGlass: ComponentVariant = {
  id: 'cta-glass',
  name: 'CTA Floating Glassmorphism Card',
  section: 'cta',
  description: 'Gradient background with floating glassmorphism card, heading, social proof avatars, dual CTAs — modern premium',
  bestFor: ['agency', 'saas', 'portfolio', 'beauty', 'fitness'],
  tags: ['glassmorphism', 'gradient', 'floating', 'modern', 'premium', 'blur'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 8, description: 'CTA heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'CTA subtext', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'socialProofCount', type: 'text', maxWords: 2, description: 'Count (e.g. 1,200+)', required: true },
    { name: 'socialProofText', type: 'text', maxWords: 5, description: 'Social proof text', required: true },
  ],
  css: `/* cta-glass */
#cta-gl {
  padding: clamp(4rem,8vw,7rem) 0;
  background: linear-gradient(135deg, {{PRIMARY}}, #7c3aed, {{ACCENT}});
  position: relative; overflow: hidden;
}
.cgl-orb { position: absolute; border-radius: 50%; pointer-events: none; }
.cgl-orb-1 { width: 400px; height: 400px; background: rgba(255,255,255,0.08); top: -150px; right: -100px; }
.cgl-orb-2 { width: 300px; height: 300px; background: rgba(255,255,255,0.05); bottom: -100px; left: -80px; }
.cgl-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.cgl-card {
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 28px; padding: clamp(2rem,5vw,4rem);
  text-align: center;
  box-shadow: 0 24px 64px rgba(0,0,0,0.2);
}
.cgl-heading { font-family: var(--font-heading); font-size: clamp(2rem,4.5vw,3.5rem); font-weight: 900; letter-spacing: -0.04em; line-height: 1.05; color: #fff; margin-bottom: 1.25rem; }
.cgl-heading .accent-word { color: rgba(255,255,255,0.7); text-decoration: underline; text-decoration-color: rgba(255,255,255,0.4); }
.cgl-sub { font-size: clamp(1rem,1.5vw,1.125rem); color: rgba(255,255,255,0.75); line-height: 1.7; margin-bottom: 2.5rem; }
.cgl-btns { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.cgl-btn-p { display: inline-flex; align-items: center; gap: 8px; padding: 14px 32px; background: #fff; color: {{PRIMARY}}; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s; }
.cgl-btn-p:hover { transform: scale(1.04); box-shadow: 0 12px 32px rgba(0,0,0,0.25); }
.cgl-btn-s { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border: 2px solid rgba(255,255,255,0.5); color: #fff; border-radius: 12px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
.cgl-btn-s:hover { background: rgba(255,255,255,0.12); }
/* Social proof row */
.cgl-proof { display: flex; align-items: center; justify-content: center; gap: 0.875rem; }
.cgl-avatars { display: flex; }
.cgl-av { width: 32px; height: 32px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 800; color: #fff; margin-left: -8px; }
.cgl-av:first-child { margin-left: 0; }
.cgl-proof-text { font-size: 0.875rem; color: rgba(255,255,255,0.75); }
.cgl-proof-count { font-weight: 700; color: #fff; }
`,
  template: `<section id="cta-gl">
  <div class="cgl-orb cgl-orb-1"></div>
  <div class="cgl-orb cgl-orb-2"></div>
  <div class="cgl-inner">
    <div class="cgl-card reveal">
      <h2 class="cgl-heading">{{heading}}</h2>
      <p class="cgl-sub">{{subtext}}</p>
      <div class="cgl-btns">
        <a href="#contact" class="cgl-btn-p">{{ctaPrimary}}</a>
        <a href="#features" class="cgl-btn-s">{{ctaSecondary}}</a>
      </div>
      <div class="cgl-proof">
        <div class="cgl-avatars">
          <div class="cgl-av">AJ</div><div class="cgl-av">MK</div><div class="cgl-av">RL</div><div class="cgl-av">+</div>
        </div>
        <p class="cgl-proof-text"><span class="cgl-proof-count">{{socialProofCount}}</span> {{socialProofText}}</p>
      </div>
    </div>
  </div>
</section>`,
}
