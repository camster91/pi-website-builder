import type { ComponentVariant } from '../types'
export const statsMetricCards: ComponentVariant = {
  id: 'stats-metrics', name: 'Stats KPI Metric Cards', section: 'stats' as any,
  description: 'Dashboard-style KPI metric cards with primary gradient top bar and trend chip',
  bestFor: ['saas','agency','ecommerce'], tags: ['kpi','dashboard','metric','cards','business','gradient'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'metrics', type: 'array', description: '4-6 metrics', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'text', maxWords: 4, description: 'Metric title', required: true },
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Metric value', required: true },
        { name: 'trend', type: 'text', maxWords: 2, description: 'Trend chip (e.g. +24%)', required: false },
        { name: 'period', type: 'text', maxWords: 3, description: 'Period (e.g. vs last month)', required: false },
        { name: 'desc', type: 'text', maxWords: 8, description: 'Short desc', required: false },
      ] },
  ],
  css: `/* stats-metrics */
#stats-mt{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.smt-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.smt-hd{max-width:680px;margin:0 auto 3.5rem;text-align:center}
.smt-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.smt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.smt-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
@media(min-width:1024px){.smt-grid{grid-template-columns:repeat(4,1fr)}}
.smt-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;padding:1.5rem;position:relative;overflow:hidden}
.smt-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,{{PRIMARY}},{{ACCENT}})}
.smt-title{font-size:.8125rem;font-weight:600;color:{{TEXT_MUTED}};text-transform:uppercase;letter-spacing:.06em;margin-bottom:1rem;display:block}
.smt-val{font-family:var(--font-heading);font-size:2.25rem;font-weight:900;letter-spacing:-.05em;color:{{TEXT}};line-height:1;display:block;margin-bottom:.5rem}
.smt-bottom{display:flex;align-items:center;gap:.625rem}
.smt-trend{font-size:.75rem;font-weight:700;padding:2px 8px;background:rgba(34,197,94,.1);color:#16a34a;border-radius:999px}
.smt-period{font-size:.75rem;color:{{TEXT_MUTED}}}
.smt-desc{font-size:.8125rem;color:{{TEXT_MUTED}};margin-top:.5rem}`,
  template: `<section id="stats-mt"><div class="smt-in"><div class="smt-hd"><span class="smt-ey reveal">{{eyebrow}}</span><h2 class="smt-h2 reveal reveal-d1">{{heading}}</h2></div><div class="smt-grid reveal-stagger">{{#metrics}}<div class="smt-card"><span class="smt-title">{{.title}}</span><span class="smt-val counter" data-target="{{.value}}">{{.value}}</span><div class="smt-bottom"><span class="smt-trend">{{.trend}}</span><span class="smt-period">{{.period}}</span></div><div class="smt-desc">{{.desc}}</div></div>{{/metrics}}</div></div></section>`,
}
