import type { ComponentVariant } from '../types'

export const featuresAlternatingRows: ComponentVariant = {
  id: 'features-alternating-rows',
  name: 'Features Alternating Rows',
  section: 'features',
  description: '3 image+text rows alternating sides — enterprise product page style, detailed with checkmark bullets',
  bestFor: ['saas', 'healthcare', 'education', 'nonprofit', 'real-estate', 'agency', 'local-service'],
  tags: ['alternating', 'enterprise', 'image-text', 'detailed', 'professional', 'rows'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'row1Title', type: 'heading', maxWords: 5, description: 'Feature 1 title', required: true },
    { name: 'row1Desc', type: 'text', maxWords: 25, description: 'Feature 1 description', required: true },
    {
      name: 'row1Bullets', type: 'array', description: '3 bullets for feature 1', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 8, description: 'Bullet text', required: true }],
    },
    { name: 'row2Title', type: 'heading', maxWords: 5, description: 'Feature 2 title', required: true },
    { name: 'row2Desc', type: 'text', maxWords: 25, description: 'Feature 2 description', required: true },
    {
      name: 'row2Bullets', type: 'array', description: '3 bullets for feature 2', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 8, description: 'Bullet text', required: true }],
    },
    { name: 'row3Title', type: 'heading', maxWords: 5, description: 'Feature 3 title', required: true },
    { name: 'row3Desc', type: 'text', maxWords: 25, description: 'Feature 3 description', required: true },
    {
      name: 'row3Bullets', type: 'array', description: '3 bullets for feature 3', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [{ name: 'text', type: 'text', maxWords: 8, description: 'Bullet text', required: true }],
    },
  ],
  css: `/* features-alternating-rows */
#features-alt {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.far-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.far-header {
  text-align: center; max-width: 680px;
  margin: 0 auto 5rem;
}
.far-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.far-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
}
.far-heading .accent-word { color: {{ACCENT}}; }

/* Row */
.far-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
  padding-bottom: 5rem;
  border-bottom: 1px solid {{BORDER}};
}
.far-row:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
@media (min-width: 1024px) {
  .far-row { grid-template-columns: 1fr 1fr; gap: 5rem; }
  .far-row.far-reverse .far-img { order: 2; }
  .far-row.far-reverse .far-text { order: 1; }
}

/* Image */
.far-img {
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 16/10;
  box-shadow: 0 20px 48px rgba(0,0,0,0.10);
  position: relative;
}
.far-img img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.7s cubic-bezier(0.4,0,0.2,1);
}
.far-img:hover img { transform: scale(1.04); }
/* Accent corner accent */
.far-img::before {
  content: '';
  position: absolute;
  top: -12px; left: -12px;
  width: 80px; height: 80px;
  background: {{PRIMARY}};
  border-radius: 12px;
  z-index: -1;
  opacity: 0.15;
}

/* Text */
.far-num {
  font-family: var(--font-heading);
  font-size: 4rem; font-weight: 900;
  letter-spacing: -0.06em;
  line-height: 1;
  color: {{PRIMARY}};
  opacity: 0.12;
  margin-bottom: -1.5rem;
  display: block;
}
.far-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 700; letter-spacing: -0.025em;
  color: {{TEXT}}; margin-bottom: 1rem;
}
.far-desc {
  font-size: 1rem; color: {{TEXT_SEC}};
  line-height: 1.75; margin-bottom: 1.5rem;
}
.far-bullets { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
.far-bullet {
  display: flex; align-items: flex-start; gap: 10px;
  font-size: 0.9375rem; color: {{TEXT_SEC}};
}
.far-bullet-check {
  flex-shrink: 0;
  width: 20px; height: 20px; border-radius: 50%;
  background: {{PRIMARY}};
  opacity: 0.12;
  display: flex; align-items: center; justify-content: center;
  margin-top: 2px;
  position: relative;
}
.far-bullet-check::after {
  content: '';
  position: absolute;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: {{PRIMARY}};
  display: flex; align-items: center; justify-content: center;
  opacity: 1;
}
/* Use a real check with SVG inline via the li */
.far-bullet-icon {
  flex-shrink: 0;
  width: 22px; height: 22px; border-radius: 50%;
  background: {{PRIMARY}};
  opacity: 0.12;
  color: {{PRIMARY}};
}
.far-bullet svg { width: 20px; height: 20px; color: {{PRIMARY}}; flex-shrink: 0; margin-top: 2px; }
`,
  template: `<section id="features-alt">
  <div class="far-inner">
    <div class="far-header">
      <span class="far-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="far-heading reveal reveal-d1">{{heading}}</h2>
    </div>

    <!-- Row 1: image left, text right -->
    <div class="far-row">
      <div class="far-img reveal-left">
        <img src="{{SERVICE_IMAGE_0}}" alt="{{row1Title}}" width="640" height="400" loading="lazy">
      </div>
      <div class="reveal-right">
        <span class="far-num">01</span>
        <h3 class="far-title">{{row1Title}}</h3>
        <p class="far-desc">{{row1Desc}}</p>
        <ul class="far-bullets">
          {{#row1Bullets}}
          <li class="far-bullet">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="{{PRIMARY}}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>{{.text}}</span>
          </li>
          {{/row1Bullets}}
        </ul>
      </div>
    </div>

    <!-- Row 2: text left, image right -->
    <div class="far-row far-reverse">
      <div class="far-img reveal-right">
        <img src="{{SERVICE_IMAGE_1}}" alt="{{row2Title}}" width="640" height="400" loading="lazy">
      </div>
      <div class="reveal-left">
        <span class="far-num">02</span>
        <h3 class="far-title">{{row2Title}}</h3>
        <p class="far-desc">{{row2Desc}}</p>
        <ul class="far-bullets">
          {{#row2Bullets}}
          <li class="far-bullet">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="{{PRIMARY}}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>{{.text}}</span>
          </li>
          {{/row2Bullets}}
        </ul>
      </div>
    </div>

    <!-- Row 3: image left, text right -->
    <div class="far-row">
      <div class="far-img reveal-left">
        <img src="{{SERVICE_IMAGE_2}}" alt="{{row3Title}}" width="640" height="400" loading="lazy">
      </div>
      <div class="reveal-right">
        <span class="far-num">03</span>
        <h3 class="far-title">{{row3Title}}</h3>
        <p class="far-desc">{{row3Desc}}</p>
        <ul class="far-bullets">
          {{#row3Bullets}}
          <li class="far-bullet">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="{{PRIMARY}}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>{{.text}}</span>
          </li>
          {{/row3Bullets}}
        </ul>
      </div>
    </div>
  </div>
</section>`,
}
