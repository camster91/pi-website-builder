import type { ComponentVariant } from '../types'
export const statsDarkGradient: ComponentVariant = {
  id: 'stats-dark-gradient', name: 'Stats Dark Gradient Numbers', section: 'stats' as any,
  description: 'Dark section with gradient-colored giant stat numbers — dramatic, premium',
  bestFor: ['saas','agency','fitness'], tags: ['dark','gradient','numbers','bold','premium'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'stats', type: 'array', description: '4 stats', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Value', required: true },
        { name: 'label', type: 'stat-label', maxWords: 4, description: 'Label', required: true },
        { name: 'desc', type: 'text', maxWords: 8, description: 'Short description', required: false },
      ] },
  ],
  css: `/* stats-dark-gradient */
#stats-dg{background:linear-gradient(135deg,#0a0f1e,#1a0f2e);padding:clamp(4rem,8vw,7rem) 0;position:relative;overflow:hidden}
.sdg-glow{position:absolute;width:500px;height:500px;border-radius:50%;background:{{PRIMARY}};opacity:.07;filter:blur(100px);top:-150px;right:-100px;pointer-events:none}
.sdg-inner{position:relative;z-index:1;max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.sdg-hd{text-align:center;margin-bottom:4rem}
.sdg-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:.875rem}
.sdg-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;color:#fff}
.sdg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem}
@media(min-width:1024px){.sdg-grid{grid-template-columns:repeat(4,1fr)}}
.sdg-stat{text-align:center;padding:2rem}
.sdg-val{font-family:var(--font-heading);font-size:clamp(2.5rem,5vw,4rem);font-weight:900;letter-spacing:-.05em;line-height:1;display:block;margin-bottom:.5rem;background:linear-gradient(135deg,{{PRIMARY}},{{ACCENT}});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sdg-lbl{font-size:.9375rem;color:rgba(255,255,255,.6);font-weight:600;display:block;margin-bottom:.375rem}
.sdg-desc{font-size:.8125rem;color:rgba(255,255,255,.3);line-height:1.4}`,
  template: `<section id="stats-dg"><div class="sdg-glow"></div><div class="sdg-inner"><div class="sdg-hd"><span class="sdg-ey reveal">{{eyebrow}}</span><h2 class="sdg-h2 reveal reveal-d1">{{heading}}</h2></div><div class="sdg-grid reveal-stagger">{{#stats}}<div class="sdg-stat"><span class="sdg-val counter" data-target="{{.value}}">{{.value}}</span><span class="sdg-lbl">{{.label}}</span><span class="sdg-desc">{{.desc}}</span></div>{{/stats}}</div></div></section>`,
}
