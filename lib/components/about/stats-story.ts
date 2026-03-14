import type { ComponentVariant } from '../types'

export const aboutStatsStory: ComponentVariant = {
  id: 'about-stats-story',
  name: 'About Stats + Story',
  section: 'about',
  description: 'Split: left large hero image with overlaid stat numbers, right company story text + timeline milestones',
  bestFor: ['agency', 'saas', 'nonprofit', 'healthcare', 'real-estate'],
  tags: ['stats', 'story', 'split', 'image', 'history', 'numbers', 'milestone'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Story heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'story', type: 'text', maxWords: 60, description: 'Company story (2 paragraphs)', required: true },
    { name: 'stat1Val', type: 'stat-value', maxWords: 1, description: 'Stat 1 value', required: true },
    { name: 'stat1Lbl', type: 'stat-label', maxWords: 3, description: 'Stat 1 label', required: true },
    { name: 'stat2Val', type: 'stat-value', maxWords: 1, description: 'Stat 2 value', required: true },
    { name: 'stat2Lbl', type: 'stat-label', maxWords: 3, description: 'Stat 2 label', required: true },
    { name: 'stat3Val', type: 'stat-value', maxWords: 1, description: 'Stat 3 value', required: true },
    { name: 'stat3Lbl', type: 'stat-label', maxWords: 3, description: 'Stat 3 label', required: true },
    { name: 'mile1Year', type: 'text', maxWords: 1, description: 'Milestone 1 year', required: true },
    { name: 'mile1Text', type: 'text', maxWords: 8, description: 'Milestone 1 text', required: true },
    { name: 'mile2Year', type: 'text', maxWords: 1, description: 'Milestone 2 year', required: true },
    { name: 'mile2Text', type: 'text', maxWords: 8, description: 'Milestone 2 text', required: true },
    { name: 'mile3Year', type: 'text', maxWords: 1, description: 'Milestone 3 year', required: true },
    { name: 'mile3Text', type: 'text', maxWords: 8, description: 'Milestone 3 text', required: true },
  ],
  css: `/* about-stats-story */
#about-ss {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.ass-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
@media (min-width: 1024px) { .ass-inner { grid-template-columns: 1fr 1fr; } }
/* Left: image with stats overlay */
.ass-visual { position: relative; }
.ass-img { border-radius: 24px; overflow: hidden; aspect-ratio: 4/5; }
.ass-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ass-img-fallback { width: 100%; height: 100%; background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}}); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 4rem; font-weight: 900; color: rgba(255,255,255,0.3); }
/* Stats overlay */
.ass-stats-overlay {
  position: absolute; bottom: -2rem; right: -1rem;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 1.5rem 2rem;
  display: flex; gap: 2rem;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
}
@media (max-width: 767px) { .ass-stats-overlay { position: relative; bottom: auto; right: auto; margin-top: 1.5rem; } }
.ass-stat-val { font-family: var(--font-heading); font-size: 2rem; font-weight: 900; letter-spacing: -0.04em; color: {{PRIMARY}}; display: block; line-height: 1; }
.ass-stat-lbl { font-size: 0.8125rem; color: {{TEXT_MUTED}}; margin-top: 4px; }
/* Right: story */
.ass-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 1rem; }
.ass-heading { font-family: var(--font-heading); font-size: clamp(1.875rem,3.5vw,2.75rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.5rem; }
.ass-heading .accent-word { color: {{ACCENT}}; }
.ass-story { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.8; margin-bottom: 2.5rem; }
/* Milestones */
.ass-miles { display: flex; flex-direction: column; gap: 1rem; }
.ass-mile { display: flex; align-items: flex-start; gap: 1rem; }
.ass-mile-year { font-family: var(--font-heading); font-size: 0.8125rem; font-weight: 800; color: {{PRIMARY}}; min-width: 44px; padding-top: 2px; }
.ass-mile-line { width: 1px; background: {{BORDER}}; flex-shrink: 0; margin-top: 6px; height: 100%; }
.ass-mile-text { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.5; }
`,
  template: `<section id="about-ss">
  <div class="ass-inner">
    <div class="ass-visual reveal-left">
      <div class="ass-img">
        <img src="{{ABOUT_IMAGE}}" alt="Our story" width="600" height="750" loading="lazy" onerror="this.style.display='none'">
        <div class="ass-img-fallback">✦</div>
      </div>
      <div class="ass-stats-overlay">
        <div><span class="ass-stat-val counter" data-target="{{stat1Val}}">{{stat1Val}}</span><span class="ass-stat-lbl">{{stat1Lbl}}</span></div>
        <div><span class="ass-stat-val counter" data-target="{{stat2Val}}">{{stat2Val}}</span><span class="ass-stat-lbl">{{stat2Lbl}}</span></div>
        <div><span class="ass-stat-val counter" data-target="{{stat3Val}}">{{stat3Val}}</span><span class="ass-stat-lbl">{{stat3Lbl}}</span></div>
      </div>
    </div>
    <div class="reveal-right">
      <span class="ass-eyebrow">{{eyebrow}}</span>
      <h2 class="ass-heading">{{heading}}</h2>
      <p class="ass-story">{{story}}</p>
      <div class="ass-miles">
        <div class="ass-mile"><span class="ass-mile-year">{{mile1Year}}</span><span class="ass-mile-text">{{mile1Text}}</span></div>
        <div class="ass-mile"><span class="ass-mile-year">{{mile2Year}}</span><span class="ass-mile-text">{{mile2Text}}</span></div>
        <div class="ass-mile"><span class="ass-mile-year">{{mile3Year}}</span><span class="ass-mile-text">{{mile3Text}}</span></div>
      </div>
    </div>
  </div>
</section>`,
}
