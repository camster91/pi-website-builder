import type { ComponentVariant } from '../types'

export const socialProofDarkMarquee: ComponentVariant = {
  id: 'social-proof-dark-marquee',
  name: 'Social Proof Dark Logo Marquee',
  section: 'social-proof',
  description: 'Dark bg infinite scrolling logo marquee strip — premium SaaS look, infinite CSS animation',
  bestFor: ['saas', 'agency', 'portfolio'],
  tags: ['dark', 'marquee', 'logos', 'infinite-scroll', 'animated', 'premium', 'continuous'],
  slots: [
    { name: 'label', type: 'text', maxWords: 5, description: 'Label above marquee', required: true },
    {
      name: 'logos', type: 'array', description: '8 company names for marquee', required: true,
      minItems: 8, maxItems: 10,
      itemSlots: [{ name: 'name', type: 'text', maxWords: 2, description: 'Company name', required: true }],
    },
  ],
  css: `/* social-proof-dark-marquee */
#sp-dmarq {
  background: #0a0f1e;
  padding: 3rem 0;
  overflow: hidden;
}
.spdm-label { text-align: center; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.25); margin-bottom: 2rem; }
.spdm-track { position: relative; overflow: hidden; }
.spdm-track::before, .spdm-track::after { content: ''; position: absolute; top: 0; bottom: 0; width: 120px; z-index: 2; pointer-events: none; }
.spdm-track::before { left: 0; background: linear-gradient(to right,#0a0f1e,transparent); }
.spdm-track::after { right: 0; background: linear-gradient(to left,#0a0f1e,transparent); }
.spdm-inner { display: flex; width: max-content; animation: spdmScroll 28s linear infinite; }
.spdm-inner:hover { animation-play-state: paused; }
@keyframes spdmScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.spdm-set { display: flex; gap: 3rem; align-items: center; padding: 0 1.5rem; }
.spdm-logo { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 900; letter-spacing: -0.03em; color: rgba(255,255,255,0.18); white-space: nowrap; transition: color 0.3s; cursor: default; }
.spdm-logo:hover { color: rgba(255,255,255,0.5); }
.spdm-sep { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.1); flex-shrink: 0; }
`,
  template: `<section id="sp-dmarq">
  <p class="spdm-label reveal">{{label}}</p>
  <div class="spdm-track">
    <div class="spdm-inner">
      <div class="spdm-set">
        {{#logos}}<span class="spdm-logo">{{.name}}</span><span class="spdm-sep"></span>{{/logos}}
      </div>
      <div class="spdm-set" aria-hidden="true">
        {{#logos}}<span class="spdm-logo">{{.name}}</span><span class="spdm-sep"></span>{{/logos}}
      </div>
    </div>
  </div>
</section>`,
}
