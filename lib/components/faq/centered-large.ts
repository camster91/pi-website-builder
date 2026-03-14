import type { ComponentVariant } from '../types'
export const faqCenteredLarge: ComponentVariant = {
  id: 'faq-centered', name: 'FAQ Centered Large Typography', section: 'faq',
  description: 'Full-width centered FAQ with large question typography and dividers — whitespace-heavy editorial style',
  bestFor: ['agency','portfolio','saas','beauty'], tags: ['centered','editorial','large-type','whitespace','minimal'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'faqs', type: 'array', description: '5 FAQs', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 12, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 35, description: 'Answer', required: true },
      ] },
    { name: 'contactText', type: 'text', maxWords: 10, description: 'Still have questions text', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: false },
  ],
  css: `/* faq-centered */
#faq-cn{background:{{BG}};padding:clamp(5rem,10vw,9rem) 0}
.fcn-in{max-width:860px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.fcn-hd{text-align:center;margin-bottom:5rem}
.fcn-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.fcn-h2{font-family:var(--font-heading);font-size:clamp(2.5rem,5vw,4rem);font-weight:900;letter-spacing:-.05em;line-height:1.0;color:{{TEXT}}}
.fcn-list{display:flex;flex-direction:column;gap:0}
.fcn-item{border-top:1px solid {{BORDER}};padding:3rem 0}
.fcn-item:last-child{border-bottom:1px solid {{BORDER}}}
.fcn-q{font-family:var(--font-heading);font-size:clamp(1.25rem,2.5vw,1.75rem);font-weight:700;letter-spacing:-.02em;color:{{TEXT}};margin-bottom:1.25rem}
.fcn-a{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.8;max-width:680px}
.fcn-ft{text-align:center;margin-top:4rem}
.fcn-ft-text{font-size:1.0625rem;color:{{TEXT_SEC}};margin-bottom:1.5rem}
.fcn-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.fcn-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="faq-cn"><div class="fcn-in"><div class="fcn-hd"><span class="fcn-ey reveal">{{eyebrow}}</span><h2 class="fcn-h2 reveal reveal-d1">{{heading}}</h2></div><div class="fcn-list reveal-stagger">{{#faqs}}<div class="fcn-item"><p class="fcn-q">{{.q}}</p><p class="fcn-a">{{.a}}</p></div>{{/faqs}}</div><div class="fcn-ft reveal"><p class="fcn-ft-text">{{contactText}}</p><a href="#contact" class="fcn-cta">{{ctaText}} →</a></div></div></section>`,
}
