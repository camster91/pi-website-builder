import type { ComponentVariant } from '../types'

export const contactBookingCard: ComponentVariant = {
  id: 'contact-booking',
  name: 'Contact Booking Card',
  section: 'contact',
  description: 'Appointment/booking-style contact: service selector buttons + date/time fields + contact info — spas, clinics, coaches',
  bestFor: ['beauty', 'healthcare', 'fitness', 'local-service', 'education'],
  tags: ['booking', 'appointment', 'scheduler', 'spa', 'clinic', 'calendar', 'service-select'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'text', maxWords: 20, description: 'Booking description', required: true },
    {
      name: 'services', type: 'array', description: '4 bookable services', required: true,
      minItems: 3, maxItems: 4,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 3, description: 'Service name', required: true },
        { name: 'duration', type: 'text', maxWords: 2, description: 'Duration (e.g. 60 min)', required: true },
        { name: 'price', type: 'text', maxWords: 2, description: 'Price (e.g. $75)', required: true },
      ],
    },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'phonePlaceholder', type: 'text', maxWords: 2, description: 'Phone placeholder', required: false },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Book button text', required: true },
    { name: 'noteText', type: 'text', maxWords: 10, description: 'Booking note', required: false },
  ],
  css: `/* contact-booking */
#contact {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.cbk-inner { max-width: 680px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.cbk-header { text-align: center; margin-bottom: 3rem; }
.cbk-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.cbk-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.cbk-heading .accent-word { color: {{ACCENT}}; }
.cbk-sub { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.7; }
.cbk-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 24px; padding: 2.5rem; box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
/* Service selector */
.cbk-srv-label { font-size: 0.875rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.875rem; display: block; }
.cbk-services { display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; }
.cbk-srv {
  display: flex; align-items: center; justify-content: space-between;
  padding: 1rem 1.25rem; border: 2px solid {{BORDER}};
  border-radius: 14px; cursor: pointer;
  transition: all 0.2s; background: {{BG}};
}
.cbk-srv:hover, .cbk-srv.selected { border-color: {{PRIMARY}}; background: rgba(99,102,241,0.04); }
.cbk-srv-name { font-weight: 600; font-size: 0.9375rem; color: {{TEXT}}; }
.cbk-srv-meta { display: flex; align-items: center; gap: 1rem; }
.cbk-srv-dur { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.cbk-srv-price { font-size: 0.9375rem; font-weight: 800; color: {{PRIMARY}}; }
/* Form */
.cbk-form { display: flex; flex-direction: column; gap: 1.25rem; }
.cbk-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .cbk-row { grid-template-columns: 1fr; } }
.cbk-field { display: flex; flex-direction: column; gap: 5px; }
.cbk-field-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.cbk-input { padding: 12px 14px; border: 1.5px solid {{BORDER}}; border-radius: 10px; outline: none; font-family: var(--font-body); font-size: 0.9375rem; color: {{TEXT}}; background: {{BG}}; transition: border-color 0.2s; }
.cbk-input:focus { border-color: {{PRIMARY}}; }
.cbk-input::placeholder { color: {{TEXT_MUTED}}; }
.cbk-submit { padding: 14px 24px; background: {{PRIMARY}}; color: #fff; border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; margin-top: 0.5rem; }
.cbk-submit:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); }
.cbk-note { font-size: 0.8125rem; color: {{TEXT_MUTED}}; text-align: center; margin-top: 0.875rem; }
`,
  template: `<section id="contact">
  <div class="cbk-inner">
    <div class="cbk-header">
      <span class="cbk-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="cbk-heading reveal reveal-d1">{{heading}}</h2>
      <p class="cbk-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="cbk-card reveal">
      <span class="cbk-srv-label">Select a Service</span>
      <div class="cbk-services">
        {{#services}}
        <div class="cbk-srv" onclick="this.parentNode.querySelectorAll('.cbk-srv').forEach(s=>s.classList.remove('selected'));this.classList.add('selected')">
          <span class="cbk-srv-name">{{.name}}</span>
          <div class="cbk-srv-meta"><span class="cbk-srv-dur">{{.duration}}</span><span class="cbk-srv-price">{{.price}}</span></div>
        </div>
        {{/services}}
      </div>
      <form class="cbk-form" onsubmit="return false">
        <div class="cbk-row">
          <div class="cbk-field"><label class="cbk-field-label">Preferred Date</label><input class="cbk-input" type="date"></div>
          <div class="cbk-field"><label class="cbk-field-label">Preferred Time</label><input class="cbk-input" type="time"></div>
        </div>
        <div class="cbk-field"><label class="cbk-field-label">Full Name</label><input class="cbk-input" type="text" placeholder="{{namePlaceholder}}"></div>
        <div class="cbk-row">
          <div class="cbk-field"><label class="cbk-field-label">Email</label><input class="cbk-input" type="email" placeholder="{{emailPlaceholder}}"></div>
          <div class="cbk-field"><label class="cbk-field-label">Phone</label><input class="cbk-input" type="tel" placeholder="{{phonePlaceholder}}"></div>
        </div>
        <button type="submit" class="cbk-submit">{{btnText}}</button>
        <p class="cbk-note">{{noteText}}</p>
      </form>
    </div>
  </div>
</section>`,
}
