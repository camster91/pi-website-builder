import type { ComponentVariant } from '../types'

export const contactDarkForm: ComponentVariant = {
  id: 'contact-dark',
  name: 'Contact Dark Themed Form',
  section: 'contact',
  description: 'Dark background contact section with contact info cards on left and a sleek form on right — premium agency style',
  bestFor: ['agency', 'portfolio', 'saas', 'real-estate', 'fitness'],
  tags: ['dark', 'premium', 'agency', 'form', 'contact-info', 'split'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading (white)', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Description', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: false },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email address', required: false },
    { name: 'hours', type: 'text', maxWords: 5, description: 'Business hours', required: false },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'messagePlaceholder', type: 'text', maxWords: 4, description: 'Message placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Submit button', required: true },
  ],
  css: `/* contact-dark */
#contact {
  background: #080c14;
  padding: clamp(4rem, 8vw, 7rem) 0;
  position: relative; overflow: hidden;
}
.cdk-glow { position: absolute; border-radius: 50%; filter: blur(100px); pointer-events: none; }
.cdk-glow-1 { width: 400px; height: 400px; background: {{PRIMARY}}; opacity: 0.08; top: -100px; right: -100px; }
.cdk-inner {
  position: relative; z-index: 1;
  max-width: 1200px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid; grid-template-columns: 1fr;
  gap: 4rem; align-items: start;
}
@media (min-width: 1024px) { .cdk-inner { grid-template-columns: 38% 1fr; } }
/* Left info */
.cdk-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{ACCENT}}; margin-bottom: 1rem; }
.cdk-heading { font-family: var(--font-heading); font-size: clamp(2rem, 3.5vw, 2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: #fff; margin-bottom: 1.25rem; }
.cdk-sub { font-size: 1rem; color: rgba(255,255,255,0.5); line-height: 1.75; margin-bottom: 2.5rem; }
.cdk-cards { display: flex; flex-direction: column; gap: 1rem; }
.cdk-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px; padding: 1.25rem;
  display: flex; align-items: center; gap: 1rem;
}
.cdk-card-icon {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(99,102,241,0.15);
  display: flex; align-items: center; justify-content: center;
  color: {{PRIMARY}}; flex-shrink: 0;
}
.cdk-card-icon svg { width: 20px; height: 20px; }
.cdk-card-label { font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.35); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 2px; }
.cdk-card-value { font-size: 0.9375rem; font-weight: 600; color: rgba(255,255,255,0.8); }
/* Right form */
.cdk-form-wrap {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px; padding: 2.5rem;
}
.cdk-form { display: flex; flex-direction: column; gap: 1.25rem; }
.cdk-field { display: flex; flex-direction: column; gap: 6px; }
.cdk-label { font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.6); }
.cdk-input {
  padding: 13px 16px;
  border: 1.5px solid rgba(255,255,255,0.1); border-radius: 10px;
  outline: none; font-family: var(--font-body); font-size: 0.9375rem;
  color: #fff; background: rgba(255,255,255,0.04);
  transition: border-color 0.2s;
}
.cdk-input:focus { border-color: {{PRIMARY}}; }
.cdk-input::placeholder { color: rgba(255,255,255,0.25); }
.cdk-textarea { resize: vertical; min-height: 140px; line-height: 1.6; }
.cdk-submit {
  padding: 14px 24px; background: {{PRIMARY}}; color: #fff; border: none;
  border-radius: 12px; font-weight: 700; font-size: 1rem;
  font-family: var(--font-body); cursor: pointer; transition: all 0.3s;
}
.cdk-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.35); }
`,
  template: `<section id="contact">
  <div class="cdk-glow cdk-glow-1"></div>
  <div class="cdk-inner">
    <div>
      <span class="cdk-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="cdk-heading reveal reveal-d1">{{heading}}</h2>
      <p class="cdk-sub reveal reveal-d2">{{subtext}}</p>
      <div class="cdk-cards reveal-stagger">
        <div class="cdk-card">
          <div class="cdk-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.58 4.84 2 2 0 0 1 3.55 2.66h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.76 2.92a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 5.69 5.69l.97-.97a2 2 0 0 1 2.11-.45c.95.36 1.92.63 2.92.76a2 2 0 0 1 1.72 2.02z"></path></svg></div>
          <div><div class="cdk-card-label">Phone</div><div class="cdk-card-value">{{phone}}</div></div>
        </div>
        <div class="cdk-card">
          <div class="cdk-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
          <div><div class="cdk-card-label">Email</div><div class="cdk-card-value">{{email}}</div></div>
        </div>
        <div class="cdk-card">
          <div class="cdk-card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div><div class="cdk-card-label">Hours</div><div class="cdk-card-value">{{hours}}</div></div>
        </div>
      </div>
    </div>
    <div class="cdk-form-wrap reveal-right">
      <form class="cdk-form" onsubmit="return false">
        <div class="cdk-field">
          <label class="cdk-label">Full Name</label>
          <input class="cdk-input" type="text" placeholder="{{namePlaceholder}}">
        </div>
        <div class="cdk-field">
          <label class="cdk-label">Email Address</label>
          <input class="cdk-input" type="email" placeholder="{{emailPlaceholder}}">
        </div>
        <div class="cdk-field">
          <label class="cdk-label">Message</label>
          <textarea class="cdk-input cdk-textarea" placeholder="{{messagePlaceholder}}"></textarea>
        </div>
        <button type="submit" class="cdk-submit">{{btnText}}</button>
      </form>
    </div>
  </div>
</section>`,
}
