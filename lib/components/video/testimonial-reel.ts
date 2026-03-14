import type { ComponentVariant } from '../types'
export const videoTestimonialReel: ComponentVariant = {
  id: 'video-testimonials', name: 'Video Testimonial Reel', section: 'video' as any,
  description: 'Grid of video testimonial thumbnails with play button, name, and result stat — authentic social proof',
  bestFor: ['fitness','beauty','education','saas','ecommerce'], tags: ['testimonials','reel','authentic','results','play','grid'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'videos', type: 'array', description: '3 video testimonials', required: true, minItems: 3, maxItems: 4,
      itemSlots: [
        { name: 'name', type: 'text', maxWords: 3, description: 'Person name', required: true },
        { name: 'result', type: 'text', maxWords: 5, description: 'Key result achieved', required: true },
        { name: 'duration', type: 'text', maxWords: 1, description: 'Video duration', required: false },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Initials', required: true },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'CTA', required: true },
  ],
  css: `/* video-testimonials */
#video-tr{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.vtr-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.vtr-hd{text-align:center;max-width:640px;margin:0 auto 3.5rem}
.vtr-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.vtr-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.vtr-h2 .accent-word{color:{{ACCENT}}}
.vtr-grid{display:grid;grid-template-columns:1fr;gap:1.5rem;margin-bottom:2.5rem}
@media(min-width:768px){.vtr-grid{grid-template-columns:repeat(3,1fr)}}
.vtr-card{border-radius:20px;overflow:hidden;background:{{BG_CARD}};border:1px solid {{BORDER}};cursor:pointer;transition:transform .3s,box-shadow .3s}
.vtr-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.1)}
.vtr-thumb{position:relative;aspect-ratio:9/16}
.vtr-card:nth-child(1) .vtr-thumb{background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.vtr-card:nth-child(2) .vtr-thumb{background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.vtr-card:nth-child(3) .vtr-thumb{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.vtr-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.vtr-initials{position:absolute;top:50%;left:50%;transform:translate(-50%,-60%);font-family:var(--font-heading);font-size:5rem;font-weight:900;color:rgba(255,255,255,.2)}
.vtr-play{position:absolute;bottom:1rem;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.9);border:none;border-radius:50%;width:52px;height:52px;display:flex;align-items:center;justify-content:center;transition:transform .3s}
.vtr-card:hover .vtr-play{transform:translateX(-50%) scale(1.1)}
.vtr-play svg{width:20px;height:20px;color:{{PRIMARY}};margin-left:3px}
.vtr-dur{position:absolute;top:.75rem;right:.75rem;background:rgba(0,0,0,.6);color:rgba(255,255,255,.9);font-size:.75rem;font-weight:600;padding:3px 10px;border-radius:999px}
.vtr-body{padding:1.25rem}
.vtr-name{font-weight:700;font-size:1rem;color:{{TEXT}};margin-bottom:.25rem}
.vtr-result{font-size:.875rem;color:{{PRIMARY}};font-weight:600}
.vtr-ft{text-align:center}
.vtr-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.vtr-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="video-tr"><div class="vtr-in"><div class="vtr-hd"><span class="vtr-ey reveal">{{eyebrow}}</span><h2 class="vtr-h2 reveal reveal-d1">{{heading}}</h2></div><div class="vtr-grid reveal-stagger">{{#videos}}<div class="vtr-card"><div class="vtr-thumb"><img src="{{ABOUT_IMAGE}}" alt="{{.name}}" loading="lazy"><div class="vtr-initials">{{.initials}}</div><button class="vtr-play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></button><span class="vtr-dur">{{.duration}}</span></div><div class="vtr-body"><div class="vtr-name">{{.name}}</div><div class="vtr-result">{{.result}}</div></div></div>{{/videos}}</div><div class="vtr-ft reveal"><a href="#contact" class="vtr-cta">{{ctaText}} →</a></div></div></section>`,
}
