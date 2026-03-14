import type { ComponentVariant } from '../types'

export const pricingThreeTier: ComponentVariant = {
  id: 'pricing-three-tier',
  name: 'Pricing Three Tier',
  section: 'pricing' as any,
  description: '3-column pricing table with featured center plan, feature checklists, and annual/monthly toggle UI',
  bestFor: ['saas', 'fitness', 'beauty', 'education', 'nonprofit', 'ecommerce', 'agency'],
  tags: ['pricing', 'plans', 'tiers', 'revenue', 'comparison', 'subscription'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    { name: 'plan1Name', type: 'text', maxWords: 2, description: 'Starter plan name', required: true },
    { name: 'plan1Price', type: 'text', maxWords: 1, description: 'Starter price (e.g. $29)', required: true },
    { name: 'plan1For', type: 'text', maxWords: 5, description: 'Who starter is for', required: true },
    {
      name: 'plan1Features', type: 'array', description: '6 starter features', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'text', type: 'text', maxWords: 5, description: 'Feature text', required: true },
        { name: 'included', type: 'text', maxWords: 1, description: '"true" or "false"', required: true },
      ],
    },
    { name: 'plan1Cta', type: 'cta-text', maxWords: 3, description: 'Starter CTA', required: true },
    { name: 'plan2Name', type: 'text', maxWords: 2, description: 'Pro plan name', required: true },
    { name: 'plan2Price', type: 'text', maxWords: 1, description: 'Pro price', required: true },
    { name: 'plan2For', type: 'text', maxWords: 5, description: 'Who Pro is for', required: true },
    {
      name: 'plan2Features', type: 'array', description: '7 pro features', required: true,
      minItems: 7, maxItems: 7,
      itemSlots: [
        { name: 'text', type: 'text', maxWords: 5, description: 'Feature text', required: true },
        { name: 'included', type: 'text', maxWords: 1, description: '"true"', required: true },
      ],
    },
    { name: 'plan2Cta', type: 'cta-text', maxWords: 3, description: 'Pro CTA', required: true },
    { name: 'plan3Name', type: 'text', maxWords: 2, description: 'Enterprise plan name', required: true },
    { name: 'plan3Price', type: 'text', maxWords: 2, description: 'Enterprise price or "Custom"', required: true },
    { name: 'plan3For', type: 'text', maxWords: 5, description: 'Who enterprise is for', required: true },
    {
      name: 'plan3Features', type: 'array', description: '6 enterprise features', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'text', type: 'text', maxWords: 5, description: 'Feature text', required: true },
        { name: 'included', type: 'text', maxWords: 1, description: '"true"', required: true },
      ],
    },
    { name: 'plan3Cta', type: 'cta-text', maxWords: 3, description: 'Enterprise CTA', required: true },
  ],
  css: `/* pricing-three-tier */
#pricing {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.pr-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.pr-header {
  text-align: center; max-width: 640px;
  margin: 0 auto 4rem;
}
.pr-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.pr-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.pr-heading .accent-word { color: {{ACCENT}}; }
.pr-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

/* Toggle */
.pr-toggle {
  display: flex; align-items: center; justify-content: center; gap: 0.75rem;
  margin-bottom: 3rem;
}
.pr-toggle-label { font-size: 0.9375rem; color: {{TEXT_SEC}}; font-weight: 500; }
.pr-toggle-track {
  width: 44px; height: 24px; border-radius: 12px;
  background: {{PRIMARY}}; position: relative; cursor: pointer;
}
.pr-toggle-thumb {
  position: absolute; top: 3px; left: 3px;
  width: 18px; height: 18px; border-radius: 50%;
  background: #fff;
  transition: transform 0.3s;
}
.pr-toggle-pill {
  display: inline-block;
  padding: 2px 10px; background: {{ACCENT}};
  border-radius: 999px; font-size: 0.6875rem; font-weight: 700;
  color: #fff; margin-left: 4px;
}

/* Grid */
.pr-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;
}
@media (min-width: 768px) { .pr-grid { grid-template-columns: repeat(3, 1fr); align-items: center; } }

/* Cards */
.pr-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;
}
.pr-card:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.10); }

/* Featured center card */
.pr-card-featured {
  background: {{PRIMARY}};
  border-color: {{PRIMARY}};
  color: #fff;
  padding: 2.5rem 2rem;
  position: relative;
}
@media (min-width: 768px) {
  .pr-card-featured { transform: scale(1.04); }
  .pr-card-featured:hover { transform: scale(1.04) translateY(-4px); }
}
.pr-badge {
  position: absolute;
  top: -12px; left: 50%; transform: translateX(-50%);
  background: {{ACCENT}};
  color: #fff; font-size: 0.75rem; font-weight: 700;
  padding: 4px 16px; border-radius: 999px;
  white-space: nowrap;
}

/* Plan info */
.pr-plan-name {
  font-size: 0.875rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.08em;
  color: {{TEXT_MUTED}}; margin-bottom: 0.25rem;
}
.pr-card-featured .pr-plan-name { color: rgba(255,255,255,0.7); }
.pr-plan-for {
  font-size: 0.875rem; color: {{TEXT_MUTED}};
  margin-bottom: 1.5rem;
}
.pr-card-featured .pr-plan-for { color: rgba(255,255,255,0.65); }
.pr-price {
  display: flex; align-items: flex-end; gap: 4px;
  margin-bottom: 0.25rem;
}
.pr-price-num {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900; letter-spacing: -0.05em;
  line-height: 1; color: {{TEXT}};
}
.pr-card-featured .pr-price-num { color: #fff; }
.pr-price-period { font-size: 0.875rem; color: {{TEXT_MUTED}}; margin-bottom: 8px; }
.pr-card-featured .pr-price-period { color: rgba(255,255,255,0.6); }
.pr-divider { height: 1px; background: {{BORDER}}; margin: 1.5rem 0; }
.pr-card-featured .pr-divider { background: rgba(255,255,255,0.2); }

/* Features list */
.pr-features { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; }
.pr-feature {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.9375rem; color: {{TEXT_SEC}};
}
.pr-card-featured .pr-feature { color: rgba(255,255,255,0.85); }
.pr-feature-icon { flex-shrink: 0; width: 18px; height: 18px; }
.pr-feature-icon.included { color: {{PRIMARY}}; }
.pr-card-featured .pr-feature-icon.included { color: rgba(255,255,255,0.9); }
.pr-feature-icon.excluded { color: {{TEXT_MUTED}}; opacity: 0.5; }
.pr-feature-text.excluded { text-decoration: line-through; opacity: 0.5; }

/* CTA buttons */
.pr-btn {
  display: block; text-align: center;
  padding: 13px 24px; border-radius: 12px;
  font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.pr-btn-outline {
  background: transparent; color: {{PRIMARY}};
  border: 2px solid {{PRIMARY}};
}
.pr-btn-outline:hover { background: {{PRIMARY}}; color: #fff; }
.pr-btn-filled {
  background: #fff; color: {{PRIMARY}};
  border: 2px solid transparent;
}
.pr-btn-filled:hover { background: rgba(255,255,255,0.9); transform: translateY(-1px); box-shadow: 0 6px 16px rgba(0,0,0,0.2); }
.pr-btn-dark {
  background: {{TEXT}}; color: #fff;
  border: 2px solid {{TEXT}};
}
.pr-btn-dark:hover { background: {{TEXT_SEC}}; }
`,
  template: `<section id="pricing">
  <div class="pr-inner">
    <div class="pr-header">
      <span class="pr-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pr-heading reveal reveal-d1">{{heading}}</h2>
      <p class="pr-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <!-- Toggle -->
    <div class="pr-toggle reveal reveal-d3">
      <span class="pr-toggle-label">Monthly</span>
      <div class="pr-toggle-track"><div class="pr-toggle-thumb"></div></div>
      <span class="pr-toggle-label">Annual <span class="pr-toggle-pill">Save 20%</span></span>
    </div>

    <div class="pr-grid reveal-stagger">
      <!-- Plan 1 Starter -->
      <div class="pr-card">
        <div class="pr-plan-name">{{plan1Name}}</div>
        <div class="pr-plan-for">{{plan1For}}</div>
        <div class="pr-price">
          <span class="pr-price-num">{{plan1Price}}</span>
          <span class="pr-price-period">/mo</span>
        </div>
        <div class="pr-divider"></div>
        <ul class="pr-features">
          {{#plan1Features}}
          <li class="pr-feature">
            <svg class="pr-feature-icon {{.included}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="pr-feature-text">{{.text}}</span>
          </li>
          {{/plan1Features}}
        </ul>
        <a href="#contact" class="pr-btn pr-btn-outline">{{plan1Cta}}</a>
      </div>

      <!-- Plan 2 Pro (featured) -->
      <div class="pr-card pr-card-featured">
        <div class="pr-badge">Most Popular</div>
        <div class="pr-plan-name">{{plan2Name}}</div>
        <div class="pr-plan-for">{{plan2For}}</div>
        <div class="pr-price">
          <span class="pr-price-num">{{plan2Price}}</span>
          <span class="pr-price-period">/mo</span>
        </div>
        <div class="pr-divider"></div>
        <ul class="pr-features">
          {{#plan2Features}}
          <li class="pr-feature">
            <svg class="pr-feature-icon included" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="pr-feature-text">{{.text}}</span>
          </li>
          {{/plan2Features}}
        </ul>
        <a href="#contact" class="pr-btn pr-btn-filled">{{plan2Cta}}</a>
      </div>

      <!-- Plan 3 Enterprise -->
      <div class="pr-card">
        <div class="pr-plan-name">{{plan3Name}}</div>
        <div class="pr-plan-for">{{plan3For}}</div>
        <div class="pr-price">
          <span class="pr-price-num">{{plan3Price}}</span>
          <span class="pr-price-period">/mo</span>
        </div>
        <div class="pr-divider"></div>
        <ul class="pr-features">
          {{#plan3Features}}
          <li class="pr-feature">
            <svg class="pr-feature-icon included" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span class="pr-feature-text">{{.text}}</span>
          </li>
          {{/plan3Features}}
        </ul>
        <a href="#contact" class="pr-btn pr-btn-dark">{{plan3Cta}}</a>
      </div>
    </div>
  </div>
</section>`,
}
