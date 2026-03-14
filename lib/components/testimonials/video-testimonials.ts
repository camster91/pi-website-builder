import type { ComponentVariant } from '../types'

export const testimonialsVideoTestimonials: ComponentVariant = {
  id: 'testimonials-video',
  name: 'Testimonials Video Grid',
  section: 'testimonials',
  description: '4 video testimonial cards with thumbnail, play overlay, quote preview, name/role — authentic and visual',
  bestFor: ['fitness', 'beauty', 'saas', 'education', 'ecommerce'],
  tags: ['video', 'thumbnails', 'play', 'dark', 'grid', 'visual', 'authentic'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    {
      name: 'videos', type: 'array', description: '4 video testimonials', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 3, description: 'Person name', required: true },
        { name: 'role', type: 'text', maxWords: 5, description: 'Role + company', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Initials for avatar', required: true },
        { name: 'quote', type: 'text', maxWords: 18, description: 'Short quote preview', required: true },
        { name: 'duration', type: 'text', maxWords: 1, description: 'Video duration e.g. 1:24', required: false },
      ],
    },
  ],
  css: `/* testimonials-video */
#testimonials-vt {
  background: #080c14;
  padding: clamp(4rem,8vw,7rem) 0;
}
.tvt-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.tvt-header { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; }
.tvt-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{ACCENT}}; margin-bottom: 0.875rem; }
.tvt-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: #fff; }
.tvt-heading .accent-word { color: {{PRIMARY}}; }
.tvt-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 640px) { .tvt-grid { grid-template-columns: repeat(2,1fr); } }
@media (min-width: 1024px) { .tvt-grid { grid-template-columns: repeat(4,1fr); } }
.tvt-card {
  border-radius: 16px; overflow: hidden;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;
}
.tvt-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(0,0,0,0.4); }
/* Thumbnail */
.tvt-thumb {
  position: relative; aspect-ratio: 9/16; overflow: hidden;
  background: linear-gradient(135deg, #1e293b, #0f172a);
}
.tvt-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.tvt-play {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px;
  background: rgba(0,0,0,0.3);
}
.tvt-play-btn {
  width: 56px; height: 56px; border-radius: 50%;
  background: rgba(255,255,255,0.9);
  display: flex; align-items: center; justify-content: center;
  transition: transform 0.3s;
}
.tvt-card:hover .tvt-play-btn { transform: scale(1.15); }
.tvt-play-btn svg { width: 22px; height: 22px; color: {{PRIMARY}}; margin-left: 3px; }
.tvt-duration {
  background: rgba(0,0,0,0.6); color: rgba(255,255,255,0.85);
  font-size: 0.75rem; font-weight: 600; padding: 3px 10px; border-radius: 999px;
}
/* Initials placeholder */
.tvt-initials-bg {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-heading); font-size: 4rem; font-weight: 900;
  color: rgba(255,255,255,0.15);
}
/* Card content */
.tvt-content { padding: 1.25rem; }
.tvt-quote { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.6; font-style: italic; margin-bottom: 1rem; }
.tvt-person { display: flex; align-items: center; gap: 0.625rem; }
.tvt-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(99,102,241,0.2); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 800; flex-shrink: 0; }
.tvt-pname { font-size: 0.875rem; font-weight: 700; color: #fff; }
.tvt-prole { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
`,
  template: `<section id="testimonials-vt">
  <div class="tvt-inner">
    <div class="tvt-header">
      <span class="tvt-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="tvt-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="tvt-grid reveal-stagger">
      {{#videos}}
      <div class="tvt-card">
        <div class="tvt-thumb">
          <div class="tvt-initials-bg">{{.initials}}</div>
          <div class="tvt-play">
            <div class="tvt-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div>
            <span class="tvt-duration">{{.duration}}</span>
          </div>
        </div>
        <div class="tvt-content">
          <p class="tvt-quote">&ldquo;{{.quote}}&rdquo;</p>
          <div class="tvt-person">
            <div class="tvt-avatar">{{.initials}}</div>
            <div><div class="tvt-pname">{{.name}}</div><div class="tvt-prole">{{.role}}</div></div>
          </div>
        </div>
      </div>
      {{/videos}}
    </div>
  </div>
</section>`,
}
