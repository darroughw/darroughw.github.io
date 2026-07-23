import { useState, useEffect, useRef } from 'react';
import './App.css';
import CaseStudy from './components/CaseStudy';
import Resume from './components/Resume';
import { projects, skills } from './data/projects';

const MARQUEE_ITEMS = [
  'Figma', 'Design Systems', 'React', 'Angular', 'Node.js',
  'Accessibility', 'AI/LLM UX', 'SEO/GEO', 'HTML/CSS', 'Interaction Design', 'Prototyping',
  'Figma', 'Design Systems', 'React', 'Angular', 'Node.js',
  'Accessibility', 'AI/LLM UX', 'SEO/GEO', 'HTML/CSS', 'Interaction Design', 'Prototyping',
];

export default function App({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const skillsRef = useRef(null);
  const skillBarsRef = useRef([]);

  const isHome = route.type === 'home';

  // Reveal on scroll
  useEffect(() => {
    if (!isHome) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [isHome]);

  // Skill bars
  useEffect(() => {
    if (!skillsRef.current || !isHome) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          skillBarsRef.current.forEach((bar, i) => {
            if (bar) bar.style.transform = `scaleX(${skills[i].w})`;
          });
        }
      });
    }, { threshold: 0.3 });
    obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, [isHome]);

  if (route.type === 'project') {
    return <CaseStudy project={route.project} />;
  }

  if (route.type === 'resume') {
    return <Resume />;
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>

      {/* NAV */}
      <nav className={menuOpen ? 'nav-open' : ''} aria-label="Primary">
        <a href="/" className="nav-logo">darrough west</a>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

        <ul className="nav-links" onClick={() => setMenuOpen(false)}>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/darroughw" target="_blank" rel="noopener">GitHub ↗<span className="sr-only"> (opens in new tab)</span></a></li>
          <li><a className="nav-resume-btn" href="/resume/">Résumé</a></li>
        </ul>
      </nav>

      <main id="main">

      {/* HERO */}
      <section className="hero">
        <div className="hero-left reveal">
          <p className="hero-eyebrow">UX/UI Designer · Front-End Developer · UX Engineer</p>
          <h1 className="hero-name">
            Crafting<br /><em>Digital</em><br />Experiences
          </h1>
          <p className="hero-desc">
            I'm Darrough West. I design and build digital products, 15+ years from concept to
            production. Recent work: a Shopify redesign that cut friction-driven site searches 92%
            while traffic grew 6x, and an iOS design system used by 150+ designers at Fidelity.
          </p>
          <a href="#work" className="hero-cta">View My Work →</a>
        </div>
        <div className="hero-bg-text" aria-hidden="true">DW</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="marquee-item">
              {i > 0 && <span className="marquee-dot"> · </span>}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work">
        <div className="section-header reveal">
          <span className="section-num">01</span>
          <h2 className="section-title">Selected Work</h2>
        </div>
        <div className="work-grid reveal" style={{ transitionDelay: '.1s' }}>
          {projects.map(p => (
            <a className="work-card" key={p.id} href={`/work/${p.id}/`}>
              <span className="work-card-num">{p.num}</span>
              <img src={p.imgSrc} alt={p.title} className="work-card-img" />
              <h3 className="work-card-title">{p.title}</h3>
              <p className="work-card-desc">{p.desc}</p>
              <div className="work-card-meta">
                <span>{p.role}</span>
                <span>·</span>
                <span>{p.year}</span>
              </div>
              <div className="work-card-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>
              <span className="work-card-link">View case study →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ background: 'var(--card-bg)' }}>
        <div className="about-grid">
          <div className="reveal">
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-num">02</span>
              <h2 className="section-title">About</h2>
            </div>
            <div className="about-body">
              <p>
                I design and build things, 15+ years across agency work, enterprise software, and
                ecommerce platforms, always at the intersection of design and engineering. My
                background spans both sides of that line: research and interaction design on one
                side, React and design systems on the other.
              </p>
              <p>
                Currently leading web development and digital experience at Liberty Hardware in
                Winston-Salem, NC. Previously at Fidelity Investments, IBM, MullenLowe, and others,
                building enterprise design systems, AI-driven interfaces, and high-traffic consumer
                products.
              </p>
              <blockquote className="about-quote">
                "You are where you are today because you stand on somebody's shoulders. And wherever
                you are heading, you cannot get there by yourself… We exist temporarily through what
                we take, but we live forever through what we give."
                <br />
                <small style={{ fontFamily: "'DM Mono', monospace", fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', opacity: .6 }}>
                  Vernon Jordan
                </small>
              </blockquote>
              <p>
                When I'm not building, I'm with my wife and kids, or more likely out paddling my
                kayak.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '.15s' }}>
            <div className="section-header" style={{ marginBottom: 0 }}>
              <span className="section-num">—</span>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Toolkit</h2>
            </div>
            <div className="skills-list" ref={skillsRef}>
              {skills.map((s, i) => (
                <div className="skill-row" key={s.name}>
                  <span className="skill-name">{s.name}</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-bar" ref={el => skillBarsRef.current[i] = el} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <div className="contact-section" id="contact">
        <div className="reveal">
          <h2 className="contact-tagline">
            Good Design<br /><em>is honest.</em>
          </h2>
        </div>
        <div className="contact-links reveal" style={{ transitionDelay: '.15s' }}>
          <a href="mailto:darrough@gmail.com" className="contact-link">↗ Email me</a>
          <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="contact-link">↗ LinkedIn<span className="sr-only"> (opens in new tab)</span></a>
          <a href="https://github.com/darroughw" target="_blank" rel="noopener" className="contact-link">↗ GitHub<span className="sr-only"> (opens in new tab)</span></a>
          <a className="contact-link" href="/resume/">↗ Résumé</a>
        </div>
      </div>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Darrough West. Built by hand.</p>
        <p>UX/UI Designer · Front-End Developer · UX Engineer</p>
      </footer>
    </>
  );
}
