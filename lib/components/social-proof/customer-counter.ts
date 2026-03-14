import type { ComponentVariant } from '../types'

export const socialProofCustomerCounter: ComponentVariant = {
  id: 'social-proof-counter',
  name: 'Social Proof Customer Counter',
  section: 'social-proof',
  description: 'Animated customer count with avatar stack, star rating row, and short social proof headline — compact trust insert',
  bestFor: ['saas', 'ecommerce', 'fitness', 'beauty', 'education'],
  tags: ['counter', 'avatars', 'compact', 'trust', 'animated', 'social-proof', 'inline'],
  slots: [
    { name: 'customerCount', type: 'stat-value', maxWords: 1, description: 'Customer count (e.g. 12,847)', required: true },
    { name: 'headline', type: 'text', maxWords: 10, description: 'Social proof headline', required: true },
    { name: 'rating', type: 'stat-value', maxWords: 1, description: 'Rating (e.g. 4.9)', required: true },
    { name: 'reviewCount', type: 'text', maxWords: 3, description: 'Review count (e.g. 3,200+ reviews)', required: true },
    { name: 'platform', type: 'text', maxWords: 2, description: 'Platform name', required: false },
  ],
  css: `/* social-proof-counter */
#sp-counter {
  background: {{BG}};
  padding: 2.5rem 0;
  border-top: 1px solid {{BORDER}};
  border-bottom: 1px solid {{BORDER}};
}
.spct-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: flex; align-items: center; justify-content: center; gap: 3rem; flex-wrap: wrap; }
.spct-block { display: flex; align-items: center; gap: 1rem; }
.spct-avatars { display: flex; }
.spct-av { width: 36px; height: 36px; border-radius: 50%; border: 2px solid {{BG}}; background: linear-gradient(135deg,{{PRIMARY}},{{ACCENT}}); display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 800; color: #fff; margin-left: -10px; flex-shrink: 0; }
.spct-av:first-child { margin-left: 0; }
.spct-count { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 900; letter-spacing: -0.04em; color: {{TEXT}}; line-height: 1; }
.spct-label { font-size: 0.875rem; color: {{TEXT_MUTED}}; }
.spct-sep { width: 1px; height: 40px; background: {{BORDER}}; flex-shrink: 0; }
@media (max-width: 640px) { .spct-sep { display: none; } }
.spct-rating-block { display: flex; align-items: center; gap: 0.75rem; }
.spct-score { font-family: var(--font-heading); font-size: 1.75rem; font-weight: 900; letter-spacing: -0.04em; color: {{TEXT}}; }
.spct-stars-col { display: flex; flex-direction: column; gap: 3px; }
.spct-stars { display: flex; gap: 2px; color: {{ACCENT}}; }
.spct-stars svg { width: 14px; height: 14px; }
.spct-review-count { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="sp-counter">
  <div class="spct-inner reveal">
    <div class="spct-block">
      <div class="spct-avatars">
        <div class="spct-av">AJ</div><div class="spct-av">MK</div><div class="spct-av">RL</div><div class="spct-av">+</div>
      </div>
      <div>
        <div class="spct-count counter" data-target="{{customerCount}}">{{customerCount}}</div>
        <div class="spct-label">{{headline}}</div>
      </div>
    </div>
    <div class="spct-sep"></div>
    <div class="spct-rating-block">
      <span class="spct-score">{{rating}}</span>
      <div class="spct-stars-col">
        <div class="spct-stars"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <div class="spct-review-count">{{reviewCount}} · {{platform}}</div>
      </div>
    </div>
  </div>
</section>`,
}
