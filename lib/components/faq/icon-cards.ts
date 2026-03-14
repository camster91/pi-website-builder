import type { ComponentVariant } from '../types'
export const faqIconCards: ComponentVariant = {
  id: 'faq-icon-cards', name: 'FAQ Icon Cards', section: 'faq',
  description: 'FAQ presented as emoji-icon cards in a grid — visual, friendly, non-intimidating for consumer brands',
  bestFor: ['fitness','beauty','ecommerce','restaurant','local-service'], tags: ['icon-cards','emoji','visual','friendly','consumer','grid'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'faqs', type: 'array', description: '6 FAQ icon cards', required: true, minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Emoji icon', required: true },
        { name: 'q', type: 'text', maxWords: 8, description: 'Short question', required: true },
        { name: 'a', type: 'text', maxWords: 25, description: 'Answer', required: true },
      ] },
  ],
  css: `/* faq-icon-cards */
#faq-ic{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.fic-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.fic-hd{text-align:center;max-width:640px;margin:0 auto 3.5rem}
.fic-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.fic-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.fic-h2 .accent-word{color:{{ACCENT}}}
.fic-grid{display:grid;grid-template-columns:1fr;gap:1.25rem}
@media(min-width:640px){.fic-grid{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.fic-grid{grid-template-columns:repeat(3,1fr)}}
.fic-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem;transition:border-color .3s,box-shadow .3s}
.fic-card:hover{border-color:{{PRIMARY}};box-shadow:0 8px 24px rgba(0,0,0,.07)}
.fic-icon{font-size:2rem;display:block;margin-bottom:1rem}
.fic-q{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};margin-bottom:.625rem}
.fic-a{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.65}`,
  template: `<section id="faq-ic"><div class="fic-in"><div class="fic-hd"><span class="fic-ey reveal">{{eyebrow}}</span><h2 class="fic-h2 reveal reveal-d1">{{heading}}</h2></div><div class="fic-grid reveal-stagger">{{#faqs}}<div class="fic-card"><span class="fic-icon">{{.emoji}}</span><p class="fic-q">{{.q}}</p><p class="fic-a">{{.a}}</p></div>{{/faqs}}</div></div></section>`,
}
