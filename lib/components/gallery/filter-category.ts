import type { ComponentVariant } from '../types'
export const galleryFilterCategory: ComponentVariant = {
  id: 'gallery-filter', name: 'Gallery Category Filter', section: 'gallery' as any,
  description: 'Filterable gallery with category tab buttons — shows different images per selected category',
  bestFor: ['portfolio','agency','restaurant','beauty','ecommerce'], tags: ['filter','category','tabs','portfolio','interactive','isotope'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent', required: true },
    { name: 'cat1', type: 'text', maxWords: 2, description: 'Category 1', required: true },
    { name: 'cat2', type: 'text', maxWords: 2, description: 'Category 2', required: true },
    { name: 'cat3', type: 'text', maxWords: 2, description: 'Category 3', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'CTA', required: true },
  ],
  css: `/* gallery-filter */
#gallery-flt{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.gflt-in{max-width:1280px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.gflt-hd{text-align:center;max-width:680px;margin:0 auto 2.5rem}
.gflt-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.gflt-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.gflt-h2 .accent-word{color:{{ACCENT}}}
.gflt-tabs{display:flex;justify-content:center;gap:.5rem;margin-bottom:2.5rem;flex-wrap:wrap}
.gflt-tab{padding:8px 20px;border:2px solid {{BORDER}};border-radius:999px;font-size:.875rem;font-weight:700;color:{{TEXT_SEC}};cursor:pointer;transition:all .2s;background:{{BG}}}
.gflt-tab.active{border-color:{{PRIMARY}};color:{{PRIMARY}};background:rgba(99,102,241,.06)}
.gflt-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:2.5rem}
@media(min-width:640px){.gflt-grid{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1024px){.gflt-grid{grid-template-columns:repeat(4,1fr)}}
.gflt-item{aspect-ratio:1/1;border-radius:12px;overflow:hidden;position:relative;transition:opacity .3s,transform .3s}
.gflt-item.hidden{opacity:0;pointer-events:none;transform:scale(0.9)}
.gflt-item:nth-child(1){background:linear-gradient(135deg,{{PRIMARY}},{{PRIMARY_DARK}})}
.gflt-item:nth-child(2){background:linear-gradient(135deg,{{ACCENT}},#f97316)}
.gflt-item:nth-child(3){background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
.gflt-item:nth-child(4){background:linear-gradient(135deg,#06b6d4,#0891b2)}
.gflt-item:nth-child(5){background:linear-gradient(135deg,#f43f5e,#e11d48)}
.gflt-item:nth-child(6){background:linear-gradient(135deg,#10b981,#059669)}
.gflt-item:nth-child(7){background:linear-gradient(135deg,#f59e0b,#d97706)}
.gflt-item:nth-child(8){background:linear-gradient(135deg,#3b82f6,#2563eb)}
.gflt-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s}
.gflt-item:hover img{transform:scale(1.06)}
.gflt-ft{text-align:center}
.gflt-cta{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:2px solid {{BORDER}};color:{{TEXT}};border-radius:12px;font-weight:700;text-decoration:none;transition:all .3s}
.gflt-cta:hover{border-color:{{PRIMARY}};color:{{PRIMARY}}}`,
  template: `<section id="gallery-flt"><div class="gflt-in"><div class="gflt-hd"><span class="gflt-ey reveal">{{eyebrow}}</span><h2 class="gflt-h2 reveal reveal-d1">{{heading}}</h2></div><div class="gflt-tabs reveal"><button class="gflt-tab active" onclick="gfltFilter('all',this)">All</button><button class="gflt-tab" onclick="gfltFilter('1',this)">{{cat1}}</button><button class="gflt-tab" onclick="gfltFilter('2',this)">{{cat2}}</button><button class="gflt-tab" onclick="gfltFilter('3',this)">{{cat3}}</button></div><div class="gflt-grid reveal"><div class="gflt-item" data-cat="1"><img src="{{HERO_IMAGE}}" alt="" loading="lazy"></div><div class="gflt-item" data-cat="2"><img src="{{SERVICE_IMAGE_0}}" alt="" loading="lazy"></div><div class="gflt-item" data-cat="3"><img src="{{SERVICE_IMAGE_1}}" alt="" loading="lazy"></div><div class="gflt-item" data-cat="1"><img src="{{SERVICE_IMAGE_2}}" alt="" loading="lazy"></div><div class="gflt-item" data-cat="2"></div><div class="gflt-item" data-cat="3"></div><div class="gflt-item" data-cat="1"></div><div class="gflt-item" data-cat="2"></div></div><div class="gflt-ft reveal"><a href="#contact" class="gflt-cta">{{ctaText}} →</a></div></div></section><script>function gfltFilter(cat,btn){document.querySelectorAll('.gflt-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('.gflt-item').forEach(function(el){if(cat==='all'||el.dataset.cat===cat){el.classList.remove('hidden');}else{el.classList.add('hidden');}});}</script>`,
}
