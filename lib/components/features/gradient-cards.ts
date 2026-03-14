import type { ComponentVariant } from '../types'

export const featuresGradientCards: ComponentVariant = {
  id: 'features-gradient-cards',
  name: 'Features Gradient Cards Grid',
  section: 'features',
  description: '6-card grid with colorful gradient icon backgrounds — vibrant and visually varied, great for services/benefits',
  bestFor: ['saas', 'agency', 'ecommerce', 'nonprofit', 'fitness', 'beauty', 'education'],
  tags: ['cards', 'gradient', 'colorful', 'vibrant', 'icons', 'modern', '6-up'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'cards', type: 'array', description: '6 feature cards', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 3, description: 'Card title', required: true },
        { name: 'desc', type: 'text', maxWords: 18, description: 'Card description', required: true },
      ],
    },
  ],
  css: `/* features-gradient-cards */
#features-gc {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.fgc-inner {
  max-width: 1280px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.fgc-header {
  text-align: center; max-width: 680px; margin: 0 auto 4rem;
}
.fgc-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.fgc-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.fgc-heading .accent-word { color: {{ACCENT}}; }
.fgc-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
.fgc-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 640px) { .fgc-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .fgc-grid { grid-template-columns: repeat(3, 1fr); } }
.fgc-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px;
  padding: 1.75rem;
  transition: transform 0.3s, box-shadow 0.3s;
}
.fgc-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.09);
  border-color: transparent;
}
.fgc-icon {
  width: 52px; height: 52px; border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem;
}
.fgc-icon svg { width: 26px; height: 26px; }
/* Gradient backgrounds for each card icon */
.fgc-card:nth-child(1) .fgc-icon { background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}}); color: #fff; }
.fgc-card:nth-child(2) .fgc-icon { background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: #fff; }
.fgc-card:nth-child(3) .fgc-icon { background: linear-gradient(135deg, {{ACCENT}}, #f97316); color: #fff; }
.fgc-card:nth-child(4) .fgc-icon { background: linear-gradient(135deg, #06b6d4, #0891b2); color: #fff; }
.fgc-card:nth-child(5) .fgc-icon { background: linear-gradient(135deg, #f43f5e, #e11d48); color: #fff; }
.fgc-card:nth-child(6) .fgc-icon { background: linear-gradient(135deg, #10b981, #059669); color: #fff; }
/* Colored top border accent on hover */
.fgc-card:nth-child(1):hover { border-top: 3px solid {{PRIMARY}}; }
.fgc-card:nth-child(2):hover { border-top: 3px solid #8b5cf6; }
.fgc-card:nth-child(3):hover { border-top: 3px solid {{ACCENT}}; }
.fgc-card:nth-child(4):hover { border-top: 3px solid #06b6d4; }
.fgc-card:nth-child(5):hover { border-top: 3px solid #f43f5e; }
.fgc-card:nth-child(6):hover { border-top: 3px solid #10b981; }
.fgc-title {
  font-family: var(--font-heading);
  font-size: 1.0625rem; font-weight: 700;
  color: {{TEXT}}; margin-bottom: 0.625rem;
  letter-spacing: -0.01em;
}
.fgc-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; }
`,
  template: `<section id="features-gc">
  <div class="fgc-inner">
    <div class="fgc-header">
      <span class="fgc-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="fgc-heading reveal reveal-d1">{{heading}}</h2>
      <p class="fgc-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="fgc-grid reveal-stagger">
      <div class="fgc-card">
        <div class="fgc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
        <h3 class="fgc-title">{{cards[0].title}}</h3>
        <p class="fgc-desc">{{cards[0].desc}}</p>
      </div>
      <div class="fgc-card">
        <div class="fgc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3 class="fgc-title">{{cards[1].title}}</h3>
        <p class="fgc-desc">{{cards[1].desc}}</p>
      </div>
      <div class="fgc-card">
        <div class="fgc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
        <h3 class="fgc-title">{{cards[2].title}}</h3>
        <p class="fgc-desc">{{cards[2].desc}}</p>
      </div>
      <div class="fgc-card">
        <div class="fgc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg></div>
        <h3 class="fgc-title">{{cards[3].title}}</h3>
        <p class="fgc-desc">{{cards[3].desc}}</p>
      </div>
      <div class="fgc-card">
        <div class="fgc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"></path></svg></div>
        <h3 class="fgc-title">{{cards[4].title}}</h3>
        <p class="fgc-desc">{{cards[4].desc}}</p>
      </div>
      <div class="fgc-card">
        <div class="fgc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
        <h3 class="fgc-title">{{cards[5].title}}</h3>
        <p class="fgc-desc">{{cards[5].desc}}</p>
      </div>
    </div>
  </div>
</section>`,
}
