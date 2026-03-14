import type { ComponentVariant } from '../types'
export const statsLightMinimal: ComponentVariant = {
  id: 'stats-light', name: 'Stats Light Minimal Strip', section: 'stats' as any,
  description: 'Ultra-clean light background stat strip — large numbers, borderless, centered, professional',
  bestFor: ['healthcare','nonprofit','education','real-estate','local-service'], tags: ['light','minimal','clean','borderless','centered','professional'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: false },
    { name: 'stats', type: 'array', description: '5 stats', required: true, minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Value', required: true },
        { name: 'label', type: 'stat-label', maxWords: 4, description: 'Label', required: true },
        { name: 'context', type: 'text', maxWords: 6, description: 'Short context', required: false },
      ] },
  ],
  css: `/* stats-light */
#stats-lt{background:{{BG}};padding:clamp(3rem,6vw,5rem) 0;border-top:1px solid {{BORDER}};border-bottom:1px solid {{BORDER}}}
.slt-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.slt-ey{display:block;text-align:center;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:2.5rem;opacity:.7}
.slt-row{display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;gap:0}
.slt-item{flex:1;min-width:140px;text-align:center;padding:1.5rem 2rem;position:relative}
.slt-item+.slt-item::before{content:'';position:absolute;left:0;top:25%;bottom:25%;width:1px;background:{{BORDER}}}
.slt-val{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3.5rem);font-weight:900;letter-spacing:-.06em;color:{{TEXT}};display:block;line-height:1;margin-bottom:.375rem}
.slt-lbl{font-size:.875rem;font-weight:600;color:{{TEXT_SEC}};display:block;margin-bottom:.25rem}
.slt-ctx{font-size:.75rem;color:{{TEXT_MUTED}}}`,
  template: `<section id="stats-lt"><div class="slt-in"><span class="slt-ey reveal">{{eyebrow}}</span><div class="slt-row reveal-stagger">{{#stats}}<div class="slt-item"><span class="slt-val counter" data-target="{{.value}}">{{.value}}</span><span class="slt-lbl">{{.label}}</span><span class="slt-ctx">{{.context}}</span></div>{{/stats}}</div></div></section>`,
}
