import type { ComponentVariant } from '../types'

export const aboutCultureGrid: ComponentVariant = {
  id: 'about-culture',
  name: 'About Culture & Team Grid',
  section: 'about',
  description: 'Photo grid of team/culture moments + perks/benefits list on side — great for recruiting and humanizing brands',
  bestFor: ['agency', 'saas', 'nonprofit', 'fitness', 'education'],
  tags: ['culture', 'team', 'photos', 'perks', 'benefits', 'lifestyle', 'recruiting'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'text', maxWords: 25, description: 'Culture description', required: true },
    {
      name: 'perks', type: 'array', description: '6 culture perks/benefits', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Perk emoji', required: true },
        { name: 'title', type: 'heading', maxWords: 3, description: 'Perk title', required: true },
        { name: 'desc', type: 'text', maxWords: 10, description: 'Perk description', required: true },
      ],
    },
  ],
  css: `/* about-culture */
#about-cu {
  background: {{BG}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.acu-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
@media (min-width: 1024px) { .acu-inner { grid-template-columns: 1fr 1fr; } }
/* Left: photo grid */
.acu-photos { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px; }
.acu-photo { border-radius: 16px; overflow: hidden; }
.acu-photo:first-child { grid-row: span 2; }
.acu-photo img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
.acu-photo:hover img { transform: scale(1.05); }
.acu-ph-1 { aspect-ratio: 3/4; }
.acu-ph-2, .acu-ph-3 { aspect-ratio: 4/3; }
.acu-ph-fallback-1 { background: linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}}); height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
.acu-ph-fallback-2 { background: linear-gradient(135deg,{{ACCENT}},#f97316); height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
.acu-ph-fallback-3 { background: linear-gradient(135deg,#8b5cf6,#6d28d9); height: 100%; display: flex; align-items: center; justify-content: center; font-size: 3rem; }
/* Right: text */
.acu-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.acu-heading { font-family: var(--font-heading); font-size: clamp(1.875rem,3.5vw,2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.25rem; }
.acu-heading .accent-word { color: {{ACCENT}}; }
.acu-sub { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.75; margin-bottom: 2.5rem; }
.acu-perks { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
@media (max-width: 480px) { .acu-perks { grid-template-columns: 1fr; } }
.acu-perk { display: flex; align-items: flex-start; gap: 0.875rem; }
.acu-perk-icon { font-size: 1.5rem; flex-shrink: 0; }
.acu-perk-title { font-weight: 700; font-size: 0.9375rem; color: {{TEXT}}; margin-bottom: 2px; }
.acu-perk-desc { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="about-cu">
  <div class="acu-inner">
    <div class="acu-photos reveal-left">
      <div class="acu-photo acu-ph-1">
        <img src="{{ABOUT_IMAGE}}" alt="Team culture" width="400" height="533" loading="lazy" onerror="this.style.display='none'">
        <div class="acu-ph-fallback-1">🤝</div>
      </div>
      <div class="acu-photo acu-ph-2">
        <img src="{{SERVICE_IMAGE_0}}" alt="Team" width="400" height="300" loading="lazy" onerror="this.style.display='none'">
        <div class="acu-ph-fallback-2">💡</div>
      </div>
      <div class="acu-photo acu-ph-3">
        <img src="{{SERVICE_IMAGE_1}}" alt="Office" width="400" height="300" loading="lazy" onerror="this.style.display='none'">
        <div class="acu-ph-fallback-3">🎯</div>
      </div>
    </div>
    <div class="reveal-right">
      <span class="acu-eyebrow">{{eyebrow}}</span>
      <h2 class="acu-heading">{{heading}}</h2>
      <p class="acu-sub">{{subtext}}</p>
      <div class="acu-perks">
        {{#perks}}
        <div class="acu-perk">
          <span class="acu-perk-icon">{{.emoji}}</span>
          <div><div class="acu-perk-title">{{.title}}</div><div class="acu-perk-desc">{{.desc}}</div></div>
        </div>
        {{/perks}}
      </div>
    </div>
  </div>
</section>`,
}
