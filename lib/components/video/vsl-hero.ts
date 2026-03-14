import type { ComponentVariant } from '../types'
export const videoVslHero: ComponentVariant = {
  id: 'video-vsl', name: 'Video Sales Letter Hero', section: 'video' as any,
  description: 'VSL-style large video with headline above, trust strip below — conversion-focused sales page section',
  bestFor: ['fitness','education','saas','ecommerce'], tags: ['vsl','sales','conversion','headline','trust','above-fold'],
  slots: [
    { name: 'headline', type: 'heading', maxWords: 10, description: 'Bold headline above video', required: true },
    { name: 'headlineAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subheadline', type: 'text', maxWords: 20, description: 'Subheadline', required: true },
    { name: 'videoDuration', type: 'text', maxWords: 2, description: 'Duration (e.g. 8 min)', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'CTA below video', required: true },
    { name: 'trust1', type: 'text', maxWords: 3, description: 'Trust badge 1', required: false },
    { name: 'trust2', type: 'text', maxWords: 3, description: 'Trust badge 2', required: false },
    { name: 'trust3', type: 'text', maxWords: 3, description: 'Trust badge 3', required: false },
  ],
  css: `/* video-vsl */
#video-vsl{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.vvsl-in{max-width:860px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);text-align:center}
.vvsl-headline{font-family:var(--font-heading);font-size:clamp(2rem,5vw,4rem);font-weight:900;letter-spacing:-.05em;line-height:1.0;color:{{TEXT}};margin-bottom:1.25rem}
.vvsl-headline .accent-word{color:{{PRIMARY}}}
.vvsl-sub{font-size:1.125rem;color:{{TEXT_SEC}};line-height:1.75;margin-bottom:2.5rem;max-width:680px;margin-left:auto;margin-right:auto}
.vvsl-video{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/9;background:#0a0f1e;box-shadow:0 24px 64px rgba(0,0,0,.2);margin-bottom:2rem;cursor:pointer}
.vvsl-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.vvsl-play-overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;background:rgba(0,0,0,.25)}
.vvsl-play-btn{width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,.95);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(0,0,0,.3);transition:transform .3s}
.vvsl-video:hover .vvsl-play-btn{transform:scale(1.12)}
.vvsl-play-btn svg{width:32px;height:32px;color:{{PRIMARY}};margin-left:4px}
.vvsl-dur{background:rgba(0,0,0,.6);color:rgba(255,255,255,.9);font-size:.875rem;font-weight:600;padding:4px 16px;border-radius:999px}
.vvsl-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;background:{{PRIMARY}};color:#fff;border-radius:14px;font-weight:800;font-size:1.0625rem;text-decoration:none;transition:all .3s;margin-bottom:2rem;box-shadow:0 8px 32px rgba(99,102,241,.35)}
.vvsl-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-3px)}
.vvsl-trust{display:flex;justify-content:center;gap:2rem;flex-wrap:wrap}
.vvsl-trust-item{display:flex;align-items:center;gap:6px;font-size:.875rem;color:{{TEXT_MUTED}};font-weight:500}
.vvsl-trust-item::before{content:"✓";color:{{PRIMARY}};font-weight:700}`,
  template: `<section id="video-vsl"><div class="vvsl-in"><h2 class="vvsl-headline reveal">{{headline}}</h2><p class="vvsl-sub reveal reveal-d1">{{subheadline}}</p><div class="vvsl-video reveal reveal-d2"><div class="vvsl-thumb"><img src="{{SERVICE_IMAGE_0}}" alt="Video thumbnail" loading="lazy"></div><div class="vvsl-play-overlay"><div class="vvsl-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><span class="vvsl-dur">{{videoDuration}}</span></div></div><a href="#contact" class="vvsl-cta reveal reveal-d3">{{ctaText}} →</a><div class="vvsl-trust reveal"><span class="vvsl-trust-item">{{trust1}}</span><span class="vvsl-trust-item">{{trust2}}</span><span class="vvsl-trust-item">{{trust3}}</span></div></div></section>`,
}
