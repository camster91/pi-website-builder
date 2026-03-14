import type { ComponentVariant } from '../types'
export const statsCardRow: ComponentVariant = {
  id: 'stats-card-row', name: 'Stats KPI Card Row', section: 'stats' as any,
  description: 'Individual bordered KPI stat cards in grid with emoji icon, number, label, and trend badge',
  bestFor: ['saas','ecommerce','agency','nonprofit'], tags: ['cards','kpi','trend','icon','bordered','dashboard'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading (optional)', required: false },
    { name: 'stats', type: 'array', description: '4-6 stats', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Icon emoji', required: true },
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Value', required: true },
        { name: 'label', type: 'stat-label', maxWords: 4, description: 'Label', required: true },
        { name: 'trend', type: 'text', maxWords: 2, description: 'Trend (e.g. +12%)', required: false },
      ] },
  ],
  css: `/* stats-card-row */
#stats-cr{background:{{BG_SECTION}};padding:clamp(3rem,6vw,5rem) 0}
.scr-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.scr-hd{text-align:center;margin-bottom:2.5rem}
.scr-h2{font-family:var(--font-heading);font-size:clamp(1.75rem,3vw,2.5rem);font-weight:800;letter-spacing:-.03em;color:{{TEXT}}}
.scr-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
@media(min-width:1024px){.scr-grid{grid-template-columns:repeat(4,1fr)}}
.scr-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;padding:1.5rem;transition:box-shadow .3s}
.scr-card:hover{box-shadow:0 8px 24px rgba(0,0,0,.07)}
.scr-icon{font-size:1.75rem;display:block;margin-bottom:1rem}
.scr-val{font-family:var(--font-heading);font-size:clamp(1.75rem,3vw,2.5rem);font-weight:900;letter-spacing:-.05em;color:{{TEXT}};line-height:1;display:block;margin-bottom:.375rem}
.scr-lbl{font-size:.875rem;color:{{TEXT_MUTED}};margin-bottom:.5rem;display:block}
.scr-trend{display:inline-block;font-size:.75rem;font-weight:700;padding:2px 8px;background:rgba(34,197,94,.1);color:#16a34a;border-radius:999px}`,
  template: `<section id="stats-cr"><div class="scr-in"><div class="scr-hd"><h2 class="scr-h2 reveal">{{heading}}</h2></div><div class="scr-grid reveal-stagger">{{#stats}}<div class="scr-card"><span class="scr-icon">{{.emoji}}</span><span class="scr-val counter" data-target="{{.value}}">{{.value}}</span><span class="scr-lbl">{{.label}}</span><span class="scr-trend">{{.trend}}</span></div>{{/stats}}</div></div></section>`,
}
