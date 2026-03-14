import type { ComponentVariant } from '../types'
export const servicesIconRow: ComponentVariant = {
  id: 'services-icon-row', name: 'Services Icon Row', section: 'services' as any,
  description: 'Clean horizontal icon row of service categories — simple, scannable, navigation-style',
  bestFor: ['local-service','restaurant','beauty','healthcare','fitness'], tags: ['icon-row','horizontal','categories','clean','navigation'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: false },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'services', type: 'array', description: '5-6 service categories', required: true, minItems: 5, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Emoji', required: true },
        { name: 'title', type: 'text', maxWords: 3, description: 'Category name', required: true },
        { name: 'count', type: 'text', maxWords: 2, description: 'Count (e.g. 12 services)', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'Main CTA', required: true },
  ],
  css: `/* services-icon-row */
#services-ir{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.sir-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.sir-hd{text-align:center;max-width:680px;margin:0 auto 4rem}
.sir-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.sir-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.sir-h2 .accent-word{color:{{ACCENT}}}
.sir-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.sir-row{display:flex;flex-wrap:wrap;justify-content:center;gap:1.25rem;margin-bottom:3rem}
.sir-item{display:flex;flex-direction:column;align-items:center;text-align:center;gap:.75rem;padding:2rem 1.5rem;background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;cursor:pointer;transition:all .3s;min-width:160px;flex:1;max-width:220px}
.sir-item:hover{border-color:{{PRIMARY}};box-shadow:0 8px 24px rgba(0,0,0,.07);transform:translateY(-3px)}
.sir-emoji{font-size:2.25rem}
.sir-title{font-family:var(--font-heading);font-size:.9375rem;font-weight:700;color:{{TEXT}}}
.sir-count{font-size:.75rem;color:{{TEXT_MUTED}};background:{{BG_SECTION}};padding:2px 10px;border-radius:999px}
.sir-ft{text-align:center}
.sir-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.sir-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="services-ir"><div class="sir-in"><div class="sir-hd"><span class="sir-ey reveal">{{eyebrow}}</span><h2 class="sir-h2 reveal reveal-d1">{{heading}}</h2><p class="sir-sub reveal reveal-d2">{{subtext}}</p></div><div class="sir-row reveal-stagger">{{#services}}<div class="sir-item"><span class="sir-emoji">{{.emoji}}</span><span class="sir-title">{{.title}}</span><span class="sir-count">{{.count}}</span></div>{{/services}}</div><div class="sir-ft reveal"><a href="#contact" class="sir-cta">{{ctaText}} →</a></div></div></section>`,
}
