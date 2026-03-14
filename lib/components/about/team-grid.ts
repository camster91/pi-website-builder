import type { ComponentVariant } from '../types'

export const aboutTeamGrid: ComponentVariant = {
  id: 'about-team',
  name: 'Team Member Grid',
  section: 'about',
  description: '4-column team member cards with gradient photo areas, bio, and social links',
  bestFor: ['agency', 'healthcare', 'education', 'nonprofit', 'saas', 'local-service', 'fitness'],
  tags: ['team', 'people', 'culture', 'trust', 'professional', 'human'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Section subtext', required: true },
    {
      name: 'members', type: 'array', description: '4 team members', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 3, description: 'Full name', required: true },
        { name: 'role', type: 'text', maxWords: 4, description: 'Job title/role', required: true },
        { name: 'bio', type: 'text', maxWords: 20, description: 'Brief bio', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-letter initials', required: true },
      ],
    },
  ],
  css: `/* about-team-grid */
#about {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.atg-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.atg-header {
  text-align: center; max-width: 680px;
  margin: 0 auto 4rem;
}
.atg-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.atg-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
  margin-bottom: 1rem;
}
.atg-heading .accent-word { color: {{ACCENT}}; }
.atg-sub { font-size: 1.0625rem; color: {{TEXT_SEC}}; line-height: 1.7; }

.atg-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
}
@media (min-width: 640px) { .atg-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .atg-grid { grid-template-columns: repeat(4, 1fr); } }

.atg-card {
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s;
}
.atg-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.10);
}

/* Photo area with gradient bg + initials */
.atg-photo {
  height: 200px;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.atg-card:nth-child(1) .atg-photo {
  background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}});
}
.atg-card:nth-child(2) .atg-photo {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
}
.atg-card:nth-child(3) .atg-photo {
  background: linear-gradient(135deg, {{ACCENT}}, #f97316);
}
.atg-card:nth-child(4) .atg-photo {
  background: linear-gradient(135deg, #06b6d4, #0e7490);
}
.atg-photo::before {
  content: '';
  position: absolute;
  top: -30px; right: -30px;
  width: 120px; height: 120px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
}
.atg-photo::after {
  content: '';
  position: absolute;
  bottom: -20px; left: -20px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
}
.atg-initials {
  font-family: var(--font-heading);
  font-size: 3rem; font-weight: 900;
  color: rgba(255,255,255,0.9);
  letter-spacing: -0.02em;
  position: relative; z-index: 1;
  text-shadow: 0 2px 12px rgba(0,0,0,0.2);
}

/* Info */
.atg-info { padding: 1.5rem; }
.atg-name {
  font-family: var(--font-heading);
  font-size: 1.0625rem; font-weight: 700;
  color: {{TEXT}}; margin-bottom: 0.25rem;
  letter-spacing: -0.01em;
}
.atg-role {
  font-size: 0.8125rem; font-weight: 600;
  color: {{PRIMARY}}; margin-bottom: 0.875rem;
  text-transform: uppercase; letter-spacing: 0.06em;
}
.atg-bio {
  font-size: 0.875rem; color: {{TEXT_SEC}};
  line-height: 1.65; margin-bottom: 1.25rem;
}
.atg-socials {
  display: flex; gap: 0.625rem;
}
.atg-social {
  width: 32px; height: 32px;
  border-radius: 8px; border: 1px solid {{BORDER}};
  display: flex; align-items: center; justify-content: center;
  color: {{TEXT_MUTED}}; text-decoration: none;
  transition: all 0.2s;
}
.atg-social:hover {
  border-color: {{PRIMARY}};
  color: {{PRIMARY}};
  background: {{BG_SECTION}};
}
.atg-social svg { width: 15px; height: 15px; }
`,
  template: `<section id="about">
  <div class="atg-inner">
    <div class="atg-header">
      <span class="atg-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="atg-heading reveal reveal-d1">{{heading}}</h2>
      <p class="atg-sub reveal reveal-d2">{{subtext}}</p>
    </div>

    <div class="atg-grid reveal-stagger">
      {{#members}}
      <div class="atg-card">
        <div class="atg-photo">
          <span class="atg-initials">{{.initials}}</span>
        </div>
        <div class="atg-info">
          <h3 class="atg-name">{{.name}}</h3>
          <p class="atg-role">{{.role}}</p>
          <p class="atg-bio">{{.bio}}</p>
          <div class="atg-socials">
            <a href="#" class="atg-social" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" class="atg-social" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>
      </div>
      {{/members}}
    </div>
  </div>
</section>`,
}
