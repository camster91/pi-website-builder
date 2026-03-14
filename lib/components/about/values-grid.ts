import type { ComponentVariant } from '../types'

export const aboutValuesGrid: ComponentVariant = {
  id: 'about-values',
  name: 'Mission Values Grid',
  section: 'about',
  description: '4 large impactful value cards with bold icons, alternating backgrounds — mission/vision/values section',
  bestFor: ['nonprofit', 'healthcare', 'education', 'agency', 'local-service', 'fitness', 'real-estate', 'saas'],
  tags: ['values', 'mission', 'culture', 'brand', 'identity', 'impact'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Section subtext', required: true },
    {
      name: 'values', type: 'array', description: '4 values/pillars', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'name', type: 'heading', maxWords: 2, description: 'Value name (e.g. "Excellence")', required: true },
        { name: 'desc', type: 'text', maxWords: 28, description: 'Value description', required: true },
      ],
    },
  ],
  css: `/* about-values-grid */
#about {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.avl-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.avl-header {
  text-align: center; max-width: 680px;
  margin: 0 auto 4rem;
}
.avl-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.avl-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.avl-heading .accent-word { color: {{ACCENT}}; }
.avl-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

.avl-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 640px) { .avl-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1200px) { .avl-grid { grid-template-columns: repeat(4, 1fr); } }

/* Cards */
.avl-card {
  border-radius: 24px;
  padding: clamp(2rem, 4vw, 2.5rem);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), box-shadow 0.35s;
}
.avl-card:hover { transform: translateY(-6px); box-shadow: 0 24px 56px rgba(0,0,0,0.14); }

/* Decorative circle */
.avl-card::before {
  content: '';
  position: absolute;
  top: -30px; right: -30px;
  width: 150px; height: 150px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
}
.avl-card::after {
  content: '';
  position: absolute;
  bottom: -40px; left: -20px;
  width: 120px; height: 120px;
  border-radius: 50%;
  background: rgba(255,255,255,0.04);
}

/* Card color themes */
.avl-card-0 { background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}}); color: #fff; }
.avl-card-1 { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; color: {{TEXT}}; }
.avl-card-2 { background: #0a0f1e; color: #fff; }
.avl-card-3 { background: linear-gradient(135deg, {{ACCENT}}, #f97316); color: #fff; }

.avl-icon {
  width: 72px; height: 72px;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 2rem;
  position: relative; z-index: 1;
}
.avl-card-0 .avl-icon { background: rgba(255,255,255,0.15); color: #fff; }
.avl-card-1 .avl-icon { background: rgba(99,102,241,0.1); color: {{PRIMARY}}; }
.avl-card-2 .avl-icon { background: rgba(255,255,255,0.08); color: {{ACCENT}}; }
.avl-card-3 .avl-icon { background: rgba(255,255,255,0.15); color: #fff; }
.avl-icon svg { width: 36px; height: 36px; }

.avl-name {
  font-family: var(--font-heading);
  font-size: 1.5rem; font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 0.875rem;
  position: relative; z-index: 1;
}
.avl-card-0 .avl-name,
.avl-card-2 .avl-name,
.avl-card-3 .avl-name { color: #fff; }
.avl-card-1 .avl-name { color: {{TEXT}}; }

.avl-desc {
  font-size: 0.9375rem;
  line-height: 1.7;
  position: relative; z-index: 1;
}
.avl-card-0 .avl-desc,
.avl-card-3 .avl-desc { color: rgba(255,255,255,0.8); }
.avl-card-2 .avl-desc { color: rgba(255,255,255,0.6); }
.avl-card-1 .avl-desc { color: {{TEXT_SEC}}; }
`,
  template: `<section id="about">
  <div class="avl-inner">
    <div class="avl-header">
      <span class="avl-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="avl-heading reveal reveal-d1">{{heading}}</h2>
      <p class="avl-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="avl-grid reveal-stagger">
      <div class="avl-card avl-card-0">
        <div class="avl-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        </div>
        <div>
          <h3 class="avl-name">{{values[0].name}}</h3>
          <p class="avl-desc">{{values[0].desc}}</p>
        </div>
      </div>
      <div class="avl-card avl-card-1">
        <div class="avl-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <div>
          <h3 class="avl-name">{{values[1].name}}</h3>
          <p class="avl-desc">{{values[1].desc}}</p>
        </div>
      </div>
      <div class="avl-card avl-card-2">
        <div class="avl-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <div>
          <h3 class="avl-name">{{values[2].name}}</h3>
          <p class="avl-desc">{{values[2].desc}}</p>
        </div>
      </div>
      <div class="avl-card avl-card-3">
        <div class="avl-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </div>
        <div>
          <h3 class="avl-name">{{values[3].name}}</h3>
          <p class="avl-desc">{{values[3].desc}}</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
}
