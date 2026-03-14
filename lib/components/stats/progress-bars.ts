import type { ComponentVariant } from '../types'
export const statsProgressBars: ComponentVariant = {
  id: 'stats-progress', name: 'Stats Progress Bars', section: 'stats' as any,
  description: 'Skills/competency stats with gradient progress bars — agencies, portfolios, healthcare metrics',
  bestFor: ['agency','portfolio','education','healthcare'], tags: ['progress-bars','skills','competency','animated','percentage'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'stats', type: 'array', description: '6 progress stats', required: true, minItems: 5, maxItems: 7,
      itemSlots: [
        { name: 'label', type: 'text', maxWords: 4, description: 'Skill/metric name', required: true },
        { name: 'pct', type: 'text', maxWords: 1, description: 'Percentage 0-100', required: true },
        { name: 'desc', type: 'text', maxWords: 8, description: 'Short description', required: false },
      ] },
  ],
  css: `/* stats-progress */
#stats-pb{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.spb2-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem}
@media(min-width:1024px){.spb2-in{grid-template-columns:1fr 1fr;align-items:center}}
.spb2-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.spb2-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1.25rem}
.spb2-h2 .accent-word{color:{{ACCENT}}}
.spb2-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.spb2-bars{display:flex;flex-direction:column;gap:1.5rem}
.spb2-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}
.spb2-lbl{font-size:.9375rem;font-weight:600;color:{{TEXT}}}
.spb2-pct{font-size:.9375rem;font-weight:800;color:{{PRIMARY}}}
.spb2-track{height:8px;background:{{BG_SECTION}};border-radius:4px;overflow:hidden}
.spb2-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,{{PRIMARY}},{{ACCENT}});width:0;transition:width 1.5s cubic-bezier(.4,0,.2,1)}
.spb2-desc{font-size:.8125rem;color:{{TEXT_MUTED}};margin-top:.375rem}`,
  template: `<section id="stats-pb"><div class="spb2-in"><div class="reveal-left"><span class="spb2-ey">{{eyebrow}}</span><h2 class="spb2-h2">{{heading}}</h2><p class="spb2-sub">{{subtext}}</p></div><div class="spb2-bars reveal-stagger">{{#stats}}<div><div class="spb2-top"><span class="spb2-lbl">{{.label}}</span><span class="spb2-pct">{{.pct}}%</span></div><div class="spb2-track"><div class="spb2-fill" data-pct="{{.pct}}"></div></div><div class="spb2-desc">{{.desc}}</div></div>{{/stats}}</div></div></section><script>(function(){var fills=document.querySelectorAll('.spb2-fill');var ob=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;el.style.width=el.dataset.pct+'%';ob.unobserve(el);}});});fills.forEach(function(f){ob.observe(f);});})()</script>`,
}
