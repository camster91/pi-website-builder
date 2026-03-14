import type { ComponentVariant } from '../types'

export const testimonialsCardScroller: ComponentVariant = {
  id: 'testimonials-card-scroller',
  name: 'Testimonials Card Scroller',
  section: 'testimonials',
  description: 'Horizontal scroll-snap testimonial cards with star ratings, masked edges, author initials',
  bestFor: ['healthcare', 'local-service', 'beauty', 'fitness', 'restaurant', 'real-estate', 'education', 'nonprofit', 'saas', 'agency', 'ecommerce', 'portfolio'],
  tags: ['social-proof', 'trust', 'reviews', 'scroll'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accented word in heading', required: true },
    {
      name: 'cards', type: 'array', description: '4 testimonial cards', required: true,
      minItems: 4, maxItems: 4,
      itemSlots: [
        { name: 'quote', type: 'text', maxWords: 35, description: 'Testimonial quote text', required: true },
        { name: 'name', type: 'text', maxWords: 3, description: 'Author full name', required: true },
        { name: 'role', type: 'text', maxWords: 4, description: 'Author role/company', required: true },
        { name: 'initials', type: 'text', maxWords: 1, description: '2-letter initials', required: true },
        { name: 'rating', type: 'text', maxWords: 1, description: 'Rating out of 5 (e.g. 5)', required: false },
      ],
    },
  ],
  css: `/* testimonials-card-scroller */
#testimonials {
  background: {{BG_SECTION}};
  padding: clamp(4rem, 8vw, 7rem) 0;
  overflow: hidden;
}
.testi-inner {
  max-width: 1280px;
  margin: 0 auto;
}
.testi-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
  padding: 0 clamp(1.5rem, 5vw, 3rem);
}
.testi-eyebrow {
  display: inline-block;
  font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem;
}
.testi-heading {
  font-family: var(--font-heading);
  font-size: clamp(1.75rem, 3.5vw, 2.75rem); font-weight: 800;
  letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}};
}
.testi-heading .accent-word { color: {{ACCENT}}; }

/* Scroll container */
.testi-scroll {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem clamp(1.5rem, 5vw, 3rem) 1.5rem;
  -webkit-mask: linear-gradient(90deg, transparent, black 4%, black 96%, transparent);
  mask: linear-gradient(90deg, transparent, black 4%, black 96%, transparent);
}
.testi-scroll::-webkit-scrollbar { display: none; }

/* Cards */
.testi-card {
  flex: 0 0 min(380px, 85vw);
  scroll-snap-align: start;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: box-shadow 0.3s, border-color 0.3s;
}
.testi-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.08); border-color: color-mix(in srgb, {{PRIMARY}} 25%, {{BORDER}}); }

.testi-stars {
  display: flex;
  gap: 3px;
  color: {{ACCENT}};
}
.testi-stars svg { width: 18px; height: 18px; }

.testi-quote {
  font-size: 1rem;
  line-height: 1.75;
  color: {{TEXT}};
  flex: 1;
  position: relative;
}
.testi-quote::before {
  content: '\201C';
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 0;
  color: color-mix(in srgb, {{PRIMARY}} 20%, transparent);
  position: absolute;
  top: 0.5rem;
  left: -0.5rem;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid {{BORDER}};
}
.testi-avatar {
  width: 44px; height: 44px; border-radius: 50%;
  background: color-mix(in srgb, {{PRIMARY}} 12%, transparent);
  color: {{PRIMARY}}; font-weight: 800; font-size: 0.875rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.testi-author-name { font-weight: 700; font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.2; }
.testi-author-role { font-size: 0.8125rem; color: {{TEXT_MUTED}}; }

/* Scroll indicator dots */
.testi-dots {
  display: flex; justify-content: center; gap: 8px;
  margin-top: 1.5rem; padding: 0 1.5rem;
}
.testi-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: {{BORDER}}; transition: all 0.3s;
  cursor: pointer; border: none;
}
.testi-dot.active { background: {{PRIMARY}}; width: 24px; border-radius: 4px; }
`,
  template: `<section id="testimonials">
  <div class="testi-inner">
    <div class="testi-header">
      <span class="testi-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="testi-heading reveal reveal-d1">{{heading}}</h2>
    </div>

    <div class="testi-scroll" id="testiScroll">
      <div class="testi-card">
        <div class="testi-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p class="testi-quote">{{cards[0].quote}}</p>
        <div class="testi-author">
          <div class="testi-avatar">{{cards[0].initials}}</div>
          <div><div class="testi-author-name">{{cards[0].name}}</div><div class="testi-author-role">{{cards[0].role}}</div></div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p class="testi-quote">{{cards[1].quote}}</p>
        <div class="testi-author">
          <div class="testi-avatar">{{cards[1].initials}}</div>
          <div><div class="testi-author-name">{{cards[1].name}}</div><div class="testi-author-role">{{cards[1].role}}</div></div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p class="testi-quote">{{cards[2].quote}}</p>
        <div class="testi-author">
          <div class="testi-avatar">{{cards[2].initials}}</div>
          <div><div class="testi-author-name">{{cards[2].name}}</div><div class="testi-author-role">{{cards[2].role}}</div></div>
        </div>
      </div>
      <div class="testi-card">
        <div class="testi-stars">
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </div>
        <p class="testi-quote">{{cards[3].quote}}</p>
        <div class="testi-author">
          <div class="testi-avatar">{{cards[3].initials}}</div>
          <div><div class="testi-author-name">{{cards[3].name}}</div><div class="testi-author-role">{{cards[3].role}}</div></div>
        </div>
      </div>
    </div>

    <div class="testi-dots" id="testiDots">
      <button class="testi-dot active" data-index="0"></button>
      <button class="testi-dot" data-index="1"></button>
      <button class="testi-dot" data-index="2"></button>
      <button class="testi-dot" data-index="3"></button>
    </div>
  </div>
</section>

<script>
(function(){
  var scroll = document.getElementById('testiScroll');
  var dots = document.querySelectorAll('.testi-dot');
  if(!scroll) return;
  dots.forEach(function(dot){
    dot.addEventListener('click',function(){
      var idx = parseInt(dot.dataset.index);
      var card = scroll.children[idx];
      if(card) scroll.scrollTo({left: card.offsetLeft - 24, behavior:'smooth'});
    });
  });
  scroll.addEventListener('scroll',function(){
    var idx = Math.round(scroll.scrollLeft / (scroll.scrollWidth / scroll.children.length));
    dots.forEach(function(d,i){ d.classList.toggle('active', i === idx); });
  }, {passive:true});
})();
</script>`,
}
