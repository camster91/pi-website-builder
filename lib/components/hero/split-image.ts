import type { ComponentVariant } from '../types'

/**
 * Hero: Split Image — Text left, large image right with floating stat badge.
 * Inspired by: Acelia, Mentorea, Aurion Webflow templates.
 * Tested at: 375px, 768px, 1024px, 1440px
 */
export const heroSplitImage: ComponentVariant = {
  id: 'hero-split-image',
  name: 'Split Image Hero',
  section: 'hero',
  description: 'Text content on the left with CTA buttons, large image on the right with a floating stat badge overlay',
  bestFor: ['healthcare', 'local-service', 'real-estate', 'beauty', 'education', 'agency'],
  tags: ['professional', 'trustworthy', 'image-forward', 'warm'],

  slots: [
    { name: 'businessName', type: 'text', maxWords: 3, description: 'Business name for logo', required: true },
    { name: 'navLinks', type: 'array', description: 'Navigation link labels', required: true, minItems: 4, maxItems: 5, itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Nav link text', required: true }] },
    { name: 'eyebrow', type: 'eyebrow', maxWords: 5, description: 'Small pill badge text above headline', required: true },
    { name: 'headingStart', type: 'heading', maxWords: 4, description: 'First part of headline (normal weight)', required: true },
    { name: 'headingAccent', type: 'heading', maxWords: 2, description: 'Accented word(s) in headline (colored)', required: true },
    { name: 'headingEnd', type: 'heading', maxWords: 3, description: 'Last part of headline (optional)', required: false },
    { name: 'subheading', type: 'subheading', maxWords: 22, description: 'Supporting text below headline', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary button text', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary button text', required: true },
    { name: 'statValue', type: 'stat-value', maxWords: 1, description: 'Floating badge stat number (e.g. 500+)', required: true },
    { name: 'statLabel', type: 'stat-label', maxWords: 3, description: 'Floating badge stat label', required: true },
    { name: 'trustText', type: 'text', maxWords: 6, description: 'Trust indicator text (e.g. "Trusted by 500+ clients")', required: true },
  ],

  css: `/* hero-split-image */
#hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background: var(--clr-bg);
  overflow: hidden;
}

/* ── Navbar ── */
.hero-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 1rem 0;
  transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
}
.hero-nav.scrolled {
  background: color-mix(in srgb, var(--clr-bg) 92%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--clr-border);
  padding: 0.65rem 0;
}
.nav-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.375rem;
  color: var(--clr-text);
  text-decoration: none;
  letter-spacing: -0.02em;
}
.nav-logo-dot { color: var(--clr-primary); }
.nav-links {
  display: none;
  list-style: none;
  gap: 2rem;
  align-items: center;
}
.nav-links a {
  color: var(--clr-text-sec);
  text-decoration: none;
  font-size: 0.9375rem;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--clr-primary);
  transition: width 0.3s ease;
}
.nav-links a:hover { color: var(--clr-text); }
.nav-links a:hover::after { width: 100%; }
.nav-cta-btn {
  display: none;
  padding: 0.6rem 1.5rem;
  background: var(--clr-primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.25s;
  text-decoration: none;
}
.nav-cta-btn:hover {
  background: var(--clr-primary-dark);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.menu-toggle {
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: var(--clr-text);
}
@media (min-width: 768px) {
  .nav-links { display: flex; }
  .nav-cta-btn { display: inline-flex; }
  .menu-toggle { display: none; }
}

/* Mobile menu */
.mobile-menu {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 99;
  background: var(--clr-bg);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--clr-text);
  text-decoration: none;
}

/* ── Hero Content ── */
.hero-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  min-height: calc(100vh - 80px);
  min-height: calc(100dvh - 80px);
}
@media (min-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr 1fr;
    gap: clamp(3rem, 6vw, 5rem);
  }
}

/* ── Text Side ── */
.hero-text { order: 1; }
@media (min-width: 1024px) { .hero-text { order: 0; } }

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  background: color-mix(in srgb, var(--clr-primary) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--clr-primary) 20%, transparent);
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--clr-primary);
  letter-spacing: 0.04em;
  margin-bottom: 1.5rem;
}
.hero-eyebrow svg { width: 16px; height: 16px; flex-shrink: 0; }

.hero-heading {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5.5vw, 4.25rem);
  font-weight: 800;
  line-height: 1.06;
  letter-spacing: -0.03em;
  color: var(--clr-text);
  margin-bottom: 1.25rem;
}
.hero-heading .accent-word { color: var(--clr-accent); }

.hero-sub {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  line-height: 1.7;
  color: var(--clr-text-sec);
  margin-bottom: 2rem;
  max-width: 520px;
}

.hero-buttons {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: var(--clr-primary);
  color: #fff;
  border: 2px solid var(--clr-primary);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hero-btn-primary:hover {
  background: var(--clr-primary-dark);
  border-color: var(--clr-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--clr-primary) 30%, transparent);
}
.hero-btn-primary svg { width: 18px; height: 18px; }
.hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: transparent;
  color: var(--clr-text);
  border: 2px solid var(--clr-border);
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9375rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hero-btn-secondary:hover {
  border-color: var(--clr-text);
  transform: translateY(-2px);
}

/* Trust strip */
.hero-trust {
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero-trust-avatars {
  display: flex;
}
.hero-trust-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--clr-primary) 15%, var(--clr-bg));
  border: 2px solid var(--clr-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--clr-primary);
  margin-left: -8px;
}
.hero-trust-avatar:first-child { margin-left: 0; }
.hero-trust-text {
  font-size: 0.875rem;
  color: var(--clr-text-muted);
}
.hero-trust-text strong { color: var(--clr-text); }
.hero-trust-stars { color: var(--clr-accent); display: flex; gap: 2px; }
.hero-trust-stars svg { width: 14px; height: 14px; }

/* ── Image Side ── */
.hero-visual {
  position: relative;
  order: 0;
}
@media (min-width: 1024px) { .hero-visual { order: 1; } }

.hero-image-wrap {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  box-shadow: 0 24px 48px rgba(0,0,0,0.12);
}
@media (min-width: 1024px) {
  .hero-image-wrap { aspect-ratio: 3 / 4; }
}
.hero-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
}
.hero-image-wrap:hover img { transform: scale(1.04); }

/* Floating stat badge */
.hero-float-badge {
  position: absolute;
  bottom: -16px;
  left: -16px;
  background: var(--clr-bg-card);
  border: 1px solid var(--clr-border);
  border-radius: 16px;
  padding: 16px 24px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.10);
  animation: float-y-slow 7s ease-in-out infinite;
  z-index: 2;
}
@keyframes float-y-slow {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
.hero-float-badge .badge-value {
  font-family: var(--font-heading);
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--clr-primary);
  line-height: 1;
}
.hero-float-badge .badge-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--clr-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

/* Decorative glow orb */
.hero-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--clr-primary) 12%, transparent);
  filter: blur(80px);
  pointer-events: none;
  top: -100px;
  right: -100px;
  z-index: 0;
}
`,

  template: `<section id="hero">
  <!-- Navigation -->
  <nav class="hero-nav navbar" aria-label="Main navigation">
    <div class="nav-inner">
      <a href="#" class="nav-logo">{{businessName}}<span class="nav-logo-dot">.</span></a>
      <ul class="nav-links">
        {{#navLinks}}
        <li><a href="#" class="nav-link">{{.label}}</a></li>
        {{/navLinks}}
      </ul>
      <a href="#contact" class="nav-cta-btn">Get Started</a>
      <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div class="mobile-menu" data-menu>
    {{#navLinks}}
    <a href="#">{{.label}}</a>
    {{/navLinks}}
  </div>

  <!-- Hero Content -->
  <div class="hero-content">
    <!-- Text Side -->
    <div class="hero-text">
      <div class="hero-eyebrow reveal">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z"></path></svg>
        {{eyebrow}}
      </div>
      <h1 class="hero-heading reveal reveal-d1">
        {{headingStart}} <span class="accent-word">{{headingAccent}}</span> {{headingEnd}}
      </h1>
      <p class="hero-sub reveal reveal-d2">{{subheading}}</p>
      <div class="hero-buttons reveal reveal-d3">
        <a href="#contact" class="hero-btn-primary">
          {{ctaPrimary}}
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="#about" class="hero-btn-secondary">{{ctaSecondary}}</a>
      </div>
      <div class="hero-trust reveal reveal-d4">
        <div class="hero-trust-avatars">
          <div class="hero-trust-avatar">JD</div>
          <div class="hero-trust-avatar">SK</div>
          <div class="hero-trust-avatar">MR</div>
          <div class="hero-trust-avatar">AL</div>
        </div>
        <div>
          <div class="hero-trust-stars">
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </div>
          <span class="hero-trust-text">{{trustText}}</span>
        </div>
      </div>
    </div>

    <!-- Image Side -->
    <div class="hero-visual reveal-right">
      <div class="hero-glow"></div>
      <div class="hero-image-wrap tilt">
        <img src="{{HERO_IMAGE}}" alt="{{businessName}}" loading="eager" width="600" height="800">
      </div>
      <div class="hero-float-badge">
        <div class="badge-value counter" data-target="{{statValue}}">{{statValue}}</div>
        <div class="badge-label">{{statLabel}}</div>
      </div>
    </div>
  </div>
</section>`,
}
