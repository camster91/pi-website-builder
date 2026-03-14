import type { ComponentVariant } from '../types'

export const footerFourColumn: ComponentVariant = {
  id: 'footer-four-column',
  name: 'Four Column Footer',
  section: 'footer',
  description: 'Dark footer with logo/tagline + 3 link columns + social icons + copyright bar',
  bestFor: ['saas', 'agency', 'local-service', 'healthcare', 'fitness', 'beauty', 'education', 'nonprofit', 'real-estate', 'ecommerce', 'restaurant', 'portfolio'],
  tags: ['footer', 'professional', 'dark', 'links'],
  slots: [
    { name: 'businessName', type: 'text', maxWords: 3, description: 'Business name', required: true },
    { name: 'tagline', type: 'text', maxWords: 12, description: 'Short tagline under logo', required: true },
    { name: 'col2Heading', type: 'text', maxWords: 2, description: 'Column 2 heading (e.g. "Services")', required: true },
    {
      name: 'col2Links', type: 'array', description: 'Column 2 links', required: true,
      minItems: 4, maxItems: 6,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 3, description: 'Link text', required: true }],
    },
    { name: 'col3Heading', type: 'text', maxWords: 2, description: 'Column 3 heading (e.g. "Company")', required: true },
    {
      name: 'col3Links', type: 'array', description: 'Column 3 links', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [{ name: 'label', type: 'text', maxWords: 3, description: 'Link text', required: true }],
    },
    { name: 'col4Heading', type: 'text', maxWords: 2, description: 'Column 4 heading (e.g. "Contact")', required: true },
    { name: 'address', type: 'text', maxWords: 8, description: 'Address line', required: true },
    { name: 'phone', type: 'text', maxWords: 2, description: 'Phone number', required: true },
    { name: 'email', type: 'text', maxWords: 2, description: 'Email address', required: true },
    { name: 'copyright', type: 'text', maxWords: 8, description: 'Copyright text', required: true },
  ],
  css: `/* footer-four-column */
#footer {
  background: #0a0f1e;
  color: #94a3b8;
  padding: clamp(3rem, 6vw, 5rem) 0 0;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding-bottom: clamp(3rem, 5vw, 4rem);
}
@media (min-width: 640px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 2rem; } }

/* Brand column */
.footer-brand {}
.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.5rem; font-weight: 800;
  color: #fff; text-decoration: none;
  display: inline-block; margin-bottom: 1rem;
  letter-spacing: -0.02em;
}
.footer-logo-dot { color: {{PRIMARY}}; }
.footer-tagline {
  font-size: 0.9375rem; color: #64748b; line-height: 1.65;
  max-width: 260px; margin-bottom: 1.5rem;
}
.footer-social {
  display: flex; gap: 0.75rem;
}
.footer-social-link {
  width: 40px; height: 40px; border-radius: 10px;
  border: 1px solid #1e2a3a;
  background: #111827;
  display: flex; align-items: center; justify-content: center;
  color: #64748b; text-decoration: none;
  transition: all 0.2s;
}
.footer-social-link:hover { border-color: {{PRIMARY}}; background: color-mix(in srgb, {{PRIMARY}} 12%, transparent); color: {{PRIMARY}}; transform: translateY(-2px); }
.footer-social-link svg { width: 18px; height: 18px; }

/* Link columns */
.footer-col-heading {
  font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: #fff; margin-bottom: 1.25rem;
}
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
.footer-links a {
  color: #64748b; text-decoration: none; font-size: 0.9375rem;
  transition: color 0.2s;
  display: flex; align-items: center; gap: 6px;
}
.footer-links a:hover { color: #e2e8f0; }
.footer-links a::before {
  content: '';
  width: 4px; height: 4px;
  border-radius: 50%;
  background: {{PRIMARY}};
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.2s;
}
.footer-links a:hover::before { opacity: 1; }

/* Contact info column */
.footer-contact-row {
  display: flex; gap: 10px; align-items: flex-start;
  font-size: 0.9375rem; color: #64748b; margin-bottom: 0.875rem;
}
.footer-contact-row svg { width: 16px; height: 16px; flex-shrink: 0; margin-top: 2px; color: {{PRIMARY}}; }
.footer-contact-row a { color: #64748b; text-decoration: none; transition: color 0.2s; }
.footer-contact-row a:hover { color: #e2e8f0; }

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid #1e2a3a;
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.footer-copyright { font-size: 0.875rem; color: #475569; }
.footer-legal { display: flex; gap: 1.5rem; }
.footer-legal a { font-size: 0.875rem; color: #475569; text-decoration: none; transition: color 0.2s; }
.footer-legal a:hover { color: #94a3b8; }
`,
  template: `<footer id="footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <a href="#" class="footer-logo">{{businessName}}<span class="footer-logo-dot">.</span></a>
        <p class="footer-tagline">{{tagline}}</p>
        <div class="footer-social">
          <a href="#" class="footer-social-link" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" class="footer-social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
        </div>
      </div>

      <!-- Column 2 -->
      <div>
        <h4 class="footer-col-heading">{{col2Heading}}</h4>
        <ul class="footer-links">
          {{#col2Links}}<li><a href="#">{{.label}}</a></li>{{/col2Links}}
        </ul>
      </div>

      <!-- Column 3 -->
      <div>
        <h4 class="footer-col-heading">{{col3Heading}}</h4>
        <ul class="footer-links">
          {{#col3Links}}<li><a href="#">{{.label}}</a></li>{{/col3Links}}
        </ul>
      </div>

      <!-- Column 4: Contact -->
      <div>
        <h4 class="footer-col-heading">{{col4Heading}}</h4>
        <div class="footer-contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>{{address}}</span>
        </div>
        <div class="footer-contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <a href="tel:{{phone}}">{{phone}}</a>
        </div>
        <div class="footer-contact-row">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <a href="mailto:{{email}}">{{email}}</a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <p class="footer-copyright">{{copyright}}</p>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>`,
}
