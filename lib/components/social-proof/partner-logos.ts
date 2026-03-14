import type { ComponentVariant } from '../types'

export const socialProofPartnerLogos: ComponentVariant = {
  id: 'social-proof-partners',
  name: 'Social Proof Partner Logos',
  section: 'social-proof',
  description: 'Centered heading + partner/integration logos in 2 rows with hover — integrations/partnerships showcase',
  bestFor: ['saas', 'agency', 'ecommerce', 'education'],
  tags: ['partners', 'integrations', 'logos', 'centered', 'row', 'B2B', 'tech-stack'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    {
      name: 'partners', type: 'array', description: '8 partner names', required: true,
      minItems: 8, maxItems: 10,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 2, description: 'Partner name', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Initials', required: true },
      ],
    },
  ],
  css: `/* social-proof-partners */
#sp-partners {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.spart-inner { max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.spart-header { text-align: center; max-width: 640px; margin: 0 auto 3.5rem; }
.spart-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.spart-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.spart-heading .accent-word { color: {{ACCENT}}; }
.spart-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem; }
.spart-logo {
  display: flex; align-items: center; gap: 0.625rem;
  padding: 0.875rem 1.5rem;
  background: {{BG_CARD}}; border: 1px solid {{BORDER}};
  border-radius: 12px;
  transition: all 0.25s; cursor: default;
}
.spart-logo:hover { border-color: {{PRIMARY}}; box-shadow: 0 4px 16px rgba(0,0,0,0.06); transform: translateY(-2px); }
.spart-icon { width: 32px; height: 32px; border-radius: 8px; background: rgba(99,102,241,0.1); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 800; flex-shrink: 0; }
.spart-name { font-size: 0.9375rem; font-weight: 700; color: {{TEXT}}; letter-spacing: -0.01em; }
`,
  template: `<section id="sp-partners">
  <div class="spart-inner">
    <div class="spart-header">
      <span class="spart-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="spart-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="spart-grid reveal-stagger">
      {{#partners}}
      <div class="spart-logo">
        <div class="spart-icon">{{.initials}}</div>
        <span class="spart-name">{{.name}}</span>
      </div>
      {{/partners}}
    </div>
  </div>
</section>`,
}
