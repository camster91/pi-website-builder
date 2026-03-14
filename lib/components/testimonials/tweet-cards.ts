import type { ComponentVariant } from '../types'

export const testimonialsTweetCards: ComponentVariant = {
  id: 'testimonials-tweet-cards',
  name: 'Testimonials Tweet Cards',
  section: 'testimonials',
  description: 'Twitter/X-style card testimonials in a 3-column masonry — feels authentic, casual, and modern',
  bestFor: ['saas', 'ecommerce', 'agency', 'fitness', 'beauty'],
  tags: ['twitter', 'social', 'authentic', 'casual', 'x-cards', 'modern'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    {
      name: 'tweets', type: 'array', description: '6 tweet-style testimonials', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'handle', type: 'text', maxWords: 1, description: '@username', required: true },
        { name: 'name', type: 'text', maxWords: 3, description: 'Display name', required: true },
        { name: 'text', type: 'text', maxWords: 50, description: 'Tweet text (can use emojis)', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-char initials', required: true },
        { name: 'likes', type: 'text', maxWords: 1, description: 'Like count (e.g. 142)', required: false },
      ],
    },
  ],
  css: `/* testimonials-tweet-cards */
#testimonials-tw {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.ttw-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.ttw-header { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; }
.ttw-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.ttw-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Masonry */
.ttw-grid { column-count: 1; column-gap: 1.25rem; }
@media (min-width: 640px) { .ttw-grid { column-count: 2; } }
@media (min-width: 1024px) { .ttw-grid { column-count: 3; } }
/* Tweet card */
.ttw-card {
  break-inside: avoid; margin-bottom: 1.25rem;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 16px; padding: 1.25rem;
  display: inline-block; width: 100%;
  transition: box-shadow 0.3s, transform 0.3s;
}
.ttw-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
/* Card header */
.ttw-card-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 0.875rem;
}
.ttw-user { display: flex; align-items: center; gap: 0.75rem; }
.ttw-avatar {
  width: 40px; height: 40px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.8125rem; font-weight: 800;
  flex-shrink: 0;
}
.ttw-card:nth-child(3n+1) .ttw-avatar { background: rgba(99,102,241,0.15); color: {{PRIMARY}}; }
.ttw-card:nth-child(3n+2) .ttw-avatar { background: rgba(245,158,11,0.15); color: {{ACCENT}}; }
.ttw-card:nth-child(3n+3) .ttw-avatar { background: rgba(139,92,246,0.15); color: #8b5cf6; }
.ttw-display-name { font-weight: 700; font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.2; }
.ttw-handle { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
/* X icon */
.ttw-x-icon {
  width: 18px; height: 18px; color: {{TEXT_MUTED}};
  flex-shrink: 0;
}
/* Tweet text */
.ttw-text { font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.65; margin-bottom: 0.875rem; }
/* Footer */
.ttw-footer { display: flex; align-items: center; gap: 1rem; color: {{TEXT_MUTED}}; font-size: 0.8125rem; }
.ttw-like { display: flex; align-items: center; gap: 4px; }
.ttw-like svg { width: 14px; height: 14px; }
`,
  template: `<section id="testimonials-tw">
  <div class="ttw-inner">
    <div class="ttw-header">
      <span class="ttw-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="ttw-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="ttw-grid reveal">
      {{#tweets}}
      <div class="ttw-card">
        <div class="ttw-card-header">
          <div class="ttw-user">
            <div class="ttw-avatar">{{.initials}}</div>
            <div>
              <div class="ttw-display-name">{{.name}}</div>
              <div class="ttw-handle">{{.handle}}</div>
            </div>
          </div>
          <svg class="ttw-x-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
        </div>
        <p class="ttw-text">{{.text}}</p>
        <div class="ttw-footer">
          <span class="ttw-like">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            {{.likes}}
          </span>
        </div>
      </div>
      {{/tweets}}
    </div>
  </div>
</section>`,
}
