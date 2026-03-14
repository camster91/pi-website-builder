import type { ComponentVariant } from '../types'

export const portfolioProjectGrid: ComponentVariant = {
  id: 'portfolio-project-grid',
  name: 'Portfolio Project Grid',
  section: 'portfolio' as any,
  description: '3-col project cards with hover overlay showing category, title, description, and link',
  bestFor: ['agency', 'portfolio', 'saas', 'ecommerce', 'restaurant', 'beauty', 'real-estate'],
  tags: ['portfolio', 'work', 'projects', 'gallery', 'showcase', 'creative', 'hover-overlay'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Section subtext', required: true },
    {
      name: 'projects', type: 'array', description: '6 portfolio projects', required: true,
      minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 4, description: 'Project title', required: true },
        { name: 'category', type: 'text', maxWords: 2, description: 'Project category', required: true },
        { name: 'desc', type: 'text', maxWords: 12, description: 'Project brief', required: true },
      ],
    },
  ],
  css: `/* portfolio-project-grid */
#portfolio {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.pf-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.pf-header {
  text-align: center; max-width: 680px;
  margin: 0 auto 4rem;
}
.pf-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.pf-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.pf-heading .accent-word { color: {{ACCENT}}; }
.pf-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

/* Grid */
.pf-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 640px) { .pf-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .pf-grid { grid-template-columns: repeat(3, 1fr); } }

/* Cards */
.pf-card {
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4/3;
  position: relative;
  cursor: pointer;
  background: {{BG_SECTION}};
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
}
.pf-card-img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
/* Permanent soft gradient at bottom for category */
.pf-card::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
  z-index: 1;
  transition: opacity 0.3s;
}
/* Full overlay on hover */
.pf-card-overlay {
  position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7));
  display: flex; flex-direction: column;
  justify-content: center; align-items: flex-start;
  padding: 1.75rem;
  opacity: 0;
  transition: opacity 0.35s cubic-bezier(0.4,0,0.2,1);
}
.pf-card:hover .pf-card-overlay { opacity: 1; }
.pf-card:hover .pf-card-img { transform: scale(1.08); }
.pf-card:hover::before { opacity: 0; }

/* Always-visible category strip at bottom */
.pf-card-bottom {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  z-index: 3;
  padding: 0.875rem 1.25rem;
  display: flex; align-items: center; justify-content: space-between;
  transition: opacity 0.3s;
}
.pf-card:hover .pf-card-bottom { opacity: 0; }

.pf-cat-pill {
  display: inline-flex; align-items: center;
  padding: 4px 12px;
  background: {{ACCENT}};
  color: #fff; font-size: 0.75rem; font-weight: 700;
  border-radius: 999px;
  letter-spacing: 0.04em;
}
.pf-card-title-sm {
  font-size: 0.875rem; font-weight: 700; color: #fff;
}

/* Overlay content */
.pf-ov-cat {
  display: inline-flex; align-items: center;
  padding: 3px 12px;
  background: {{PRIMARY}};
  color: #fff; font-size: 0.6875rem; font-weight: 700;
  border-radius: 999px; margin-bottom: 0.875rem;
  text-transform: uppercase; letter-spacing: 0.08em;
}
.pf-ov-title {
  font-family: var(--font-heading);
  font-size: 1.25rem; font-weight: 800;
  color: #fff; line-height: 1.2; margin-bottom: 0.625rem;
  letter-spacing: -0.02em;
}
.pf-ov-desc {
  font-size: 0.875rem; color: rgba(255,255,255,0.75);
  line-height: 1.55; margin-bottom: 1.25rem;
}
.pf-ov-link {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.875rem; font-weight: 700; color: {{ACCENT}};
  text-decoration: none;
  transition: gap 0.2s;
}
.pf-ov-link:hover { gap: 10px; }
.pf-ov-link svg { width: 16px; height: 16px; }

/* Image fallback gradients for cards that have no image */
.pf-img-fallback-0 { background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}}); }
.pf-img-fallback-1 { background: linear-gradient(135deg, {{ACCENT}}, #f97316); }
.pf-img-fallback-2 { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
.pf-img-fallback-3 { background: linear-gradient(135deg, #06b6d4, #0891b2); }
.pf-img-fallback-4 { background: linear-gradient(135deg, {{PRIMARY}}, #8b5cf6); }
.pf-img-fallback-5 { background: linear-gradient(135deg, #f43f5e, #e11d48); }
`,
  template: `<section id="portfolio">
  <div class="pf-inner">
    <div class="pf-header">
      <span class="pf-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="pf-heading reveal reveal-d1">{{heading}}</h2>
      <p class="pf-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="pf-grid reveal-stagger">
      <div class="pf-card">
        <img class="pf-card-img" src="{{SERVICE_IMAGE_0}}" alt="{{projects[0].title}}" width="480" height="360" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('pf-img-fallback-0')">
        <div class="pf-card-bottom">
          <span class="pf-cat-pill">{{projects[0].category}}</span>
          <span class="pf-card-title-sm">{{projects[0].title}}</span>
        </div>
        <div class="pf-card-overlay">
          <span class="pf-ov-cat">{{projects[0].category}}</span>
          <h3 class="pf-ov-title">{{projects[0].title}}</h3>
          <p class="pf-ov-desc">{{projects[0].desc}}</p>
          <a href="#contact" class="pf-ov-link">View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div>
      <div class="pf-card">
        <img class="pf-card-img" src="{{SERVICE_IMAGE_1}}" alt="{{projects[1].title}}" width="480" height="360" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('pf-img-fallback-1')">
        <div class="pf-card-bottom">
          <span class="pf-cat-pill">{{projects[1].category}}</span>
          <span class="pf-card-title-sm">{{projects[1].title}}</span>
        </div>
        <div class="pf-card-overlay">
          <span class="pf-ov-cat">{{projects[1].category}}</span>
          <h3 class="pf-ov-title">{{projects[1].title}}</h3>
          <p class="pf-ov-desc">{{projects[1].desc}}</p>
          <a href="#contact" class="pf-ov-link">View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div>
      <div class="pf-card">
        <img class="pf-card-img" src="{{SERVICE_IMAGE_2}}" alt="{{projects[2].title}}" width="480" height="360" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('pf-img-fallback-2')">
        <div class="pf-card-bottom">
          <span class="pf-cat-pill">{{projects[2].category}}</span>
          <span class="pf-card-title-sm">{{projects[2].title}}</span>
        </div>
        <div class="pf-card-overlay">
          <span class="pf-ov-cat">{{projects[2].category}}</span>
          <h3 class="pf-ov-title">{{projects[2].title}}</h3>
          <p class="pf-ov-desc">{{projects[2].desc}}</p>
          <a href="#contact" class="pf-ov-link">View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div>
      <div class="pf-card pf-img-fallback-3">
        <div class="pf-card-bottom">
          <span class="pf-cat-pill">{{projects[3].category}}</span>
          <span class="pf-card-title-sm">{{projects[3].title}}</span>
        </div>
        <div class="pf-card-overlay">
          <span class="pf-ov-cat">{{projects[3].category}}</span>
          <h3 class="pf-ov-title">{{projects[3].title}}</h3>
          <p class="pf-ov-desc">{{projects[3].desc}}</p>
          <a href="#contact" class="pf-ov-link">View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div>
      <div class="pf-card pf-img-fallback-4">
        <div class="pf-card-bottom">
          <span class="pf-cat-pill">{{projects[4].category}}</span>
          <span class="pf-card-title-sm">{{projects[4].title}}</span>
        </div>
        <div class="pf-card-overlay">
          <span class="pf-ov-cat">{{projects[4].category}}</span>
          <h3 class="pf-ov-title">{{projects[4].title}}</h3>
          <p class="pf-ov-desc">{{projects[4].desc}}</p>
          <a href="#contact" class="pf-ov-link">View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div>
      <div class="pf-card pf-img-fallback-5">
        <div class="pf-card-bottom">
          <span class="pf-cat-pill">{{projects[5].category}}</span>
          <span class="pf-card-title-sm">{{projects[5].title}}</span>
        </div>
        <div class="pf-card-overlay">
          <span class="pf-ov-cat">{{projects[5].category}}</span>
          <h3 class="pf-ov-title">{{projects[5].title}}</h3>
          <p class="pf-ov-desc">{{projects[5].desc}}</p>
          <a href="#contact" class="pf-ov-link">View Project <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
        </div>
      </div>
    </div>
  </div>
</section>`,
}
