import type { ComponentVariant } from '../types'
export const portfolioProjectMap: ComponentVariant = {
  id: 'portfolio-map', name: 'Portfolio Interactive Map', section: 'portfolio' as any,
  description: 'Map showing locations of projects — global reach, physical presence',
  bestFor: ['real-estate','construction','agency'], tags: ['map','global','locations','presence','showcase'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
  ],
  css: `/* portfolio-map */
#port-pm{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.ppm-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.ppm-hd{text-align:center;margin-bottom:3rem}
.ppm-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.ppm-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.ppm-map{aspect-ratio:21/9;background:{{BG_SECTION}};border-radius:24px;display:flex;align-items:center;justify-content:center;color:{{TEXT_MUTED}}}`,
  template: `<section id="port-pm"><div class="ppm-in"><div class="ppm-hd"><span class="ppm-ey reveal">{{eyebrow}}</span><h2 class="ppm-h2 reveal">{{heading}}</h2></div><div class="ppm-map reveal">Map visual</div></div></section>`,
}
