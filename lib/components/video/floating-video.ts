import type { ComponentVariant } from '../types'
export const videoFloating: ComponentVariant = {
  id: 'video-floating', name: 'Video Floating Split', section: 'video' as any,
  description: 'Text content on left with floating elevated video card on right — modern SaaS feature section feel',
  bestFor: ['saas','agency','education'], tags: ['floating','split','elevated','card','modern','feature'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 25, description: 'Description', required: true },
    { name: 'duration', type: 'text', maxWords: 2, description: 'Duration', required: false },
    { name: 'videoCaption', type: 'text', maxWords: 6, description: 'Video caption', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
    { name: 'ctaNote', type: 'text', maxWords: 8, description: 'Note below CTA', required: false },
    { name: 'f1', type: 'text', maxWords: 5, description: 'Feature highlight 1', required: true },
    { name: 'f2', type: 'text', maxWords: 5, description: 'Feature highlight 2', required: true },
    { name: 'f3', type: 'text', maxWords: 5, description: 'Feature highlight 3', required: true },
  ],
  css: `/* video-floating */
#video-flt{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.vflt-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem);display:grid;grid-template-columns:1fr;gap:4rem;align-items:center}
@media(min-width:1024px){.vflt-in{grid-template-columns:1fr 1fr}}
.vflt-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:1rem}
.vflt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1.25rem}
.vflt-h2 .accent-word{color:{{ACCENT}}}
.vflt-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.75;margin-bottom:2rem}
.vflt-features{display:flex;flex-direction:column;gap:.75rem;margin-bottom:2rem}
.vflt-feat{display:flex;align-items:center;gap:.625rem;font-size:.9375rem;color:{{TEXT_SEC}}}
.vflt-feat::before{content:"✓";color:{{PRIMARY}};font-weight:700;flex-shrink:0}
.vflt-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s;margin-bottom:.875rem}
.vflt-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}
.vflt-note{font-size:.8125rem;color:{{TEXT_MUTED}}}
/* Floating video */
.vflt-video-wrap{position:relative;padding:1.5rem 1.5rem 0}
.vflt-shadow{position:absolute;bottom:0;left:1.5rem;right:1.5rem;height:60px;background:rgba(99,102,241,.15);filter:blur(20px);border-radius:50%;transform:translateY(30px)}
.vflt-video{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/9;background:#0a0f1e;cursor:pointer;box-shadow:0 24px 60px rgba(0,0,0,.15)}
.vflt-video img{width:100%;height:100%;object-fit:cover;display:block}
.vflt-play-ov{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.15)}
.vflt-play-btn{width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;transition:transform .3s}
.vflt-video:hover .vflt-play-btn{transform:scale(1.1)}
.vflt-play-btn svg{width:24px;height:24px;color:{{PRIMARY}};margin-left:3px}
.vflt-dur{position:absolute;bottom:.75rem;right:.75rem;background:rgba(0,0,0,.6);color:#fff;font-size:.75rem;font-weight:600;padding:3px 10px;border-radius:999px}
.vflt-cap{text-align:center;font-size:.8125rem;color:{{TEXT_MUTED}};margin-top:1rem}`,
  template: `<section id="video-flt"><div class="vflt-in"><div class="reveal-left"><span class="vflt-ey">{{eyebrow}}</span><h2 class="vflt-h2">{{heading}}</h2><p class="vflt-sub">{{subtext}}</p><div class="vflt-features"><div class="vflt-feat">{{f1}}</div><div class="vflt-feat">{{f2}}</div><div class="vflt-feat">{{f3}}</div></div><a href="#contact" class="vflt-cta">{{ctaText}} →</a><p class="vflt-note">{{ctaNote}}</p></div><div class="vflt-video-wrap reveal-right"><div class="vflt-shadow"></div><div class="vflt-video"><img src="{{SERVICE_IMAGE_0}}" alt="Video" loading="lazy"><div class="vflt-play-ov"><div class="vflt-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div><span class="vflt-dur">{{duration}}</span></div><p class="vflt-cap">{{videoCaption}}</p></div></div></section>`,
}
