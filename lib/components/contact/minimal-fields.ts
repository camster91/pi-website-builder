import type { ComponentVariant } from '../types'

export const contactMinimalFields: ComponentVariant = {
  id: 'contact-minimal',
  name: 'Contact Ultra Minimal',
  section: 'contact',
  description: 'Just name + email + button, massive whitespace, bold heading — for brands that convert on vibes alone',
  bestFor: ['agency', 'portfolio', 'saas', 'beauty'],
  tags: ['minimal', 'ultra-simple', 'clean', 'whitespace', 'bold', 'conversion'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Bold CTA heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'text', maxWords: 18, description: 'Short supporting text', required: true },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Submit button text', required: true },
    { name: 'privacyNote', type: 'text', maxWords: 10, description: 'Privacy note', required: false },
  ],
  css: `/* contact-minimal */
#contact {
  background: {{BG}};
  padding: clamp(6rem,12vw,10rem) 0;
  text-align: center;
}
.cmn-inner { max-width: 640px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.cmn-heading { font-family: var(--font-heading); font-size: clamp(2.5rem,6vw,5rem); font-weight: 900; letter-spacing: -0.05em; line-height: 1.0; color: {{TEXT}}; margin-bottom: 1.5rem; }
.cmn-heading .accent-word { color: {{PRIMARY}}; }
.cmn-sub { font-size: clamp(1rem,1.5vw,1.125rem); color: {{TEXT_SEC}}; line-height: 1.7; margin-bottom: 3rem; }
.cmn-form { display: flex; flex-direction: column; gap: 1rem; max-width: 480px; margin: 0 auto; }
.cmn-input { padding: 14px 18px; border: 2px solid {{BORDER}}; border-radius: 12px; outline: none; font-family: var(--font-body); font-size: 1rem; color: {{TEXT}}; background: {{BG_CARD}}; transition: border-color 0.2s; text-align: center; }
.cmn-input:focus { border-color: {{PRIMARY}}; }
.cmn-input::placeholder { color: {{TEXT_MUTED}}; }
.cmn-btn { padding: 16px 32px; background: {{TEXT}}; color: {{BG}}; border: none; border-radius: 12px; font-weight: 800; font-size: 1rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; }
.cmn-btn:hover { background: {{PRIMARY}}; transform: scale(1.04); }
.cmn-privacy { margin-top: 1.25rem; font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="contact">
  <div class="cmn-inner">
    <h2 class="cmn-heading reveal">{{heading}}</h2>
    <p class="cmn-sub reveal reveal-d1">{{subtext}}</p>
    <form class="cmn-form reveal reveal-d2" onsubmit="return false">
      <input class="cmn-input" type="text" placeholder="{{namePlaceholder}}">
      <input class="cmn-input" type="email" placeholder="{{emailPlaceholder}}">
      <button type="submit" class="cmn-btn">{{btnText}}</button>
    </form>
    <p class="cmn-privacy reveal">{{privacyNote}}</p>
  </div>
</section>`,
}
