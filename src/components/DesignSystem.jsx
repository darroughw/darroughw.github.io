import { useEffect } from 'react';
import { projects } from '../data/projects.js';
import { colorTokens, spacingTokens, typeSpecimens } from '../data/design-tokens.js';

const cardDemo = projects[0];

export default function DesignSystem() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <a className="case-back" href="/">← Back</a>
      <main className="ds-page" id="main">
        <div className="ds-wrap">

          <header className="ds-header">
            <p className="ds-eyebrow">Reference</p>
            <h1 className="ds-title">Design System</h1>
            <p className="ds-intro">
              The tokens and components behind this site, documented from the same CSS that
              renders it. Every example below is the real class in production — when the site's
              styling changes, this page changes with it.
            </p>
          </header>

          <section className="ds-section" id="colors" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Color</h2>
            <div className="ds-swatch-grid">
              {colorTokens.map(c => (
                <div className="ds-swatch" key={c.var}>
                  <div className="ds-swatch-color" style={{ background: `var(${c.var})` }} />
                  <div className="ds-swatch-name">{c.name}</div>
                  <code className="ds-swatch-var">{c.var}</code>
                  <div className="ds-swatch-hex">{c.value}</div>
                  <p className="ds-swatch-usage">{c.usage}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section" id="typography" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Typography</h2>
            <p className="ds-section-desc">Three families, used deliberately: Playfair Display for editorial headings, DM Sans for body copy, DM Mono for labels and meta.</p>
            <div className="ds-type-list">
              {typeSpecimens.map(t => (
                <div className="ds-type-row" key={t.name}>
                  <div className="ds-type-meta">
                    <div className="ds-type-name">{t.name}</div>
                    <div className="ds-type-usage">{t.usage}</div>
                    <code className="ds-type-spec">{t.family.split(',')[0].replace(/'/g, '')} · {t.weight}{t.style ? ` · ${t.style}` : ''} · {t.size}</code>
                  </div>
                  <div
                    className="ds-type-sample"
                    style={{
                      fontFamily: t.family,
                      fontWeight: t.weight,
                      fontStyle: t.style || 'normal',
                      fontSize: t.size,
                      letterSpacing: t.letterSpacing || 'normal',
                      textTransform: t.uppercase ? 'uppercase' : 'none',
                    }}
                  >
                    {t.sample}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="ds-section" id="spacing" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Spacing</h2>
            <p className="ds-section-desc">A 9-step rem scale. Every margin, padding, and gap on the site resolves to one of these values.</p>
            <div className="case-table-wrap">
              <table className="case-table">
                <thead>
                  <tr><th>Token</th><th>Value</th><th>Pixels</th><th>Used for</th></tr>
                </thead>
                <tbody>
                  {spacingTokens.map(s => (
                    <tr key={s.name}>
                      <td><code>{s.name}</code></td>
                      <td>{s.rem}</td>
                      <td>{s.px}</td>
                      <td>{s.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="ds-section" id="buttons-links" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Buttons &amp; Links</h2>
            <p className="ds-section-desc">No dedicated button component — every actionable element is a real link, styled by context. Tab through these to see the shared focus-visible ring.</p>
            <div className="ds-demo-row">
              <a href="#colors" className="hero-cta">Primary CTA →</a>
              <a href="/resume/" className="nav-resume-btn">Ghost Button</a>
              <a href="/" className="work-card-link">Text Link →</a>
              <span className="ds-dark-chip">
                <a href="mailto:darrough@gmail.com" className="contact-link">↗ Inverted Link</a>
              </span>
            </div>
          </section>

          <section className="ds-section" id="tags" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Tags &amp; Badges</h2>
            <p className="ds-section-desc">Uppercase DM Mono at small sizes, used for case study tags and résumé recognition badges.</p>
            <div className="ds-demo-row">
              <span className="tag">UX Research</span>
              <span className="tag">Design Systems</span>
              <span className="tag">Figma</span>
              <span className="resume-badge">★ Outstanding Achievement</span>
            </div>
          </section>

          <section className="ds-section" id="stats" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Stat Blocks</h2>
            <p className="ds-section-desc">Used in case studies to call out measurable outcomes. Real numbers from the Delta Shower Doors case study.</p>
            <div className="case-stat-row">
              <div className="case-stat">
                <div className="case-stat-num">92%</div>
                <div className="case-stat-label">Drop in installation searches</div>
              </div>
              <div className="case-stat">
                <div className="case-stat-num">6×</div>
                <div className="case-stat-label">Traffic growth over period</div>
              </div>
            </div>
          </section>

          <section className="ds-section" id="cards" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Cards</h2>
            <p className="ds-section-desc">The homepage work grid's card, rendered here with its real data and a live link to the case study.</p>
            <div className="ds-card-demo">
              <a className="work-card" href={`/work/${cardDemo.id}/`}>
                <span className="work-card-num">{cardDemo.num}</span>
                <img
                  src={cardDemo.imgSrc}
                  alt={cardDemo.title}
                  width={cardDemo.imgW}
                  height={cardDemo.imgH}
                  loading="lazy"
                  className="work-card-img"
                />
                <h3 className="work-card-title">{cardDemo.title}</h3>
                <p className="work-card-desc">{cardDemo.desc}</p>
                <div className="work-card-meta">
                  <span>{cardDemo.role}</span>
                  <span>·</span>
                  <span>{cardDemo.year}</span>
                </div>
                <div className="work-card-tags">
                  {cardDemo.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <span className="work-card-link">View case study →</span>
              </a>
            </div>
          </section>

          <section className="ds-section" id="motion-a11y" style={{ scrollMarginTop: '2rem' }}>
            <h2 className="ds-section-title">Motion &amp; Accessibility</h2>
            <ul className="ds-notes">
              <li>Every page starts with a skip-to-content link ahead of any navigation chrome.</li>
              <li>Interactive elements get a shared <code>:focus-visible</code> ring — try tabbing through this page.</li>
              <li>Scroll-triggered reveals and the skill-bar fill respect <code>prefers-reduced-motion</code>, dropping to instant state changes.</li>
              <li>Decorative images (case-study hero banners) use <code>alt=""</code>; informational images carry a full description.</li>
              <li>All case-study images ship explicit <code>width</code>/<code>height</code> plus <code>loading="lazy"</code> below the fold, to avoid layout shift.</li>
            </ul>
          </section>

        </div>
      </main>
    </>
  );
}
