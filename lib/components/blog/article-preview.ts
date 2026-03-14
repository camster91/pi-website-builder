import type { ComponentVariant } from '../types'

export const blogArticlePreview: ComponentVariant = {
  id: 'blog-articles',
  name: 'Blog Article Preview Cards',
  section: 'blog' as any,
  description: '3-column blog/article preview cards with category pill, title, excerpt, author, and date',
  bestFor: ['saas', 'agency', 'healthcare', 'education', 'nonprofit', 'fitness'],
  tags: ['blog', 'articles', 'content', 'news', 'posts', 'editorial'],
  slots: [
    { name: 'eyebrow', type: 'eyebrow', maxWords: 3, description: 'Section label', required: true },
    { name: 'heading', type: 'heading', maxWords: 7, description: 'Section heading', required: true },
    { name: 'headingAccent', type: 'text', maxWords: 2, description: 'Accent word', required: true },
    { name: 'ctaText', type: 'cta-text', maxWords: 3, description: 'View all articles CTA', required: true },
    {
      name: 'articles', type: 'array', description: '3 article previews', required: true,
      minItems: 3, maxItems: 3,
      itemSlots: [
        { name: 'category', type: 'text', maxWords: 2, description: 'Article category', required: true },
        { name: 'title', type: 'heading', maxWords: 8, description: 'Article title', required: true },
        { name: 'excerpt', type: 'text', maxWords: 25, description: 'Article excerpt', required: true },
        { name: 'author', type: 'text', maxWords: 3, description: 'Author name', required: true },
        { name: 'date', type: 'text', maxWords: 3, description: 'Publication date', required: true },
        { name: 'readTime', type: 'text', maxWords: 2, description: 'Read time (e.g. 5 min)', required: false },
        { name: 'initials', type: 'text', maxWords: 1, description: 'Author initials', required: true },
      ],
    },
  ],
  css: `/* blog-articles */
#blog {
  background: {{BG}};
  padding: clamp(4rem, 8vw, 7rem) 0;
}
.ba-inner { max-width: 1280px; margin: 0 auto; padding: 0 clamp(1.5rem, 5vw, 3rem); }
.ba-header {
  display: flex; align-items: flex-end; justify-content: space-between;
  flex-wrap: wrap; gap: 1rem; margin-bottom: 3.5rem;
}
.ba-eyebrow { display: block; font-size: 0.8125rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: {{PRIMARY}}; margin-bottom: 0.875rem; }
.ba-heading { font-family: var(--font-heading); font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; letter-spacing: -0.03em; line-height: 1.1; color: {{TEXT}}; }
.ba-heading .accent-word { color: {{ACCENT}}; }
.ba-cta {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 0.9375rem; font-weight: 700; color: {{PRIMARY}};
  text-decoration: none; white-space: nowrap;
}
.ba-cta:hover { gap: 10px; }
.ba-cta svg { width: 16px; height: 16px; }
/* Article grid */
.ba-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
@media (min-width: 640px) { .ba-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ba-grid { grid-template-columns: repeat(3, 1fr); } }
.ba-card {
  display: flex; flex-direction: column;
  background: {{BG_CARD}};
  border: 1px solid {{BORDER}};
  border-radius: 20px; overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.ba-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.09); }
.ba-card-img { aspect-ratio: 16/9; overflow: hidden; background: {{BG_SECTION}}; }
.ba-card-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
.ba-card:hover .ba-card-img img { transform: scale(1.05); }
/* Image fallback gradients */
.ba-card:nth-child(1) .ba-card-img { background: linear-gradient(135deg, {{PRIMARY}}, {{PRIMARY_DARK}}); }
.ba-card:nth-child(2) .ba-card-img { background: linear-gradient(135deg, {{ACCENT}}, #f97316); }
.ba-card:nth-child(3) .ba-card-img { background: linear-gradient(135deg, #8b5cf6, #6d28d9); }
.ba-card-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.ba-cat { display: inline-block; padding: 4px 12px; background: {{ACCENT}}; opacity: 0.12; color: {{ACCENT}}; border-radius: 999px; font-size: 0.75rem; font-weight: 700; margin-bottom: 0.875rem; }
/* Fix opacity issue */
.ba-cat { opacity: 1; background: rgba(245,158,11,0.12); color: {{ACCENT}}; }
.ba-card-title { font-family: var(--font-heading); font-size: 1.0625rem; font-weight: 700; color: {{TEXT}}; line-height: 1.3; margin-bottom: 0.75rem; letter-spacing: -0.01em; flex: 1; }
.ba-excerpt { font-size: 0.875rem; color: {{TEXT_SEC}}; line-height: 1.65; margin-bottom: 1.25rem; }
.ba-meta {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 1rem; border-top: 1px solid {{BORDER}};
}
.ba-author { display: flex; align-items: center; gap: 8px; }
.ba-avatar { width: 28px; height: 28px; border-radius: 50%; background: rgba(99,102,241,0.15); color: {{PRIMARY}}; display: flex; align-items: center; justify-content: center; font-size: 0.6875rem; font-weight: 800; }
.ba-author-name { font-size: 0.8125rem; font-weight: 600; color: {{TEXT}}; }
.ba-date { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
.ba-read-time { font-size: 0.75rem; color: {{TEXT_MUTED}}; }
`,
  template: `<section id="blog">
  <div class="ba-inner">
    <div class="ba-header">
      <div>
        <span class="ba-eyebrow reveal">{{eyebrow}}</span>
        <h2 class="ba-heading reveal reveal-d1">{{heading}}</h2>
      </div>
      <a href="#" class="ba-cta reveal">
        {{ctaText}}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    </div>
    <div class="ba-grid reveal-stagger">
      {{#articles}}
      <div class="ba-card">
        <div class="ba-card-img">
          <img src="{{SERVICE_IMAGE_0}}" alt="{{.title}}" width="480" height="270" loading="lazy" onerror="this.style.display='none'">
        </div>
        <div class="ba-card-body">
          <span class="ba-cat">{{.category}}</span>
          <h3 class="ba-card-title">{{.title}}</h3>
          <p class="ba-excerpt">{{.excerpt}}</p>
          <div class="ba-meta">
            <div class="ba-author">
              <div class="ba-avatar">{{.initials}}</div>
              <span class="ba-author-name">{{.author}}</span>
            </div>
            <div>
              <span class="ba-date">{{.date}}</span>
              <span style="color:{{TEXT_MUTED}};margin:0 4px">·</span>
              <span class="ba-read-time">{{.readTime}}</span>
            </div>
          </div>
        </div>
      </div>
      {{/articles}}
    </div>
  </div>
</section>`,
}
