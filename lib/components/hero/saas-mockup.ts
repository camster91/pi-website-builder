import type { ComponentVariant } from '../types'

export const heroSaasMockup: ComponentVariant = {
  id: 'hero-saas-mockup',
  name: 'Hero SaaS Product Mockup',
  section: 'hero',
  description: 'Clean light hero with a floating browser/product screenshot, notification cards, and trust avatars — SaaS/product company style',
  bestFor: ['saas', 'ecommerce', 'education', 'nonprofit', 'healthcare'],
  tags: ['saas', 'product', 'mockup', 'clean', 'light', 'modern', 'B2B'],
  slots: [
    { name: 'badge', type: 'eyebrow', maxWords: 4, description: 'Top pill badge (e.g. "Now in Beta" or "v2.0 Released")', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Main product headline', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Word(s) to color in primary', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 22, description: 'Product description', required: true },
    { name: 'ctaPrimary', type: 'cta-text', maxWords: 3, description: 'Primary CTA text', required: true },
    { name: 'ctaSecondary', type: 'cta-text', maxWords: 3, description: 'Secondary CTA text', required: true },
    { name: 'metricValue', type: 'stat-value', maxWords: 1, description: 'A key metric (e.g. 47)', required: true },
    { name: 'metricLabel', type: 'stat-label', maxWords: 3, description: 'Metric label (e.g. "faster delivery")', required: true },
    { name: 'notifMessage', type: 'text', maxWords: 5, description: 'Notification card message (e.g. "New order confirmed")', required: true },
    { name: 'avatarCount', type: 'text', maxWords: 2, description: 'Customer count (e.g. "+2,400 teams")', required: true },
    { name: 'avatarLabel', type: 'text', maxWords: 4, description: 'Avatar label text (e.g. "companies trust us")', required: false },
  ],
  css: `/* hero-saas-mockup */
#hero-saas {
  background: linear-gradient(180deg, #f8faff 0%, {{BG}} 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 7rem 0 4rem;
  position: relative;
  overflow: hidden;
}
.hsm-bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
.hsm-bg-grid::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at center top, rgba(255,255,255,0) 40%, {{BG}} 90%);
}
.hsm-glow {
  position: absolute;
  top: -200px; left: 50%;
  transform: translateX(-50%);
  width: 800px; height: 600px;
  background: radial-gradient(ellipse, {{PRIMARY}} 0%, transparent 70%);
  opacity: 0.06;
  pointer-events: none;
}

.hsm-inner {
  position: relative; z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .hsm-inner { grid-template-columns: 48% 52%; gap: 4rem; }
}

/* LEFT */
.hsm-badge {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 5px 14px;
  background: linear-gradient(135deg, rgba(99,102,241,0.08), rgba(99,102,241,0.04));
  border: 1px solid rgba(99,102,241,0.2);
  border-radius: 999px;
  font-size: 0.8125rem; font-weight: 600;
  color: {{PRIMARY}};
  margin-bottom: 1.5rem;
}
.hsm-badge-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: {{PRIMARY}};
  box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
  animation: hsm-pulse 2s ease-in-out infinite;
}
@keyframes hsm-pulse { 0%,100%{transform:scale(1)}50%{transform:scale(1.3)} }

.hsm-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4.5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.08;
  color: {{TEXT}};
  margin-bottom: 1.25rem;
}
.hsm-h1 .accent-word { color: {{PRIMARY}}; }

.hsm-sub {
  font-size: clamp(1rem, 1.5vw, 1.1875rem);
  color: {{TEXT_SEC}};
  line-height: 1.75;
  margin-bottom: 2rem;
}
.hsm-ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
.hsm-btn-p {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: {{PRIMARY}};
  color: #fff; border-radius: 10px; border: none;
  font-weight: 700; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  box-shadow: 0 4px 14px rgba(99,102,241,0.35);
}
.hsm-btn-p:hover { background: {{PRIMARY_DARK}}; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(99,102,241,0.45); }
.hsm-btn-s {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 13px 28px; background: #fff;
  color: {{TEXT}}; border: 1.5px solid {{BORDER}};
  border-radius: 10px; font-weight: 600; font-size: 0.9375rem;
  cursor: pointer; text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
}
.hsm-btn-s:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }

/* Avatars */
.hsm-avatars { display: flex; align-items: center; gap: 1rem; }
.hsm-avatar-stack { display: flex; }
.hsm-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  border: 2px solid #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 700; color: #fff;
  margin-left: -8px;
}
.hsm-avatar:first-child { margin-left: 0; }
.hsm-avatar:nth-child(1) { background: {{PRIMARY}}; }
.hsm-avatar:nth-child(2) { background: {{ACCENT}}; }
.hsm-avatar:nth-child(3) { background: #8b5cf6; }
.hsm-avatar:nth-child(4) { background: #06b6d4; }
.hsm-avatar:nth-child(5) { background: {{PRIMARY_DARK}}; }
.hsm-avatar-text { font-size: 0.8125rem; color: {{TEXT_SEC}}; }
.hsm-avatar-text strong { color: {{TEXT}}; }

/* RIGHT — Product Mockup */
.hsm-visual { position: relative; }
.hsm-browser {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(0,0,0,0.12), 0 4px 24px rgba(0,0,0,0.06);
  border: 1px solid rgba(0,0,0,0.07);
  overflow: hidden;
}
.hsm-browser-bar {
  display: flex; align-items: center; gap: 8px;
  padding: 10px 16px;
  background: #f5f5f7;
  border-bottom: 1px solid #e5e7eb;
}
.hsm-dot { width: 10px; height: 10px; border-radius: 50%; }
.hsm-dot-r { background: #ff5f57; }
.hsm-dot-y { background: #febc2e; }
.hsm-dot-g { background: #28c840; }
.hsm-url-bar {
  flex: 1; background: #fff; border-radius: 6px;
  height: 22px; margin: 0 12px;
  border: 1px solid #e5e7eb;
}
.hsm-screen { aspect-ratio: 16/10; overflow: hidden; }
.hsm-screen img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* Floating notification cards */
.hsm-notif {
  position: absolute;
  background: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  border: 1px solid rgba(0,0,0,0.06);
  min-width: 180px;
  animation: hsm-float 8s ease-in-out infinite;
}
.hsm-notif-1 { top: 15%; right: -8%; animation-delay: 0s; }
.hsm-notif-2 { bottom: 18%; left: -8%; animation-delay: 1.5s; }
@keyframes hsm-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)} }

.hsm-notif-header {
  display: flex; align-items: center; gap: 8px;
  margin-bottom: 6px;
}
.hsm-notif-icon {
  width: 28px; height: 28px; border-radius: 8px;
  background: #d1fae5; display: flex; align-items: center; justify-content: center;
  font-size: 14px;
}
.hsm-notif-title { font-size: 0.75rem; font-weight: 700; color: {{TEXT}}; }
.hsm-notif-msg { font-size: 0.6875rem; color: {{TEXT_SEC}}; line-height: 1.4; }

.hsm-metric-card {
  position: absolute;
  bottom: -5%;
  right: -5%;
  background: {{PRIMARY}};
  border-radius: 14px;
  padding: 14px 20px;
  color: #fff;
  animation: hsm-float 10s ease-in-out infinite 0.5s;
  box-shadow: 0 12px 32px rgba(99,102,241,0.4);
}
.hsm-metric-val {
  font-family: var(--font-heading);
  font-size: 2rem; font-weight: 800; line-height: 1; display: block;
}
.hsm-metric-lbl { font-size: 0.75rem; opacity: 0.8; }

/* Trust badges */
.hsm-trust-row {
  display: flex; gap: 1.25rem; flex-wrap: wrap; margin-top: 1.5rem;
}
.hsm-trust-item {
  display: flex; align-items: center; gap: 6px;
  font-size: 0.8125rem; color: {{TEXT_MUTED}};
}
.hsm-trust-item svg { width: 14px; height: 14px; color: {{PRIMARY}}; }
`,
  template: `<section id="hero-saas">
  <div class="hsm-bg-grid"></div>
  <div class="hsm-glow"></div>

  <div class="hsm-inner">
    <!-- Left text -->
    <div>
      <div class="hsm-badge reveal">
        <span class="hsm-badge-dot"></span>
        {{badge}}
      </div>
      <h1 class="hsm-h1 reveal reveal-d1">{{heading}}</h1>
      <p class="hsm-sub reveal reveal-d2">{{subtext}}</p>
      <div class="hsm-ctas reveal reveal-d3">
        <a href="#contact" class="hsm-btn-p">
          {{ctaPrimary}}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
        <a href="#features" class="hsm-btn-s">{{ctaSecondary}}</a>
      </div>
      <div class="hsm-avatars reveal reveal-d4">
        <div class="hsm-avatar-stack">
          <div class="hsm-avatar">J</div>
          <div class="hsm-avatar">A</div>
          <div class="hsm-avatar">M</div>
          <div class="hsm-avatar">S</div>
          <div class="hsm-avatar">K</div>
        </div>
        <p class="hsm-avatar-text"><strong>{{avatarCount}}</strong> {{avatarLabel}}</p>
      </div>
      <div class="hsm-trust-row reveal reveal-d5">
        <span class="hsm-trust-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          SOC 2 Certified
        </span>
        <span class="hsm-trust-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          GDPR Compliant
        </span>
        <span class="hsm-trust-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
          No credit card required
        </span>
      </div>
    </div>

    <!-- Right product mockup -->
    <div class="hsm-visual reveal-right">
      <div class="hsm-browser">
        <div class="hsm-browser-bar">
          <div class="hsm-dot hsm-dot-r"></div>
          <div class="hsm-dot hsm-dot-y"></div>
          <div class="hsm-dot hsm-dot-g"></div>
          <div class="hsm-url-bar"></div>
        </div>
        <div class="hsm-screen">
          <img src="{{SERVICE_IMAGE_0}}" alt="Product screenshot" width="800" height="500">
        </div>
      </div>
      <!-- Notification 1 -->
      <div class="hsm-notif hsm-notif-1">
        <div class="hsm-notif-header">
          <div class="hsm-notif-icon">&#9989;</div>
          <span class="hsm-notif-title">New Update</span>
        </div>
        <p class="hsm-notif-msg">{{notifMessage}}</p>
      </div>
      <!-- Metric card -->
      <div class="hsm-metric-card">
        <span class="hsm-metric-val">+{{metricValue}}%</span>
        <span class="hsm-metric-lbl">{{metricLabel}}</span>
      </div>
    </div>
  </div>
</section>`,
}
