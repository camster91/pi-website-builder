import type { ComponentVariant } from '../types'

export const socialProofReviewAggregate: ComponentVariant = {
  id: 'social-proof-reviews',
  name: 'Social Proof Review Aggregate',
  section: 'social-proof',
  description: 'Overall star rating score with star breakdown bars + 3 featured review cards — Google/Yelp style aggregate',
  bestFor: ['local-service', 'restaurant', 'beauty', 'fitness', 'healthcare', 'real-estate', 'ecommerce'],
  tags: ['reviews', 'stars', 'rating', 'aggregate', 'google', 'trust', 'local'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'overallRating', type: 'stat-value', maxWords: 1, description: 'Overall rating (e.g. 4.9)', required: true },
    { name: 'totalReviews', type: 'text', maxWords: 2, description: 'Total review count (e.g. 1,247)', required: true },
    { name: 'platform', type: 'text', maxWords: 2, description: 'Platform name (e.g. Google Reviews)', required: false },
    {
      name: 'reviews', type: 'array', description: '3 featured reviews', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 3, description: 'Reviewer name', required: true },
        { name: 'text', type: 'text', maxWords: 40, description: 'Review text', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-char initials', required: true },
        { name: 'date', type: 'text', maxWords: 2, description: 'Date (e.g. 2 weeks ago)', required: false },
      ],
    },
  ],
  css: `/* social-proof-reviews */
#social-proof-ra {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.spr-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.spr-header { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; }
.spr-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.spr-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Aggregate card */
.spr-agg {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 2.5rem;
  display: grid; grid-template-columns: 1fr;
  gap: 2.5rem; margin-bottom: 2rem;
  align-items: center;
}
@media (min-width: 768px) { .spr-agg { grid-template-columns: auto 1fr; } }
.spr-score { text-align: center; }
.spr-score-num {
  font-family: var(--font-heading); font-size: 5rem; font-weight: 900;
  letter-spacing: -0.05em; color: {{TEXT}}; line-height: 1; display: block;
}
.spr-stars-row { display: flex; gap: 3px; justify-content: center; margin: 0.5rem 0; color: {{ACCENT}}; }
.spr-stars-row svg { width: 20px; height: 20px; }
.spr-total { font-size: 0.875rem; color: {{TEXT_MUTED}}; }
.spr-platform { font-size: 0.8125rem; color: {{PRIMARY}}; font-weight: 600; margin-top: 4px; }
/* Breakdown bars */
.spr-bars { display: flex; flex-direction: column; gap: 0.625rem; }
.spr-bar-row { display: flex; align-items: center; gap: 0.875rem; }
.spr-bar-label { font-size: 0.8125rem; color: {{TEXT_SEC}}; width: 36px; text-align: right; flex-shrink: 0; }
.spr-bar-track { flex: 1; height: 8px; background: {{BG_SECTION}}; border-radius: 999px; overflow: hidden; }
.spr-bar-fill { height: 100%; background: {{ACCENT}}; border-radius: 999px; }
.spr-bar-pct { font-size: 0.75rem; color: {{TEXT_MUTED}}; width: 36px; flex-shrink: 0; }
/* Review cards */
.spr-cards { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 768px) { .spr-cards { grid-template-columns: repeat(3, 1fr); } }
.spr-card {
  background: {{BG_CARD}}; border: 1px solid {{BORDER}};
  border-radius: 16px; padding: 1.5rem;
}
.spr-card-stars { display: flex; gap: 2px; margin-bottom: 0.875rem; color: {{ACCENT}}; }
.spr-card-stars svg { width: 14px; height: 14px; }
.spr-card-text { font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.65; margin-bottom: 1.25rem; font-style: italic; }
.spr-card-author { display: flex; align-items: center; gap: 0.75rem; }
.spr-card-av {
  width: 36px; height: 36px; border-radius: 50%;
  background: rgba(99,102,241,0.1); color: {{PRIMARY}};
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800; flex-shrink: 0;
}
.spr-card-name { font-weight: 700; font-size: 0.875rem; color: {{TEXT}}; }
.spr-card-date { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="social-proof-ra">
  <div class="spr-inner">
    <div class="spr-header">
      <span class="spr-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="spr-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="spr-agg reveal">
      <div class="spr-score">
        <span class="spr-score-num">{{overallRating}}</span>
        <div class="spr-stars-row">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <div class="spr-total">{{totalReviews}} reviews</div>
        <div class="spr-platform">{{platform}}</div>
      </div>
      <div class="spr-bars">
        <div class="spr-bar-row"><span class="spr-bar-label">5 ★</span><div class="spr-bar-track"><div class="spr-bar-fill" style="width:82%"></div></div><span class="spr-bar-pct">82%</span></div>
        <div class="spr-bar-row"><span class="spr-bar-label">4 ★</span><div class="spr-bar-track"><div class="spr-bar-fill" style="width:12%"></div></div><span class="spr-bar-pct">12%</span></div>
        <div class="spr-bar-row"><span class="spr-bar-label">3 ★</span><div class="spr-bar-track"><div class="spr-bar-fill" style="width:4%"></div></div><span class="spr-bar-pct">4%</span></div>
        <div class="spr-bar-row"><span class="spr-bar-label">2 ★</span><div class="spr-bar-track"><div class="spr-bar-fill" style="width:1%"></div></div><span class="spr-bar-pct">1%</span></div>
        <div class="spr-bar-row"><span class="spr-bar-label">1 ★</span><div class="spr-bar-track"><div class="spr-bar-fill" style="width:1%"></div></div><span class="spr-bar-pct">1%</span></div>
      </div>
    </div>
    <div class="spr-cards reveal-stagger">
      {{#reviews}}
      <div class="spr-card">
        <div class="spr-card-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p class="spr-card-text">{{.text}}</p>
        <div class="spr-card-author">
          <div class="spr-card-av">{{.initials}}</div>
          <div>
            <div class="spr-card-name">{{.name}}</div>
            <div class="spr-card-date">{{.date}}</div>
          </div>
        </div>
      </div>
      {{/reviews}}
    </div>
  </div>
</section>`,
}
