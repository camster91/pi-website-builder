import type { ComponentVariant } from '../types'

export const testimonialsFeaturedQuote: ComponentVariant = {
  id: 'testimonials-featured',
  name: 'Testimonials Featured Quote',
  section: 'testimonials',
  description: 'Single large editorial quote, centered with giant decorative quotation mark — authoritative and premium',
  bestFor: ['saas', 'agency', 'healthcare', 'education', 'nonprofit', 'real-estate'],
  tags: ['featured', 'editorial', 'single', 'authority', 'large-quote', 'centered'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'mainQuote', type: 'text', maxWords: 55, description: 'The main testimonial quote', required: true },
    { name: 'mainName', type: 'text', maxWords: 3, description: 'Author name', required: true },
    { name: 'mainRole', type: 'text', maxWords: 5, description: 'Author role + company', required: true },
    { name: 'mainInitials', type: 'text', maxWords: 1, description: '2-char initials', required: true },
    { name: 'quote2', type: 'text', maxWords: 30, description: 'Secondary quote 1', required: true },
    { name: 'name2', type: 'text', maxWords: 3, description: 'Name 2', required: true },
    { name: 'role2', type: 'text', maxWords: 4, description: 'Role 2', required: true },
    { name: 'initials2', type: 'text', maxWords: 1, description: 'Initials 2', required: true },
    { name: 'quote3', type: 'text', maxWords: 30, description: 'Secondary quote 2', required: true },
    { name: 'name3', type: 'text', maxWords: 3, description: 'Name 3', required: true },
    { name: 'role3', type: 'text', maxWords: 4, description: 'Role 3', required: true },
    { name: 'initials3', type: 'text', maxWords: 1, description: 'Initials 3', required: true },
  ],
  css: `/* testimonials-featured */
#testimonials-fq {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
  overflow: hidden;
}
.tfe-inner { max-width: 1100px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.tfe-eyebrow {
  display: block; text-align: center;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 2.5rem;
}
/* Main quote */
.tfe-main {
  position: relative;
  text-align: center;
  max-width: 860px; margin: 0 auto 4rem;
  padding: 3rem;
  background: {{BG_SECTION}};
  border-radius: 24px;
  border: 1px solid {{BORDER}};
}
.tfe-quote-mark {
  position: absolute;
  top: -0.5rem; left: 2rem;
  font-family: Georgia, serif;
  font-size: 8rem; line-height: 1;
  color: {{PRIMARY}}; opacity: 0.12;
  pointer-events: none; user-select: none;
}
.tfe-quote-text {
  font-size: clamp(1.25rem, 2.5vw, 1.875rem);
  font-style: italic;
  color: {{TEXT}};
  line-height: 1.55;
  font-weight: 500;
  position: relative; z-index: 1;
  margin-bottom: 2rem;
}
.tfe-author {
  display: flex; align-items: center; justify-content: center; gap: 1rem;
}
.tfe-avatar {
  width: 48px; height: 48px; border-radius: 50%;
  background: {{PRIMARY}};
  opacity: 0.15;
  position: relative;
}
.tfe-avatar-inner {
  position: absolute; inset: 0; border-radius: 50%;
  background: rgba(99,102,241,0.15);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.875rem; font-weight: 800; color: {{PRIMARY}};
}
.tfe-name { font-weight: 700; color: {{TEXT}}; }
.tfe-role { font-size: 0.875rem; color: {{TEXT_MUTED}}; }
/* Stars */
.tfe-stars { display: flex; justify-content: center; gap: 3px; margin-bottom: 1.5rem; color: {{ACCENT}}; }
.tfe-stars svg { width: 18px; height: 18px; }
/* Secondary quotes */
.tfe-secondary {
  display: grid; grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 768px) { .tfe-secondary { grid-template-columns: repeat(2, 1fr); } }
.tfe-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 16px; padding: 1.5rem;
}
.tfe-card-quote {
  font-size: 0.9375rem; color: {{TEXT_SEC}};
  line-height: 1.7; margin-bottom: 1.25rem;
  font-style: italic;
}
.tfe-card-author { display: flex; align-items: center; gap: 0.75rem; }
.tfe-card-av {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 800;
}
.tfe-card:nth-child(1) .tfe-card-av { background: rgba(99,102,241,0.1); color: {{PRIMARY}}; }
.tfe-card:nth-child(2) .tfe-card-av { background: rgba(245,158,11,0.1); color: {{ACCENT}}; }
.tfe-card-name { font-weight: 700; font-size: 0.875rem; color: {{TEXT}}; }
.tfe-card-role { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="testimonials-fq">
  <div class="tfe-inner">
    <span class="tfe-eyebrow reveal">{{eyebrow}}</span>
    <div class="tfe-main reveal">
      <div class="tfe-quote-mark">&ldquo;</div>
      <div class="tfe-stars">
        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      </div>
      <p class="tfe-quote-text">{{mainQuote}}</p>
      <div class="tfe-author">
        <div class="tfe-avatar"><div class="tfe-avatar-inner">{{mainInitials}}</div></div>
        <div>
          <div class="tfe-name">{{mainName}}</div>
          <div class="tfe-role">{{mainRole}}</div>
        </div>
      </div>
    </div>
    <div class="tfe-secondary reveal-stagger">
      <div class="tfe-card">
        <p class="tfe-card-quote">{{quote2}}</p>
        <div class="tfe-card-author">
          <div class="tfe-card-av">{{initials2}}</div>
          <div>
            <div class="tfe-card-name">{{name2}}</div>
            <div class="tfe-card-role">{{role2}}</div>
          </div>
        </div>
      </div>
      <div class="tfe-card">
        <p class="tfe-card-quote">{{quote3}}</p>
        <div class="tfe-card-author">
          <div class="tfe-card-av">{{initials3}}</div>
          <div>
            <div class="tfe-card-name">{{name3}}</div>
            <div class="tfe-card-role">{{role3}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
}
