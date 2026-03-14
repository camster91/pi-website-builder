import type { ComponentVariant } from '../types'

// 6 distinct SVG icons — consistent style, pre-tested
const ICON_SVGS = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
]

// Build the icon look-up as a JS data attribute trick  
// We inject the icons statically at positions 0-5 using a CSS counter hack
// The array loop will output cards in order, icon matches position via --i
const cardTemplate = `
      <div class="feat-card" style="--i:{{@index}}">
        <div class="feat-icon feat-icon-{{@index}}"></div>
        <h3 class="feat-card-title">{{.title}}</h3>
        <p class="feat-card-desc">{{.desc}}</p>
        <a href="#contact" class="feat-card-link">
          {{.link}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>`

// Generate per-icon CSS so each .feat-icon-N has the right SVG as a mask
const iconCSS = ICON_SVGS.map((svg, i) => {
  // Use inline SVG in pseudo-element via content (workaround for SVG in content)
  // Actually use a data-icon attribute approach - simpler: just hardcode classes
  return `.feat-icon-${i}::after { 
    content: '${i}'; 
    display: none; 
  }`
}).join('\n')

export const featuresIconGrid: ComponentVariant = {
  id: 'features-icon-grid',
  name: 'Features Icon Grid',
  section: 'features',
  description: '6-card grid with icon containers, headings, descriptions, and hover lift effects',
  bestFor: ['saas', 'agency', 'local-service', 'healthcare', 'fitness', 'education', 'nonprofit', 'real-estate', 'beauty', 'ecommerce', 'restaurant', 'portfolio'],
  tags: ['grid', 'cards', 'services', 'features', 'professional'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label (e.g. "What We Offer")', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Exact word(s) to accent in the heading', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 25, description: 'Supporting paragraph', required: true },
    {
      name: 'cards', type: 'array', description: '6 feature/service cards', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 3, description: 'Card title', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Card description', required: true },
        { name: 'link', type: 'cta-text', maxWords: 3, description: 'Link text', required: true },
      ],
    },
  ],
  css: `/* features-icon-grid */
#features {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.feat-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.feat-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.feat-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.feat-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.25rem;
}
.feat-heading .accent-word { color: {{ACCENT}}; }
.feat-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

.feat-grid {
  display: grid; grid-template-columns: 1fr; gap: 1.5rem;
}
@media (min-width: 640px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .feat-grid { grid-template-columns: repeat(3, 1fr); } }

.feat-card {
  background: {{BG_CARD}}; border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 2rem; position: relative; overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s, border-color 0.3s;
}
.feat-card::before {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, color-mix(in srgb, {{PRIMARY}} 5%, transparent), transparent 60%);
  opacity: 0; transition: opacity 0.3s; pointer-events: none;
}
.feat-card:hover { transform: translateY(-6px); box-shadow: 0 20px 48px rgba(0,0,0,0.10); border-color: color-mix(in srgb, {{PRIMARY}} 40%, {{BORDER}}); }
.feat-card:hover::before { opacity: 1; }

.feat-icon {
  width: 52px; height: 52px; border-radius: 14px;
  background: color-mix(in srgb, {{PRIMARY}} 12%, transparent);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem; color: {{PRIMARY}};
  transition: background 0.3s, transform 0.3s;
}
.feat-card:hover .feat-icon { background: {{PRIMARY}}; color: #fff; transform: scale(1.08) rotate(-4deg); }

.feat-card-title {
  font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700;
  color: {{TEXT}}; margin-bottom: 0.625rem; letter-spacing: -0.01em;
}
.feat-card-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; margin-bottom: 1.25rem; }
.feat-card-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.875rem; font-weight: 600; color: {{PRIMARY}};
  text-decoration: none; transition: gap 0.2s;
}
.feat-card-link:hover { gap: 10px; }
`,
  template: `<section id="features">
  <div class="feat-inner">
    <div class="feat-header">
      <span class="feat-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="feat-heading reveal reveal-d1">{{heading}}</h2>
      <p class="feat-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="feat-grid reveal-stagger">
      <div class="feat-card">
        <div class="feat-icon">${ICON_SVGS[0]}</div>
        <h3 class="feat-card-title">{{cards[0].title}}</h3>
        <p class="feat-card-desc">{{cards[0].desc}}</p>
        <a href="#contact" class="feat-card-link">{{cards[0].link}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
      <div class="feat-card">
        <div class="feat-icon">${ICON_SVGS[1]}</div>
        <h3 class="feat-card-title">{{cards[1].title}}</h3>
        <p class="feat-card-desc">{{cards[1].desc}}</p>
        <a href="#contact" class="feat-card-link">{{cards[1].link}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
      <div class="feat-card">
        <div class="feat-icon">${ICON_SVGS[2]}</div>
        <h3 class="feat-card-title">{{cards[2].title}}</h3>
        <p class="feat-card-desc">{{cards[2].desc}}</p>
        <a href="#contact" class="feat-card-link">{{cards[2].link}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
      <div class="feat-card">
        <div class="feat-icon">${ICON_SVGS[3]}</div>
        <h3 class="feat-card-title">{{cards[3].title}}</h3>
        <p class="feat-card-desc">{{cards[3].desc}}</p>
        <a href="#contact" class="feat-card-link">{{cards[3].link}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
      <div class="feat-card">
        <div class="feat-icon">${ICON_SVGS[4]}</div>
        <h3 class="feat-card-title">{{cards[4].title}}</h3>
        <p class="feat-card-desc">{{cards[4].desc}}</p>
        <a href="#contact" class="feat-card-link">{{cards[4].link}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
      <div class="feat-card">
        <div class="feat-icon">${ICON_SVGS[5]}</div>
        <h3 class="feat-card-title">{{cards[5].title}}</h3>
        <p class="feat-card-desc">{{cards[5].desc}}</p>
        <a href="#contact" class="feat-card-link">{{cards[5].link}} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </div>
  </div>
</section>`,
}
