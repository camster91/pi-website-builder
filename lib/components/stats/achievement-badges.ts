import type { ComponentVariant } from '../types'
export const statsAchievementBadges: ComponentVariant = {
  id: 'stats-achievements', name: 'Stats Achievement Badges', section: 'stats' as any,
  description: 'Emoji achievement badges with stat values — gamified, fun, great for fitness/education',
  bestFor: ['fitness','education','ecommerce','saas'], tags: ['achievements','badges','gamified','emoji','fun','visual'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Heading', required: true },
    { name: 'achievements', type: 'array', description: '6 achievement badges', required: true, minItems: 6, maxItems: 6,
      itemSlots: [
        { name: 'emoji', type: 'text', maxWords: 1, description: 'Achievement emoji', required: true },
        { name: 'value', type: 'stat-value', maxWords: 1, description: 'Stat value', required: true },
        { name: 'label', type: 'text', maxWords: 3, description: 'Achievement label', required: true },
        { name: 'badge', type: 'text', maxWords: 2, description: 'Badge rank (e.g. Gold)', required: false },
      ] },
  ],
  css: `/* stats-achievements */
#stats-ab{background:{{BG_SECTION}};padding:clamp(4rem,8vw,7rem) 0}
.sab-in{max-width:1200px;margin:0 auto;padding:0 clamp(1.5rem,5vw,3rem)}
.sab-hd{text-align:center;max-width:640px;margin:0 auto 3.5rem}
.sab-ey{display:inline-block;font-size:.8125rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:{{PRIMARY}};margin-bottom:.875rem}
.sab-h2{font-family:var(--font-heading);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;color:{{TEXT}}}
.sab-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.25rem}
@media(min-width:640px){.sab-grid{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1024px){.sab-grid{grid-template-columns:repeat(6,1fr)}}
.sab-badge{background:{{BG_CARD}};border:1px solid {{BORDER}};border-radius:20px;padding:1.75rem 1rem;text-align:center;transition:transform .3s,box-shadow .3s}
.sab-badge:hover{transform:translateY(-5px);box-shadow:0 16px 32px rgba(0,0,0,.1)}
.sab-emoji{font-size:2.25rem;display:block;margin-bottom:.75rem}
.sab-val{font-family:var(--font-heading);font-size:1.5rem;font-weight:900;letter-spacing:-.04em;color:{{PRIMARY}};display:block;margin-bottom:.25rem}
.sab-lbl{font-size:.8125rem;color:{{TEXT_MUTED}};font-weight:500;display:block;margin-bottom:.5rem}
.sab-rank{font-size:.6875rem;font-weight:700;padding:2px 8px;background:rgba(245,158,11,.1);color:#d97706;border-radius:999px}`,
  template: `<section id="stats-ab"><div class="sab-in"><div class="sab-hd"><span class="sab-ey reveal">{{eyebrow}}</span><h2 class="sab-h2 reveal reveal-d1">{{heading}}</h2></div><div class="sab-grid reveal-stagger">{{#achievements}}<div class="sab-badge"><span class="sab-emoji">{{.emoji}}</span><span class="sab-val counter" data-target="{{.value}}">{{.value}}</span><span class="sab-lbl">{{.label}}</span><span class="sab-rank">{{.badge}}</span></div>{{/achievements}}</div></div></section>`,
}
