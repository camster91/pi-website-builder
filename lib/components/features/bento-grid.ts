import type { ComponentVariant } from '../types'

export const featuresBentoGrid: ComponentVariant = {
  id: 'features-bento-grid',
  name: 'Features Bento Grid',
  section: 'features',
  description: 'Bento box mixed-size card layout inspired by Linear.app — large hero card + smaller cards in varied sizes',
  bestFor: ['saas', 'agency', 'ecommerce', 'education', 'portfolio'],
  tags: ['bento', 'modern', 'grid', 'mixed-size', 'innovative', 'saas', 'trendy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Section subtext', required: true },
    { name: 'card1Title', type: 'heading', maxWords: 3, description: 'Large card title', required: true },
    { name: 'card1Desc', type: 'text', maxWords: 15, description: 'Large card description', required: true },
    { name: 'card2Title', type: 'heading', maxWords: 3, description: 'Card 2 title', required: true },
    { name: 'card2Desc', type: 'text', maxWords: 12, description: 'Card 2 description', required: true },
    { name: 'card3Title', type: 'heading', maxWords: 3, description: 'Card 3 title', required: true },
    { name: 'card3Desc', type: 'text', maxWords: 12, description: 'Card 3 description', required: true },
    { name: 'card4Value', type: 'stat-value', maxWords: 1, description: 'Stat card value (e.g. 99.9%)', required: true },
    { name: 'card4Label', type: 'stat-label', maxWords: 3, description: 'Stat card label', required: true },
    { name: 'card5Title', type: 'heading', maxWords: 3, description: 'Card 5 title', required: true },
    { name: 'card5Desc', type: 'text', maxWords: 12, description: 'Card 5 description', required: true },
    { name: 'card6Title', type: 'heading', maxWords: 3, description: 'Bottom wide card title (CTA-style)', required: true },
    { name: 'card6Cta', type: 'cta-text', maxWords: 3, description: 'Bottom card CTA', required: true },
  ],
  css: `/* features-bento-grid */
#features-bento {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.fb-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.fb-header {
  text-align: center; max-width: 680px;
  margin: 0 auto 3.5rem;
}
.fb-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.fb-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.fb-heading .accent-word { color: {{ACCENT}}; }
.fb-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

/* Bento grid */
.fb-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 16px;
}
@media (max-width: 768px) { .fb-grid { grid-template-columns: 1fr; } }
@media (min-width: 769px) and (max-width: 1023px) { .fb-grid { grid-template-columns: repeat(2, 1fr); } }

/* Card base */
.fb-card {
  border-radius: 24px;
  padding: clamp(1.5rem, 3vw, 2rem);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s;
}
.fb-card:hover { transform: scale(1.02); box-shadow: 0 20px 48px rgba(0,0,0,0.12); }

/* Card 1 — large, col-span 2, PRIMARY gradient */
.fb-card-a {
  grid-column: span 2;
  background: linear-gradient(135deg, {{PRIMARY}} 0%, {{PRIMARY_DARK}} 100%);
  color: #fff;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
@media (max-width: 768px) { .fb-card-a { grid-column: span 1; } }
.fb-card-a::before {
  content: '';
  position: absolute;
  top: -40px; right: -40px;
  width: 180px; height: 180px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
}
.fb-card-a::after {
  content: '';
  position: absolute;
  top: 20px; right: 30px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
}
.fb-card-a .fb-icon { color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
.fb-card-a .fb-title { font-family: var(--font-heading); font-size: 1.5rem; font-weight: 800; color: #fff; margin-bottom: 0.625rem; letter-spacing: -0.02em; }
.fb-card-a .fb-desc { font-size: 0.9375rem; color: rgba(255,255,255,0.75); line-height: 1.65; max-width: 400px; }

/* Card 2 — light */
.fb-card-b {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fb-card-b .fb-icon { color: {{PRIMARY}}; }
.fb-card-b .fb-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: {{TEXT}}; margin: 1rem 0 0.5rem; letter-spacing: -0.01em; }
.fb-card-b .fb-desc { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.65; }

/* Card 3 — dark */
.fb-card-c {
  background: #0a0f1e;
  border: 1px solid rgba(255,255,255,0.06);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fb-card-c .fb-icon { color: {{ACCENT}}; }
.fb-card-c .fb-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: #fff; margin: 1rem 0 0.5rem; letter-spacing: -0.01em; }
.fb-card-c .fb-desc { font-size: 0.875rem; color: rgba(255,255,255,0.5); line-height: 1.65; }

/* Card 4 — stat */
.fb-card-d {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.fb-stat-val {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  color: {{PRIMARY}};
  line-height: 1;
  margin-bottom: 0.5rem;
}
.fb-stat-lbl { font-size: 0.875rem; color: {{TEXT_MUTED}}; font-weight: 600; }

/* Card 5 — accent tint */
.fb-card-e {
  background: linear-gradient(135deg,
    rgba(245,158,11,0.08) 0%,
    rgba(245,158,11,0.04) 100%);
  border: 1px solid rgba(245,158,11,0.15);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.fb-card-e .fb-icon { color: {{ACCENT}}; }
.fb-card-e .fb-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: {{TEXT}}; margin: 1rem 0 0.5rem; letter-spacing: -0.01em; }
.fb-card-e .fb-desc { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.65; }

/* Card 6 — full width CTA bar */
.fb-card-f {
  grid-column: span 3;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem 2rem;
}
@media (max-width: 768px) { .fb-card-f { grid-column: span 1; } }
@media (min-width: 769px) and (max-width: 1023px) { .fb-card-f { grid-column: span 2; } }
.fb-card-f .fb-cta-title { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: {{TEXT}}; letter-spacing: -0.02em; }
.fb-cta-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; background: {{PRIMARY}}; color: #fff;
  border-radius: 10px; font-weight: 700; font-size: 0.875rem;
  text-decoration: none; white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.fb-cta-btn:hover { background: {{PRIMARY_DARK}}; transform: translateY(-1px); }

.fb-icon { width: 40px; height: 40px; }
.fb-icon svg { width: 100%; height: 100%; }
`,
  template: `<section id="features-bento">
  <div class="fb-inner">
    <div class="fb-header">
      <span class="fb-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="fb-heading reveal reveal-d1">{{heading}}</h2>
      <p class="fb-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="fb-grid reveal-stagger">
      <!-- Card A: large primary -->
      <div class="fb-card fb-card-a">
        <div class="fb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        <h3 class="fb-title">{{card1Title}}</h3>
        <p class="fb-desc">{{card1Desc}}</p>
      </div>

      <!-- Card B: light -->
      <div class="fb-card fb-card-b">
        <div class="fb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 class="fb-title">{{card2Title}}</h3>
        <p class="fb-desc">{{card2Desc}}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="{{PRIMARY}}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>

      <!-- Card C: dark -->
      <div class="fb-card fb-card-c">
        <div class="fb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <h3 class="fb-title">{{card3Title}}</h3>
        <p class="fb-desc">{{card3Desc}}</p>
      </div>

      <!-- Card D: stat -->
      <div class="fb-card fb-card-d">
        <span class="fb-stat-val counter" data-target="{{card4Value}}">{{card4Value}}</span>
        <span class="fb-stat-lbl">{{card4Label}}</span>
      </div>

      <!-- Card E: accent tint -->
      <div class="fb-card fb-card-e">
        <div class="fb-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
        </div>
        <h3 class="fb-title">{{card5Title}}</h3>
        <p class="fb-desc">{{card5Desc}}</p>
      </div>

      <!-- Card F: CTA bar -->
      <div class="fb-card fb-card-f">
        <span class="fb-cta-title">{{card6Title}}</span>
        <a href="#contact" class="fb-cta-btn">
          {{card6Cta}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
    </div>
  </div>
</section>`,
}
