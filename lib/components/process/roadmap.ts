import type { ComponentVariant } from '../types'

export const processRoadmap: ComponentVariant = {
  id: 'process-roadmap',
  name: 'Process Roadmap',
  section: 'process' as any,
  description: 'Product/service roadmap with phases, status badges (Done/In Progress/Upcoming), and timeline — trust-builder for SaaS',
  bestFor: ['saas', 'agency', 'education', 'nonprofit'],
  tags: ['roadmap', 'phases', 'timeline', 'status', 'milestones', 'product', 'future'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'phases', type: 'array', description: '4 roadmap phases', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'phase', type: 'text', maxWords: 2, description: 'Phase name (e.g. Phase 1)', required: true },
        { name: 'label', type: 'text', maxWords: 3, description: 'Phase label (e.g. "Foundation")', required: true },
        { name: 'status', type: 'text', maxWords: 2, description: 'Status: "done", "current", or "upcoming"', required: true },
        { name: 'period', type: 'text', maxWords: 3, description: 'Time period (e.g. Q1 2024)', required: true },
        {
          name: 'items', type: 'array', description: '3 items in this phase', required: true,
          minItems: 3, maxItems: 4,
          itemSlots: [{ name: 'text', type: 'text', maxWords: 5, description: 'Feature/milestone', required: true }],
        },
      ],
    },
  ],
  css: `/* process-roadmap */
#process-rm {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.prm-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.prm-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.prm-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.prm-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.prm-heading .accent-word { color: {{ACCENT}}; }
.prm-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Timeline track */
.prm-track { display: flex; gap: 0; overflow-x: auto; padding-bottom: 0.5rem; scrollbar-width: none; }
.prm-track::-webkit-scrollbar { display: none; }
/* Phase card */
.prm-phase { flex: 1; min-width: 220px; padding: 0 1rem; position: relative; }
.prm-phase::before { content: ''; position: absolute; top: 20px; left: 0; right: 0; height: 2px; background: {{BORDER}}; z-index: 0; }
.prm-phase:first-child::before { left: 50%; }
.prm-phase:last-child::before { right: 50%; }
.prm-dot-wrap { display: flex; justify-content: center; margin-bottom: 1.5rem; position: relative; z-index: 1; }
.prm-dot { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid {{BORDER}}; background: {{BG}}; }
.prm-dot.done { background: {{PRIMARY}}; border-color: {{PRIMARY}}; }
.prm-dot.current { background: {{ACCENT}}; border-color: {{ACCENT}}; animation: prmPulse 2s infinite; }
.prm-dot.upcoming { background: {{BG_CARD}}; }
@keyframes prmPulse { 0%,100% { box-shadow: 0 0 0 0 rgba(245,158,11,0.4); } 50% { box-shadow: 0 0 0 8px rgba(245,158,11,0); } }
.prm-dot svg { width: 16px; height: 16px; color: #fff; }
.prm-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 16px; padding: 1.25rem; }
.prm-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
.prm-phase-name { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: {{TEXT_MUTED}}; }
.prm-badge { font-size: 0.6875rem; font-weight: 700; padding: 3px 10px; border-radius: 999px; }
.prm-badge.done { background: rgba(34,197,94,0.1); color: #16a34a; }
.prm-badge.current { background: rgba(245,158,11,0.1); color: #d97706; }
.prm-badge.upcoming { background: {{BG_SECTION}}; color: {{TEXT_MUTED}}; }
.prm-card-label { font-family: var(--font-heading); font-size: 0.9375rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.375rem; }
.prm-period { font-size: 0.8125rem; color: {{TEXT_MUTED}}; margin-bottom: 1rem; }
.prm-items { display: flex; flex-direction: column; gap: 0.5rem; }
.prm-item { display: flex; align-items: center; gap: 7px; font-size: 0.8125rem; color: {{TEXT_SEC}}; }
.prm-item::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: {{PRIMARY}}; flex-shrink: 0; }
.prm-phase:not(.done-phase) .prm-item::before { background: {{TEXT_MUTED}}; opacity: 0.4; }
`,
  template: `<section id="process-rm">
  <div class="prm-inner">
    <div class="prm-header">
      <span class="prm-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="prm-heading reveal reveal-d1">{{heading}}</h2>
      <p class="prm-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="prm-track reveal">
      {{#phases}}
      <div class="prm-phase">
        <div class="prm-dot-wrap">
          <div class="prm-dot {{.status}}">
            {{#if_done .status}}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>{{/if_done}}
            {{#if_current .status}}<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/></svg>{{/if_current}}
          </div>
        </div>
        <div class="prm-card">
          <div class="prm-card-top">
            <span class="prm-phase-name">{{.phase}}</span>
            <span class="prm-badge {{.status}}">{{.status}}</span>
          </div>
          <div class="prm-card-label">{{.label}}</div>
          <div class="prm-period">{{.period}}</div>
          <div class="prm-items">
            {{#items}}<div class="prm-item">{{.text}}</div>{{/items}}
          </div>
        </div>
      </div>
      {{/phases}}
    </div>
  </div>
</section>`,
}
