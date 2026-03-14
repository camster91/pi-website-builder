import type { ComponentVariant } from '../types'
export const comparisonVisualResults: ComponentVariant = {
  id: 'comparison-visual', name: 'Comparison Visual Before/After', section: 'comparison' as any,
  description: 'Side-by-side card comparison with icon/image — quick emotional proof',
  bestFor: ['beauty','fitness','renovation'], tags: ['visual','results','comparison','transformation','proof'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'case1', type: 'text', maxWords: 4, description: 'Title 1', required: true },
    { name: 'case2', type: 'text', maxWords: 4, description: 'Title 2', required: true },
  ],
  css: `/* comparison-visual */
#comp-vr{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.cvr-in{max-width:1000px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.cvr-hd{text-align:center;margin-bottom:3rem}
.cvr-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.cvr-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.cvr-grid{display:grid;grid-template-columns:1fr 1fr;gap:2rem}
.cvr-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:2rem;text-align:center}
.cvr-img{width:100%;aspect-ratio:4/3;background:{{BORDER}};border-radius:12px;margin-bottom:1.5rem}
.cvr-title{font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:{{TEXT}}}`,
  template: `<section id="comp-vr"><div class="cvr-in"><div class="cvr-hd"><span class="cvr-ey reveal">{{eyebrow}}</span><h2 class="cvr-h2 reveal">{{heading}}</h2></div><div class="cvr-grid reveal-stagger"><div class="cvr-card"><div class="cvr-img"></div><h3 class="cvr-title">{{case1}}</h3></div><div class="cvr-card"><div class="cvr-img"></div><h3 class="cvr-title">{{case2}}</h3></div></div></div></section>`,
}
