import type { ComponentVariant } from '../types'
export const videoGrid: ComponentVariant = {
  id: 'video-grid', name: 'Video Grid', section: 'video' as any,
  description: 'Grid of 4 video thumbnails with category badges and play counts — content archive or channel showcase',
  bestFor: ['education','saas','fitness','agency'], tags: ['grid','archive','channel','thumbnails','content','browse'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'videos', type: 'array', description: '4 videos', required: true, minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'title', type: 'text', maxWords: 7, description: 'Video title', required: true },
        { name: 'category', type: 'text', maxWords: 2, description: 'Category', required: true },
        { name: 'duration', type: 'text', maxWords: 1, description: 'Duration', required: true },
        { name: 'views', type: 'text', maxWords: 2, description: 'View count', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: false },
  ],
  css: `/* video-grid */
#video-gd{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.vgd-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.vgd-hd{text-align:center;max-width:640px;margin:0 auto 3.5rem}
.vgd-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.vgd-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.vgd-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-bottom:2.5rem}
@media(min-width:640px){.vgd-grid{grid-template-columns:repeat(2,1fr)}}
.vgd-card{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:16px;overflow:hidden;cursor:pointer;transition:transform .3s,box-shadow .3s}
.vgd-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.1)}
.vgd-thumb{position:relative;aspect-ratio:16/9;overflow:hidden}
.vgd-card:nth-child(1) .vgd-thumb{background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.vgd-card:nth-child(2) .vgd-thumb{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.vgd-card:nth-child(3) .vgd-thumb{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.vgd-card:nth-child(4) .vgd-thumb{background:linear-gradient(135deg,#06b6d4,#0891b2)}
.vgd-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.vgd-card:hover .vgd-thumb img{transform:scale(1.06)}
.vgd-play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2);opacity:0;transition:opacity .3s}
.vgd-card:hover .vgd-play{opacity:1}
.vgd-play-btn{width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center}
.vgd-play-btn svg{width:20px;height:20px;color:{{PRIMARY}};margin-left:3px}
.vgd-dur{position:absolute;bottom:.5rem;right:.5rem;background:rgba(0,0,0,.75);color:#fff;font-size:.6875rem;font-weight:600;padding:2px 8px;border-radius:4px}
.vgd-body{padding:1.25rem}
.vgd-cat{font-size:.75rem;font-weight:700;color:{{PRIMARY}};margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.06em}
.vgd-title{font-family:var(--font-heading);font-size:.9375rem;font-weight:700;color:{{TEXT}};line-height:1.3;margin-bottom:.5rem}
.vgd-views{font-size:.75rem;color:{{TEXT_MUTED}}}
.vgd-ft{text-align:center}
.vgd-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.vgd-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="video-gd"><div class="vgd-in"><div class="vgd-hd"><span class="vgd-ey reveal">{{eyebrow}}</span><h2 class="vgd-h2 reveal reveal-d1">{{heading}}</h2></div><div class="vgd-grid reveal-stagger">{{#videos}}<div class="vgd-card"><div class="vgd-thumb"><img src="{{SERVICE_IMAGE_0}}" alt="{{.title}}" loading="lazy"><div class="vgd-play"><div class="vgd-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div><span class="vgd-dur">{{.duration}}</span></div><div class="vgd-body"><div class="vgd-cat">{{.category}}</div><div class="vgd-title">{{.title}}</div><div class="vgd-views">{{.views}} views</div></div></div>{{/videos}}</div><div class="vgd-ft reveal"><a href="#contact" class="vgd-cta">{{ctaText}} →</a></div></div></section>`,
}
