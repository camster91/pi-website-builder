import type { ComponentVariant } from '../types'

export const galleryPhotoMasonry: ComponentVariant = {
  id: 'gallery-masonry',
  name: 'Gallery Photo Masonry',
  section: 'gallery' as any,
  description: 'CSS column-count masonry photo gallery — restaurants, beauty, fitness, portfolio, real-estate',
  bestFor: ['restaurant', 'beauty', 'fitness', 'portfolio', 'real-estate', 'agency', 'ecommerce'],
  tags: ['gallery', 'masonry', 'photos', 'visual', 'images', 'portfolio', 'lifestyle'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Gallery heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Gallery description', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA below gallery', required: true },
  ],
  css: `/* gallery-masonry */
#gallery {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.gpm-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.gpm-header { text-align: center; max-width: 680px; margin: 0 auto 3.5rem; }
.gpm-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.gpm-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.gpm-heading .accent-word { color: {{ACCENT}}; }
.gpm-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }
/* Masonry grid */
.gpm-grid { column-count: 2; column-gap: 12px; margin-bottom: 3rem; }
@media (min-width: 768px) { .gpm-grid { column-count: 3; } }
@media (min-width: 1200px) { .gpm-grid { column-count: 4; } }
.gpm-item {
  break-inside: avoid; margin-bottom: 12px;
  border-radius: 12px; overflow: hidden;
  display: block; position: relative;
  background: {{BG_CARD}};
}
.gpm-item:nth-child(3n+1) { aspect-ratio: 3/4; }
.gpm-item:nth-child(3n+2) { aspect-ratio: 1/1; }
.gpm-item:nth-child(3n+3) { aspect-ratio: 4/3; }
.gpm-item img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.gpm-item:hover img { transform: scale(1.06); }
/* Overlay on hover */
.gpm-item-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%);
  opacity: 0; transition: opacity 0.3s;
}
.gpm-item:hover .gpm-item-overlay { opacity: 1; }
/* Fallback gradient for items without images */
.gpm-fallback-1 { background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}}); }
.gpm-fallback-2 { background: linear-gradient(135deg, {{ACCENT}}, #f97316); }
.gpm-fallback-3 { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
.gpm-fallback-4 { background: linear-gradient(135deg, #06b6d4, #0891b2); }
.gpm-fallback-5 { background: linear-gradient(135deg, #f43f5e, #e11d48); }
.gpm-fallback-6 { background: linear-gradient(135deg, #10b981, #059669); }
/* Footer */
.gpm-footer { text-align: center; }
.gpm-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; border: 2px solid {{BORDER}};
  color: {{TEXT}}; border-radius: 12px;
  font-weight: 700; font-size: 0.9375rem;
  text-decoration: none; transition: all 0.3s;
}
.gpm-cta:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; transform: translateY(-2px); }
`,
  template: `<section id="gallery">
  <div class="gpm-inner">
    <div class="gpm-header">
      <span class="gpm-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="gpm-heading reveal reveal-d1">{{heading}}</h2>
      <p class="gpm-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="gpm-grid reveal">
      <div class="gpm-item"><img src="{{HERO_IMAGE}}" alt="Gallery 1" loading="lazy"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item"><img src="{{SERVICE_IMAGE_0}}" alt="Gallery 2" loading="lazy"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item"><img src="{{SERVICE_IMAGE_1}}" alt="Gallery 3" loading="lazy"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item"><img src="{{SERVICE_IMAGE_2}}" alt="Gallery 4" loading="lazy"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item gpm-fallback-1"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item gpm-fallback-2"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item gpm-fallback-3"><div class="gpm-item-overlay"></div></div>
      <div class="gpm-item gpm-fallback-4"><div class="gpm-item-overlay"></div></div>
    </div>
    <div class="gpm-footer reveal">
      <a href="#contact" class="gpm-cta">
        {{ctaText}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
  </div>
</section>`,
}
