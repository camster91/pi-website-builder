import type { ComponentVariant } from '../types'
export const videoYoutubeEmbed: ComponentVariant = {
  id: 'video-youtube', name: 'Video YouTube Embed', section: 'video' as any,
  description: 'YouTube/video embed with lazy-load poster, click to play, heading, and support text',
  bestFor: ['saas','education','nonprofit','healthcare','agency'], tags: ['youtube','embed','lazy','poster','click-to-play'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'subtext', type: 'subheading', maxWords: 20, description: 'Subtext', required: true },
    { name: 'videoId', type: 'text', maxWords: 1, description: 'YouTube video ID', required: false },
    { name: 'duration', type: 'text', maxWords: 2, description: 'Duration', required: false },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA after video', required: true },
  ],
  css: `/* video-youtube */
#video-yt{background:{{BG}};padding:clamp(4rem,8vw,7rem) 0}
.vyt-in{max-width:960px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.vyt-hd{text-align:center;max-width:680px;margin:0 auto 3rem}
.vyt-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.vyt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}};margin-bottom:1rem}
.vyt-h2 .accent-word{color:{{ACCENT}}}
.vyt-sub{font-size:1.0625rem;color:{{TEXT_SEC}};line-height:1.7}
.vyt-embed{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/9;background:#000;box-shadow:0 20px 60px rgba(0,0,0,.15);margin-bottom:2rem;cursor:pointer}
.vyt-poster{width:100%;height:100%;object-fit:cover;display:block;transition:opacity .3s}
.vyt-play-layer{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1rem;background:rgba(0,0,0,.2)}
.vyt-play-circle{width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.95);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 32px rgba(0,0,0,.25);transition:transform .3s}
.vyt-embed:hover .vyt-play-circle{transform:scale(1.12)}
.vyt-play-circle svg{width:28px;height:28px;color:#ff0000;margin-left:4px}
.vyt-yt-badge{background:#ff0000;color:#fff;font-size:.75rem;font-weight:700;padding:3px 12px;border-radius:4px}
.vyt-dur{background:rgba(0,0,0,.65);color:#fff;font-size:.75rem;font-weight:600;padding:3px 10px;border-radius:999px;position:absolute;bottom:.75rem;right:.75rem}
.vyt-ft{text-align:center}
.vyt-cta{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;background:{{PRIMARY}};color:#fff;border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.vyt-cta:hover{background:{{PRIMARY_DARK}};transform:translateY(-2px)}`,
  template: `<section id="video-yt"><div class="vyt-in"><div class="vyt-hd"><span class="vyt-ey reveal">{{eyebrow}}</span><h2 class="vyt-h2 reveal reveal-d1">{{heading}}</h2><p class="vyt-sub reveal reveal-d2">{{subtext}}</p></div><div class="vyt-embed reveal" onclick="this.innerHTML='<iframe width=\\'100%\\' height=\\'100%\\' src=\\'https://www.youtube.com/embed/{{videoId}}?autoplay=1\\' frameborder=\\'0\\' allow=\\'autoplay\\' allowfullscreen style=\\'position:absolute;inset:0\\'></iframe>'"><img class="vyt-poster" src="{{SERVICE_IMAGE_0}}" alt="Video thumbnail" loading="lazy"><div class="vyt-play-layer"><div class="vyt-play-circle"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div><span class="vyt-yt-badge">YouTube</span></div><span class="vyt-dur">{{duration}}</span></div><div class="vyt-ft reveal"><a href="#contact" class="vyt-cta">{{ctaText}} →</a></div></div></section>`,
}
