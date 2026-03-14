import type { ComponentVariant } from '../types'

export const processAccordionSteps: ComponentVariant = {
  id: 'process-accordion',
  name: 'Process Numbered Accordion',
  section: 'process' as any,
  description: 'Numbered collapsible accordion steps — expandable details save space while maintaining scannable overview',
  bestFor: ['saas', 'healthcare', 'education', 'local-service', 'real-estate'],
  tags: ['accordion', 'collapsible', 'numbered', 'expandable', 'detailed', 'space-saving'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    {
      name: 'steps', type: 'array', description: '5 accordion steps', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'number', type: 'text', maxWords: 1, description: 'Step number', required: true },
        { name: 'title', type: 'heading', maxWords: 5, description: 'Step title', required: true },
        { name: 'summary', type: 'text', maxWords: 10, description: 'Short summary visible when closed', required: true },
        { name: 'detail', type: 'text', maxWords: 30, description: 'Detailed description when expanded', required: true },
        { name: 'duration', type: 'text', maxWords: 3, description: 'Time/duration', required: false },
      ],
    },
  ],
  css: `/* process-accordion */
#process-ac {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.pac-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 4rem; }
@media (min-width: 1024px) { .pac-inner { grid-template-columns: 4fr 5fr; align-items: start; } }
.pac-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.pac-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.pac-heading .accent-word { color: {{ACCENT}}; }
/* Accordion */
.pac-list { display: flex; flex-direction: column; gap: 0; border: 1px solid {{BORDER}}; border-radius: 20px; overflow: hidden; background: {{BG_CARD}}; }
.pac-item { border-bottom: 1px solid {{BORDER}}; }
.pac-item:last-child { border-bottom: none; }
.pac-trigger {
  width: 100%; display: flex; align-items: center; gap: 1rem;
  padding: 1.25rem 1.5rem; cursor: pointer;
  background: none; border: none; text-align: left;
  font-family: var(--font-body); transition: background 0.2s;
}
.pac-trigger:hover { background: {{BG_SECTION}}; }
.pac-trigger.open { background: rgba(99,102,241,0.03); }
.pac-step-num { width: 36px; height: 36px; border-radius: 50%; background: rgba(99,102,241,0.1); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 0.875rem; font-weight: 800; flex-shrink: 0; transition: background 0.3s; }
.pac-trigger.open .pac-step-num { background: {{PRIMARY}}; color: #fff; }
.pac-trigger-content { flex: 1; text-align: left; }
.pac-step-title { font-weight: 700; font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.3; }
.pac-step-summary { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
.pac-meta { display: flex; align-items: center; gap: 0.875rem; flex-shrink: 0; }
.pac-duration { font-size: 0.75rem; font-weight: 600; color: {{TEXT_MUTED}}; padding: 3px 10px; background: {{BG_SECTION}}; border-radius: 999px; }
.pac-chevron { width: 20px; height: 20px; color: {{TEXT_MUTED}}; transition: transform 0.3s; flex-shrink: 0; }
.pac-trigger.open .pac-chevron { transform: rotate(180deg); }
/* Expandable */
.pac-detail { display: none; padding: 0 1.5rem 1.5rem 4.5rem; font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.7; }
.pac-detail.open { display: block; }
`,
  template: `<section id="process-ac">
  <div class="pac-inner">
    <div class="reveal-left">
      <span class="pac-eyebrow">{{eyebrow}}</span>
      <h2 class="pac-heading">{{heading}}</h2>
    </div>
    <div class="pac-list reveal-right">
      {{#steps}}
      <div class="pac-item">
        <button class="pac-trigger" onclick="pacToggle(this)" aria-expanded="false">
          <div class="pac-step-num">{{.number}}</div>
          <div class="pac-trigger-content">
            <div class="pac-step-title">{{.title}}</div>
            <div class="pac-step-summary">{{.summary}}</div>
          </div>
          <div class="pac-meta">
            <span class="pac-duration">{{.duration}}</span>
            <svg class="pac-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>
        <div class="pac-detail">{{.detail}}</div>
      </div>
      {{/steps}}
    </div>
  </div>
  <script>
  function pacToggle(btn){var d=btn.nextElementSibling;var isOpen=btn.classList.contains('open');document.querySelectorAll('.pac-trigger.open').forEach(function(b){b.classList.remove('open');b.nextElementSibling.classList.remove('open');});if(!isOpen){btn.classList.add('open');d.classList.add('open');}}
  </script>
</section>`,
}
