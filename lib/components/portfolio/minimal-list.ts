import type { ComponentVariant } from '../types'
export const portfolioMinimalList: ComponentVariant = {
  id: 'portfolio-minimal', name: 'Portfolio Minimal List', section: 'portfolio' as any,
  description: 'Ultra-minimal list with year, project title, and category — clean, text-only',
  bestFor: ['design','agency','architecture'], tags: ['minimal','text-only','clean','typography','year'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
  ],
  css: `/* portfolio-minimal */
#port-mn{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.pmn-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.pmn-hd{text-align:center;margin-bottom:3rem}
.pmn-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.pmn-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.pmn-list{display:flex;flex-direction:column}
.pmn-item{display:grid;grid-template-columns:100px 1fr 1fr;gap:1.5rem;padding:1.5rem 0;border-bottom:1px solid {{BORDER}}}
.pmn-year{color:{{TEXT_MUTED}};font-family:var(--font-heading);font-weight:700}
.pmn-title{font-family:var(--font-heading);font-weight:700;color:{{TEXT}}}
.pmn-cat{color:{{TEXT_MUTED}}}`,
  template: `<section id="port-mn"><div class="pmn-in"><div class="pmn-hd"><span class="pmn-ey reveal">{{eyebrow}}</span><h2 class="pmn-h2 reveal">{{heading}}</h2></div><div class="pmn-list reveal-stagger"><div class="pmn-item"><span class="pmn-year">2026</span><h3 class="pmn-title">Project A</h3><span class="pmn-cat">Branding</span></div><div class="pmn-item"><span class="pmn-year">2025</span><h3 class="pmn-title">Project B</h3><span class="pmn-cat">Web Design</span></div></div></div></section>`,
}
