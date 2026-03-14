import type { ComponentVariant } from '../types'
export const faqBorderless: ComponentVariant = {
  id: 'faq-borderless', name: 'FAQ Borderless Open List', section: 'faq',
  description: 'Clean borderless FAQ list with dividers only — ultra-minimal, great for light professional sites',
  bestFor: ['healthcare','nonprofit','education','real-estate','local-service'], tags: ['borderless','minimal','clean','professional','dividers'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'faqs', type: 'array', description: '6 FAQs', required: true, minItems: 5, maxItems: 8,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 12, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 35, description: 'Answer', required: true },
      ] },
  ],
  css: `/* faq-borderless */
#faq-bl{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.fbl-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem}
@media(min-width:1024px){.fbl-in{grid-template-columns:1fr 2fr;align-items:start}}
.fbl-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.fbl-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};position:sticky;top:4rem}
.fbl-list{display:flex;flex-direction:column}
.fbl-item{padding:2rem 0;border-bottom:1px solid {{BORDER}}}
.fbl-item:first-child{border-top:1px solid {{BORDER}}}
.fbl-q{font-family:var(--font-heading);font-size:1.0625rem;font-weight:700;color:{{TEXT}};margin-bottom:.75rem}
.fbl-a{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.75}`,
  template: `<section id="faq-bl"><div class="fbl-in"><div class="reveal-left"><span class="fbl-ey">{{eyebrow}}</span><h2 class="fbl-h2">{{heading}}</h2></div><div class="fbl-list reveal-stagger">{{#faqs}}<div class="fbl-item"><p class="fbl-q">{{.q}}</p><p class="fbl-a">{{.a}}</p></div>{{/faqs}}</div></div></section>`,
}
