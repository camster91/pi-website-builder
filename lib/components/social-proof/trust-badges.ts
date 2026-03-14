import type { ComponentVariant } from '../types'

export const socialProofTrustBadges: ComponentVariant = {
  id: 'social-proof-badges',
  name: 'Social Proof Trust Badges',
  section: 'social-proof',
  description: 'Row of trust/security badges (SSL, guarantee, certifications) with central rating score — checkout/sales page trust section',
  bestFor: ['ecommerce', 'healthcare', 'saas', 'local-service', 'fitness', 'beauty'],
  tags: ['trust-badges', 'security', 'guarantee', 'certifications', 'safe', 'credibility'],
  slots: [
    { name: 'ratingScore', type: 'stat-value', maxWords: 1, description: 'Overall rating (e.g. 4.9)', required: true },
    { name: 'ratingCount', type: 'text', maxWords: 3, description: 'Number of ratings', required: true },
    {
      name: 'badges', type: 'array', description: '6 trust badges', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Badge emoji', required: true },
        { name: 'title', type: 'text', maxWords: 3, description: 'Badge title', required: true },
        { name: 'desc', type: 'text', maxWords: 8, description: 'Badge description', required: true },
      ],
    },
  ],
  css: `/* social-proof-badges */
#sp-badges {
  background: {{BG_SECTION}};
  padding: 3rem 0;
  border-top: 1px solid {{BORDER}};
}
.spb-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.spb-row { display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; justify-content: center; }
.spb-rating { text-align: center; padding: 1.5rem 2rem; background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 16px; flex-shrink: 0; }
.spb-score { font-family: var(--font-heading); font-size: 3rem; font-weight: 900; letter-spacing: -0.05em; color: {{TEXT}}; line-height: 1; display: block; }
.spb-stars { display: flex; gap: 2px; justify-content: center; margin: 6px 0; color: {{ACCENT}}; }
.spb-stars svg { width: 16px; height: 16px; }
.spb-rcount { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
.spb-divider { width: 1px; height: 60px; background: {{BORDER}}; flex-shrink: 0; }
@media (max-width: 640px) { .spb-divider { display: none; } }
.spb-badges { display: grid; grid-template-columns: repeat(3,1fr); gap: 1rem; flex: 1; min-width: 0; }
@media (max-width: 480px) { .spb-badges { grid-template-columns: repeat(2,1fr); } }
.spb-badge { display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem; border: 1px solid {{BORDER}}; border-radius: 12px; background: {{BG_CARD}}; }
.spb-badge-icon { font-size: 1.5rem; flex-shrink: 0; }
.spb-badge-title { font-size: 0.875rem; font-weight: 700; color: {{TEXT}}; line-height: 1.2; }
.spb-badge-desc { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="sp-badges">
  <div class="spb-inner">
    <div class="spb-row reveal">
      <div class="spb-rating">
        <span class="spb-score">{{ratingScore}}</span>
        <div class="spb-stars"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <div class="spb-rcount">{{ratingCount}} reviews</div>
      </div>
      <div class="spb-divider"></div>
      <div class="spb-badges">
        {{#badges}}
        <div class="spb-badge">
          <span class="spb-badge-icon">{{.emoji}}</span>
          <div><div class="spb-badge-title">{{.title}}</div><div class="spb-badge-desc">{{.desc}}</div></div>
        </div>
        {{/badges}}
      </div>
    </div>
  </div>
</section>`,
}
