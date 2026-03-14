import type { ComponentVariant } from '../types'

export const heroMosaicGrid: ComponentVariant = {
  id: 'hero-mosaic-grid',
  name: 'Hero Mosaic Image Grid',
  section: 'hero',
  description: 'Split hero with text left and a 2x2 image mosaic grid right — lifestyle, restaurant, beauty, creative',
  bestFor: ['beauty', 'fitness', 'restaurant', 'real-estate', 'lifestyle', 'agency', 'portfolio', 'healthcare'],
  tags: ['mosaic', 'grid', 'lifestyle', 'creative', 'images', 'colorful', 'photo-heavy'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Short label chip', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Bold hero headline', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Words to color in accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Hero subtext', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary button', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary link', required: true },
    { name: 'stat1Value', type: 'stat-value', maxWords: 1, description: 'Stat 1 number', required: true },
    { name: 'stat1Label', type: 'stat-label', maxWords: 2, description: 'Stat 1 label', required: true },
    { name: 'stat2Value', type: 'stat-value', maxWords: 1, description: 'Stat 2 number', required: true },
    { name: 'stat2Label', type: 'stat-label', maxWords: 2, description: 'Stat 2 label', required: true },
    { name: 'stat3Value', type: 'stat-value', maxWords: 1, description: 'Stat 3 number', required: true },
    { name: 'stat3Label', type: 'stat-label', maxWords: 2, description: 'Stat 3 label', required: true },
    { name: 'badge', type: 'text', maxWords: 4, description: 'Image badge overlay text (e.g. "#1 Rated")', required: false },
  ],
  css: `/* hero-mosaic-grid */
#hero-mosaic {
  background: {{BG}};
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: clamp(5rem, 8vw, 7rem) 0;
  overflow: hidden;
  position: relative;
}
/* Soft blob background accent */
.hmo-blob {
  position: absolute;
  width: 500px; height: 500px;
  background: radial-gradient(circle, {{ACCENT}} 0%, transparent 70%);
  opacity: 0.06;
  top: -100px; right: 20%;
  border-radius: 50%;
  pointer-events: none;
}

.hmo-inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3.5rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .hmo-inner { grid-template-columns: 50% 50%; }
}

/* Eyebrow chip */
.hmo-eyebrow {
  display: inline-flex; align-items: center; gap: 6px;
  background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(245,158,11,0.08));
  border: 1px solid rgba(99,102,241,0.18);
  border-radius: 999px;
  padding: 5px 16px;
  font-size: 0.8125rem; font-weight: 700;
  color: {{PRIMARY}};
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
}
.hmo-eyebrow svg { width: 14px; height: 14px; }

.hmo-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: {{TEXT}};
  margin-bottom: 1.25rem;
}
.hmo-h1 .accent-word { color: {{ACCENT}}; }

.hmo-sub {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  color: {{TEXT_SEC}}; line-height: 1.75;
  max-width: 460px; margin-bottom: 2.25rem;
}
.hmo-ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; margin-bottom: 3rem; }
.hmo-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; background: {{PRIMARY}}; color: #fff;
  border-radius: 12px; font-weight: 700; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
}
.hmo-btn-p:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,0.22); }
.hmo-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px; color: {{TEXT}}; font-weight: 600;
  font-size: 0.9375rem; text-decoration: none;
  transition: color 0.2s;
}
.hmo-btn-s:hover { color: {{PRIMARY}}; }
.hmo-btn-s svg { width: 16px; height: 16px; }

/* Stats strip */
.hmo-stats {
  display: flex; gap: 0; border-top: 1px solid {{BORDER}}; padding-top: 2rem;
}
.hmo-stat { flex: 1; padding-right: 1.5rem; }
.hmo-stat:not(:last-child) { border-right: 1px solid {{BORDER}}; margin-right: 1.5rem; }
.hmo-stat-val {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800; letter-spacing: -0.04em;
  color: {{PRIMARY}}; display: block; line-height: 1;
}
.hmo-stat-lbl {
  font-size: 0.8125rem; color: {{TEXT_MUTED}};
  font-weight: 500; margin-top: 4px;
}

/* MOSAIC GRID */
.hmo-mosaic {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 12px;
  position: relative;
}
.hmo-img {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}
.hmo-img img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.hmo-img:hover img { transform: scale(1.05); }

.hmo-img-a {
  grid-row: span 2;
  aspect-ratio: 2/3;
}
.hmo-img-b { aspect-ratio: 4/3; }
.hmo-img-c { aspect-ratio: 4/3; }

/* Badge overlay on top image */
.hmo-img-badge {
  position: absolute;
  bottom: 12px; left: 12px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 0.75rem; font-weight: 800;
  color: {{PRIMARY}};
  border: 1px solid rgba(255,255,255,0.6);
}

/* Floating decoration */
.hmo-deco {
  position: absolute;
  right: -20px; bottom: 30px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, {{ACCENT}}, {{PRIMARY}});
  opacity: 0.15;
  animation: hmo-spin 20s linear infinite;
}
@keyframes hmo-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
`,
  template: `<section id="hero-mosaic">
  <div class="hmo-blob"></div>

  <div class="hmo-inner">
    <!-- Text side -->
    <div>
      <div class="hmo-eyebrow reveal">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        {{eyebrow}}
      </div>
      <h1 class="hmo-h1 reveal reveal-d1">{{heading}}</h1>
      <p class="hmo-sub reveal reveal-d2">{{subtext}}</p>
      <div class="hmo-ctas reveal reveal-d3">
        <a href="#contact" class="hmo-btn-p">
          {{ctaPrimary}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="#features" class="hmo-btn-s">
          {{ctaSecondary}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
      </div>
      <div class="hmo-stats reveal reveal-d4">
        <div class="hmo-stat">
          <span class="hmo-stat-val counter" data-target="{{stat1Value}}">{{stat1Value}}</span>
          <span class="hmo-stat-lbl">{{stat1Label}}</span>
        </div>
        <div class="hmo-stat">
          <span class="hmo-stat-val counter" data-target="{{stat2Value}}">{{stat2Value}}</span>
          <span class="hmo-stat-lbl">{{stat2Label}}</span>
        </div>
        <div class="hmo-stat">
          <span class="hmo-stat-val counter" data-target="{{stat3Value}}">{{stat3Value}}</span>
          <span class="hmo-stat-lbl">{{stat3Label}}</span>
        </div>
      </div>
    </div>

    <!-- Mosaic grid -->
    <div class="hmo-mosaic reveal-right">
      <div class="hmo-img hmo-img-a">
        <img src="{{HERO_IMAGE}}" alt="Featured" width="400" height="600" loading="eager">
        <div class="hmo-img-badge">{{badge}}</div>
      </div>
      <div class="hmo-img hmo-img-b">
        <img src="{{SERVICE_IMAGE_0}}" alt="Gallery 1" width="400" height="300" loading="lazy">
      </div>
      <div class="hmo-img hmo-img-c">
        <img src="{{SERVICE_IMAGE_1}}" alt="Gallery 2" width="400" height="300" loading="lazy">
      </div>
      <div class="hmo-deco"></div>
    </div>
  </div>
</section>`,
}
