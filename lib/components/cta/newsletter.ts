import type { ComponentVariant } from '../types'

export const ctaNewsletter: ComponentVariant = {
  id: 'cta-newsletter',
  name: 'CTA Newsletter Capture',
  section: 'cta',
  description: 'Email newsletter signup with benefit icons, subscriber count social proof, light centered card design',
  bestFor: ['saas', 'education', 'nonprofit', 'local-service', 'agency', 'ecommerce'],
  tags: ['newsletter', 'email', 'form', 'light', 'subscription', 'capture'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'CTA heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Supporting text', required: true },
    { name: 'placeholder', type: 'text', maxWords: 4, description: 'Email input placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 2, description: 'Submit button text', required: true },
    { name: 'subscriberCount', type: 'text', maxWords: 2, description: 'Subscriber count (e.g. 2,400+)', required: true },
    { name: 'benefit1', type: 'text', maxWords: 3, description: 'Benefit 1', required: true },
    { name: 'benefit2', type: 'text', maxWords: 3, description: 'Benefit 2', required: true },
    { name: 'benefit3', type: 'text', maxWords: 3, description: 'Benefit 3', required: true },
  ],
  css: `/* cta-newsletter */
#cta-nl {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.cnl-inner { max-width: 680px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.cnl-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 24px;
  padding: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  position: relative; overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
}
/* Gradient top border */
.cnl-card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, {{PRIMARY}}, {{ACCENT}}, #8b5cf6);
}
.cnl-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.cnl-heading { font-family: var(--font-heading); font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 0.875rem; }
.cnl-heading .accent-word { color: {{PRIMARY}}; }
.cnl-sub { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.7; margin-bottom: 2rem; }
/* Form */
.cnl-form {
  display: flex; gap: 0; border-radius: 12px; overflow: hidden;
  border: 1.5px solid {{BORDER}};
  margin-bottom: 1rem;
}
@media (max-width: 480px) { .cnl-form { flex-direction: column; border-radius: 12px; } }
.cnl-input {
  flex: 1; padding: 14px 16px;
  border: none; outline: none;
  font-family: var(--font-body); font-size: 0.9375rem;
  color: {{TEXT}}; background: {{BG}};
}
.cnl-input::placeholder { color: {{TEXT_MUTED}}; }
.cnl-submit {
  padding: 14px 24px;
  background: {{PRIMARY}}; color: #fff; border: none;
  font-weight: 700; font-size: 0.9375rem; font-family: var(--font-body);
  cursor: pointer; white-space: nowrap;
  transition: background 0.3s;
}
@media (max-width: 480px) { .cnl-submit { border-radius: 0 0 10px 10px; }  }
.cnl-submit:hover { background: {{PRIMARY_DARK}}; }
.cnl-privacy { font-size: 0.75rem; color: {{TEXT_MUTED}}; margin-bottom: 2rem; }
/* Benefits */
.cnl-benefits { display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap; margin-bottom: 2rem; }
.cnl-benefit { display: flex; align-items: center; gap: 6px; font-size: 0.8125rem; color: {{TEXT_SEC}}; font-weight: 500; }
.cnl-benefit svg { width: 14px; height: 14px; color: {{PRIMARY}}; }
/* Subscriber count */
.cnl-count { font-size: 0.875rem; color: {{TEXT_MUTED}}; }
.cnl-count strong { color: {{PRIMARY}}; font-weight: 700; }
`,
  template: `<section id="cta-nl">
  <div class="cnl-inner">
    <div class="cnl-card reveal">
      <span class="cnl-eyebrow">{{eyebrow}}</span>
      <h2 class="cnl-heading">{{heading}}</h2>
      <p class="cnl-sub">{{subtext}}</p>
      <form class="cnl-form" onsubmit="return false">
        <input class="cnl-input" type="email" placeholder="{{placeholder}}" aria-label="Email address">
        <button type="submit" class="cnl-submit">{{btnText}}</button>
      </form>
      <p class="cnl-privacy">We respect your privacy. Unsubscribe at any time.</p>
      <div class="cnl-benefits">
        <span class="cnl-benefit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{{benefit1}}</span>
        <span class="cnl-benefit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{{benefit2}}</span>
        <span class="cnl-benefit"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{{benefit3}}</span>
      </div>
      <p class="cnl-count">Join <strong>{{subscriberCount}}</strong> subscribers</p>
    </div>
  </div>
</section>`,
}
