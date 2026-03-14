import type { ComponentVariant } from '../types'
export const faqWithCta: ComponentVariant = {
  id: 'faq-with-cta', name: 'FAQ with Inline CTA', section: 'faq',
  description: 'FAQ accordion on left, CTA card sticky on right — dual purpose section drives both knowledge and conversion',
  bestFor: ['saas','fitness','education','healthcare'], tags: ['sticky-cta','split','conversion','sidebar','dual'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'faqs', type: 'array', description: '6 FAQs', required: true, minItems: 5, maxItems: 7,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 10, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 30, description: 'Answer', required: true },
      ] },
    { name: 'ctaHeading', type: 'heading', maxWords: 5, description: 'CTA card heading', required: true },
    { name: 'ctaDesc', type: 'text', maxWords: 18, description: 'CTA card description', required: true },
    { name: 'ctaBtn', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
    { name: 'ctaNote', type: 'text', maxWords: 8, description: 'Small note', required: false },
  ],
  css: `/* faq-with-cta */
#faq-wc{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.fwc-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:3rem}
@media(min-width:1024px){.fwc-in{grid-template-columns:1fr 340px;align-items:start}}
.fwc-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.fwc-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:2rem}
.fwc-list{display:flex;flex-direction:column;gap:0;border:1px solid {{BORDER}};border-radius:16px;overflow:hidden}
.fwc-item{border-bottom:1px solid {{BORDER}}}
.fwc-item:last-child{border-bottom:none}
.fwc-btn{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.25rem 1.5rem;cursor:pointer;background:{{BG_CARD}};border:none;font-family:var(--font-body);text-align:left;transition:background .2s}
.fwc-btn:hover{background:{{BG}}}
.fwc-btn.open{background:rgba(99,102,241,.03)}
.fwc-bq{font-weight:700;font-size:.9375rem;color:{{TEXT}}}
.fwc-ch{width:18px;height:18px;color:{{TEXT_MUTED}};transition:transform .3s;flex-shrink:0}
.fwc-btn.open .fwc-ch{transform:rotate(180deg)}
.fwc-ans{display:none;padding:.25rem 1.5rem 1.25rem;font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.65;background:{{BG_CARD}}}
.fwc-ans.open{display:block}
/* CTA Card */
.fwc-card{background:{{PRIMARY}};border-radius:20px;padding:2rem;position:sticky;top:2rem}
.fwc-card-h{font-family:var(--font-heading);font-size:1.25rem;font-weight:800;color:#fff;margin-bottom:.75rem}
.fwc-card-d{font-size:.9375rem;color:rgba(255,255,255,.7);line-height:1.65;margin-bottom:1.5rem}
.fwc-card-btn{display:block;width:100%;padding:13px 20px;background:#fff;color:{{PRIMARY}};border:none;border-radius:12px;font-weight:800;text-align:center;text-decoration:none;transition:all .3s;font-family:var(--font-body)}
.fwc-card-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,0,0,.15)}
.fwc-card-note{font-size:.75rem;color:rgba(255,255,255,.5);text-align:center;margin-top:.875rem}`,
  template: `<section id="faq-wc"><div class="fwc-in"><div class="reveal-left"><span class="fwc-ey">{{eyebrow}}</span><h2 class="fwc-h2">{{heading}}</h2><div class="fwc-list">{{#faqs}}<div class="fwc-item"><button class="fwc-btn" onclick="fwcT(this)"><span class="fwc-bq">{{.q}}</span><svg class="fwc-ch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></button><div class="fwc-ans">{{.a}}</div></div>{{/faqs}}</div></div><div class="reveal-right"><div class="fwc-card"><p class="fwc-card-h">{{ctaHeading}}</p><p class="fwc-card-d">{{ctaDesc}}</p><a href="#contact" class="fwc-card-btn">{{ctaBtn}}</a><p class="fwc-card-note">{{ctaNote}}</p></div></div></div></section><script>function fwcT(b){var d=b.nextElementSibling,o=b.classList.contains('open');document.querySelectorAll('.fwc-btn.open').forEach(x=>{x.classList.remove('open');x.nextElementSibling.classList.remove('open');});if(!o){b.classList.add('open');d.classList.add('open');}}</script>`,
}
