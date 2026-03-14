import type { ComponentVariant } from '../types'
export const statsMarqueeTicker: ComponentVariant = {
  id: 'stats-marquee', name: 'Stats Marquee Ticker', section: 'stats' as any,
  description: 'Infinite scrolling stat ticker strip — compact, always visible, between other sections',
  bestFor: ['saas','agency','ecommerce','nonprofit'], tags: ['marquee','ticker','scroll','compact','inline','infinite'],
  slots: [
    { name: 'stats', type: 'array', description: '6 stats for ticker', required: true, minItems: 6, maxItems: 8,
      itemSlots: [
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Value', required: true },
        { name: 'label', type: 'stat-label', maxWords: 3, description: 'Label', required: true },
      ] },
  ],
  css: `/* stats-marquee */
#stats-mq{background:{{BG_SECTION}};border-top:1px solid {{BORDER}};border-bottom:1px solid {{BORDER}};padding:1.25rem 0;overflow:hidden}
.smq-track{position:relative;overflow:hidden}
.smq-track::before,.smq-track::after{content:'';position:absolute;top:0;bottom:0;width:80px;z-index:2;pointer-events:none}
.smq-track::before{left:0;background:linear-gradient(to right,{{BG_SECTION}},transparent)}
.smq-track::after{right:0;background:linear-gradient(to left,{{BG_SECTION}},transparent)}
.smq-inner{display:flex;width:max-content;animation:smqScroll 20s linear infinite}
.smq-inner:hover{animation-play-state:paused}
@keyframes smqScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.smq-set{display:flex;align-items:center}
.smq-item{display:flex;align-items:center;gap:.625rem;padding:0 2.5rem}
.smq-val{font-family:var(--font-heading);font-size:1.25rem;font-weight:900;letter-spacing:-.04em;color:{{PRIMARY}}}
.smq-lbl{font-size:.875rem;font-weight:600;color:{{TEXT_MUTED}}}
.smq-sep{width:1px;height:24px;background:{{BORDER}};flex-shrink:0}`,
  template: `<section id="stats-mq"><div class="smq-track"><div class="smq-inner"><div class="smq-set">{{#stats}}<div class="smq-item"><span class="smq-val">{{.value}}</span><span class="smq-lbl">{{.label}}</span></div><div class="smq-sep"></div>{{/stats}}</div><div class="smq-set" aria-hidden="true">{{#stats}}<div class="smq-item"><span class="smq-val">{{.value}}</span><span class="smq-lbl">{{.label}}</span></div><div class="smq-sep"></div>{{/stats}}</div></div></div></section>`,
}
