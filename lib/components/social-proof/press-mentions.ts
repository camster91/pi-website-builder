import type { ComponentVariant } from '../types'

export const socialProofPressMentions: ComponentVariant = {
  id: 'social-proof-press',
  name: 'Social Proof Press Mentions',
  section: 'social-proof',
  description: '"As seen in" press logos with pull quotes from each publication — media credibility builder',
  bestFor: ['saas', 'ecommerce', 'agency', 'nonprofit', 'education', 'healthcare'],
  tags: ['press', 'media', 'as-seen-in', 'credibility', 'publications', 'quotes'],
  slots: [
    { name: 'label', type: 'text', maxWords: 4, description: 'Label (e.g. "As seen in")', required: true },
    {
      name: 'pubs', type: 'array', description: '4 press mentions', required: true,
      minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 2, description: 'Publication name', required: true },
        { name: 'quote', type: 'text', maxWords: 20, description: 'Pull quote', required: true },
      ],
    },
  ],
  css: `/* social-proof-press */
#sp-press {
  background: {{BG}};
  padding: 3.5rem 0;
  border-top: 1px solid {{BORDER}};
  border-bottom: 1px solid {{BORDER}};
}
.spp-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.spp-label { text-align: center; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{TEXT_MUTED}}; margin-bottom: 2.5rem; }
.spp-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.5rem; }
@media (min-width: 1024px) { .spp-grid { grid-template-columns: repeat(4,1fr); } }
.spp-card { border: 1px solid {{BORDER}}; border-radius: 16px; padding: 1.5rem; transition: border-color 0.2s; }
.spp-card:hover { border-color: {{PRIMARY}}; }
.spp-pub-name { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 900; letter-spacing: -0.03em; color: {{TEXT}}; opacity: 0.25; margin-bottom: 1rem; }
.spp-quote { font-size: 0.875rem; font-style: italic; color: {{TEXT_SEC}}; line-height: 1.65; }
.spp-link { display: inline-block; margin-top: 0.75rem; font-size: 0.75rem; font-weight: 700; color: {{PRIMARY}}; text-decoration: none; }
`,
  template: `<section id="sp-press">
  <div class="spp-inner">
    <p class="spp-label reveal">{{label}}</p>
    <div class="spp-grid reveal-stagger">
      {{#pubs}}
      <div class="spp-card">
        <div class="spp-pub-name">{{.name}}</div>
        <p class="spp-quote">&ldquo;{{.quote}}&rdquo;</p>
        <a href="#" class="spp-link">Read article →</a>
      </div>
      {{/pubs}}
    </div>
  </div>
</section>`,
}
