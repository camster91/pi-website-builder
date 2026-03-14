import type { ComponentVariant } from '../types'
export const videoMultiTabs: ComponentVariant = {
  id: 'video-multi', name: 'Video Multi Playlist', section: 'video' as any,
  description: 'Video playlist with thumbnail sidebar, active video on left, list on right — education, tutorials, masterclass',
  bestFor: ['education','saas','fitness'], tags: ['playlist','sidebar','thumbnails','education','masterclass','tutorials'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'videos', type: 'array', description: '4 video list items', required: true, minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'title', type: 'text', maxWords: 6, description: 'Video title', required: true },
        { name: 'duration', type: 'text', maxWords: 1, description: 'Duration', required: true },
        { name: 'desc', type: 'text', maxWords: 15, description: 'Video description', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: false },
  ],
  css: `/* video-multi */
#video-mt{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.vmt-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.vmt-hd{margin-bottom:2.5rem}
.vmt-ey{display:block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.vmt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.vmt-layout{display:grid;grid-template-columns:1fr;gap:1.5rem}
@media(min-width:1024px){.vmt-layout{grid-template-columns:3fr 2fr}}
.vmt-main-video{position:relative;border-radius:20px;overflow:hidden;aspect-ratio:16/9;background:#0a0f1e;cursor:pointer;box-shadow:0 12px 40px rgba(0,0,0,.12)}
.vmt-main-video img{width:100%;height:100%;object-fit:cover;display:block}
.vmt-play-ov{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2)}
.vmt-play-btn{width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;transition:transform .3s}
.vmt-main-video:hover .vmt-play-btn{transform:scale(1.1)}
.vmt-play-btn svg{width:26px;height:26px;color:{{PRIMARY}};margin-left:3px}
.vmt-playlist{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;overflow:hidden}
.vmt-list-title{padding:1.25rem 1.5rem;border-bottom:1px solid {{BORDER}};font-family:var(--font-heading);font-size:.9375rem;font-weight:700;color:{{TEXT}}}
.vmt-list{display:flex;flex-direction:column}
.vmt-item{display:flex;gap:1rem;padding:1rem 1.5rem;border-bottom:1px solid {{BORDER}};cursor:pointer;transition:background .2s}
.vmt-item:last-child{border-bottom:none}
.vmt-item:hover,.vmt-item.active{background:rgba(99,102,241,.05)}
.vmt-item.active{border-left:3px solid {{PRIMARY}}}
.vmt-thumb{width:64px;height:40px;border-radius:8px;background:linear-gradient(135deg,{{PRIMARY}},{{ACCENT}});flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
.vmt-thumb img{width:100%;height:100%;object-fit:cover}
.vmt-item-title{font-size:.875rem;font-weight:600;color:{{TEXT}};line-height:1.3;margin-bottom:.25rem}
.vmt-item-dur{font-size:.75rem;color:{{TEXT_MUTED}}}
.vmt-item.active .vmt-item-title{color:{{PRIMARY}}}`,
  template: `<section id="video-mt"><div class="vmt-in"><div class="vmt-hd"><span class="vmt-ey reveal">{{eyebrow}}</span><h2 class="vmt-h2 reveal reveal-d1">{{heading}}</h2></div><div class="vmt-layout reveal"><div class="vmt-main-video"><img src="{{SERVICE_IMAGE_0}}" alt="Video" loading="lazy"><div class="vmt-play-ov"><div class="vmt-play-btn"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div><div class="vmt-playlist"><div class="vmt-list-title">Playlist</div><div class="vmt-list">{{#videos}}<div class="vmt-item{{@first}} active{{/first}}"><div class="vmt-thumb"></div><div><div class="vmt-item-title">{{.title}}</div><div class="vmt-item-dur">{{.duration}}</div></div></div>{{/videos}}</div></div></div></div></section>`,
}
