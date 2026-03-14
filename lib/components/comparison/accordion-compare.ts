import type { ComponentVariant } from '../types'
export const comparisonAccordion: ComponentVariant = {
  id: 'comparison-accordion', name: 'Comparison Detailed Accordion', section: 'comparison' as any,
  description: 'Accordion comparison list with detailed feature explanation — complex B2B sales',
  bestFor: ['saas','agency','education'], tags: ['accordion','detailed','features','complex','b2b'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'points', type: 'array', description: '4 points', required: true, minItems: 3, maxItems: 5,
      itemSlots: [
        { name: 'title', type: 'text', maxWords: 5, description: 'Point title', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Detailed breakdown', required: true },
      ] },
  ],
  css: `/* comparison-accordion */
#comp-ac{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.cac-in{max-width:800px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.cac-hd{text-align:center;margin-bottom:3rem}
.cac-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.cac-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.cac-list{border:1px solid {{BORDER}};border-radius:20px;overflow:hidden}
.cac-item{border-bottom:1px solid {{BORDER}}}
.cac-item:last-child{border-bottom:none}
.cac-trigger{width:100%;padding:1.5rem;display:flex;justify-content:space-between;align-items:center;background:{{BG_CARD}};border:none;cursor:pointer;font-family:var(--font-heading);font-weight:700;font-size:1.0625rem;color:{{TEXT}}}
.cac-body{padding:0 1.5rem 1.5rem;font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.6}
.cac-icon{font-size:1.25rem;font-weight:700;color:{{PRIMARY}}}`,
  template: `<section id="comp-ac"><div class="cac-in"><div class="cac-hd"><span class="cac-ey reveal">{{eyebrow}}</span><h2 class="cac-h2 reveal">{{heading}}</h2></div><div class="cac-list reveal-stagger">{{#points}}<div class="cac-item"><button class="cac-trigger" onclick="this.nextElementSibling.classList.toggle('active')"><span class="cac-title">{{.title}}</span><span class="cac-icon">+</span></button><div class="cac-body">{{.desc}}</div></div>{{/points}}</div></div></section><style>.cac-body{display:none}.cac-body.active{display:block}</style>`,
}
