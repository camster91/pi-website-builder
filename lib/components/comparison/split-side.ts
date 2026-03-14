import type { ComponentVariant } from '../types'
export const comparisonSplitSide: ComponentVariant = {
  id: 'comparison-split', name: 'Comparison Split View', section: 'comparison' as any,
  description: 'Two-column split layout — one side features, other side visuals/proof',
  bestFor: ['saas','agency','education'], tags: ['split','columns','comparison','features','visual'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 15, description: 'Subtext', required: true },
    { name: 'feat1', type: 'text', maxWords: 10, description: 'Feature 1', required: true },
    { name: 'feat2', type: 'text', maxWords: 10, description: 'Feature 2', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* comparison-split */
#comp-sp{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.csp-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem;align-items:center}
@media(min-width:1024px){.csp-in{grid-template-columns:1fr 1fr}}
.csp-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.csp-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1.25rem}
.csp-sub{font-size:1.125rem;color:{{TEXT_SEC}};line-height:1.75;margin-bottom:2.5rem}
.csp-feats{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2.5rem}
.csp-feat{display:flex;align-items:flex-start;gap:1rem}
.csp-feat::before{content:"✓";color:{{PRIMARY}};font-weight:700;font-size:1.25rem}
.csp-title{font-weight:700;color:{{TEXT}};margin-bottom:.25rem;display:block}
.csp-desc{font-size:.875rem;color:{{TEXT_MUTED}}}
.csp-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.csp-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.csp-viz{aspect-ratio:4/3;background:linear-gradient(135deg,{{PRIMARY}},{{ACCENT}});border-radius:24px;box-shadow:0 24px 64px rgba(0,0,0,.15)}`,
  template: `<section id="comp-sp"><div class="csp-in"><div class="reveal-left"><span class="csp-ey">{{eyebrow}}</span><h2 class="csp-h2">{{heading}}</h2><p class="csp-sub">{{subtext}}</p><div class="csp-feats"><div class="csp-feat"><div><span class="csp-title">Feature A</span><p class="csp-desc">{{feat1}}</p></div></div><div class="csp-feat"><div><span class="csp-title">Feature B</span><p class="csp-desc">{{feat2}}</p></div></div></div><a href="#contact" class="csp-cta">{{ctaText}} →</a></div><div class="csp-viz reveal-right"></div></div></section>`,
}
