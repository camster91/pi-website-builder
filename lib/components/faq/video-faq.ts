import type { ComponentVariant } from '../types'
export const faqVideoFaq: ComponentVariant = {
  id: 'faq-video', name: 'FAQ Video Answers', section: 'faq',
  description: 'FAQ with video thumbnail answers — click to reveal video, builds trust especially for complex topics',
  bestFor: ['saas','education','healthcare','fitness'], tags: ['video','visual','media','interactive','engagement','trust'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'faqs', type: 'array', description: '4 video FAQ items', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'q', type: 'text', maxWords: 10, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 25, description: 'Text answer', required: true },
        { name: 'duration', type: 'text', maxWords: 1, description: 'Video duration', required: false },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Expert initials', required: false },
      ] },
    { name: 'moreText', type: 'text', maxWords: 6, description: 'More questions link text', required: false },
  ],
  css: `/* faq-video */
#faq-vd{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.fvd-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.fvd-hd{text-align:center;max-width:640px;margin:0 auto 3.5rem}
.fvd-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.fvd-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.fvd-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;margin-bottom:2rem}
@media(min-width:768px){.fvd-grid{grid-template-columns:repeat(2,1fr)}}
.fvd-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;overflow:hidden}
.fvd-thumb{position:relative;aspect-ratio:16/9;background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}});display:flex;align-items:center;justify-content:center;cursor:pointer}
.fvd-play{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;transition:transform .3s}
.fvd-card:hover .fvd-play{transform:scale(1.1)}
.fvd-play svg{width:20px;height:20px;color:{{PRIMARY}};margin-left:3px}
.fvd-dur{position:absolute;bottom:.75rem;right:.75rem;background:rgba(0,0,0,.6);color:rgba(255,255,255,.9);font-size:.75rem;font-weight:600;padding:2px 10px;border-radius:999px}
.fvd-init{position:absolute;bottom:.75rem;left:.75rem;width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.15);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6875rem;font-weight:800}
.fvd-body{padding:1.25rem}
.fvd-q{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};margin-bottom:.5rem}
.fvd-a{font-size:.875rem;color:{{TEXT_SEC}};line-height:1.6}
.fvd-ft{text-align:center}
.fvd-more{font-size:.9375rem;color:{{PRIMARY}};font-weight:700;text-decoration:none}`,
  template: `<section id="faq-vd"><div class="fvd-in"><div class="fvd-hd"><span class="fvd-ey reveal">{{eyebrow}}</span><h2 class="fvd-h2 reveal reveal-d1">{{heading}}</h2></div><div class="fvd-grid reveal-stagger">{{#faqs}}<div class="fvd-card"><div class="fvd-thumb"><div class="fvd-play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><span class="fvd-dur">{{.duration}}</span><div class="fvd-init">{{.initials}}</div></div><div class="fvd-body"><p class="fvd-q">{{.q}}</p><p class="fvd-a">{{.a}}</p></div></div>{{/faqs}}</div><div class="fvd-ft reveal"><a href="#contact" class="fvd-more">{{moreText}} →</a></div></div></section>`,
}
