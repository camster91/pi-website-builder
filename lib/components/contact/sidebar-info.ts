import type { ComponentVariant } from '../types'

export const contactSidebarInfo: ComponentVariant = {
  id: 'contact-sidebar',
  name: 'Contact Wide with Sidebar',
  section: 'contact',
  description: 'Narrow info sidebar (hours, phone, socials, FAQ) + wide main contact form — comprehensive contact page',
  bestFor: ['local-service', 'healthcare', 'education', 'nonprofit', 'real-estate'],
  tags: ['sidebar', 'comprehensive', 'wide', 'professional', 'full-page', 'info'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'subtext', type: 'text', maxWords: 20, description: 'Description', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: false },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email', required: false },
    { name: 'address', type: 'text', maxWords: 8, description: 'Address', required: false },
    { name: 'hours', type: 'text', maxWords: 8, description: 'Business hours', required: false },
    {
      name: 'faqs', type: 'array', description: '3 quick FAQs', required: false,
      minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 7, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 15, description: 'Answer', required: true },
      ],
    },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email', required: true },
    { name: 'subjectPlaceholder', type: 'text', maxWords: 3, description: 'Subject', required: false },
    { name: 'messagePlaceholder', type: 'text', maxWords: 4, description: 'Message', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Submit', required: true },
  ],
  css: `/* contact-sidebar */
#contact {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.csb-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .csb-inner { grid-template-columns: 320px 1fr; align-items: start; } }
.csb-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }
.csb-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.5rem; }
.csb-heading { font-family: var(--font-heading); font-size: 1.625rem; font-weight: 800; letter-spacing: -0.03em; color: {{TEXT}}; margin-bottom: 0.75rem; }
.csb-sub { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.75; }
.csb-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 16px; padding: 1.25rem; }
.csb-card-title { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 0.875rem; }
.csb-info-item { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.75rem; }
.csb-info-item:last-child { margin-bottom: 0; }
.csb-icon { width: 28px; height: 28px; border-radius: 8px; background: rgba(99,102,241,0.1); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.csb-icon svg { width: 13px; height: 13px; }
.csb-info-val { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.5; }
/* FAQs */
.csb-faq-item { padding: 0.75rem 0; border-bottom: 1px solid {{BORDER}}; }
.csb-faq-item:last-child { border-bottom: none; }
.csb-faq-q { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; margin-bottom: 0.375rem; }
.csb-faq-a { font-size: 0.8125rem; color: {{TEXT_MUTED}}; line-height: 1.55; }
/* Main form */
.csb-form-wrap { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 20px; padding: 2.5rem; }
.csb-form { display: flex; flex-direction: column; gap: 1.25rem; }
.csb-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .csb-row { grid-template-columns: 1fr; } }
.csb-field { display: flex; flex-direction: column; gap: 5px; }
.csb-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.csb-input { padding: 12px 14px; border: 1.5px solid {{BORDER}}; border-radius: 10px; outline: none; font-family: var(--font-body); font-size: 0.9375rem; color: {{TEXT}}; background: {{BG}}; transition: border-color 0.2s; }
.csb-input:focus { border-color: {{PRIMARY}}; }
.csb-input::placeholder { color: {{TEXT_MUTED}}; }
.csb-textarea { resize: vertical; min-height: 140px; }
.csb-submit { padding: 14px 24px; background: {{PRIMARY}}; color: #fff; border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; }
.csb-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="contact">
  <div class="csb-inner">
    <aside class="csb-sidebar reveal-left">
      <div>
        <span class="csb-eyebrow">{{eyebrow}}</span>
        <h2 class="csb-heading">{{heading}}</h2>
        <p class="csb-sub">{{subtext}}</p>
      </div>
      <div class="csb-card">
        <div class="csb-card-title">Contact Info</div>
        <div class="csb-info-item"><div class="csb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.58 4.84 2 2 0 0 1 3.55 2.66h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.76 2.92a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 5.69 5.69l.97-.97a2 2 0 0 1 2.11-.45c.95.36 1.92.63 2.92.76a2 2 0 0 1 1.72 2.02z"/></svg></div><span class="csb-info-val">{{phone}}</span></div>
        <div class="csb-info-item"><div class="csb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><span class="csb-info-val">{{email}}</span></div>
        <div class="csb-info-item"><div class="csb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><span class="csb-info-val">{{hours}}</span></div>
      </div>
      <div class="csb-card">
        <div class="csb-card-title">Quick FAQs</div>
        {{#faqs}}<div class="csb-faq-item"><div class="csb-faq-q">{{.q}}</div><div class="csb-faq-a">{{.a}}</div></div>{{/faqs}}
      </div>
    </aside>
    <div class="csb-form-wrap reveal-right">
      <form class="csb-form" onsubmit="return false">
        <div class="csb-row">
          <div class="csb-field"><label class="csb-label">Full Name</label><input class="csb-input" type="text" placeholder="{{namePlaceholder}}"></div>
          <div class="csb-field"><label class="csb-label">Email</label><input class="csb-input" type="email" placeholder="{{emailPlaceholder}}"></div>
        </div>
        <div class="csb-field"><label class="csb-label">Subject</label><input class="csb-input" type="text" placeholder="{{subjectPlaceholder}}"></div>
        <div class="csb-field"><label class="csb-label">Message</label><textarea class="csb-input csb-textarea" placeholder="{{messagePlaceholder}}"></textarea></div>
        <button type="submit" class="csb-submit">{{btnText}}</button>
      </form>
    </div>
  </div>
</section>`,
}
