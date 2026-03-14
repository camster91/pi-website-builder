import type { ComponentVariant } from '../types'

/**
 * Hero: Centered Gradient — Centered text on mesh gradient background.
 * Inspired by: Pipely, Brilo, Nexio Webflow templates.
 * Tested at: 375px, 768px, 1024px, 1440px
 */
export const heroCenteredGradient: ComponentVariant = {
  id: 'hero-centered-gradient',
  name: 'Centered Gradient Hero',
  section: 'hero',
  description: 'Centered heading on a warm gradient background with floating decorative orbs and trust badges',
  bestFor: ['saas', 'agency', 'portfolio', 'ecommerce', 'fitness'],
  tags: ['modern', 'bold', 'tech', 'startup', 'centered'],

  slots: [
    { name: 'businessName', type: 'text', maxWords: 3, description: 'Business name for logo', required: true },
    { name: 'navLinks', type: 'array', description: 'Navigation link labels', required: true, minItems: 4, maxItems: 5, itemSlots: [{ name: 'label', type: 'text', maxWords: 2, description: 'Nav link text', required: true }] },
    { name: 'eyebrow', type: 'eyebrow', maxWords: 5, description: 'Badge text above headline', required: true },
    { name: 'headingLine1', type: 'heading', maxWords: 5, description: 'First line of headline', required: true },
    { name: 'headingAccent', type: 'heading', maxWords: 2, description: 'Accented word(s)', required: true },
    { name: 'headingLine2', type: 'heading', maxWords: 5, description: 'Second line (after accent)', required: false },
    { name: 'subheading', type: 'subheading', maxWords: 25, description: 'Supporting paragraph', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA', required: true },
    { name: 'stats', type: 'array', description: '3-4 stat badges below buttons', required: true, minItems: 3, maxItems: 4, itemSlots: [
      { name: 'value', type: 'stat-value', maxWords: 1, description: 'Stat number', required: true },
      { name: 'label', type: 'stat-label', maxWords: 2, description: 'Stat label', required: true },
    ]},
  ],

  css: `/* hero-centered-gradient */
#hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background: var(--clr-bg);
  overflow: hidden;
}

/* Background decoration */
.hero-bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
.hero-bg-orb-1 {
  width: 600px; height: 600px;
  background: color-mix(in srgb, var(--clr-primary) 15%, transparent);
  top: -200px; right: -150px;
  animation: float-xy 20s ease-in-out infinite;
}
.hero-bg-orb-2 {
  width: 400px; height: 400px;
  background: color-mix(in srgb, var(--clr-accent) 12%, transparent);
  bottom: -100px; left: -100px;
  animation: float-xy 25s ease-in-out infinite reverse;
}
.hero-bg-orb-3 {
  width: 300px; height: 300px;
  background: color-mix(in srgb, var(--clr-primary) 8%, transparent);
  top: 40%; left: 60%;
  animation: float-y 15s ease-in-out infinite;
}
@keyframes float-xy {
  0%,100%{transform:translate(0,0)}33%{transform:translate(30px,-40px)}66%{transform:translate(-20px,20px)}
}
@keyframes float-y {
  0%,100%{transform:translateY(0)}50%{transform:translateY(-30px)}
}

/* Noise texture overlay */
.hero-noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

/* Nav (same structure as split-image) */
.hero-nav { position: sticky; top: 0; z-index: 100; padding: 1rem 0; transition: all 0.35s cubic-bezier(0.4,0,0.2,1); }
.hero-nav.scrolled { background: color-mix(in srgb, var(--clr-bg) 92%, transparent); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid var(--clr-border); padding: 0.65rem 0; }
.nav-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-family: var(--font-heading); font-weight: 800; font-size: 1.375rem; color: var(--clr-text); text-decoration: none; letter-spacing: -0.02em; }
.nav-logo-dot { color: var(--clr-primary); }
.nav-links { display: none; list-style: none; gap: 2rem; align-items: center; }
.nav-links a { color: var(--clr-text-sec); text-decoration: none; font-size: 0.9375rem; font-weight: 500; transition: color 0.2s; position: relative; }
.nav-links a::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: var(--clr-primary); transition: width 0.3s ease; }
.nav-links a:hover { color: var(--clr-text); }
.nav-links a:hover::after { width: 100%; }
.nav-cta-btn { display: none; padding: 0.6rem 1.5rem; background: var(--clr-primary); color: #fff; border: none; border-radius: 10px; font-weight: 600; font-size: 0.875rem; cursor: pointer; transition: all 0.25s; text-decoration: none; }
.nav-cta-btn:hover { background: var(--clr-primary-dark); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }
.menu-toggle { display: flex; background: none; border: none; cursor: pointer; padding: 8px; color: var(--clr-text); }
@media (min-width: 768px) { .nav-links { display: flex; } .nav-cta-btn { display: inline-flex; } .menu-toggle { display: none; } }
.mobile-menu { display: none; position: fixed; inset: 0; z-index: 99; background: var(--clr-bg); flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
.mobile-menu.open { display: flex; }
.mobile-menu a { font-size: 1.5rem; font-weight: 600; color: var(--clr-text); text-decoration: none; }

/* Center content */
.hero-center {
  position: relative;
  z-index: 2;
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(4rem, 10vw, 8rem) clamp(1.5rem, 5vw, 3rem);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  justify-content: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: color-mix(in srgb, var(--clr-primary) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--clr-primary) 15%, transparent);
  border-radius: 999px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--clr-primary);
  margin-bottom: 2rem;
}
.hero-badge-dot {
  width: 8px; height: 8px;
  background: var(--clr-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }

.hero-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.75rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.035em;
  color: var(--clr-text);
  margin-bottom: 1.25rem;
}
.hero-h1 .accent-word { color: var(--clr-accent); }

.hero-p {
  font-size: clamp(1rem, 1.4vw, 1.1875rem);
  line-height: 1.7;
  color: var(--clr-text-sec);
  margin-bottom: 2.5rem;
  max-width: 580px;
}

.hero-btns {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}
.hero-btn-1 {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 32px; background: var(--clr-primary); color: #fff;
  border: 2px solid var(--clr-primary); border-radius: 12px;
  font-weight: 600; font-size: 0.9375rem; cursor: pointer;
  text-decoration: none; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hero-btn-1:hover { background: var(--clr-primary-dark); border-color: var(--clr-primary-dark); transform: translateY(-2px); box-shadow: 0 10px 28px color-mix(in srgb, var(--clr-primary) 35%, transparent); }
.hero-btn-1 svg { width: 18px; height: 18px; }
.hero-btn-2 {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 15px 32px; background: transparent; color: var(--clr-text);
  border: 2px solid var(--clr-border); border-radius: 12px;
  font-weight: 600; font-size: 0.9375rem; cursor: pointer;
  text-decoration: none; transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hero-btn-2:hover { border-color: var(--clr-text); transform: translateY(-2px); }

/* Stats strip */
.hero-stats {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}
.hero-stat {
  text-align: center;
  padding: 0 1rem;
  position: relative;
}
.hero-stat:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 10%;
  height: 80%;
  width: 1px;
  background: var(--clr-border);
}
.hero-stat-value {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--clr-primary);
  line-height: 1;
}
.hero-stat-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--clr-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 6px;
}
`,

  template: `<section id="hero">
  <!-- Background orbs -->
  <div class="hero-bg-orb hero-bg-orb-1"></div>
  <div class="hero-bg-orb hero-bg-orb-2"></div>
  <div class="hero-bg-orb hero-bg-orb-3"></div>
  <div class="hero-noise"></div>

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

  <div class="mobile-menu" data-menu>
    {{#navLinks}}
    <a href="#">{{.label}}</a>
    {{/navLinks}}
  </div>

  <!-- Centered Hero -->
  <div class="hero-center">
    <div class="hero-badge reveal">
      <span class="hero-badge-dot"></span>
      {{eyebrow}}
    </div>
    <h1 class="hero-h1 reveal reveal-d1">
      {{headingLine1}} <span class="accent-word">{{headingAccent}}</span> {{headingLine2}}
    </h1>
    <p class="hero-p reveal reveal-d2">{{subheading}}</p>
    <div class="hero-btns reveal reveal-d3">
      <a href="#contact" class="hero-btn-1">
        {{ctaPrimary}}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <a href="#about" class="hero-btn-2">{{ctaSecondary}}</a>
    </div>
    <div class="hero-stats reveal reveal-d4">
      {{#stats}}
      <div class="hero-stat">
        <div class="hero-stat-value counter">{{.value}}</div>
        <div class="hero-stat-label">{{.label}}</div>
      </div>
      {{/stats}}
    </div>
  </div>
</section>`,
}
