import type { ComponentVariant } from '../types'

export const aboutFounderSpotlight: ComponentVariant = {
  id: 'about-founder',
  name: 'About Founder Spotlight',
  section: 'about',
  description: 'Founder/owner featured photo with extended bio, signature quote, and 3 founder values — personal trust builder',
  bestFor: ['local-service', 'restaurant', 'fitness', 'beauty', 'healthcare', 'real-estate', 'agency'],
  tags: ['founder', 'personal', 'trust', 'story', 'bio', 'human', 'local'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'founderName', type: 'text', maxWords: 3, description: 'Founder full name', required: true },
    { name: 'founderTitle', type: 'text', maxWords: 5, description: 'Founder title/role', required: true },
    { name: 'founderInitials', type: 'text', maxWords: 1, description: '2-char initials', required: true },
    { name: 'bio', type: 'text', maxWords: 80, description: 'Full founder bio (2-3 paragraphs)', required: true },
    { name: 'signatureQuote', type: 'text', maxWords: 30, description: 'A memorable quote from the founder', required: true },
    { name: 'value1', type: 'text', maxWords: 3, description: 'Founder value 1', required: true },
    { name: 'value2', type: 'text', maxWords: 3, description: 'Founder value 2', required: true },
    { name: 'value3', type: 'text', maxWords: 3, description: 'Founder value 3', required: true },
    { name: 'yearsExperience', type: 'stat-value', maxWords: 1, description: 'Years in business', required: true },
  ],
  css: `/* about-founder */
#about-founder {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.afs-inner {
  max-width: 1200px; margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid; grid-template-columns: 1fr;
  gap: 4rem; align-items: start;
}
@media (min-width: 1024px) { .afs-inner { grid-template-columns: 42% 1fr; } }
/* Left photo */
.afs-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.afs-photo {
  border-radius: 24px; overflow: hidden;
  aspect-ratio: 4/5;
  background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}});
  position: relative; margin-bottom: 1.5rem;
}
.afs-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.afs-initials {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-heading); font-size: 5rem; font-weight: 900;
  color: rgba(255,255,255,0.4);
}
/* Photo caption */
.afs-name-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 14px; padding: 1.25rem;
}
.afs-founder-name { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 800; color: {{TEXT}}; margin-bottom: 4px; }
.afs-founder-title { font-size: 0.875rem; color: {{PRIMARY}}; font-weight: 600; margin-bottom: 0.875rem; }
.afs-values { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.afs-value {
  font-size: 0.75rem; font-weight: 600;
  padding: 4px 10px;
  background: rgba(99,102,241,0.08); color: {{PRIMARY}};
  border-radius: 999px;
}
/* Right bio */
.afs-heading { font-family: var(--font-heading); font-size: clamp(1.75rem, 3vw, 2.5rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1.5rem; }
.afs-bio { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.8; margin-bottom: 2rem; }
.afs-quote {
  border-left: 4px solid {{PRIMARY}};
  padding: 1.25rem 1.5rem;
  background: {{BG_CARD}};
  border-radius: 0 12px 12px 0;
  margin-bottom: 2.5rem;
}
.afs-quote-text { font-size: 1.0625rem; font-style: italic; color: {{TEXT}}; line-height: 1.65; font-weight: 500; }
/* Years badge */
.afs-years {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 12px 20px;
  background: {{PRIMARY}};
  border-radius: 12px;
  color: #fff;
}
.afs-years-num { font-family: var(--font-heading); font-size: 2rem; font-weight: 900; line-height: 1; }
.afs-years-label { font-size: 0.875rem; font-weight: 600; opacity: 0.85; }
`,
  template: `<section id="about-founder">
  <div class="afs-inner">
    <div>
      <span class="afs-eyebrow reveal">{{eyebrow}}</span>
      <div class="afs-photo reveal">
        <img src="{{ABOUT_IMAGE}}" alt="{{founderName}}" width="480" height="600" loading="lazy" onerror="this.style.display='none'">
        <div class="afs-initials">{{founderInitials}}</div>
      </div>
      <div class="afs-name-card reveal reveal-d2">
        <div class="afs-founder-name">{{founderName}}</div>
        <div class="afs-founder-title">{{founderTitle}}</div>
        <div class="afs-values">
          <span class="afs-value">{{value1}}</span>
          <span class="afs-value">{{value2}}</span>
          <span class="afs-value">{{value3}}</span>
        </div>
      </div>
    </div>
    <div>
      <h2 class="afs-heading reveal">{{heading}}</h2>
      <p class="afs-bio reveal reveal-d1">{{bio}}</p>
      <div class="afs-quote reveal reveal-d2">
        <p class="afs-quote-text">{{signatureQuote}}</p>
      </div>
      <div class="afs-years reveal reveal-d3">
        <span class="afs-years-num counter" data-target="{{yearsExperience}}">{{yearsExperience}}</span>
        <span class="afs-years-label">Years of<br>Experience</span>
      </div>
    </div>
  </div>
</section>`,
}
