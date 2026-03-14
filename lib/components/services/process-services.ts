import type { ComponentVariant } from '../types'
export const servicesProcessServices: ComponentVariant = {
  id: 'services-process', name: 'Services as Process Steps', section: 'services' as any,
  description: 'Services presented as workflow steps — "how we serve you" narrative builds trust',
  bestFor: ['agency','healthcare','real-estate','education','local-service'], tags: ['process','steps','workflow','narrative','trust','how-we-work'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'services', type: 'array', description: '5 services as steps', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'num', type: 'text', maxWords: 1, description: 'Step number', required: true },
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Step emoji', required: true },
        { name: 'title', type: 'heading', maxWords: 4, description: 'Service/step title', required: true },
        { name: 'desc', type: 'text', maxWords: 20, description: 'Description', required: true },
        { name: 'duration', type: 'text', maxWords: 3, description: 'Duration/timeframe', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* services-process */
#services-pr{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.spr3-in{max-width:1000px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.spr3-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.spr3-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.spr3-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.spr3-h2 .accent-word{color:{{ACCENT}}}
.spr3-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.spr3-steps{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:3rem;position:relative}
.spr3-steps::before{content:'';position:absolute;left:28px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,{{PRIMARY}},{{ACCENT}});opacity:.15}
@media(max-width:767px){.spr3-steps::before{left:24px}}
.spr3-step{display:flex;gap:1.5rem;align-items:flex-start}
.spr3-node{width:56px;height:56px;border-radius:50%;background:{{BG_CARD}};border:2px solid {{PRIMARY}};display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0;position:relative;z-index:1;box-shadow:0 0 0 5px {{BG_SECTION}}}
.spr3-content{flex:1;background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;padding:1.5rem;transition:border-color .3s}
.spr3-content:hover{border-color:{{PRIMARY}}}
.spr3-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}
.spr3-title{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}}}
.spr3-dur{font-size:.75rem;font-weight:600;color:{{TEXT_MUTED}};padding:3px 10px;background:{{BG_SECTION}};border-radius:999px}
.spr3-desc{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.65}
.spr3-ft{text-align:center}
.spr3-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.spr3-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="services-pr"><div class="spr3-in"><div class="spr3-hd"><span class="spr3-ey reveal">{{eyebrow}}</span><h2 class="spr3-h2 reveal reveal-d1">{{heading}}</h2><p class="spr3-sub reveal reveal-d2">{{subtext}}</p></div><div class="spr3-steps reveal-stagger">{{#services}}<div class="spr3-step"><div class="spr3-node">{{.emoji}}</div><div class="spr3-content"><div class="spr3-top"><span class="spr3-title">{{.title}}</span><span class="spr3-dur">{{.duration}}</span></div><p class="spr3-desc">{{.desc}}</p></div></div>{{/services}}</div><div class="spr3-ft reveal"><a href="#contact" class="spr3-cta">{{ctaText}} →</a></div></div></section>`,
}
