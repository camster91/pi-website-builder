import type { ComponentVariant } from '../types'

export const contactCenteredForm: ComponentVariant = {
  id: 'contact-centered',
  name: 'Contact Centered Single Column',
  section: 'contact',
  description: 'Centered single-column contact form with icons, contact info strip below, minimal and professional',
  bestFor: ['saas', 'agency', 'nonprofit', 'education', 'ecommerce'],
  tags: ['centered', 'minimal', 'form', 'clean', 'single-column'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Description', required: true },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name field placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'messagePlaceholder', type: 'text', maxWords: 4, description: 'Message placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Submit button text', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: false },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email address', required: false },
    { name: 'address', type: 'text', maxWords: 6, description: 'Business address', required: false },
  ],
  css: `/* contact-centered */
#contact {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.cc-inner { max-width: 680px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.cc-header { text-align: center; margin-bottom: 3rem; }
.cc-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.cc-heading { font-family: var(--font-heading); font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.cc-heading .accent-word { color: {{ACCENT}}; }
.cc-sub { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Form */
.cc-form {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
  margin-bottom: 2.5rem;
}
.cc-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .cc-row { grid-template-columns: 1fr; } }
.cc-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 1rem; }
.cc-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.cc-input {
  padding: 12px 14px;
  border: 1.5px solid {{BORDER}}; border-radius: 10px;
  outline: none; font-family: var(--font-body); font-size: 0.9375rem;
  color: {{TEXT}}; background: {{BG}};
  transition: border-color 0.2s;
}
.cc-input:focus { border-color: {{PRIMARY}}; }
.cc-input::placeholder { color: {{TEXT_MUTED}}; }
.cc-textarea { resize: vertical; min-height: 140px; line-height: 1.6; }
.cc-submit {
  width: 100%; padding: 14px 24px;
  background: {{PRIMARY}}; color: #fff; border: none;
  border-radius: 12px; font-weight: 700; font-size: 1rem;
  font-family: var(--font-body); cursor: pointer;
  transition: all 0.3s; margin-top: 0.5rem;
}
.cc-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
/* Contact info strip */
.cc-info { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; }
.cc-info-item { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: {{TEXT_SEC}}; }
.cc-info-item svg { width: 16px; height: 16px; color: {{PRIMARY}}; flex-shrink: 0; }
`,
  template: `<section id="contact">
  <div class="cc-inner">
    <div class="cc-header">
      <span class="cc-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="cc-heading reveal reveal-d1">{{heading}}</h2>
      <p class="cc-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <form class="cc-form reveal" onsubmit="return false">
      <div class="cc-row">
        <div class="cc-field">
          <label class="cc-label">Full Name</label>
          <input class="cc-input" type="text" placeholder="{{namePlaceholder}}">
        </div>
        <div class="cc-field">
          <label class="cc-label">Email Address</label>
          <input class="cc-input" type="email" placeholder="{{emailPlaceholder}}">
        </div>
      </div>
      <div class="cc-field">
        <label class="cc-label">Message</label>
        <textarea class="cc-input cc-textarea" placeholder="{{messagePlaceholder}}"></textarea>
      </div>
      <button type="submit" class="cc-submit">{{btnText}}</button>
    </form>
    <div class="cc-info reveal">
      <div class="cc-info-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.58 4.84 2 2 0 0 1 3.55 2.66h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.76 2.92a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 5.69 5.69l.97-.97a2 2 0 0 1 2.11-.45c.95.36 1.92.63 2.92.76a2 2 0 0 1 1.72 2.02z"></path></svg>
        {{phone}}
      </div>
      <div class="cc-info-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        {{email}}
      </div>
      <div class="cc-info-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {{address}}
      </div>
    </div>
  </div>
</section>`,
}
