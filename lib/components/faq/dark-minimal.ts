import type { ComponentVariant } from '../types'
export const faqDarkMinimal: ComponentVariant = {
  id: 'faq-dark', name: 'FAQ Dark Minimal', section: 'faq',
  description: 'Dark background FAQ with large numbered questions, generous spacing — premium SaaS/agency',
  bestFor: ['saas','agency','portfolio','fitness'], tags: ['dark','minimal','numbered','premium','large'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'faqs', type: 'array', description: '6 FAQs', required: true, minItems: 6, maxItems: 7,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 12, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 35, description: 'Answer', required: true },
      ] },
  ],
  css: `/* faq-dark */
#faq-dk{background:#0a0f1e;padding:clamp(4rem,8vw,7rem) 0}
.fdk-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.fdk-hd{text-align:center;margin-bottom:4rem}
.fdk-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.fdk-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff}
.fdk-list{display:flex;flex-direction:column;gap:0}
.fdk-item{border-bottom:1px solid rgba(255,255,255,.06);padding:2rem 0}
.fdk-num{font-family:var(--font-heading);font-size:3rem;font-weight:900;color:{{PRIMARY}};opacity:.15;line-height:1;margin-bottom:.5rem}
.fdk-q{font-family:var(--font-heading);font-size:1.125rem;font-weight:700;color:#fff;margin-bottom:.875rem}
.fdk-a{font-size:1rem;color:rgba(255,255,255,.45);line-height:1.75}`,
  template: `<section id="faq-dk"><div class="fdk-in"><div class="fdk-hd"><span class="fdk-ey reveal">{{eyebrow}}</span><h2 class="fdk-h2 reveal reveal-d1">{{heading}}</h2></div><div class="fdk-list reveal-stagger">{{#faqs}}<div class="fdk-item"><div class="fdk-num">{{@index}}</div><p class="fdk-q">{{.q}}</p><p class="fdk-a">{{.a}}</p></div>{{/faqs}}</div></div></section>`,
}
