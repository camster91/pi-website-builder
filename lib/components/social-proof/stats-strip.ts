import type { ComponentVariant } from '../types'

export const socialProofStatsStrip: ComponentVariant = {
  id: 'social-proof-stats-strip',
  name: 'Stats Strip + Logo Marquee',
  section: 'social-proof',
  description: 'Animated stat counters row with dividers, then a scrolling trusted-by logo marquee',
  bestFor: ['healthcare', 'saas', 'agency', 'local-service', 'real-estate', 'fitness', 'beauty', 'education', 'nonprofit', 'ecommerce', 'restaurant', 'portfolio'],
  tags: ['trust', 'professional', 'stats', 'numbers'],
  slots: [
    {
      name: 'stats', type: 'array', description: '4 key stats', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Number or value (e.g. 500+, 4.9, 12)', required: true },
        { name: 'suffix', type: 'text', maxWords: 1, description: 'Optional suffix (e.g. + or %)', required: false },
        { name: 'label', type: 'stat-label', maxWords: 2, description: 'Short stat label', required: true },
      ],
    },
    {
      name: 'brands', type: 'array', description: '6 brand/company names for the trust strip', required: true,
      minItems: 6, maxItems: 8,
      itemSlots: [{ name: 'name', type: 'text', maxWords: 2, description: 'Company name', required: true }],
    },
    { name: 'trustedByLabel', type: 'text', maxWords: 3, description: 'Label above brands (e.g. "Trusted by")', required: true },
  ],
  css: `/* social-proof-stats-strip */
#social-proof {
  background: {{BG_SECTION}};
  padding: 4rem 0;
  border-top: 1px solid {{BORDER}};
  border-bottom: 1px solid {{BORDER}};
  overflow: hidden;
}
.sp-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
/* Stats row */
.sp-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;
}
@media (min-width: 640px) { .sp-stats { grid-template-columns: repeat(4, 1fr); gap: 0; } }

.sp-stat {
  text-align: center;
  padding: 1rem;
  position: relative;
}
@media (min-width: 640px) {
  .sp-stat:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 15%;
    height: 70%;
    width: 1px;
    background: {{BORDER}};
  }
}
.sp-stat-number {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  color: {{PRIMARY}};
  margin-bottom: 0.5rem;
  display: block;
}
.sp-stat-label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: {{TEXT_MUTED}};
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
/* Brands marquee */
.sp-brands-label {
  text-align: center;
  font-size: 0.8125rem;
  font-weight: 600;
  color: {{TEXT_MUTED}};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.25rem;
}
.sp-marquee-wrap {
  overflow: hidden;
  -webkit-mask: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  mask: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
}
.sp-marquee-track {
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: sp-scroll 28s linear infinite;
}
.sp-marquee-track:hover { animation-play-state: paused; }
@keyframes sp-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.sp-brand {
  font-family: var(--font-heading);
  font-size: 1.0625rem;
  font-weight: 700;
  color: {{TEXT_MUTED}};
  letter-spacing: -0.01em;
  white-space: nowrap;
  opacity: 0.45;
  transition: opacity 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.sp-brand::before {
  content: '✦';
  font-size: 0.5rem;
  color: {{PRIMARY}};
  opacity: 1;
}
.sp-brand:hover { opacity: 0.75; }
`,
  template: `<section id="social-proof">
  <div class="sp-inner">
    <div class="sp-stats reveal-stagger">
      {{#stats}}
      <div class="sp-stat">
        <span class="sp-stat-number counter" data-target="{{.value}}">{{.value}}{{.suffix}}</span>
        <span class="sp-stat-label">{{.label}}</span>
      </div>
      {{/stats}}
    </div>

    <p class="sp-brands-label">{{trustedByLabel}}</p>
    <div class="sp-marquee-wrap">
      <div class="sp-marquee-track">
        {{#brands}}<span class="sp-brand">{{.name}}</span>{{/brands}}
        {{#brands}}<span class="sp-brand">{{.name}}</span>{{/brands}}
      </div>
    </div>
  </div>
</section>`,
}
