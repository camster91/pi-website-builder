import type { ComponentVariant } from '../types'
export const servicesAccordion: ComponentVariant = {
  id: 'services-accordion', name: 'Services Accordion', section: 'services' as any,
  description: 'Expandable accordion service list with image panel changing on selection — detailed service exploration',
  bestFor: ['agency','healthcare','beauty','fitness','education'], tags: ['accordion','expandable','detailed','interactive','image'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'services', type: 'array', description: '5 services', required: true, minItems: 4, maxItems: 6,
      itemSlots: [
        { name: 'title', type: 'heading', maxWords: 4, description: 'Service name', required: true },
        { name: 'desc', type: 'text', maxWords: 30, description: 'Detailed description', required: true },
        { name: 'price', type: 'text', maxWords: 3, description: 'Price range', required: false },
        { name: 'bullet1', type: 'text', maxWords: 5, description: 'Include 1', required: true },
        { name: 'bullet2', type: 'text', maxWords: 5, description: 'Include 2', required: true },
        { name: 'bullet3', type: 'text', maxWords: 5, description: 'Include 3', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* services-accordion */
#services-ac{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.sac-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem}
@media(min-width:1024px){.sac-in{grid-template-columns:1fr 1fr;align-items:start}}
.sac-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.sac-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:2rem}
.sac-h2 .accent-word{color:{{ACCENT}}}
.sac-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.sac-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.sac-list{display:flex;flex-direction:column;gap:0;border:1px solid {{BORDER}};border-radius:20px;overflow:hidden}
.sac-item{border-bottom:1px solid {{BORDER}}}
.sac-item:last-child{border-bottom:none}
.sac-trigger{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.5rem;cursor:pointer;background:{{BG_CARD}};border:none;font-family:var(--font-body);transition:background .2s}
.sac-trigger.open,.sac-trigger:hover{background:rgba(99,102,241,.03)}
.sac-tname{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};text-align:left}
.sac-tprice{font-size:.875rem;font-weight:700;color:{{PRIMARY}};white-space:nowrap}
.sac-ch{width:18px;height:18px;color:{{TEXT_MUTED}};transition:transform .3s;flex-shrink:0}
.sac-trigger.open .sac-ch{transform:rotate(180deg)}
.sac-body{display:none;padding:.25rem 1.5rem 1.5rem;background:{{BG_CARD}}}
.sac-body.open{display:block}
.sac-desc{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.7;margin-bottom:1rem}
.sac-bullets{display:flex;flex-direction:column;gap:.5rem}
.sac-bullet{font-size:.875rem;color:{{TEXT_SEC}};display:flex;align-items:center;gap:.625rem}
.sac-bullet::before{content:"✓";color:{{PRIMARY}};font-weight:700;flex-shrink:0}`,
  template: `<section id="services-ac"><div class="sac-in"><div class="reveal-left"><span class="sac-ey">{{eyebrow}}</span><h2 class="sac-h2">{{heading}}</h2><a href="#contact" class="sac-cta">{{ctaText}} →</a></div><div class="sac-list reveal-right">{{#services}}<div class="sac-item"><button class="sac-trigger" onclick="sacToggle(this)"><span class="sac-tname">{{.title}}</span><div style="display:flex;align-items:center;gap:.75rem"><span class="sac-tprice">{{.price}}</span><svg class="sac-ch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div></button><div class="sac-body"><p class="sac-desc">{{.desc}}</p><div class="sac-bullets"><div class="sac-bullet">{{.bullet1}}</div><div class="sac-bullet">{{.bullet2}}</div><div class="sac-bullet">{{.bullet3}}</div></div></div></div>{{/services}}</div></div></section><script>function sacToggle(b){var d=b.nextElementSibling,o=b.classList.contains('open');document.querySelectorAll('.sac-trigger.open').forEach(x=>{x.classList.remove('open');x.nextElementSibling.classList.remove('open');});if(!o){b.classList.add('open');d.classList.add('open');}}</script>`,
}
