import type { ComponentVariant } from '../types'

export const contactChatBubble: ComponentVariant = {
  id: 'contact-chat',
  name: 'Contact Chat Bubble Interface',
  section: 'contact',
  description: 'Conversational chat-style contact interface with chat bubbles showing questions and input responses — high engagement',
  bestFor: ['saas', 'agency', 'fitness', 'beauty', 'ecommerce'],
  tags: ['chat', 'conversational', 'interactive', 'modern', 'messaging', 'engagement'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'botName', type: 'text', maxWords: 2, description: 'Bot/company name', required: true },
    { name: 'greeting', type: 'text', maxWords: 20, description: 'Opening greeting message', required: true },
    { name: 'q1', type: 'text', maxWords: 10, description: 'First question', required: true },
    { name: 'q2', type: 'text', maxWords: 10, description: 'Second question', required: true },
    { name: 'namePlaceholder', type: 'text', maxWords: 3, description: 'Name input placeholder', required: true },
    { name: 'emailPlaceholder', type: 'text', maxWords: 3, description: 'Email input placeholder', required: true },
    { name: 'btnText', type: 'cta-text', maxWords: 3, description: 'Send button text', required: true },
  ],
  css: `/* contact-chat */
#contact {
  background: {{BG_SECTION}};
  padding: clamp(4rem,8vw,7rem) 0;
}
.ccht-inner { max-width: 600px; margin: 0 auto; padding: 0 clamp(1.5rem,5vw,3rem); }
.ccht-header { text-align: center; margin-bottom: 3rem; }
.ccht-eyebrow { display: inline-block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.ccht-heading { font-family: var(--font-heading); font-size: clamp(2rem,4vw,3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
/* Chat window */
.ccht-window { background: {{BG_CARD}}; border: 1px solid {{BORDER}}; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
.ccht-titlebar { background: {{PRIMARY}}; padding: 1rem 1.25rem; display: flex; align-items: center; gap: 0.75rem; }
.ccht-bot-avatar { width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 800; color: #fff; flex-shrink: 0; }
.ccht-bot-info { flex: 1; }
.ccht-bot-name { font-size: 0.875rem; font-weight: 700; color: #fff; }
.ccht-bot-status { font-size: 0.75rem; color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 4px; }
.ccht-bot-status::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: #22c55e; display: inline-block; }
/* Messages */
.ccht-msgs { padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; min-height: 220px; }
.ccht-msg-bot { display: flex; gap: 0.625rem; align-items: flex-end; }
.ccht-msg-av { width: 28px; height: 28px; border-radius: 50%; background: rgba(99,102,241,0.15); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 800; flex-shrink: 0; }
.ccht-bubble-bot { background: {{BG_SECTION}}; border: 1px solid {{BORDER}}; border-radius: 16px 16px 16px 4px; padding: 0.875rem 1.125rem; max-width: 80%; font-size: 0.9375rem; color: {{TEXT}}; line-height: 1.55; }
.ccht-msg-user { display: flex; justify-content: flex-end; }
.ccht-bubble-user { background: {{PRIMARY}}; color: #fff; border-radius: 16px 16px 4px 16px; padding: 0.875rem 1.125rem; max-width: 75%; font-size: 0.9375rem; line-height: 1.55; }
/* Input area */
.ccht-input-area { border-top: 1px solid {{BORDER}}; padding: 1rem 1.25rem; display: flex; flex-direction: column; gap: 0.875rem; }
.ccht-field-row { display: flex; gap: 0.625rem; }
.ccht-input { flex: 1; padding: 11px 14px; border: 1.5px solid {{BORDER}}; border-radius: 12px; outline: none; font-family: var(--font-body); font-size: 0.9375rem; color: {{TEXT}}; background: {{BG}}; transition: border-color 0.2s; }
.ccht-input:focus { border-color: {{PRIMARY}}; }
.ccht-input::placeholder { color: {{TEXT_MUTED}}; }
.ccht-send { padding: 11px 20px; background: {{PRIMARY}}; color: #fff; border: none; border-radius: 12px; font-weight: 700; font-size: 0.875rem; font-family: var(--font-body); cursor: pointer; transition: all 0.3s; white-space: nowrap; }
.ccht-send:hover { background: {{PRIMARY_DARK}}; }
`,
  template: `<section id="contact">
  <div class="ccht-inner">
    <div class="ccht-header">
      <span class="ccht-eyebrow reveal">{{eyebrow}}</span>
      <h2 class="ccht-heading reveal reveal-d1">{{heading}}</h2>
    </div>
    <div class="ccht-window reveal reveal-d2">
      <div class="ccht-titlebar">
        <div class="ccht-bot-avatar">{{botName[0:2]}}</div>
        <div class="ccht-bot-info">
          <div class="ccht-bot-name">{{botName}}</div>
          <div class="ccht-bot-status">Online now</div>
        </div>
      </div>
      <div class="ccht-msgs">
        <div class="ccht-msg-bot">
          <div class="ccht-msg-av">BC</div>
          <div class="ccht-bubble-bot">{{greeting}}</div>
        </div>
        <div class="ccht-msg-bot">
          <div class="ccht-msg-av">BC</div>
          <div class="ccht-bubble-bot">{{q1}}</div>
        </div>
        <div class="ccht-msg-user">
          <div class="ccht-bubble-user" style="opacity:0.4;font-style:italic">{{namePlaceholder}}</div>
        </div>
        <div class="ccht-msg-bot">
          <div class="ccht-msg-av">BC</div>
          <div class="ccht-bubble-bot">{{q2}}</div>
        </div>
      </div>
      <div class="ccht-input-area">
        <div class="ccht-field-row">
          <input class="ccht-input" type="text" placeholder="{{namePlaceholder}}">
          <input class="ccht-input" type="email" placeholder="{{emailPlaceholder}}">
        </div>
        <div class="ccht-field-row">
          <input class="ccht-input" type="text" placeholder="Your message...">
          <button type="button" class="ccht-send">{{btnText}}</button>
        </div>
      </div>
    </div>
  </div>
</section>`,
}
