import type { ComponentVariant } from '../types'

export const contactMapContact: ComponentVariant = {
  id: 'contact-map',
  name: 'Contact with Map',
  section: 'contact',
  description: 'Left: embedded map placeholder + address details. Right: simple contact form. Great for local businesses.',
  bestFor: ['local-service', 'restaurant', 'healthcare', 'beauty', 'fitness', 'real-estate'],
  tags: ['map', 'local', 'address', 'location', 'directions', 'in-person'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'address', type: 'text', maxWords: 10, description: 'Full address', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: true },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email address', required: true },
    { name: 'hours', type: 'text', maxWords: 8, description: 'Business hours', required: true },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'messagePlaceholder', type: 'text', maxWords: 4, description: 'Message placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Submit button', required: true },
  ],
  css: `/* contact-map */
#contact {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.cmap-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 1024px) { .cmap-inner { grid-template-columns: 1fr 1fr; align-items: start; } }
.cmap-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.cmap-heading { font-family: var(--font-heading); font-size: clamp(1.75rem,3.5vw,2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.5rem; }
/* Map placeholder */
.cmap-map { border-radius: 16px; overflow: hidden; background: {{BG_SECTION}}; aspect-ratio: 4/3; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; border: 1px solid {{BORDER}}; position: relative; }
.cmap-map-icon { font-size: 3rem; opacity: 0.3; }
.cmap-map-label { position: absolute; bottom: 1rem; left: 1rem; background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 10px; padding: 0.625rem 1rem; font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.cmap-details { display: flex; flex-direction: column; gap: 1rem; }
.cmap-detail { display: flex; align-items: flex-start; gap: 0.875rem; }
.cmap-detail-icon { width: 36px; height: 36px; border-radius: 10px; background: rgba(99,102,241,0.1); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.cmap-detail-icon svg { width: 17px; height: 17px; }
.cmap-detail-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: {{TEXT_MUTED}}; }
.cmap-detail-val { font-size: 0.9375rem; font-weight: 600; color: {{TEXT}}; line-height: 1.4; }
/* Form */
.cmap-form-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 20px; padding: 2rem; }
.cmap-form { display: flex; flex-direction: column; gap: 1.25rem; }
.cmap-field { display: flex; flex-direction: column; gap: 5px; }
.cmap-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.cmap-input { padding: 12px 14px; border: 1.5px solid {{BORDER}}; border-radius: 10px; outline: none; font-family: var(--font-body); font-size: 0.9375rem; color: {{TEXT}}; background: {{BG}}; transition: border-color 0.2s; }
.cmap-input:focus { border-color: {{PRIMARY}}; }
.cmap-input::placeholder { color: {{TEXT_MUTED}}; }
.cmap-textarea { resize: vertical; min-height: 120px; }
.cmap-submit { padding: 13px 24px; background: {{PRIMARY}}; color: #fff; border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; }
.cmap-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
`,
  template: `<section id="contact">
  <div class="cmap-inner">
    <div class="reveal-left">
      <span class="cmap-eyebrow">{{eyebrow}}</span>
      <h2 class="cmap-heading">{{heading}}</h2>
      <div class="cmap-map">
        <span class="cmap-map-icon">📍</span>
        <div class="cmap-map-label">📍 {{address}}</div>
      </div>
      <div class="cmap-details">
        <div class="cmap-detail"><div class="cmap-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div class="cmap-detail-label">Address</div><div class="cmap-detail-val">{{address}}</div></div></div>
        <div class="cmap-detail"><div class="cmap-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.58 4.84 2 2 0 0 1 3.55 2.66h3a2 2 0 0 1 2 1.72c.13 1 .4 1.97.76 2.92a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 5.69 5.69l.97-.97a2 2 0 0 1 2.11-.45c.95.36 1.92.63 2.92.76a2 2 0 0 1 1.72 2.02z"/></svg></div><div><div class="cmap-detail-label">Phone</div><div class="cmap-detail-val">{{phone}}</div></div></div>
        <div class="cmap-detail"><div class="cmap-detail-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div class="cmap-detail-label">Hours</div><div class="cmap-detail-val">{{hours}}</div></div></div>
      </div>
    </div>
    <div class="cmap-form-card reveal-right">
      <form class="cmap-form" onsubmit="return false">
        <div class="cmap-field"><label class="cmap-label">Name</label><input class="cmap-input" type="text" placeholder="{{namePlaceholder}}"></div>
        <div class="cmap-field"><label class="cmap-label">Email</label><input class="cmap-input" type="email" placeholder="{{emailPlaceholder}}"></div>
        <div class="cmap-field"><label class="cmap-label">Message</label><textarea class="cmap-input cmap-textarea" placeholder="{{messagePlaceholder}}"></textarea></div>
        <button type="submit" class="cmap-submit">{{btnText}}</button>
      </form>
    </div>
  </div>
</section>`,
}
