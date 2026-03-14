import type { ComponentVariant } from '../types'
export const faqCategoryTabs: ComponentVariant = {
  id: 'faq-tabs', name: 'FAQ Category Tabs', section: 'faq',
  description: 'FAQ with category filter tabs — shows different Q&As per category tab click',
  bestFor: ['saas','education','healthcare','ecommerce'], tags: ['tabs','category','filter','interactive'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'cat1', type: 'text', maxWords: 2, description: 'Category 1 name', required: true },
    { name: 'cat2', type: 'text', maxWords: 2, description: 'Category 2 name', required: true },
    { name: 'cat3', type: 'text', maxWords: 2, description: 'Category 3 name', required: true },
    { name: 'faqs', type: 'array', description: '9 FAQs (3 per category)', required: true, minItems: 9, maxItems: 9,
      itemSlots: [
        { name: 'cat', type: 'text', maxWords: 1, description: '1, 2, or 3', required: true },
        { name: 'q', type: 'text', maxWords: 12, description: 'Question', required: true },
        { name: 'a', type: 'text', maxWords: 30, description: 'Answer', required: true },
      ] },
  ],
  css: `/* faq-tabs */
#faq-tb{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.ftb-in{max-width:900px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.ftb-hd{text-align:center;margin-bottom:3rem}
.ftb-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.ftb-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.ftb-tabs{display:flex;gap:.5rem;justify-content:center;margin-bottom:2.5rem;flex-wrap:wrap}
.ftb-tab{padding:8px 20px;border:2px solid {{BORDER}};border-radius:999px;font-size:.875rem;font-weight:700;color:{{TEXT_SEC}};cursor:pointer;transition:all .2s;background:{{BG}}}
.ftb-tab.active{border-color:{{PRIMARY}};color:{{PRIMARY}};background:rgba(99,102,241,.06)}
.ftb-panel{display:none;flex-direction:column;gap:1px;background:{{BORDER}};border-radius:16px;overflow:hidden}
.ftb-panel.active{display:flex}
.ftb-item{background:{{BG_CARD}};padding:1.5rem 2rem}
.ftb-q{font-weight:700;font-size:.9375rem;color:{{TEXT}};margin-bottom:.5rem}
.ftb-a{font-size:.9375rem;color:{{TEXT_SEC}};line-height:1.65}`,
  template: `<section id="faq-tb"><div class="ftb-in"><div class="ftb-hd"><span class="ftb-ey reveal">{{eyebrow}}</span><h2 class="ftb-h2 reveal reveal-d1">{{heading}}</h2></div><div class="ftb-tabs reveal"><button class="ftb-tab active" onclick="ftbShow('1',this)">{{cat1}}</button><button class="ftb-tab" onclick="ftbShow('2',this)">{{cat2}}</button><button class="ftb-tab" onclick="ftbShow('3',this)">{{cat3}}</button></div><div id="ftbP1" class="ftb-panel active">{{#faqs}}{{#if_1 .cat}}<div class="ftb-item"><p class="ftb-q">{{.q}}</p><p class="ftb-a">{{.a}}</p></div>{{/if_1}}{{/faqs}}</div><div id="ftbP2" class="ftb-panel">{{#faqs}}{{#if_2 .cat}}<div class="ftb-item"><p class="ftb-q">{{.q}}</p><p class="ftb-a">{{.a}}</p></div>{{/if_2}}{{/faqs}}</div><div id="ftbP3" class="ftb-panel">{{#faqs}}{{#if_3 .cat}}<div class="ftb-item"><p class="ftb-q">{{.q}}</p><p class="ftb-a">{{.a}}</p></div>{{/if_3}}{{/faqs}}</div></div></section><script>function ftbShow(id,btn){document.querySelectorAll('.ftb-panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.ftb-tab').forEach(b=>b.classList.remove('active'));document.getElementById('ftbP'+id).classList.add('active');btn.classList.add('active');}</script>`,
}
