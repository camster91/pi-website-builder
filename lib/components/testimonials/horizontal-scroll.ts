import type { ComponentVariant } from '../types'

export const testimonialsHorizontalScroll: ComponentVariant = {
  id: 'testimonials-hscroll',
  name: 'Testimonials Horizontal Scroll',
  section: 'testimonials',
  description: 'Drag-to-scroll horizontal row of testimonial cards — casual, mobile-first, great for ecommerce and lifestyle brands',
  bestFor: ['ecommerce', 'beauty', 'fitness', 'restaurant', 'local-service'],
  tags: ['horizontal-scroll', 'overflow', 'casual', 'compact', 'mobile', 'drag'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    {
      name: 'testimonials', type: 'array', description: '6 testimonials', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'quote', type: 'text', maxWords: 35, description: 'Quote', required: true },
        { name: 'name', type: 'text', maxWords: 3, description: 'Name', required: true },
        { name: 'role', type: 'text', maxWords: 4, description: 'Role', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Initials', required: true },
        { name: 'rating', type: 'text', maxWords: 1, description: 'Star rating 1-5', required: false },
      ],
    },
  ],
  css: `/* testimonials-hscroll */
#testimonials-hs {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
  overflow: hidden;
}
.ths-inner { max-width: 100%; }
.ths-header { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); margin-bottom: 3rem; }
.ths-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.ths-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Scroll track */
.ths-scroll-hint {
  text-align: center; font-size: 0.8125rem; color: {{TEXT_MUTED}};
  margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: center; gap: 6px;
}
.ths-scroll-hint svg { width: 14px; height: 14px; }
.ths-track {
  display: flex; gap: 1.25rem;
  overflow-x: auto; padding: 1rem clamp(1.5rem,5vw,3rem) 1.5rem;
  scrollbar-width: none; cursor: grab;
}
.ths-track::-webkit-scrollbar { display: none; }
.ths-track:active { cursor: grabbing; }
.ths-card {
  flex-shrink: 0; width: 320px;
  background: {{BG_CARD}}; border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 1.75rem;
  display: flex; flex-direction: column;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s;
}
.ths-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.1); }
.ths-stars { display: flex; gap: 2px; margin-bottom: 1rem; color: {{ACCENT}}; }
.ths-stars svg { width: 14px; height: 14px; }
.ths-quote { font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.65; font-style: italic; flex: 1; margin-bottom: 1.25rem; }
.ths-author { display: flex; align-items: center; gap: 0.75rem; padding-top: 1rem; border-top: 1px solid {{BORDER}}; }
.ths-avatar { width: 36px; height: 36px; border-radius: 50%; background: rgba(99,102,241,0.12); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; flex-shrink: 0; }
.ths-card:nth-child(3n+2) .ths-avatar { background: rgba(245,158,11,0.12); color: {{ACCENT}}; }
.ths-card:nth-child(3n+3) .ths-avatar { background: rgba(139,92,246,0.12); color: #8b5cf6; }
.ths-name { font-weight: 700; font-size: 0.875rem; color: {{TEXT}}; }
.ths-role { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="testimonials-hs">
  <div class="ths-inner">
    <div class="ths-header">
      <span class="ths-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="ths-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="ths-scroll-hint reveal">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 9l-3 3 3 3"/><path d="M9 5l3-3 3 3"/><path d="M15 19l3 3 3-3"/><path d="M19 15l3-3-3-3"/><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/></svg>
      Scroll to see more
    </div>
    <div class="ths-track reveal">
      {{#testimonials}}
      <div class="ths-card">
        <div class="ths-stars"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <p class="ths-quote">&ldquo;{{.quote}}&rdquo;</p>
        <div class="ths-author">
          <div class="ths-avatar">{{.initials}}</div>
          <div><div class="ths-name">{{.name}}</div><div class="ths-role">{{.role}}</div></div>
        </div>
      </div>
      {{/testimonials}}
    </div>
  </div>
</section>`,
}
