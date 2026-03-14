import type { ComponentVariant } from '../types'

export const ctaSplitForm: ComponentVariant = {
  id: 'cta-split-form',
  name: 'CTA Split with Inline Form',
  section: 'cta',
  description: 'Left: compelling heading + benefits. Right: multi-field contact/lead form with primary CTA button',
  bestFor: ['local-service', 'real-estate', 'healthcare', 'fitness', 'beauty', 'saas', 'education'],
  tags: ['form', 'lead-gen', 'split', 'conversion', 'contact-form', 'light'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'CTA heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'text', maxWords: 20, description: 'Supporting copy', required: true },
    {
      name: 'bullets', type: 'array', description: '4 benefit bullets', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 8, description: 'Benefit', required: true }],
    },
    { name: 'namePlaceholder', type: 'text', maxWords: 3, description: 'Name field placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 3, description: 'Email placeholder', required: true },
    { name: 'phonePlaceholder', type: 'text', maxWords: 3, description: 'Phone placeholder', required: false },
    { name: 'btnText', type: 'cta-text', maxWords: 4, description: 'Form submit text', required: true },
    { name: 'privacyText', type: 'text', maxWords: 10, description: 'Privacy line', required: false },
  ],
  css: `/* cta-split-form */
#cta-sf {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.csf-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid; grid-template-columns: 1fr;
  gap: 4rem; align-items: center;
}
@media (min-width: 1024px) { .csf-inner { grid-template-columns: 1fr 1fr; } }
/* Left */
.csf-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.csf-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.25rem; }
.csf-heading .accent-word { color: {{ACCENT}}; }
.csf-sub { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.75; margin-bottom: 2rem; }
.csf-bullets { display: flex; flex-direction: column; gap: 0.875rem; }
.csf-bullet { display: flex; align-items: center; gap: 10px; font-size: 0.9375rem; color: {{TEXT_SEC}}; }
.csf-check { width: 22px; height: 22px; border-radius: 50%; background: rgba(99,102,241,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.csf-check svg { width: 13px; height: 13px; color: {{PRIMARY}}; }
/* Right form */
.csf-form-wrap {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 2rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
}
.csf-form { display: flex; flex-direction: column; gap: 1rem; }
.csf-field {
  display: flex; flex-direction: column; gap: 6px;
}
.csf-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.csf-input {
  padding: 12px 14px;
  border: 1.5px solid {{BORDER}};
  border-radius: 10px; outline: none;
  font-family: var(--font-body); font-size: 0.9375rem;
  color: {{TEXT}}; background: {{BG}};
  transition: border-color 0.2s;
}
.csf-input:focus { border-color: {{PRIMARY}}; }
.csf-input::placeholder { color: {{TEXT_MUTED}}; }
.csf-submit {
  padding: 14px 24px; background: {{PRIMARY}}; color: #fff;
  border: none; border-radius: 12px;
  font-weight: 700; font-size: 1rem; font-family: var(--font-body);
  cursor: pointer; transition: all 0.3s;
  margin-top: 0.5rem;
}
.csf-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }
.csf-privacy { font-size: 0.75rem; color: {{TEXT_MUTED}}; text-align: center; margin-top: 0.75rem; }
`,
  template: `<section id="cta-sf">
  <div class="csf-inner">
    <div class="reveal-left">
      <span class="csf-eyebrow">{{eyebrow}}</span>
      <h2 class="csf-heading">{{heading}}</h2>
      <p class="csf-sub">{{subtext}}</p>
      <div class="csf-bullets">
        {{#bullets}}
        <div class="csf-bullet">
          <span class="csf-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
          {{.text}}
        </div>
        {{/bullets}}
      </div>
    </div>
    <div class="csf-form-wrap reveal-right">
      <form class="csf-form" onsubmit="return false">
        <div class="csf-field">
          <label class="csf-label">Full Name</label>
          <input class="csf-input" type="text" placeholder="{{namePlaceholder}}">
        </div>
        <div class="csf-field">
          <label class="csf-label">Email Address</label>
          <input class="csf-input" type="email" placeholder="{{emailPlaceholder}}">
        </div>
        <div class="csf-field">
          <label class="csf-label">Phone (optional)</label>
          <input class="csf-input" type="tel" placeholder="{{phonePlaceholder}}">
        </div>
        <button type="submit" class="csf-submit">{{btnText}}</button>
        <p class="csf-privacy">{{privacyText}}</p>
      </form>
    </div>
  </div>
</section>`,
}
