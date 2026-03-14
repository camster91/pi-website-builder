import type { ComponentVariant } from '../types'

export const contactGlassmorphism: ComponentVariant = {
  id: 'contact-glass',
  name: 'Contact Glassmorphism',
  section: 'contact',
  description: 'Gradient/mesh background with floating glassmorphism contact card — modern, premium agency aesthetic',
  bestFor: ['agency', 'saas', 'portfolio', 'fitness'],
  tags: ['glassmorphism', 'gradient', 'premium', 'modern', 'blur', 'floating', 'agency'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'text', maxWords: 20, description: 'Section subtext', required: true },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'messagePlaceholder', type: 'text', maxWords: 4, description: 'Message placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Submit text', required: true },
    { name: 'email', type: 'text', maxWords: 2, description: 'Direct email address', required: false },
  ],
  css: `/* contact-glass */
#contact {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  padding: clamp(4rem,8vw,7rem) 0;
  position: relative; overflow: hidden;
}
.cgl2-orb { position: absolute; border-radius: 50%; filter: blur(80px); pointer-events: none; }
.cgl2-orb-1 { width: 500px; height: 500px; background: {{PRIMARY}}; opacity: 0.15; top: -200px; left: -150px; }
.cgl2-orb-2 { width: 400px; height: 400px; background: {{ACCENT}}; opacity: 0.1; bottom: -150px; right: -100px; }
.cgl2-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.cgl2-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3.25rem); font-weight: 900; letter-spacing: -0.04em; line-height: 1.1; color: #fff; margin-bottom: 1rem; text-align: center; }
.cgl2-heading .accent-word { color: {{ACCENT}}; }
.cgl2-sub { font-size: 1.0625rem; color: rgba(255,255,255,0.55); line-height: 1.7; text-align: center; margin-bottom: 3rem; }
.cgl2-card {
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 24px; padding: 2.5rem;
}
.cgl2-form { display: flex; flex-direction: column; gap: 1.25rem; }
.cgl2-field { display: flex; flex-direction: column; gap: 6px; }
.cgl2-label { font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.6); }
.cgl2-input { padding: 13px 16px; border: 1.5px solid rgba(255,255,255,0.12); border-radius: 10px; outline: none; font-family: var(--font-body); font-size: 0.9375rem; color: #fff; background: rgba(255,255,255,0.06); transition: border-color 0.2s; }
.cgl2-input:focus { border-color: {{PRIMARY}}; }
.cgl2-input::placeholder { color: rgba(255,255,255,0.3); }
.cgl2-textarea { resize: vertical; min-height: 120px; }
.cgl2-submit { padding: 14px 24px; background: {{PRIMARY}}; color: #fff; border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; }
.cgl2-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.4); }
.cgl2-alt { text-align: center; margin-top: 1.5rem; font-size: 0.875rem; color: rgba(255,255,255,0.4); }
.cgl2-alt a { color: rgba(255,255,255,0.7); }
`,
  template: `<section id="contact">
  <div class="cgl2-orb cgl2-orb-1"></div>
  <div class="cgl2-orb cgl2-orb-2"></div>
  <div class="cgl2-inner">
    <h2 class="cgl2-heading reveal">{{heading}}</h2>
    <p class="cgl2-sub reveal reveal-d1">{{subtext}}</p>
    <div class="cgl2-card reveal reveal-d2">
      <form class="cgl2-form" onsubmit="return false">
        <div class="cgl2-field"><label class="cgl2-label">Full Name</label><input class="cgl2-input" type="text" placeholder="{{namePlaceholder}}"></div>
        <div class="cgl2-field"><label class="cgl2-label">Email</label><input class="cgl2-input" type="email" placeholder="{{emailPlaceholder}}"></div>
        <div class="cgl2-field"><label class="cgl2-label">Message</label><textarea class="cgl2-input cgl2-textarea" placeholder="{{messagePlaceholder}}"></textarea></div>
        <button type="submit" class="cgl2-submit">{{btnText}}</button>
      </form>
    </div>
    <p class="cgl2-alt reveal">Or email us directly: <a href="mailto:{{email}}">{{email}}</a></p>
  </div>
</section>`,
}
