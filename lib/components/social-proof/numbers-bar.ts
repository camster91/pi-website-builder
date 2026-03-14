import type { ComponentVariant } from '../types'

export const socialProofNumbersBar: ComponentVariant = {
  id: 'social-proof-numbers',
  name: 'Social Proof Numbers Bar',
  section: 'social-proof',
  description: 'Horizontal strip of 5 animated impact numbers with labels — compact, inline, works between any sections',
  bestFor: ['saas', 'agency', 'nonprofit', 'fitness', 'healthcare', 'local-service'],
  tags: ['numbers', 'stats', 'strip', 'horizontal', 'compact', 'animated', 'metrics'],
  slots: [
    { name: 'n1Val', type: 'stat-value', maxWords: 1, description: 'Number 1 value', required: true },
    { name: 'n1Lbl', type: 'stat-label', maxWords: 3, description: 'Number 1 label', required: true },
    { name: 'n2Val', type: 'stat-value', maxWords: 1, description: 'Number 2 value', required: true },
    { name: 'n2Lbl', type: 'stat-label', maxWords: 3, description: 'Number 2 label', required: true },
    { name: 'n3Val', type: 'stat-value', maxWords: 1, description: 'Number 3 value', required: true },
    { name: 'n3Lbl', type: 'stat-label', maxWords: 3, description: 'Number 3 label', required: true },
    { name: 'n4Val', type: 'stat-value', maxWords: 1, description: 'Number 4 value', required: true },
    { name: 'n4Lbl', type: 'stat-label', maxWords: 3, description: 'Number 4 label', required: true },
    { name: 'n5Val', type: 'stat-value', maxWords: 1, description: 'Number 5 value', required: true },
    { name: 'n5Lbl', type: 'stat-label', maxWords: 3, description: 'Number 5 label', required: true },
  ],
  css: `/* social-proof-numbers */
#sp-nums {
  background: {{BG_SECTION}};
  padding: 3rem 0;
  border-top: 1px solid {{BORDER}};
  border-bottom: 1px solid {{BORDER}};
}
.spn-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.spn-row { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: {{BORDER}}; border: 1px solid {{BORDER}}; border-radius: 16px; overflow: hidden; }
@media (min-width: 640px) { .spn-row { grid-template-columns: repeat(3,1fr); } }
@media (min-width: 1024px) { .spn-row { grid-template-columns: repeat(5,1fr); } }
.spn-item { background: {{BG_SECTION}}; padding: 1.75rem 1.5rem; text-align: center; transition: background 0.3s; }
.spn-item:hover { background: {{BG_CARD}}; }
.spn-val { font-family: var(--font-heading); font-size: clamp(1.75rem,3vw,2.75rem); font-weight: 900; letter-spacing: -0.05em; color: {{PRIMARY}}; display: block; line-height: 1; margin-bottom: 0.5rem; }
.spn-lbl { font-size: 0.875rem; color: {{TEXT_MUTED}}; font-weight: 500; }
`,
  template: `<section id="sp-nums">
  <div class="spn-inner">
    <div class="spn-row reveal">
      <div class="spn-item"><span class="spn-val counter" data-target="{{n1Val}}">{{n1Val}}</span><span class="spn-lbl">{{n1Lbl}}</span></div>
      <div class="spn-item"><span class="spn-val counter" data-target="{{n2Val}}">{{n2Val}}</span><span class="spn-lbl">{{n2Lbl}}</span></div>
      <div class="spn-item"><span class="spn-val counter" data-target="{{n3Val}}">{{n3Val}}</span><span class="spn-lbl">{{n3Lbl}}</span></div>
      <div class="spn-item"><span class="spn-val counter" data-target="{{n4Val}}">{{n4Val}}</span><span class="spn-lbl">{{n4Lbl}}</span></div>
      <div class="spn-item"><span class="spn-val counter" data-target="{{n5Val}}">{{n5Val}}</span><span class="spn-lbl">{{n5Lbl}}</span></div>
    </div>
  </div>
</section>`,
}
