import type { ComponentVariant } from '../types'
export const videoBgVideo: ComponentVariant = {
  id: 'video-bg', name: 'Video Background Section', section: 'video' as any,
  description: 'Looping background video section with overlay text and CTA — immersive, cinematic storytelling',
  bestFor: ['restaurant','fitness','beauty','agency'], tags: ['background','looping','cinematic','immersive','ambient','overlay'],
  slots: [
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Heading over video', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext over video', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA button', required: true },
    { name: 'ctaNote', type: 'text', maxWords: 6, description: 'Note below CTA', required: false },
  ],
  css: `/* video-bg */
#video-bg{position:relative;overflow:hidden;min-height:80vh;display:flex;align-items:center;justify-content:center}
.vbg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
.vbg-fallback{position:absolute;inset:0;background:linear-gradient(135deg,#0a0f1e,#1a0f3e);z-index:0}
.vbg-overlay{position:absolute;inset:0;background:rgba(0,0,0,.6);z-index:1}
.vbg-inner{position:relative;z-index:2;text-align:center;max-width:860px;padding:5rem clamp(1.5rem,5vw,3rem)}
.vbg-h2{font-family:var(--font-heading);font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-.06em;line-height:1.0;color:#fff;margin-bottom:1.25rem;text-shadow:0 4px 20px rgba(0,0,0,.4)}
.vbg-h2 .accent-word{color:{{ACCENT}}}
.vbg-sub{font-size:clamp(1rem,1.75vw,1.25rem);color:rgba(255,255,255,.75);line-height:1.7;margin-bottom:2.5rem;text-shadow:0 2px 8px rgba(0,0,0,.3)}
.vbg-cta{display:inline-flex;align-items:center;gap:10px;padding:16px 40px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:800;font-size:1.0625rem;text-decoration:none;transition:all .3s;margin-bottom:1rem;box-shadow:0 8px 32px rgba(99,102,241,.4)}
.vbg-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-3px)}
.vbg-note{font-size:.8125rem;color:rgba(255,255,255,.45)}`,
  template: `<section id="video-bg"><div class="vbg-fallback"></div><img class="vbg-video" src="{{HERO_IMAGE}}" alt="Background" style="object-fit:cover"><div class="vbg-overlay"></div><div class="vbg-inner"><h2 class="vbg-h2 reveal">{{heading}}</h2><p class="vbg-sub reveal reveal-d1">{{subtext}}</p><a href="#contact" class="vbg-cta reveal reveal-d2">{{ctaText}} →</a><p class="vbg-note reveal">{{ctaNote}}</p></div></section>`,
}
