import type { ComponentVariant } from '../types'

export const contactMultiStep: ComponentVariant = {
  id: 'contact-multistep',
  name: 'Contact Multi-Step Wizard',
  section: 'contact',
  description: '3-step contact wizard: step 1 name/email, step 2 message/budget, step 3 confirmation — high completion rates',
  bestFor: ['agency', 'saas', 'real-estate', 'healthcare', 'education'],
  tags: ['multi-step', 'wizard', 'funnel', 'steps', 'progressive', 'conversion'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'step1Heading', type: 'text', maxWords: 5, description: 'Step 1 heading', required: true },
    { name: 'step2Heading', type: 'text', maxWords: 5, description: 'Step 2 heading', required: true },
    { name: 'step3Heading', type: 'text', maxWords: 5, description: 'Step 3 heading', required: true },
    { name: 'namePlaceholder', type: 'text', maxWords: 2, description: 'Name placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 2, description: 'Email placeholder', required: true },
    { name: 'messagePlaceholder', type: 'text', maxWords: 4, description: 'Message placeholder', required: true },
    { name: 'budgetOpt1', type: 'text', maxWords: 3, description: 'Budget option 1', required: false },
    { name: 'budgetOpt2', type: 'text', maxWords: 3, description: 'Budget option 2', required: false },
    { name: 'budgetOpt3', type: 'text', maxWords: 3, description: 'Budget option 3', required: false },
    { name: 'submitText', type: 'cta-text', maxWords: 3, description: 'Final submit text', required: true },
    { name: 'thankYouText', type: 'text', maxWords: 15, description: "Thank you message", required: true },
  ],
  css: `/* contact-multistep */
#contact {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.cms-inner { max-width: 620px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.cms-header { text-align: center; margin-bottom: 3rem; }
.cms-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.cms-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Progress */
.cms-progress { display: flex; align-items: center; gap: 0; margin-bottom: 2.5rem; }
.cms-step-dot { width: 32px; height: 32px; border-radius: 50%; border: 2px solid {{BORDER}}; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; color: {{TEXT_MUTED}}; flex-shrink: 0; transition: all 0.3s; background: {{BG}}; }
.cms-step-dot.active { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
.cms-step-dot.done { border-color: {{PRIMARY}}; background: {{PRIMARY}}; color: #fff; }
.cms-prog-line { flex: 1; height: 2px; background: {{BORDER}}; transition: background 0.3s; }
.cms-prog-line.done { background: {{PRIMARY}}; }
/* Card */
.cms-card { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 20px; padding: 2.5rem; box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
.cms-step-form { display: none; flex-direction: column; gap: 1.25rem; }
.cms-step-form.active { display: flex; }
.cms-step-h { font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: {{TEXT}}; margin-bottom: 0.5rem; }
.cms-field { display: flex; flex-direction: column; gap: 5px; }
.cms-label { font-size: 0.875rem; font-weight: 600; color: {{TEXT}}; }
.cms-input { padding: 12px 14px; border: 1.5px solid {{BORDER}}; border-radius: 10px; outline: none; font-family: var(--font-body); font-size: 0.9375rem; color: {{TEXT}}; background: {{BG}}; transition: border-color 0.2s; }
.cms-input:focus { border-color: {{PRIMARY}}; }
.cms-input::placeholder { color: {{TEXT_MUTED}}; }
.cms-textarea { resize: vertical; min-height: 120px; }
.cms-budget-opts { display: flex; gap: 0.625rem; flex-wrap: wrap; }
.cms-budget-opt { padding: 8px 18px; border: 2px solid {{BORDER}}; border-radius: 999px; cursor: pointer; font-size: 0.875rem; font-weight: 600; color: {{TEXT_SEC}}; transition: all 0.2s; background: {{BG}}; }
.cms-budget-opt.selected, .cms-budget-opt:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
.cms-nav { display: flex; gap: 1rem; margin-top: 0.5rem; }
.cms-btn-next, .cms-btn-submit { flex: 1; padding: 13px 24px; background: {{PRIMARY}}; color: #fff; border: none; border-radius: 12px; font-weight: 700; font-size: 1rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; }
.cms-btn-next:hover, .cms-btn-submit:hover { background: {{PRIMARY_DARK}}; }
.cms-btn-back { padding: 13px 20px; border: 1.5px solid {{BORDER}}; background: {{BG}}; color: {{TEXT_SEC}}; border-radius: 12px; font-weight: 600; cursor: pointer; font-family: var(--font-body); transition: all 0.2s; }
.cms-btn-back:hover { border-color: {{PRIMARY}}; color: {{PRIMARY}}; }
/* Step 3: confirmation */
.cms-confirm { text-align: center; }
.cms-confirm-icon { font-size: 3.5rem; display: block; margin-bottom: 1.25rem; }
.cms-confirm-text { font-size: 1rem; color: {{TEXT_SEC}}; line-height: 1.7; }
`,
  template: `<section id="contact">
  <div class="cms-inner">
    <div class="cms-header">
      <span class="cms-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="cms-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="cms-progress reveal" id="cmsProgress">
      <div class="cms-step-dot active" id="cmsD1">1</div>
      <div class="cms-prog-line" id="cmsL1"></div>
      <div class="cms-step-dot" id="cmsD2">2</div>
      <div class="cms-prog-line" id="cmsL2"></div>
      <div class="cms-step-dot" id="cmsD3">✓</div>
    </div>
    <div class="cms-card reveal">
      <div class="cms-step-form active" id="cmsStep1">
        <h3 class="cms-step-h">{{step1Heading}}</h3>
        <div class="cms-field"><label class="cms-label">Full Name</label><input class="cms-input" type="text" placeholder="{{namePlaceholder}}" id="cmsName"></div>
        <div class="cms-field"><label class="cms-label">Email Address</label><input class="cms-input" type="email" placeholder="{{emailPlaceholder}}" id="cmsEmail"></div>
        <div class="cms-nav"><button class="cms-btn-next" onclick="cmsNext(1)">Continue →</button></div>
      </div>
      <div class="cms-step-form" id="cmsStep2">
        <h3 class="cms-step-h">{{step2Heading}}</h3>
        <div class="cms-field"><label class="cms-label">Your Message</label><textarea class="cms-input cms-textarea" placeholder="{{messagePlaceholder}}"></textarea></div>
        <div class="cms-field"><label class="cms-label">Budget Range</label>
          <div class="cms-budget-opts">
            <button class="cms-budget-opt" onclick="cmsSelect(this)">{{budgetOpt1}}</button>
            <button class="cms-budget-opt" onclick="cmsSelect(this)">{{budgetOpt2}}</button>
            <button class="cms-budget-opt" onclick="cmsSelect(this)">{{budgetOpt3}}</button>
          </div>
        </div>
        <div class="cms-nav"><button class="cms-btn-back" onclick="cmsBack(2)">← Back</button><button class="cms-btn-submit" onclick="cmsNext(2)">{{submitText}}</button></div>
      </div>
      <div class="cms-step-form" id="cmsStep3">
        <div class="cms-confirm">
          <span class="cms-confirm-icon">🎉</span>
          <h3 class="cms-step-h">{{step3Heading}}</h3>
          <p class="cms-confirm-text">{{thankYouText}}</p>
        </div>
      </div>
    </div>
  </div>
  <script>
  function cmsNext(from){var s=document.getElementById('cmsStep'+from),n=document.getElementById('cmsStep'+(from+1));if(s)s.classList.remove('active');if(n)n.classList.add('active');var d=document.getElementById('cmsD'+from),l=document.getElementById('cmsL'+from),nd=document.getElementById('cmsD'+(from+1));if(d){d.classList.remove('active');d.classList.add('done');}if(l)l.classList.add('done');if(nd)nd.classList.add('active');}
  function cmsBack(from){var s=document.getElementById('cmsStep'+from),p=document.getElementById('cmsStep'+(from-1));if(s)s.classList.remove('active');if(p)p.classList.add('active');}
  function cmsSelect(el){el.parentNode.querySelectorAll('.cms-budget-opt').forEach(function(b){b.classList.remove('selected');});el.classList.add('selected');}
  </script>
</section>`,
}
