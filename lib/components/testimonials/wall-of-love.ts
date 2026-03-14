import type { ComponentVariant } from '../types'

export const testimonialsWallOfLove: ComponentVariant = {
  id: 'testimonials-wall',
  name: 'Testimonials Wall of Love',
  section: 'testimonials',
  description: 'CSS column-count masonry grid with 6 testimonial cards of varying heights — authentic social proof wall',
  bestFor: ['beauty', 'fitness', 'restaurant', 'ecommerce', 'local-service', 'real-estate', 'healthcare', 'education'],
  tags: ['wall-of-love', 'masonry', 'reviews', 'social-proof', 'authentic', 'varied'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    {
      name: 'quotes', type: 'array', description: '6 testimonials (vary quote lengths!)', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'quote', type: 'text', maxWords: 45, description: 'Testimonial (short=15w, medium=30w, long=45w — vary!)', required: true },
        { name: 'name', type: 'text', maxWords: 3, description: 'Author name', required: true },
        { name: 'role', type: 'text', maxWords: 4, description: 'Author role/company', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-letter initials', required: true },
        { name: 'stars', type: 'text', maxWords: 1, description: 'Star count: 5 or 4', required: true },
      ],
    },
  ],
  css: `/* testimonials-wall-of-love */
#testimonials {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.twl-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.twl-header {
  text-align: center; max-width: 640px;
  margin: 0 auto 3.5rem;
}
.twl-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.twl-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
}
.twl-heading .accent-word { color: {{ACCENT}}; }

/* Masonry using CSS column-count */
.twl-masonry {
  column-count: 1;
  column-gap: 1.25rem;
}
@media (min-width: 640px) { .twl-masonry { column-count: 2; } }
@media (min-width: 1024px) { .twl-masonry { column-count: 3; } }

/* Card */
.twl-card {
  break-inside: avoid;
  margin-bottom: 1.25rem;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 18px;
  padding: 1.5rem;
  display: inline-block;
  width: 100%;
  position: relative;
  transition: box-shadow 0.3s, transform 0.3s;
}
.twl-card:hover {
  box-shadow: 0 12px 32px rgba(0,0,0,0.09);
  transform: translateY(-3px);
}
/* Color accent: left border stripe */
.twl-card:nth-child(3n+1) { border-left: 3px solid {{PRIMARY}}; }
.twl-card:nth-child(3n+2) { border-left: 3px solid {{ACCENT}}; }
.twl-card:nth-child(3n+3) { border-left: 3px solid #8b5cf6; }

/* Stars */
.twl-stars {
  display: flex; gap: 2px;
  margin-bottom: 0.875rem;
  color: {{ACCENT}};
}
.twl-stars svg { width: 16px; height: 16px; }

/* Quote */
.twl-quote {
  font-size: 0.9375rem;
  color: {{TEXT}};
  line-height: 1.7;
  margin-bottom: 1.25rem;
}
/* Open quote decoration */
.twl-quote::before {
  content: open-quote;
  font-family: Georgia, serif;
  font-size: 3rem;
  color: {{PRIMARY}};
  opacity: 0.15;
  line-height: 0;
  vertical-align: -1rem;
  margin-right: 4px;
}

/* Author row */
.twl-author {
  display: flex; align-items: center; gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid {{BORDER}};
}
.twl-avatar {
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800;
  flex-shrink: 0;
}
.twl-card:nth-child(3n+1) .twl-avatar { background: {{PRIMARY}}; opacity: 0.15; color: {{PRIMARY}}; }
.twl-card:nth-child(3n+2) .twl-avatar { background: {{ACCENT}}; opacity: 0.15; color: {{ACCENT}}; }
.twl-card:nth-child(3n+3) .twl-avatar { background: #8b5cf6; opacity: 0.15; color: #8b5cf6; }
/* Fix: make avatar text visible */
.twl-avatar { position: relative; }
.twl-avatar-inner {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800;
  border-radius: 50%;
}
.twl-card:nth-child(3n+1) .twl-avatar-inner { background: rgba(99,102,241,0.15); color: {{PRIMARY}}; }
.twl-card:nth-child(3n+2) .twl-avatar-inner { background: rgba(245,158,11,0.15); color: {{ACCENT}}; }
.twl-card:nth-child(3n+3) .twl-avatar-inner { background: rgba(139,92,246,0.15); color: #8b5cf6; }

.twl-name { font-weight: 700; font-size: 0.875rem; color: {{TEXT}}; line-height: 1.2; }
.twl-role { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="testimonials">
  <div class="twl-inner">
    <div class="twl-header">
      <span class="twl-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="twl-heading reveal reveal-d1">{{heading}}</h2>
    </div>

    <div class="twl-masonry reveal">
      {{#quotes}}
      <div class="twl-card">
        <div class="twl-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p class="twl-quote">{{.quote}}</p>
        <div class="twl-author">
          <div class="twl-avatar">
            <div class="twl-avatar-inner">{{.initials}}</div>
          </div>
          <div>
            <div class="twl-name">{{.name}}</div>
            <div class="twl-role">{{.role}}</div>
          </div>
        </div>
      </div>
      {{/quotes}}
    </div>
  </div>
</section>`,
}
