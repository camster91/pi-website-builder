import type { ComponentVariant } from '../types'
export const galleryBeforeAfter: ComponentVariant = {
  id: 'gallery-before-after', name: 'Gallery Before & After', section: 'gallery' as any,
  description: '2-3 before/after comparison cards with drag slider — beauty, fitness, renovation transformations',
  bestFor: ['beauty','fitness','healthcare','real-estate','local-service'], tags: ['before-after','transformation','slider','comparison','results','visual'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'cases', type: 'array', description: '3 before/after cases', required: true, minItems: 2, maxItems: 3,
      itemSlots: [
        { name: 'title', type: 'text', maxWords: 4, description: 'Case title', required: true },
        { name: 'desc', type: 'text', maxWords: 12, description: 'Short description', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-before-after */
#gallery-ba{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.gba-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gba-hd{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.gba-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gba-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.gba-h2 .accent-word{color:{{ACCENT}}}
.gba-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.gba-grid{display:grid;grid-template-columns:1fr;gap:2rem;margin-bottom:2.5rem}
@media(min-width:768px){.gba-grid{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1024px){.gba-grid{grid-template-columns:repeat(3,1fr)}}
.gba-case{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;overflow:hidden}
/* Comparison visual */
.gba-compare{position:relative;aspect-ratio:4/3;overflow:hidden;cursor:col-resize;user-select:none}
.gba-before,.gba-after{position:absolute;inset:0;width:100%;height:100%}
.gba-before{background:linear-gradient(135deg,#374151,#6b7280)}
.gba-after{background:linear-gradient(135deg,{{PRIMARY}},{{ACCENT}});clip-path:inset(0 50% 0 0)}
.gba-before img,.gba-after img{width:100%;height:100%;object-fit:cover;display:block}
.gba-divider{position:absolute;top:0;bottom:0;left:50%;width:3px;background:#fff;transform:translateX(-50%);z-index:2;pointer-events:none}
.gba-divider::before{content:'◀ ▶';position:absolute;top:50%;transform:translateY(-50%);background:#fff;color:#374151;font-size:.625rem;font-weight:700;padding:6px 8px;border-radius:999px;white-space:nowrap;left:50%;transform:translate(-50%,-50%)}
.gba-labels{position:absolute;bottom:.75rem;display:flex;justify-content:space-between;width:100%;padding:0 .75rem;z-index:3;pointer-events:none}
.gba-lbl{background:rgba(0,0,0,.6);color:#fff;font-size:.6875rem;font-weight:700;padding:3px 10px;border-radius:999px}
/* Body */
.gba-body{padding:1.25rem}
.gba-title{font-family:var(--font-heading);font-size:1rem;font-weight:700;color:{{TEXT}};margin-bottom:.375rem}
.gba-desc{font-size:.875rem;color:{{TEXT_SEC}};line-height:1.6}
.gba-ft{text-align:center}
.gba-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gba-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="gallery-ba"><div class="gba-in"><div class="gba-hd"><span class="gba-ey reveal">{{eyebrow}}</span><h2 class="gba-h2 reveal reveal-d1">{{heading}}</h2><p class="gba-sub reveal reveal-d2">{{subtext}}</p></div><div class="gba-grid reveal-stagger">{{#cases}}<div class="gba-case"><div class="gba-compare"><div class="gba-before"><img src="{{ABOUT_IMAGE}}" alt="Before" loading="lazy"></div><div class="gba-after"><img src="{{SERVICE_IMAGE_0}}" alt="After" loading="lazy"></div><div class="gba-divider"></div><div class="gba-labels"><span class="gba-lbl">Before</span><span class="gba-lbl">After</span></div></div><div class="gba-body"><div class="gba-title">{{.title}}</div><div class="gba-desc">{{.desc}}</div></div></div>{{/cases}}</div><div class="gba-ft reveal"><a href="#contact" class="gba-cta">{{ctaText}} →</a></div></div></section>`,
}
