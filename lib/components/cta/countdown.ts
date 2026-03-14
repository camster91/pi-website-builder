import type { ComponentVariant } from '../types'

export const ctaCountdown: ComponentVariant = {
  id: 'cta-countdown',
  name: 'CTA Urgency Countdown',
  section: 'cta',
  description: 'Live countdown timer with urgency heading, offer details, and primary CTA — launches, promotions, limited offers',
  bestFor: ['ecommerce', 'fitness', 'saas', 'education', 'restaurant'],
  tags: ['countdown', 'urgency', 'timer', 'scarcity', 'launch', 'promotion', 'conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 4, description: 'Urgency label (e.g. "Limited Time Offer")', required: true },
    { name: 'heading', type: 'heading', maxWords: 8, description: 'Offer heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'offerDesc', type: 'text', maxWords: 22, description: 'Offer details', required: true },
    { name: 'hours', type: 'text', maxWords: 1, description: 'Hours on timer (e.g. 47)', required: true },
    { name: 'minutes', type: 'text', maxWords: 1, description: 'Minutes (e.g. 30)', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 4, description: 'CTA button text', required: true },
    { name: 'ctaNote', type: 'text', maxWords: 8, description: 'Note below CTA (e.g. "No credit card required")', required: false },
  ],
  css: `/* cta-countdown */
#cta-cd {
  background: linear-gradient(135deg, #0a0f1e, #1a0f2e);
  padding: clamp(4rem,8vw,7rem) 0;
  position: relative; overflow: hidden;
}
.ccd-glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
.ccd-glow-1 { width: 500px; height: 500px; background: {{PRIMARY}}; opacity: 0.12; top: -200px; left: -100px; }
.ccd-glow-2 { width: 400px; height: 400px; background: {{ACCENT}}; opacity: 0.08; bottom: -150px; right: -100px; }
.ccd-inner { position: relative; z-index: 1; max-width: 760px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); text-align: center; }
.ccd-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: {{ACCENT}}; margin-bottom: 1.5rem; padding: 6px 16px; border: 1px solid rgba(245,158,11,0.3); border-radius: 999px; }
.ccd-heading { font-family: var(--font-heading); font-size: clamp(2rem,5vw,4rem); font-weight: 900; letter-spacing: -0.04em; line-height: 1.05; color: #fff; margin-bottom: 1.25rem; }
.ccd-heading .accent-word { color: {{ACCENT}}; }
.ccd-desc { font-size: 1.0625rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 3rem; }
/* Countdown */
.ccd-timer { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; }
.ccd-unit {
  min-width: 90px; padding: 1.25rem 1rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  text-align: center;
}
.ccd-num {
  font-family: var(--font-heading); font-size: clamp(2rem,5vw,3.5rem); font-weight: 900;
  letter-spacing: -0.05em; color: #fff; line-height: 1; display: block;
}
.ccd-lbl { font-size: 0.75rem; font-weight: 600; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 6px; display: block; }
.ccd-sep { font-family: var(--font-heading); font-size: 2.5rem; font-weight: 900; color: rgba(255,255,255,0.25); align-self: center; padding-bottom: 1rem; }
.ccd-cta { display: inline-flex; align-items: center; gap: 10px; padding: 16px 40px; background: {{ACCENT}}; color: #fff; border-radius: 12px; font-weight: 800; font-size: 1.0625rem; text-decoration: none; transition: all 0.3s; margin-bottom: 1rem; box-shadow: 0 8px 32px rgba(245,158,11,0.35); }
.ccd-cta:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(245,158,11,0.45); }
.ccd-note { font-size: 0.8125rem; color: rgba(255,255,255,0.35); }
`,
  template: `<section id="cta-cd">
  <div class="ccd-glow ccd-glow-1"></div>
  <div class="ccd-glow ccd-glow-2"></div>
  <div class="ccd-inner">
    <span class="ccd-eyebrow reveal">{{eyebrow}}</span>
    <h2 class="ccd-heading reveal reveal-d1">{{heading}}</h2>
    <p class="ccd-desc reveal reveal-d2">{{offerDesc}}</p>
    <div class="ccd-timer reveal reveal-d2" id="cdTimer">
      <div class="ccd-unit"><span class="ccd-num" id="cdH">{{hours}}</span><span class="ccd-lbl">Hours</span></div>
      <span class="ccd-sep">:</span>
      <div class="ccd-unit"><span class="ccd-num" id="cdM">{{minutes}}</span><span class="ccd-lbl">Min</span></div>
      <span class="ccd-sep">:</span>
      <div class="ccd-unit"><span class="ccd-num" id="cdS">00</span><span class="ccd-lbl">Sec</span></div>
    </div>
    <a href="#contact" class="ccd-cta reveal reveal-d3">{{ctaText}} →</a>
    <p class="ccd-note reveal">{{ctaNote}}</p>
  </div>
  <script>
  (function(){
    var total=((parseInt('{{hours}}')||0)*3600+(parseInt('{{minutes}}')||30)*60);
    function tick(){if(total<=0){total=0;}var h=Math.floor(total/3600),m=Math.floor((total%3600)/60),s=total%60;document.getElementById('cdH').textContent=String(h).padStart(2,'0');document.getElementById('cdM').textContent=String(m).padStart(2,'0');document.getElementById('cdS').textContent=String(s).padStart(2,'0');if(total>0){total--;setTimeout(tick,1000);}}tick();
  })();
  </script>
</section>`,
}
