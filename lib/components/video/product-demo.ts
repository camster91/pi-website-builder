import type { ComponentVariant } from '../types'
export const videoProductDemo: ComponentVariant = {
  id: 'video-demo', name: 'Video Product Demo Tabs', section: 'video' as any,
  description: 'Tabbed product demo with multiple feature videos, descriptions, and CTA — SaaS walkthrough style',
  bestFor: ['saas','education','agency'], tags: ['demo','tabs','walkthrough','product','feature','saas'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'demos', type: 'array', description: '3 demo tabs', required: true, minItems: 3, maxItems: 4,
      itemSlots: [
        { name: 'tabLabel', type: 'text', maxWords: 2, description: 'Tab label', required: true },
        { name: 'title', type: 'heading', maxWords: 5, description: 'Demo title', required: true },
        { name: 'desc', type: 'text', maxWords: 25, description: 'Demo description', required: true },
        { name: 'duration', type: 'text', maxWords: 1, description: 'Duration', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* video-demo */
#video-dm{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.vdm-in{max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.vdm-hd{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.vdm-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.vdm-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.vdm-h2 .accent-word{color:{{ACCENT}}}
.vdm-tabs{display:flex;gap:.5rem;justify-content:center;margin-bottom:2.5rem;flex-wrap:wrap}
.vdm-tab{padding:8px 20px;border:2px solid {{BORDER}};border-radius:999px;font-size:.875rem;font-weight:700;color:{{TEXT_SEC}};cursor:pointer;transition:all .2s;background:{{BG_CARD}}}
.vdm-tab.active{border-color:{{PRIMARY}};color:{{PRIMARY}};background:rgba(99,102,241,.06)}
.vdm-panel{display:none;grid-template-columns:1fr;gap:3rem}
@media(min-width:1024px){.vdm-panel{grid-template-columns:3fr 2fr}}
.vdm-panel.active{display:grid}
.vdm-video{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/9;background:#0a0f1e;cursor:pointer;box-shadow:0 12px 40px rgba(0,0,0,.12)}
.vdm-video img{width:100%;height:100%;object-fit:cover;display:block}
.vdm-play-ov{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2)}
.vdm-play-btn{width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;transition:transform .3s}
.vdm-video:hover .vdm-play-btn{transform:scale(1.1)}
.vdm-play-btn svg{width:24px;height:24px;color:{{PRIMARY}};margin-left:3px}
.vdm-dur{position:absolute;bottom:.75rem;right:.75rem;background:rgba(0,0,0,.6);color:rgba(255,255,255,.9);font-size:.75rem;font-weight:600;padding:3px 10px;border-radius:999px}
.vdm-text-side{display:flex;flex-direction:column;justify-content:center}
.vdm-demo-title{font-family:var(--font-heading);font-size:1.5rem;font-weight:800;letter-spacing:-.02em;color:{{TEXT}};margin-bottom:1rem}
.vdm-demo-desc{font-size:1rem;color:{{TEXT_SEC}};line-height:1.75;margin-bottom:2rem}
.vdm-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.vdm-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="video-dm"><div class="vdm-in"><div class="vdm-hd"><span class="vdm-ey reveal">{{eyebrow}}</span><h2 class="vdm-h2 reveal reveal-d1">{{heading}}</h2></div><div class="vdm-tabs reveal">{{#demos}}<button class="vdm-tab{{@first}} active{{/first}}" onclick="vdmTab({{@index}},this)">{{.tabLabel}}</button>{{/demos}}</div>{{#demos}}<div class="vdm-panel{{@first}} active{{/first}}" id="vdmP{{@index}}"><div class="vdm-video"><img src="{{SERVICE_IMAGE_0}}" alt="Demo" loading="lazy"><div class="vdm-play-ov"><div class="vdm-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div><span class="vdm-dur">{{.duration}}</span></div><div class="vdm-text-side"><h3 class="vdm-demo-title">{{.title}}</h3><p class="vdm-demo-desc">{{.desc}}</p><a href="#contact" class="vdm-cta">{{ctaText}} →</a></div></div>{{/demos}}</div></section><script>function vdmTab(idx,btn){document.querySelectorAll('.vdm-panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.vdm-tab').forEach(b=>b.classList.remove('active'));document.getElementById('vdmP'+idx).classList.add('active');btn.classList.add('active');}</script>`,
}
