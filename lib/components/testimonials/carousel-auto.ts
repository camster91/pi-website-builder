import type { ComponentVariant } from '../types'

export const testimonialsCarouselAuto: ComponentVariant = {
  id: 'testimonials-carousel',
  name: 'Testimonials Auto Carousel',
  section: 'testimonials',
  description: 'Auto-cycling centered testimonial with prev/next, dot nav, stars, and smooth fade transitions',
  bestFor: ['saas', 'healthcare', 'real-estate', 'education', 'agency'],
  tags: ['carousel', 'auto-rotate', 'slider', 'animated', 'centered', 'dots'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    {
      name: 'testimonials', type: 'array', description: '5 testimonials', required: true,
      minItems: 5, maxItems: 5,
      itemSlots: [
        { name: 'quote', type: 'text', maxWords: 40, description: 'Quote text', required: true },
        { name: 'name', type: 'text', maxWords: 3, description: 'Name', required: true },
        { name: 'role', type: 'text', maxWords: 5, description: 'Role + company', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Initials', required: true },
        { name: 'company', type: 'text', maxWords: 2, description: 'Company name', required: false },
      ],
    },
  ],
  css: `/* testimonials-carousel */
#testimonials-cr {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
  overflow: hidden;
}
.tcr-inner { max-width: 860px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.tcr-header { text-align: center; margin-bottom: 3.5rem; }
.tcr-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.tcr-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Carousel */
.tcr-carousel { position: relative; }
.tcr-track { position: relative; min-height: 280px; }
.tcr-slide {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center;
  text-align: center; padding: 2.5rem;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 24px;
  opacity: 0; transition: opacity 0.5s;
  pointer-events: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.06);
}
.tcr-slide.active { opacity: 1; pointer-events: auto; position: relative; }
.tcr-stars { display: flex; gap: 3px; margin-bottom: 1.5rem; justify-content: center; color: {{ACCENT}}; }
.tcr-stars svg { width: 18px; height: 18px; }
.tcr-quote-mark { font-family: Georgia, serif; font-size: 4rem; line-height: 1; color: {{PRIMARY}}; opacity: 0.15; display: block; margin-bottom: -1rem; }
.tcr-quote { font-size: clamp(1.0625rem,1.75vw,1.25rem); font-style: italic; color: {{TEXT}}; line-height: 1.65; font-weight: 500; margin-bottom: 2rem; }
.tcr-author { display: flex; align-items: center; gap: 0.875rem; }
.tcr-avatar { width: 44px; height: 44px; border-radius: 50%; background: rgba(99,102,241,0.15); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 800; flex-shrink: 0; }
.tcr-name { font-weight: 700; color: {{TEXT}}; font-size: 0.9375rem; }
.tcr-role { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }
/* Controls */
.tcr-controls { display: flex; align-items: center; justify-content: center; gap: 1.5rem; margin-top: 2rem; }
.tcr-arrow { width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid {{BORDER}}; background: {{BG_CARD}}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: {{TEXT_MUTED}}; }
.tcr-arrow:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
.tcr-arrow svg { width: 16px; height: 16px; }
.tcr-dots { display: flex; gap: 6px; }
.tcr-dot { width: 8px; height: 8px; border-radius: 50%; background: {{BORDER}}; cursor: pointer; transition: all 0.3s; }
.tcr-dot.active { width: 24px; border-radius: 4px; background: {{PRIMARY}}; }
`,
  template: `<section id="testimonials-cr">
  <div class="tcr-inner">
    <div class="tcr-header">
      <span class="tcr-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="tcr-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="tcr-carousel reveal" data-carousel="auto" data-interval="5000">
      <div class="tcr-track" id="tcrTrack">
        {{#testimonials}}
        <div class="tcr-slide{{@first}} active{{/first}}">
          <div class="tcr-stars"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
          <span class="tcr-quote-mark">&ldquo;</span>
          <p class="tcr-quote">{{.quote}}</p>
          <div class="tcr-author">
            <div class="tcr-avatar">{{.initials}}</div>
            <div><div class="tcr-name">{{.name}}</div><div class="tcr-role">{{.role}}</div></div>
          </div>
        </div>
        {{/testimonials}}
      </div>
      <div class="tcr-controls">
        <button class="tcr-arrow" onclick="tcrPrev()" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
        <div class="tcr-dots" id="tcrDots">
          <div class="tcr-dot active"></div><div class="tcr-dot"></div><div class="tcr-dot"></div><div class="tcr-dot"></div><div class="tcr-dot"></div>
        </div>
        <button class="tcr-arrow" onclick="tcrNext()" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
      </div>
    </div>
  </div>
  <script>
  (function(){
    var slides=document.querySelectorAll('#tcrTrack .tcr-slide'),dots=document.querySelectorAll('#tcrDots .tcr-dot'),i=0;
    function go(n){slides[i].classList.remove('active');dots[i].classList.remove('active');i=(n+slides.length)%slides.length;slides[i].classList.add('active');dots[i].classList.add('active');}
    window.tcrNext=function(){go(i+1);};window.tcrPrev=function(){go(i-1);};
    setInterval(function(){go(i+1);},5000);
    dots.forEach(function(d,n){d.addEventListener('click',function(){go(n);});});
  })();
  </script>
</section>`,
}
