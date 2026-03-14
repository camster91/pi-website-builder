import type { ComponentVariant } from '../types'
export const portfolioCaseStudy: ComponentVariant = {
  id: 'portfolio-case', name: 'Portfolio Case Study Cards', section: 'portfolio' as any,
  description: 'Cards with client name, project type, and key outcome stat — results-oriented portfolio',
  bestFor: ['agency','saas','consulting'], tags: ['case-study','results','cards','agency','business'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'cases', type: 'array', description: '3 cases', required: true, minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'client', type: 'text', maxWords: 3, description: 'Client name', required: true },
        { name: 'type', type: 'text', maxWords: 3, description: 'Project type', required: true },
        { name: 'result', type: 'text', maxWords: 5, description: 'Key outcome', required: true },
      ] },
  ],
  css: `/* portfolio-case */
#port-cs{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.pcs-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pcs-hd{text-align:center;margin-bottom:3rem}
.pcs-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pcs-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pcs-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:2rem}
.pcs-card{background:{{BG_SECTION}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem}
.pcs-client{font-size:.875rem;font-weight:700;color:{{PRIMARY}};margin-bottom:.5rem}
.pcs-type{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;color:{{TEXT}};margin-bottom:1.5rem}
.pcs-result{font-size:1.125rem;font-weight:700;color:{{TEXT_SEC}};border-top:1px solid {{BORDER}};padding-top:1.5rem}`,
  template: `<section id="port-cs"><div class="pcs-in"><div class="pcs-hd"><span class="pcs-ey reveal">{{eyebrow}}</span><h2 class="pcs-h2 reveal">{{heading}}</h2></div><div class="pcs-grid reveal-stagger">{{#cases}}<div class="pcs-card"><div class="pcs-client">{{.client}}</div><h3 class="pcs-type">{{.type}}</h3><p class="pcs-result">{{.result}}</p></div>{{/cases}}</div></div></section>`,
}
