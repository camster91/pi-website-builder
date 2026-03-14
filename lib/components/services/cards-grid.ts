import type { ComponentVariant } from '../types'

export const servicesCardsGrid: ComponentVariant = {
  id: 'services-cards',
  name: 'Services Cards Grid',
  section: 'services' as any,
  description: 'Service offering cards with icon, title, description, price/scope indicator, and CTA link — for service businesses',
  bestFor: ['local-service', 'agency', 'healthcare', 'fitness', 'beauty', 'real-estate', 'nonprofit'],
  tags: ['services', 'offerings', 'local-service', 'cards', 'icon', 'business'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Section subtext', required: true },
    {
      name: 'services', type: 'array', description: '6 services', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 3, description: 'Service name', required: true },
        { name: 'desc', type: 'text', maxWords: 20, description: 'Service description', required: true },
        { name: 'scope', type: 'text', maxWords: 4, description: 'Price range or scope (e.g. "From $299")', required: false },
      ],
    },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'Bottom CTA text', required: true },
  ],
  css: `/* services-cards */
#services {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.svc-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.svc-header { text-align: center; max-width: 680px; margin: 0 auto 4rem; }
.svc-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.svc-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.svc-heading .accent-word { color: {{ACCENT}}; }
.svc-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
.svc-grid {
  display: grid; grid-template-columns: 1fr;
  gap: 1.25rem; margin-bottom: 3rem;
}
@media (min-width: 640px) { .svc-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .svc-grid { grid-template-columns: repeat(3, 1fr); } }
.svc-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px; padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  position: relative;
}
.svc-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.09); border-color: {{PRIMARY}}; }
/* Numbered badge */
.svc-num {
  position: absolute; top: 1.25rem; right: 1.25rem;
  width: 28px; height: 28px; border-radius: 8px;
  background: {{BG_SECTION}};
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800; color: {{TEXT_MUTED}};
}
.svc-icon {
  width: 52px; height: 52px; border-radius: 14px;
  background: rgba(99,102,241,0.1);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 1.25rem;
  color: {{PRIMARY}};
}
.svc-card:nth-child(2n) .svc-icon { background: rgba(245,158,11,0.1); color: {{ACCENT}}; }
.svc-card:nth-child(3n) .svc-icon { background: rgba(139,92,246,0.1); color: #8b5cf6; }
.svc-icon svg { width: 26px; height: 26px; }
.svc-title { font-family: var(--font-heading); font-size: 1.125rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.625rem; letter-spacing: -0.01em; }
.svc-desc { font-size: 0.9375rem; color: {{TEXT_SEC}}; line-height: 1.65; margin-bottom: 1.25rem; }
.svc-scope {
  display: inline-flex; align-items: center;
  font-size: 0.8125rem; font-weight: 700; color: {{PRIMARY}};
  padding: 4px 12px; background: rgba(99,102,241,0.08);
  border-radius: 999px;
}
/* Bottom CTA */
.svc-footer { text-align: center; }
.svc-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 32px; background: {{PRIMARY}}; color: #fff;
  border-radius: 12px; font-weight: 700; font-size: 1rem;
  text-decoration: none; transition: all 0.3s;
}
.svc-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
`,
  template: `<section id="services">
  <div class="svc-inner">
    <div class="svc-header">
      <span class="svc-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="svc-heading reveal reveal-d1">{{heading}}</h2>
      <p class="svc-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="svc-grid reveal-stagger">
      <div class="svc-card">
        <span class="svc-num">01</span>
        <div class="svc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
        <h3 class="svc-title">{{services[0].title}}</h3>
        <p class="svc-desc">{{services[0].desc}}</p>
        <span class="svc-scope">{{services[0].scope}}</span>
      </div>
      <div class="svc-card">
        <span class="svc-num">02</span>
        <div class="svc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h3 class="svc-title">{{services[1].title}}</h3>
        <p class="svc-desc">{{services[1].desc}}</p>
        <span class="svc-scope">{{services[1].scope}}</span>
      </div>
      <div class="svc-card">
        <span class="svc-num">03</span>
        <div class="svc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        <h3 class="svc-title">{{services[2].title}}</h3>
        <p class="svc-desc">{{services[2].desc}}</p>
        <span class="svc-scope">{{services[2].scope}}</span>
      </div>
      <div class="svc-card">
        <span class="svc-num">04</span>
        <div class="svc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg></div>
        <h3 class="svc-title">{{services[3].title}}</h3>
        <p class="svc-desc">{{services[3].desc}}</p>
        <span class="svc-scope">{{services[3].scope}}</span>
      </div>
      <div class="svc-card">
        <span class="svc-num">05</span>
        <div class="svc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3 class="svc-title">{{services[4].title}}</h3>
        <p class="svc-desc">{{services[4].desc}}</p>
        <span class="svc-scope">{{services[4].scope}}</span>
      </div>
      <div class="svc-card">
        <span class="svc-num">06</span>
        <div class="svc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></div>
        <h3 class="svc-title">{{services[5].title}}</h3>
        <p class="svc-desc">{{services[5].desc}}</p>
        <span class="svc-scope">{{services[5].scope}}</span>
      </div>
    </div>
    <div class="svc-footer reveal">
      <a href="#contact" class="svc-cta">
        {{ctaText}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
  </div>
</section>`,
}
