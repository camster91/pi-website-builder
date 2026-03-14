import type { ComponentVariant } from '../types'

export const videoFeatureShowcase: ComponentVariant = {
  id: 'video-showcase',
  name: 'Video Feature Showcase',
  section: 'video' as any,
  description: 'Large video embed/placeholder with play button, video caption, and supporting text — demo or explainer video section',
  bestFor: ['saas', 'agency', 'education', 'nonprofit', 'fitness'],
  tags: ['video', 'demo', 'explainer', 'media', 'showcase', 'youtube'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Description', required: true },
    { name: 'videoCaption', type: 'text', maxWords: 8, description: 'Caption below video', required: false },
    { name: 'duration', type: 'text', maxWords: 2, description: 'Video duration (e.g. "3 min")', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button text', required: true },
  ],
  css: `/* video-showcase */
#video {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.vs-inner { max-width: 1100px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.vs-header { text-align: center; max-width: 680px; margin: 0 auto 3.5rem; }
.vs-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.vs-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; margin-bottom: 1rem; }
.vs-heading .accent-word { color: {{ACCENT}}; }
.vs-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; margin-bottom: 2rem; }
/* Video wrapper */
.vs-video-wrap {
  position: relative;
  border-radius: 20px; overflow: hidden;
  aspect-ratio: 16/9;
  background: #0a0f1e;
  border: 1px solid {{BORDER}};
  box-shadow: 0 24px 64px rgba(0,0,0,0.14);
  cursor: pointer;
  margin-bottom: 1.5rem;
}
.vs-thumbnail {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transition: transform 0.4s, opacity 0.4s;
}
.vs-video-wrap:hover .vs-thumbnail { transform: scale(1.03); opacity: 0.85; }
/* Play button overlay */
.vs-play {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  flex-direction: column; gap: 1rem;
}
.vs-play-btn {
  width: 80px; height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}
.vs-video-wrap:hover .vs-play-btn { transform: scale(1.12); box-shadow: 0 12px 40px rgba(0,0,0,0.4); }
.vs-play-btn svg { width: 32px; height: 32px; color: {{PRIMARY}}; margin-left: 4px; }
.vs-duration {
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  color: rgba(255,255,255,0.9);
  font-size: 0.8125rem; font-weight: 600;
  padding: 4px 14px; border-radius: 999px;
}
/* Caption */
.vs-caption {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  font-size: 0.875rem; color: {{TEXT_MUTED}};
  margin-bottom: 2.5rem;
}
.vs-caption svg { width: 14px; height: 14px; color: {{PRIMARY}}; }
/* CTA */
.vs-cta-row { text-align: center; }
.vs-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: {{PRIMARY}}; color: #fff;
  border-radius: 10px; font-weight: 700;
  text-decoration: none; transition: all 0.3s;
}
.vs-cta:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.18); }
`,
  template: `<section id="video">
  <div class="vs-inner">
    <div class="vs-header">
      <span class="vs-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="vs-heading reveal reveal-d1">{{heading}}</h2>
      <p class="vs-sub reveal reveal-d2">{{subtext}}</p>
    </div>
    <div class="vs-video-wrap reveal">
      <img class="vs-thumbnail" src="{{SERVICE_IMAGE_0}}" alt="Video thumbnail" width="1100" height="619">
      <div class="vs-play">
        <div class="vs-play-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        </div>
        <span class="vs-duration">{{duration}}</span>
      </div>
    </div>
    <div class="vs-caption reveal">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
      {{videoCaption}}
    </div>
    <div class="vs-cta-row reveal">
      <a href="#contact" class="vs-cta">
        {{ctaText}}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
  </div>
</section>`,
}
