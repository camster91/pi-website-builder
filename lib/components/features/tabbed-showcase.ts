import type { ComponentVariant } from '../types'

export const featuresTabbedShowcase: ComponentVariant = {
  id: 'features-tabbed',
  name: 'Features Tabbed Showcase',
  section: 'features',
  description: 'Tab navigation switching between 4 feature sets — each tab shows a screenshot + description + bullets',
  bestFor: ['saas', 'ecommerce', 'education', 'healthcare'],
  tags: ['tabbed', 'interactive', 'screenshot', 'enterprise', 'saas'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'tab1Label', type: 'text', maxWords: 2, description: 'Tab 1 name', required: true },
    { name: 'tab1Title', type: 'heading', maxWords: 5, description: 'Tab 1 content heading', required: true },
    { name: 'tab1Desc', type: 'text', maxWords: 30, description: 'Tab 1 description', required: true },
    { name: 'tab2Label', type: 'text', maxWords: 2, description: 'Tab 2 name', required: true },
    { name: 'tab2Title', type: 'heading', maxWords: 5, description: 'Tab 2 heading', required: true },
    { name: 'tab2Desc', type: 'text', maxWords: 30, description: 'Tab 2 description', required: true },
    { name: 'tab3Label', type: 'text', maxWords: 2, description: 'Tab 3 name', required: true },
    { name: 'tab3Title', type: 'heading', maxWords: 5, description: 'Tab 3 heading', required: true },
    { name: 'tab3Desc', type: 'text', maxWords: 30, description: 'Tab 3 description', required: true },
    { name: 'tab4Label', type: 'text', maxWords: 2, description: 'Tab 4 name', required: true },
    { name: 'tab4Title', type: 'heading', maxWords: 5, description: 'Tab 4 heading', required: true },
    { name: 'tab4Desc', type: 'text', maxWords: 30, description: 'Tab 4 description', required: true },
  ],
  css: `/* features-tabbed */
#features-tabs {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.ft-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.ft-header {
  text-align: center; max-width: 640px;
  margin: 0 auto 3rem;
}
.ft-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.ft-heading {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
}
/* Tab bar */
.ft-tabs {
  display: flex; gap: 0;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 14px;
  padding: 5px;
  margin-bottom: 3rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.ft-tab {
  flex: 1; min-width: max-content;
  padding: 10px 20px;
  background: none; border: none;
  border-radius: 10px;
  font-size: 0.9375rem; font-weight: 600;
  color: {{TEXT_MUTED}};
  cursor: pointer;
  transition: all 0.25s;
  font-family: var(--font-body);
}
.ft-tab.active, .ft-tab:hover {
  background: {{BG}};
  color: {{PRIMARY}};
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
/* Tab panels */
.ft-panel { display: none; }
.ft-panel.active { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 1024px) { .ft-panel.active { grid-template-columns: 50% 50%; } }

.ft-panel-img {
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16/10;
  box-shadow: 0 20px 48px rgba(0,0,0,0.10);
  border: 1px solid {{BORDER}};
}
.ft-panel-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ft-panel-title {
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 800; letter-spacing: -0.025em;
  color: {{TEXT}}; margin-bottom: 1rem;
}
.ft-panel-desc {
  font-size: 1rem; color: {{TEXT_SEC}};
  line-height: 1.75; margin-bottom: 1.5rem;
}
.ft-panel-link {
  display: inline-flex; align-items: center; gap: 6px;
  color: {{PRIMARY}}; font-weight: 700; font-size: 0.9375rem;
  text-decoration: none;
}
.ft-panel-link svg { width: 16px; height: 16px; }
.ft-panel-link:hover gap { gap: 10px; }
`,
  template: `<section id="features-tabs">
  <div class="ft-inner">
    <div class="ft-header">
      <span class="ft-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="ft-heading reveal reveal-d1">{{heading}}</h2>
    </div>

    <div class="ft-tabs reveal">
      <button class="ft-tab active" data-tab="tab1">{{tab1Label}}</button>
      <button class="ft-tab" data-tab="tab2">{{tab2Label}}</button>
      <button class="ft-tab" data-tab="tab3">{{tab3Label}}</button>
      <button class="ft-tab" data-tab="tab4">{{tab4Label}}</button>
    </div>

    <div class="ft-panel active" id="tab1-panel">
      <div class="ft-panel-img">
        <img src="{{SERVICE_IMAGE_0}}" alt="{{tab1Label}}" width="640" height="400" loading="lazy">
      </div>
      <div>
        <h3 class="ft-panel-title">{{tab1Title}}</h3>
        <p class="ft-panel-desc">{{tab1Desc}}</p>
        <a href="#contact" class="ft-panel-link">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </div>
    <div class="ft-panel" id="tab2-panel">
      <div class="ft-panel-img">
        <img src="{{SERVICE_IMAGE_1}}" alt="{{tab2Label}}" width="640" height="400" loading="lazy">
      </div>
      <div>
        <h3 class="ft-panel-title">{{tab2Title}}</h3>
        <p class="ft-panel-desc">{{tab2Desc}}</p>
        <a href="#contact" class="ft-panel-link">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </div>
    <div class="ft-panel" id="tab3-panel">
      <div class="ft-panel-img">
        <img src="{{SERVICE_IMAGE_2}}" alt="{{tab3Label}}" width="640" height="400" loading="lazy">
      </div>
      <div>
        <h3 class="ft-panel-title">{{tab3Title}}</h3>
        <p class="ft-panel-desc">{{tab3Desc}}</p>
        <a href="#contact" class="ft-panel-link">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </div>
    <div class="ft-panel" id="tab4-panel">
      <div class="ft-panel-img">
        <img src="{{SERVICE_IMAGE_0}}" alt="{{tab4Label}}" width="640" height="400" loading="lazy">
      </div>
      <div>
        <h3 class="ft-panel-title">{{tab4Title}}</h3>
        <p class="ft-panel-desc">{{tab4Desc}}</p>
        <a href="#contact" class="ft-panel-link">Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a>
      </div>
    </div>
  </div>
</section>`,
}
