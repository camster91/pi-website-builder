import type { ComponentVariant } from '../types'
export const faqNumbered: ComponentVariant = {
  id: 'faq-numbered', name: 'FAQ Large Numbered', section: 'faq',
  description: 'Large bold numbered FAQ list — editorial, readable, no collapse needed for under 8 questions',
  bestFor: ['agency','nonprofit','education','local-service','healthcare'], tags: ['numbered','large','editorial','clean','readable'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'faqs', type: 'array', description: '6 FAQs', required: true, minItems: 5, maxItems: 8,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 12, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 35, description: 'Answer', required: true },
      ] },
  ],
  css: `/* faq-numbered */
#faq-nm{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.fnm-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem}
@media(min-width:1024px){.fnm-in{grid-template-columns:1fr 1fr;align-items:start}}
.fnm-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.fnm-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.fnm-h2 .accent-word{color:{{ACCENT}}}
.fnm-list{display:flex;flex-direction:column;gap:2rem}
.fnm-item{display:flex;gap:1.5rem}
.fnm-num{font-family:var(--font-heading);font-size:2.5rem;font-weight:900;letter-spacing:-.05em;color:{{PRIMARY}};opacity:.15;line-height:1;flex-shrink:0;min-width:44px}
.fnm-q{font-family:var(--font-heading);font-size:1.0625rem;font-weight:700;color:{{TEXT}};margin-bottom:.625rem}
.fnm-a{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.7}`,
  template: `<section id="faq-nm"><div class="fnm-in"><div class="reveal-left"><span class="fnm-ey">{{eyebrow}}</span><h2 class="fnm-h2">{{heading}}</h2></div><div class="fnm-list reveal-stagger">{{#faqs}}<div class="fnm-item"><div class="fnm-num">{{@index}}</div><div><p class="fnm-q">{{.q}}</p><p class="fnm-a">{{.a}}</p></div></div>{{/faqs}}</div></div></section>`,
}
