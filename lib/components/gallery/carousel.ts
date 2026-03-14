import type { ComponentVariant } from '../types'
export const galleryCarousel: ComponentVariant = {
  id: 'gallery-carousel', name: 'Gallery Full-Width Carousel', section: 'gallery' as any,
  description: 'Full-width auto-rotating image carousel with prev/next and dot indicators — cinematic immersive showcase',
  bestFor: ['restaurant','real-estate','fitness','beauty','agency'], tags: ['carousel','slideshow','fullwidth','auto','cinematic','rotating'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'slides', type: 'array', description: '5 gallery slides', required: true, minItems: 4, maxItems: 5,
      itemSlots: [
        { name: 'caption', type: 'text', maxWords: 6, description: 'Slide caption', required: false },
      ] },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-carousel */
#gallery-cr{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.gcr-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gcr-hd{text-align:center;max-width:680px;margin:0 auto 2.5rem}
.gcr-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gcr-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.gcr-h2 .accent-word{color:{{ACCENT}}}
.gcr-stage{position:relative;border-radius:24px;overflow:hidden;aspect-ratio:16/7;margin-bottom:1.5rem}
.gcr-slide{position:absolute;inset:0;opacity:0;transition:opacity .6s}
.gcr-slide.active{opacity:1}
.gcr-slide:nth-child(1){background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.gcr-slide:nth-child(2){background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.gcr-slide:nth-child(3){background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gcr-slide:nth-child(4){background:linear-gradient(135deg,#06b6d4,#0891b2)}
.gcr-slide:nth-child(5){background:linear-gradient(135deg,#f43f5e,#e11d48)}
.gcr-slide img{width:100%;height:100%;object-fit:cover;display:block}
.gcr-caption{position:absolute;bottom:1.25rem;left:1.5rem;background:rgba(0,0,0,.6);backdrop-filter:blur(8px);color:#fff;font-size:.875rem;font-weight:600;padding:6px 16px;border-radius:999px}
.gcr-arrow{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.9);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s;z-index:2}
.gcr-prev{left:1rem}
.gcr-next{right:1rem}
.gcr-arrow:hover{background:#fff;box-shadow:0 4px 16px rgba(0,0,0,.2)}
.gcr-arrow svg{width:18px;height:18px;color:#374151}
.gcr-controls{display:flex;align-items:center;justify-content:center;gap:1.5rem;margin-bottom:2.5rem}
.gcr-dots{display:flex;gap:6px}
.gcr-dot{width:8px;height:8px;border-radius:50%;background:{{BORDER}};cursor:pointer;transition:all .3s}
.gcr-dot.active{width:24px;border-radius:4px;background:{{PRIMARY}}}
.gcr-ft{text-align:center}
.gcr-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gcr-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="gallery-cr"><div class="gcr-in"><div class="gcr-hd"><span class="gcr-ey reveal">{{eyebrow}}</span><h2 class="gcr-h2 reveal reveal-d1">{{heading}}</h2></div><div class="gcr-stage reveal" id="gcrStage"><div class="gcr-slide active"><img src="{{HERO_IMAGE}}" alt="Gallery" loading="lazy"><div class="gcr-caption">{{slides[0].caption}}</div></div><div class="gcr-slide"><img src="{{SERVICE_IMAGE_0}}" alt="Gallery" loading="lazy"><div class="gcr-caption">{{slides[1].caption}}</div></div><div class="gcr-slide"><img src="{{SERVICE_IMAGE_1}}" alt="Gallery" loading="lazy"><div class="gcr-caption">{{slides[2].caption}}</div></div><div class="gcr-slide"><img src="{{SERVICE_IMAGE_2}}" alt="Gallery" loading="lazy"><div class="gcr-caption">{{slides[3].caption}}</div></div><button class="gcr-arrow gcr-prev" onclick="gcrPrev()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button><button class="gcr-arrow gcr-next" onclick="gcrNext()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button></div><div class="gcr-controls"><div class="gcr-dots" id="gcrDots"><div class="gcr-dot active"></div><div class="gcr-dot"></div><div class="gcr-dot"></div><div class="gcr-dot"></div></div></div><div class="gcr-ft reveal"><a href="#contact" class="gcr-cta">{{ctaText}} →</a></div></div></section><script>(function(){var s=document.querySelectorAll('#gcrStage .gcr-slide'),d=document.querySelectorAll('#gcrDots .gcr-dot'),i=0;function go(n){s[i].classList.remove('active');d[i].classList.remove('active');i=(n+s.length)%s.length;s[i].classList.add('active');d[i].classList.add('active');}window.gcrNext=function(){go(i+1);};window.gcrPrev=function(){go(i-1);};d.forEach(function(dot,n){dot.addEventListener('click',function(){go(n);});});setInterval(function(){go(i+1);},5000);})()</script>`,
}
