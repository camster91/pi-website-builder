import type { ComponentVariant } from '../types'

export const heroAnnouncement: ComponentVariant = {
  id: 'hero-announcement',
  name: 'Hero Product Announcement',
  section: 'hero',
  description: 'Product launch/announcement style with version badge, feature highlights, and app screenshot — Y Combinator/PH launch style',
  bestFor: ['saas', 'ecommerce', 'agency', 'nonprofit'],
  tags: ['launch', 'announcement', 'product', 'version', 'startup', 'ph-style'],
  slots: [
    { name: 'newBadge', type: 'eyebrow', maxWords: 3, description: 'Launch badge (e.g. "New — v2.0")', required: true },
    { name: 'heading', type: 'heading', maxWords: 9, description: 'Announcement headline', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Highlighted words', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 24, description: 'Description', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'feature1', type: 'text', maxWords: 4, description: 'New feature 1', required: true },
    { name: 'feature2', type: 'text', maxWords: 4, description: 'New feature 2', required: true },
    { name: 'feature3', type: 'text', maxWords: 4, description: 'New feature 3', required: true },
    { name: 'socialProof', type: 'text', maxWords: 8, description: 'Social proof (e.g. "Join 10k+ users")', required: false },
  ],
  css: `/* hero-announcement */
#hero-announce {
  background: {{BG}};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 7rem 0 5rem;
  position: relative;
  overflow: hidden;
}
/* Subtle grid */
.han-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
}
.han-inner {
  position: relative; z-index: 1;
  max-width: 800px;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
/* Version badge */
.han-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 6px 6px 6px 14px;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 999px;
  font-size: 0.8125rem;
  color: {{TEXT}};
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}
.han-badge-chip {
  background: {{PRIMARY}};
  color: #fff;
  font-size: 0.6875rem; font-weight: 700;
  padding: 4px 10px; border-radius: 999px;
  white-space: nowrap;
}
.han-badge-text { font-weight: 500; color: {{TEXT_SEC}}; }
.han-badge-arrow { color: {{TEXT_MUTED}}; margin-left: 4px; }
.han-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.75rem, 5.5vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.05em;
  line-height: 1.0;
  color: {{TEXT}};
  margin-bottom: 1.5rem;
}
.han-h1 .accent-word { color: {{PRIMARY}}; }
.han-sub {
  font-size: clamp(0.9375rem, 1.5vw, 1.125rem);
  color: {{TEXT_SEC}};
  line-height: 1.75;
  max-width: 560px; margin: 0 auto 2.5rem;
}
.han-ctas {
  display: flex; justify-content: center; gap: 0.875rem; flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.han-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: {{PRIMARY}}; color: #fff;
  border-radius: 10px; font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; border: none;
  box-shadow: 0 4px 16px rgba(99,102,241,0.3);
  transition: all 0.3s;
}
.han-btn-p:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(99,102,241,0.45); }
.han-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: {{BG_CARD}}; color: {{TEXT}};
  border: 1.5px solid {{BORDER}};
  border-radius: 10px; font-weight: 600; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.han-btn-s:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
/* Feature pills */
.han-features {
  display: flex; justify-content: center; gap: 0.625rem;
  flex-wrap: wrap; margin-bottom: 2rem;
}
.han-feature {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 14px;
  background: {{BG_SECTION}};
  border: 1px solid {{BORDER}};
  border-radius: 999px;
  font-size: 0.8125rem; color: {{TEXT_SEC}};
  font-weight: 500;
}
.han-feature svg { width: 13px; height: 13px; color: {{PRIMARY}}; }
/* Social proof */
.han-sp {
  font-size: 0.875rem; color: {{TEXT_MUTED}};
  font-weight: 500;
}
.han-sp strong { color: {{PRIMARY}}; }
/* Screenshot preview card */
.han-preview {
  margin-top: 3rem;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid {{BORDER}};
  box-shadow: 0 24px 64px rgba(0,0,0,0.10);
  aspect-ratio: 16/9;
  max-width: 100%;
}
.han-preview img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
`,
  template: `<section id="hero-announce">
  <div class="han-grid"></div>

  <div class="han-inner">
    <div class="han-badge reveal">
      <span class="han-badge-chip">{{newBadge}}</span>
      <span class="han-badge-text">Read what's new</span>
      <svg class="han-badge-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </div>
    <h1 class="han-h1 reveal reveal-d1">{{heading}}</h1>
    <p class="han-sub reveal reveal-d2">{{subtext}}</p>
    <div class="han-ctas reveal reveal-d3">
      <a href="#contact" class="han-btn-p">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#features" class="han-btn-s">{{ctaSecondary}}</a>
    </div>
    <div class="han-features reveal reveal-d4">
      <span class="han-feature">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{feature1}}
      </span>
      <span class="han-feature">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{feature2}}
      </span>
      <span class="han-feature">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        {{feature3}}
      </span>
    </div>
    <p class="han-sp reveal reveal-d5">{{socialProof}}</p>
    <div class="han-preview reveal">
      <img src="{{SERVICE_IMAGE_0}}" alt="Product preview" width="800" height="450">
    </div>
  </div>
</section>`,
}
