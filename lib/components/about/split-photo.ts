import type { ComponentVariant } from '../types'

export const aboutSplitPhoto: ComponentVariant = {
  id: 'about-split-photo',
  name: 'About Split Photo',
  section: 'about',
  description: 'Photo left with overlapping stat badge, text right with bullets and dual CTAs',
  bestFor: ['healthcare', 'local-service', 'real-estate', 'beauty', 'education', 'restaurant', 'fitness', 'nonprofit', 'agency', 'saas', 'ecommerce', 'portfolio'],
  tags: ['professional', 'trust', 'story', 'image'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label (e.g. "About Us")', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word in heading', required: true },
    { name: 'body', type: 'text', maxWords: 50, description: 'Main about text', required: true },
    {
      name: 'bullets', type: 'array', description: '3 checkmark bullet points', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 10, description: 'Bullet point text', required: true }],
    },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary button text', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary button text', required: true },
    { name: 'badgeValue', type: 'stat-value', maxWords: 1, description: 'Floating stat number (e.g. 15+)', required: true },
    { name: 'badgeLabel', type: 'stat-label', maxWords: 3, description: 'Floating stat label', required: true },
    { name: 'badgeSubtext', type: 'text', maxWords: 3, description: 'Floating stat subtext', required: false },
  ],
  css: `/* about-split-photo */
#about {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
  overflow: hidden;
}
.about-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .about-inner { grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 5rem); }
}

/* Photo side */
.about-visual { position: relative; order: 0; }
@media (min-width: 1024px) { .about-visual { order: 0; } }

.about-img-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: 0 24px 48px rgba(0,0,0,0.12);
}
@media (min-width: 1024px) { .about-img-wrap { aspect-ratio: 3/4; } }

.about-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.8s cubic-bezier(0.4,0,0.2,1);
}
.about-img-wrap:hover img { transform: scale(1.04); }

/* Floating stat badge */
.about-badge {
  position: absolute;
  bottom: -16px;
  right: -16px;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 18px;
  padding: 18px 24px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
  animation: float-y-slow 7s ease-in-out infinite;
  z-index: 2;
  min-width: 140px;
}
@keyframes float-y-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
.about-badge-value {
  font-family: var(--font-heading);
  font-size: 2rem; font-weight: 800;
  color: {{PRIMARY}}; line-height: 1;
  display: block;
}
.about-badge-label {
  font-size: 0.75rem; font-weight: 600;
  color: {{TEXT_MUTED}}; text-transform: uppercase;
  letter-spacing: 0.08em; margin-top: 4px;
}
.about-badge-sub {
  font-size: 0.6875rem; color: {{TEXT_MUTED}}; margin-top: 2px;
}

/* Decorative background shape */
.about-bg-shape {
  position: absolute;
  top: 10%;
  left: -8%;
  width: 80%;
  height: 80%;
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  background: color-mix(in srgb, {{PRIMARY}} 8%, transparent);
  z-index: -1;
  pointer-events: none;
}

/* Text side */
.about-text { order: 1; }

.about-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.about-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1;
  color: {{TEXT}}; margin-bottom: 1.25rem;
}
.about-heading .accent-word { color: {{ACCENT}}; }
.about-body {
  font-size: 1.0625rem; color: {{TEXT_SEC}};
  line-height: 1.75; margin-bottom: 2rem;
}
.about-bullets { list-style: none; margin-bottom: 2.5rem; display: flex; flex-direction: column; gap: 0.875rem; }
.about-bullet {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 1rem; color: {{TEXT_SEC}};
}
.about-bullet-icon {
  flex-shrink: 0;
  width: 24px; height: 24px;
  background: color-mix(in srgb, {{PRIMARY}} 12%, transparent);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: {{PRIMARY}}; margin-top: 1px;
}
.about-bullet-icon svg { width: 14px; height: 14px; }
.about-ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.about-btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: {{PRIMARY}}; color: #fff;
  border: 2px solid {{PRIMARY}}; border-radius: 12px;
  font-weight: 600; font-size: 0.9375rem; cursor: pointer;
  text-decoration: none; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.about-btn-primary:hover { background: {{PRIMARY_DARK}}; border-color: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
.about-btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: transparent; color: {{TEXT}};
  border: 2px solid {{BORDER}}; border-radius: 12px;
  font-weight: 600; font-size: 0.9375rem; cursor: pointer;
  text-decoration: none; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.about-btn-secondary:hover { border-color: {{TEXT}}; transform: translateY(-2px); }
`,
  template: `<section id="about">
  <div class="about-inner">
    <!-- Image side -->
    <div class="about-visual reveal-left">
      <div class="about-bg-shape"></div>
      <div class="about-img-wrap">
        <img src="{{ABOUT_IMAGE}}" alt="About us" loading="lazy" width="600" height="800">
      </div>
      <div class="about-badge">
        <span class="about-badge-value counter" data-target="{{badgeValue}}">{{badgeValue}}</span>
        <span class="about-badge-label">{{badgeLabel}}</span>
        <span class="about-badge-sub">{{badgeSubtext}}</span>
      </div>
    </div>

    <!-- Text side -->
    <div class="about-text">
      <span class="about-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="about-heading reveal reveal-d1">{{heading}}</h2>
      <p class="about-body reveal reveal-d2">{{body}}</p>
      <ul class="about-bullets reveal-stagger">
        {{#bullets}}
        <li class="about-bullet">
          <span class="about-bullet-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </span>
          <span>{{.text}}</span>
        </li>
        {{/bullets}}
      </ul>
      <div class="about-ctas reveal reveal-d4">
        <a href="#contact" class="about-btn-primary">{{ctaPrimary}}</a>
        <a href="#features" class="about-btn-secondary">{{ctaSecondary}}</a>
      </div>
    </div>
  </div>
</section>`,
}
