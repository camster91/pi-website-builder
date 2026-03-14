import type { ComponentVariant } from '../types'
export const videoStudioStyle: ComponentVariant = {
  id: 'video-studio', name: 'Video Studio Dark Style', section: 'video' as any,
  description: 'Dark studio-feel video section with cinematic ratio, filmmaker aesthetic, dark bg with particle dots',
  bestFor: ['agency','fitness','beauty','portfolio'], tags: ['studio','dark','cinematic','filmmaker','minimal','premium'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading (on dark)', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 18, description: 'Subtext', required: true },
    { name: 'videoCaption', type: 'text', maxWords: 6, description: 'Video caption', required: false },
    { name: 'duration', type: 'text', maxWords: 2, description: 'Duration', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* video-studio */
#video-st{background:#080c14;padding:clamp(4rem,8vw,7rem) 0;position:relative;overflow:hidden}
.vst-dots{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.04) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
.vst-in{position:relative;z-index:1;max-width:1100px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.vst-hd{text-align:center;max-width:680px;margin:0 auto 3.5rem}
.vst-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{ACCENT}};margin-bottom:.875rem}
.vst-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:900;letter-spacing:-.04em;line-height:1.05;color:#fff;margin-bottom:1rem}
.vst-h2 .accent-word{color:{{PRIMARY}}}
.vst-sub{font-size:1.0625rem;color:rgba(255,255,255,.4);line-height:1.7}
.vst-video{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:21/9;background:#0d111a;border:1px solid rgba(255,255,255,.06);box-shadow:0 32px 80px rgba(0,0,0,.5);margin-bottom:2rem;cursor:pointer}
.vst-video img{width:100%;height:100%;object-fit:cover;display:block;opacity:.7}
.vst-play-ov{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.vst-play-circle{width:80px;height:80px;border-radius:50%;border:2px solid rgba(255,255,255,.3);display:flex;align-items:center;justify-content:center;transition:all .3s}
.vst-video:hover .vst-play-circle{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.6)}
.vst-play-circle svg{width:32px;height:32px;color:#fff;margin-left:4px}
.vst-meta{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;margin-bottom:2.5rem}
.vst-caption{font-size:.875rem;color:rgba(255,255,255,.4)}
.vst-dur{font-size:.875rem;color:rgba(255,255,255,.4);background:rgba(255,255,255,.06);padding:4px 12px;border-radius:999px}
.vst-ft{text-align:center}
.vst-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.vst-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="video-st"><div class="vst-dots"></div><div class="vst-in"><div class="vst-hd"><span class="vst-ey reveal">{{eyebrow}}</span><h2 class="vst-h2 reveal reveal-d1">{{heading}}</h2><p class="vst-sub reveal reveal-d2">{{subtext}}</p></div><div class="vst-video reveal"><img src="{{SERVICE_IMAGE_0}}" alt="Video" loading="lazy"><div class="vst-play-ov"><div class="vst-play-circle"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div><div class="vst-meta reveal"><span class="vst-caption">{{videoCaption}}</span><span class="vst-dur">{{duration}}</span></div><div class="vst-ft reveal"><a href="#contact" class="vst-cta">{{ctaText}} →</a></div></div></section>`,
}
