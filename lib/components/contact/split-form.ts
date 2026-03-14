import type { ComponentVariant } from '../types'

export const contactSplitForm: ComponentVariant = {
  id: 'contact-split-form',
  name: 'Contact Split Form',
  section: 'contact',
  description: 'Contact info with SVG icons on the left, working contact form on the right',
  bestFor: ['healthcare', 'local-service', 'beauty', 'fitness', 'real-estate', 'restaurant', 'education', 'nonprofit', 'saas', 'agency', 'ecommerce', 'portfolio'],
  tags: ['contact', 'form', 'professional'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word in heading', required: true },
    { name: 'subtext', type: 'text', maxWords: 25, description: 'Section subtext', required: false },
    { name: 'email', type: 'text', maxWords: 2, description: 'Business email address', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Business phone number', required: true },
    { name: 'address', type: 'text', maxWords: 8, description: 'Business address', required: true },
    { name: 'hours', type: 'text', maxWords: 6, description: 'Business hours', required: true },
    { name: 'submitLabel', type: 'cta-text', maxWords: 3, description: 'Form submit button text', required: true },
  ],
  css: `/* contact-split-form */
#contact {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.contact-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.contact-header {
  text-align: center; max-width: 640px;
  margin: 0 auto 4rem;
}
.contact-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.contact-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.contact-heading .accent-word { color: {{ACCENT}}; }
.contact-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}
@media (min-width: 1024px) {
  .contact-grid { grid-template-columns: 5fr 7fr; gap: 5rem; }
}

/* Info side */
.contact-info { display: flex; flex-direction: column; gap: 1.5rem; }

.contact-info-heading {
  font-family: var(--font-heading);
  font-size: 1.375rem; font-weight: 700;
  color: {{TEXT}}; margin-bottom: 0.5rem;
}
.contact-info-sub { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; }

.contact-row {
  display: flex; align-items: flex-start; gap: 1rem;
}
.contact-icon-wrap {
  width: 48px; height: 48px; border-radius: 12px;
  background: color-mix(in srgb, {{PRIMARY}} 10%, transparent);
  display: flex; align-items: center; justify-content: center;
  color: {{PRIMARY}}; flex-shrink: 0;
}
.contact-icon-wrap svg { width: 20px; height: 20px; }
.contact-row-label {
  font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: {{TEXT_MUTED}}; margin-bottom: 4px;
}
.contact-row-value { font-size: 0.9375rem; color: {{TEXT}}; font-weight: 500; }

/* Form side */
.contact-form-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 24px;
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: 0 4px 24px rgba(0,0,0,0.05);
}
.form-row { display: grid; gap: 1.25rem; }
@media (min-width: 640px) { .form-row-2 { grid-template-columns: 1fr 1fr; } }

.form-group { display: flex; flex-direction: column; gap: 0.5rem; }
.form-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.form-input, .form-select, .form-textarea {
  width: 100%; padding: 0.875rem 1.125rem;
  background: {{BG}}; border: 1.5px solid {{BORDER}};
  border-radius: 12px; font-size: 0.9375rem;
  color: {{TEXT}}; font-family: var(--font-body);
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  resize: none;
}
.form-input:focus, .form-textarea:focus {
  border-color: {{PRIMARY}};
  box-shadow: 0 0 0 3px color-mix(in srgb, {{PRIMARY}} 15%, transparent);
}
.form-input::placeholder, .form-textarea::placeholder { color: {{TEXT_MUTED}}; }
.form-textarea { min-height: 140px; resize: vertical; }
.form-submit {
  width: 100%; padding: 1rem 2rem;
  background: {{PRIMARY}}; color: #fff;
  border: none; border-radius: 12px;
  font-family: var(--font-body);
  font-size: 1rem; font-weight: 700;
  cursor: pointer; margin-top: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  display: flex; align-items: center; justify-content: center; gap: 8px;
}
.form-submit:hover {
  background: {{PRIMARY_DARK}};
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, {{PRIMARY}} 35%, transparent);
}
.form-submit svg { width: 18px; height: 18px; }
.form-privacy {
  font-size: 0.8125rem; color: {{TEXT_MUTED}}; text-align: center;
  margin-top: 1rem;
}
`,
  template: `<section id="contact">
  <div class="contact-inner">
    <div class="contact-header">
      <span class="contact-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="contact-heading reveal reveal-d1">{{heading}}</h2>
      <p class="contact-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="contact-grid">
      <!-- Info side -->
      <div class="contact-info reveal-left">
        <div>
          <h3 class="contact-info-heading">Get in touch</h3>
          <p class="contact-info-sub">We'd love to hear from you. Fill out the form or reach us directly.</p>
        </div>
        <div class="contact-row">
          <div class="contact-icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div><div class="contact-row-label">Email</div><div class="contact-row-value">{{email}}</div></div>
        </div>
        <div class="contact-row">
          <div class="contact-icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          </div>
          <div><div class="contact-row-label">Phone</div><div class="contact-row-value">{{phone}}</div></div>
        </div>
        <div class="contact-row">
          <div class="contact-icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </div>
          <div><div class="contact-row-label">Location</div><div class="contact-row-value">{{address}}</div></div>
        </div>
        <div class="contact-row">
          <div class="contact-icon-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          </div>
          <div><div class="contact-row-label">Hours</div><div class="contact-row-value">{{hours}}</div></div>
        </div>
      </div>

      <!-- Form side -->
      <div class="contact-form-card reveal-right">
        <form class="contact-form" onsubmit="(function(e){e.preventDefault();var btn=e.target.querySelector('.form-submit');var orig=btn.innerHTML;btn.innerHTML='<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'18\\' height=\\'18\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'currentColor\\' stroke-width=\\'2\\' stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\'><polyline points=\\'20 6 9 17 4 12\\'></polyline></svg> Sent!';btn.style.background=\\'#16a34a\\';setTimeout(function(){btn.innerHTML=orig;btn.style.background=\\'\\';e.target.reset();},3000);})(event)">
          <div class="form-row form-row-2" style="margin-bottom:1.25rem">
            <div class="form-group">
              <label class="form-label">Name</label>
              <input type="text" class="form-input" placeholder="Your full name" required>
            </div>
            <div class="form-group">
              <label class="form-label">Email</label>
              <input type="email" class="form-input" placeholder="your@email.com" required>
            </div>
          </div>
          <div class="form-row" style="margin-bottom:1.25rem">
            <div class="form-group">
              <label class="form-label">Subject</label>
              <input type="text" class="form-input" placeholder="How can we help?">
            </div>
          </div>
          <div class="form-row" style="margin-bottom:1.5rem">
            <div class="form-group">
              <label class="form-label">Message</label>
              <textarea class="form-textarea" placeholder="Tell us about your project..." required></textarea>
            </div>
          </div>
          <button type="submit" class="form-submit">
            {{submitLabel}}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <p class="form-privacy">🔒 Your information is safe and will never be shared.</p>
        </form>
      </div>
    </div>
  </div>
</section>`,
}
