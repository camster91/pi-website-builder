import type { ComponentVariant } from '../types'
export const statsComparisonBeforeAfter: ComponentVariant = {
  id: 'stats-before-after', name: 'Stats Before vs After', section: 'stats' as any,
  description: 'Side-by-side before/after stat comparison table showing transformation impact clearly',
  bestFor: ['fitness','healthcare','agency','saas','education'], tags: ['before-after','transformation','comparison','results','table'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'beforeLabel', type: 'text', maxWords: 2, description: 'Before label', required: true },
    { name: 'afterLabel', type: 'text', maxWords: 2, description: 'After label', required: true },
    { name: 'comparisons', type: 'array', description: '4 stat comparisons', required: true, minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'metric', type: 'text', maxWords: 4, description: 'Metric name', required: true },
        { name: 'before', type: 'text', maxWords: 2, description: 'Before value', required: true },
        { name: 'after', type: 'text', maxWords: 2, description: 'After value', required: true },
        { name: 'change', type: 'text', maxWords: 2, description: 'Change (e.g. +300%)', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: false },
  ],
  css: `/* stats-before-after */
#stats-ba{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.sba-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.sba-hd{text-align:center;margin-bottom:3.5rem}
.sba-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.sba-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.sba-header-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:1rem;padding:.875rem 1.5rem;background:{{BG_SECTION}};border-radius:12px 12px 0 0;border:1px solid {{BORDER}}}
.sba-col-hd{font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:{{TEXT_MUTED}};text-align:center}
.sba-col-hd:first-child{text-align:left}
.sba-table{border:1px solid {{BORDER}};border-top:none;border-radius:0 0 16px 16px;overflow:hidden;margin-bottom:2.5rem}
.sba-row{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:1rem;padding:1.25rem 1.5rem;background:{{BG_CARD}};align-items:center}
.sba-row+.sba-row{border-top:1px solid {{BORDER}}}
.sba-metric{font-weight:600;font-size:.9375rem;color:{{TEXT}}}
.sba-before{font-family:var(--font-heading);font-size:1.25rem;font-weight:700;color:{{TEXT_MUTED}};text-align:center;opacity:.5}
.sba-after{font-family:var(--font-heading);font-size:1.25rem;font-weight:800;color:{{TEXT}};text-align:center}
.sba-change{text-align:center}
.sba-change span{display:inline-block;font-size:.875rem;font-weight:800;padding:3px 10px;background:rgba(34,197,94,.1);color:#16a34a;border-radius:999px}
.sba-ft{text-align:center}
.sba-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.sba-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="stats-ba"><div class="sba-in"><div class="sba-hd"><span class="sba-ey reveal">{{eyebrow}}</span><h2 class="sba-h2 reveal reveal-d1">{{heading}}</h2></div><div class="sba-header-row reveal"><div class="sba-col-hd" style="text-align:left">Metric</div><div class="sba-col-hd">{{beforeLabel}}</div><div class="sba-col-hd">{{afterLabel}}</div><div class="sba-col-hd">Change</div></div><div class="sba-table reveal-stagger">{{#comparisons}}<div class="sba-row"><div class="sba-metric">{{.metric}}</div><div class="sba-before">{{.before}}</div><div class="sba-after">{{.after}}</div><div class="sba-change"><span>{{.change}}</span></div></div>{{/comparisons}}</div><div class="sba-ft reveal"><a href="#contact" class="sba-cta">{{ctaText}} →</a></div></div></section>`,
}
