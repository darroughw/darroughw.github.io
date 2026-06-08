import { useState, useEffect, useRef } from 'react';

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #F5F2EC;
    --ink: #1A1714;
    --muted: #7A7570;
    --accent: #C85A2A;
    --accent-light: #F0D5C5;
    --rule: #D8D3CC;
    --card-bg: #FDFAF6;
    --dark-bg: #1A1714;
    --dark-surface: #221F1B;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    line-height: 1.6;
    overflow-x: hidden;
    cursor: none;
  }

  /* Cursor */
  .cursor {
    width: 10px; height: 10px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%,-50%);
    transition: width .2s, height .2s, background .2s, border .2s;
  }
  .cursor.hovered {
    width: 36px; height: 36px;
    background: transparent;
    border: 1.5px solid var(--accent);
  }

  /* Noise */
  body::before {
    content:'';
    position:fixed; inset:0;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events:none; z-index:1000; opacity:.35;
  }

  /* NAV */
  nav {
    position:fixed; top:0; left:0; right:0;
    display:flex; align-items:center; justify-content:space-between;
    padding:1.5rem 3rem;
    z-index:100;
  }
  .nav-logo {
    font-family:'Playfair Display',serif;
    font-size:1.1rem; color:var(--ink);
    text-decoration:none; letter-spacing:.02em;
  }
  .nav-links { display:flex; gap:2.5rem; list-style:none; }
  .nav-links a {
    font-size:.78rem; letter-spacing:.12em; text-transform:uppercase;
    color:var(--muted); text-decoration:none; transition:color .2s;
  }
  .nav-links a:hover { color:var(--accent); }

  /* HERO */
  .hero {
    min-height:100vh;
    display:grid; grid-template-columns:1fr 1fr;
    align-items:end; padding:0 3rem 4rem;
    position:relative; overflow:hidden;
  }
  .hero-bg-text {
    position:absolute; top:50%; right:-.05em;
    transform:translateY(-50%);
    font-family:'Playfair Display',serif;
    font-size:clamp(180px,28vw,360px);
    color:transparent;
    -webkit-text-stroke:1px var(--rule);
    user-select:none; pointer-events:none; line-height:1;
  }
  .hero-left { padding-top:10rem; position:relative; z-index:2; }
  .hero-eyebrow {
    font-family:'DM Mono',monospace;
    font-size:.72rem; letter-spacing:.18em; text-transform:uppercase;
    color:var(--accent); margin-bottom:1.5rem;
  }
  .hero-name {
    font-family:'Playfair Display',serif;
    font-size:clamp(2.8rem,5.5vw,5rem);
    line-height:1.05; font-weight:700; margin-bottom:1.5rem;
  }
  .hero-name em { font-style:italic; color:var(--accent); }
  .hero-desc {
    font-size:1.05rem; color:var(--muted);
    max-width:40ch; line-height:1.75; margin-bottom:3rem;
  }
  .hero-cta {
    display:inline-flex; align-items:center; gap:.75rem;
    background:var(--ink); color:var(--bg);
    padding:.9rem 2rem; text-decoration:none;
    font-size:.82rem; letter-spacing:.1em; text-transform:uppercase;
    transition:background .2s;
  }
  .hero-cta:hover { background:var(--accent); }
  .hero-right {
    display:flex; flex-direction:column; align-items:flex-end; gap:0;
    padding-top:10rem; position:relative; z-index:2;
  }
  .hero-stat {
    text-align:right; padding:1.25rem 0;
    border-top:1px solid var(--rule); width:200px;
  }
  .hero-stat:last-child { border-bottom:1px solid var(--rule); }
  .hero-stat-num {
    font-family:'Playfair Display',serif;
    font-size:2.4rem; line-height:1;
  }
  .hero-stat-label {
    font-family:'DM Mono',monospace;
    font-size:.68rem; letter-spacing:.14em; text-transform:uppercase;
    color:var(--muted); margin-top:.25rem;
  }

  /* MARQUEE */
  .marquee-wrap {
    border-top:1px solid var(--rule); border-bottom:1px solid var(--rule);
    overflow:hidden; padding:1rem 0; background:var(--ink);
  }
  .marquee-track {
    display:flex; white-space:nowrap;
    animation:marquee 22s linear infinite;
  }
  .marquee-item {
    font-family:'Playfair Display',serif; font-style:italic;
    font-size:1rem; color:var(--bg); padding:0 2.5rem; opacity:.6;
  }
  .marquee-dot { color:var(--accent); opacity:1 !important; padding:0; }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }

  /* SECTIONS */
  section { padding:6rem 3rem; }
  .section-header {
    display:flex; align-items:baseline; gap:1.5rem; margin-bottom:4rem;
  }
  .section-num {
    font-family:'DM Mono',monospace; font-size:.72rem;
    color:var(--accent); letter-spacing:.1em;
  }
  .section-title {
    font-family:'Playfair Display',serif;
    font-size:clamp(2rem,3.5vw,3rem);
  }

  /* WORK GRID */
  .work-grid {
    display:grid; grid-template-columns:1fr 1fr;
    gap:1px; background:var(--rule);
  }
  .work-card {
    background:var(--card-bg);
    padding:3rem; display:flex; flex-direction:column;
    gap:1.25rem; position:relative; overflow:hidden;
    transition:background .25s; cursor:none;
  }
  .work-card::after {
    content:''; position:absolute; bottom:0; left:0;
    width:0; height:3px; background:var(--accent);
    transition:width .4s ease;
  }
  .work-card:hover::after { width:100%; }
  .work-card:hover { background:var(--accent-light); }
  .work-card-num {
    font-family:'DM Mono',monospace; font-size:.68rem;
    letter-spacing:.14em; color:var(--muted);
  }
  .work-card-img {
    width:100%; aspect-ratio:16/9;
    object-fit:cover; display:block;
    filter:grayscale(30%); transition:filter .3s;
    border-radius:2px;
  }
  .work-card:hover .work-card-img { filter:grayscale(0%); }
  .work-card-title {
    font-family:'Playfair Display',serif; font-size:1.6rem; line-height:1.2;
  }
  .work-card-desc { font-size:.92rem; color:var(--muted); line-height:1.7; flex:1; }
  .work-card-meta {
    display:flex; gap:1rem; align-items:center;
    font-family:'DM Mono',monospace; font-size:.65rem;
    letter-spacing:.1em; text-transform:uppercase; color:var(--muted);
  }
  .work-card-tags { display:flex; flex-wrap:wrap; gap:.4rem; margin-top:auto; }
  .tag {
    font-family:'DM Mono',monospace; font-size:.62rem;
    letter-spacing:.1em; text-transform:uppercase;
    border:1px solid var(--rule); padding:.2rem .55rem; color:var(--muted);
  }
  .work-card-link {
    display:inline-flex; align-items:center; gap:.4rem;
    font-size:.78rem; letter-spacing:.08em; text-transform:uppercase;
    color:var(--accent); text-decoration:none; margin-top:.5rem;
    width:fit-content;
  }
  .work-card-link:hover { text-decoration:underline; }

  /* ABOUT */
  .about-grid {
    display:grid; grid-template-columns:1fr 1fr;
    gap:6rem; align-items:start;
  }
  .about-body { font-size:1.05rem; color:var(--muted); line-height:1.9; margin-top:2rem; }
  .about-body p + p { margin-top:1.25rem; }
  .about-quote {
    font-family:'Playfair Display',serif; font-style:italic;
    font-size:1rem; color:var(--ink); line-height:1.7;
    border-left:3px solid var(--accent); padding-left:1.25rem;
    margin:1.5rem 0;
  }
  .skills-list { margin-top:2rem; }
  .skill-row {
    display:flex; align-items:center; justify-content:space-between;
    padding:1rem 0; border-bottom:1px solid var(--rule);
  }
  .skill-name {
    font-family:'DM Mono',monospace; font-size:.78rem;
    letter-spacing:.08em; text-transform:uppercase;
  }
  .skill-bar-wrap { width:140px; height:2px; background:var(--rule); }
  .skill-bar {
    height:100%; background:var(--accent);
    transform-origin:left; transform:scaleX(0);
    transition:transform .8s ease;
  }

  /* CONTACT */
  .contact-section {
    background:var(--ink); color:var(--bg);
    padding:6rem 3rem;
    display:grid; grid-template-columns:1fr auto;
    align-items:end; gap:4rem;
  }
  .contact-tagline {
    font-family:'Playfair Display',serif;
    font-size:clamp(2.5rem,5vw,4.5rem); line-height:1.1;
  }
  .contact-tagline em { font-style:italic; color:var(--accent); }
  .contact-links { display:flex; flex-direction:column; gap:1rem; align-items:flex-end; }
  .contact-link {
    font-family:'DM Mono',monospace; font-size:.78rem;
    letter-spacing:.12em; text-transform:uppercase;
    color:var(--bg); text-decoration:none; opacity:.6;
    transition:opacity .2s, color .2s;
    display:flex; align-items:center; gap:.5rem;
  }
  .contact-link:hover { opacity:1; color:var(--accent); }

  /* CASE STUDY */
  .case-study {
    min-height:100vh; background:var(--bg);
  }
  .case-back {
    position:fixed; top:1.5rem; left:3rem;
    display:inline-flex; align-items:center; gap:.5rem;
    font-family:'DM Mono',monospace; font-size:.72rem;
    letter-spacing:.12em; text-transform:uppercase;
    background:var(--ink); color:var(--bg);
    padding:.6rem 1.25rem; text-decoration:none;
    cursor:none; z-index:200; border:none;
    transition:background .2s;
  }
  .case-back:hover { background:var(--accent); }
  .case-hero {
    height:60vh; background:var(--ink);
    display:flex; flex-direction:column;
    justify-content:flex-end; padding:3rem;
    position:relative; overflow:hidden;
  }
  .case-hero-img {
    position:absolute; inset:0; width:100%; height:100%;
    object-fit:cover; opacity:.3;
    filter:grayscale(40%);
  }
  .case-hero-content { position:relative; z-index:2; color:var(--bg); }
  .case-hero-eyebrow {
    font-family:'DM Mono',monospace; font-size:.72rem;
    letter-spacing:.18em; text-transform:uppercase; color:var(--accent);
    margin-bottom:1rem;
  }
  .case-hero-title {
    font-family:'Playfair Display',serif;
    font-size:clamp(2.5rem,5vw,4rem); line-height:1.1; margin-bottom:1rem;
  }
  .case-meta {
    display:flex; gap:3rem; margin-top:1rem;
    font-family:'DM Mono',monospace; font-size:.72rem;
    letter-spacing:.1em; text-transform:uppercase; opacity:.7;
  }
  .case-body { max-width:860px; margin:0 auto; padding:4rem 3rem; }
  .case-body h2 {
    font-family:'Playfair Display',serif; font-size:2rem;
    margin:3rem 0 1rem;
  }
  .case-body p { color:var(--muted); line-height:1.85; margin-bottom:1.25rem; }
  .case-tags { display:flex; flex-wrap:wrap; gap:.5rem; margin:2rem 0; }
  .case-img {
    width:100%; border-radius:2px; margin:2rem 0;
    filter:grayscale(20%);
  }

  /* FOOTER */
  footer {
    padding:2rem 3rem; border-top:1px solid var(--rule);
    display:flex; justify-content:space-between; align-items:center;
  }
  footer p {
    font-family:'DM Mono',monospace; font-size:.68rem;
    letter-spacing:.1em; color:var(--muted);
  }

  /* REVEAL */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease, transform .7s ease; }
  .reveal.visible { opacity:1; transform:none; }

  @media(max-width:768px) {
    nav { padding:1.25rem 1.5rem; }
    .hero, .about-grid { grid-template-columns:1fr; }
    .hero { padding:0 1.5rem 3rem; }
    .hero-right { align-items:flex-start; }
    .hero-bg-text { display:none; }
    .work-grid { grid-template-columns:1fr; }
    section { padding:4rem 1.5rem; }
    .contact-section { grid-template-columns:1fr; padding:4rem 1.5rem; }
    .contact-links { align-items:flex-start; }
    footer { flex-direction:column; gap:.5rem; text-align:center; }
    .case-back { left:1.5rem; }
    .case-body { padding:3rem 1.5rem; }
  }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 'youfit',
    num: '001',
    title: 'YouFit Virtual 5k',
    desc: 'A real-time virtual running event platform that connected runners nationwide, tracked progress in real-time, and created engaging community challenges.',
    role: 'Lead Design / Development',
    year: '2016',
    tags: ['Mobile Design', 'UX Research', 'Prototyping', 'iOS'],
    imgSrc: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=900&q=80',
    detail: {
      overview: 'YouFit wanted to launch a virtual 5k during a period when in-person fitness events were impossible. The challenge: make a screen-based running event feel just as electric and communal as a real race.',
      problem: 'Runners had no way to experience the motivation and community of a race event. Progress tracking was fragmented across devices, and the social layer was missing entirely.',
      solution: 'Designed and built a real-time event platform with live leaderboards, push notification pacing support, and community challenge mechanics. The iOS-first interface kept runners engaged before, during, and after their run.',
      outcome: 'Over 3,000 runners participated nationwide. Average completion rate exceeded typical virtual events by 34%.',
    }
  },
  {
    id: 'liberty',
    num: '002',
    title: 'Liberty Hardware Shopify Platform',
    desc: 'Complete redesign for a hardware manufacturer, modernizing their Shopify platform to improve product discovery and streamline the customer journey.',
    role: 'Lead Design / Development',
    year: '2025',
    tags: ['Web Design', 'Design System', 'UX Research', 'Responsive', 'Liquid', 'AIO', 'SEO'],
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
    detail: {
      overview: 'Liberty Hardware — a leading cabinet hardware manufacturer — needed their Shopify storefront rebuilt from the ground up. The existing site buried products in navigation and failed to convert professional buyers.',
      problem: 'Product discovery was broken. The visual system was inconsistent across 4,000+ SKUs. Mobile performance tanked under product filtering. SEO was an afterthought.',
      solution: 'Built a comprehensive Shopify Liquid design system with a faceted search architecture, smart product photography guidelines, and an AIO-optimized content structure. Collaborated directly with engineering and marketing teams throughout.',
      outcome: 'Improved product page conversion by 28%. Mobile session duration increased by 41%. Site now ranks on page 1 for 60+ target category terms.',
    }
  },
];

const skills = [
  { name: 'Figma', w: 0.95 },
  { name: 'User Research', w: 0.92 },
  { name: 'Design Systems', w: 0.88 },
  { name: 'Prototyping', w: 0.9 },
  { name: 'HTML / CSS', w: 0.85 },
  { name: 'SEO / AIO', w: 0.8 },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────
function CaseStudy({ project, onBack }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);
  return (
    <div className="case-study">
      <button className="case-back" onClick={onBack}>← Back</button>
      <div className="case-hero">
        <img src={project.imgSrc} alt={project.title} className="case-hero-img" />
        <div className="case-hero-content">
          <p className="case-hero-eyebrow">Case Study · {project.year}</p>
          <h1 className="case-hero-title">{project.title}</h1>
          <div className="case-meta">
            <span>Role: {project.role}</span>
            <span>Year: {project.year}</span>
          </div>
        </div>
      </div>
      <div className="case-body">
        <div className="case-tags">{project.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
        <h2>Overview</h2>
        <p>{project.detail.overview}</p>
        <img src={project.imgSrc} alt="Project overview" className="case-img" />
        <h2>The Problem</h2>
        <p>{project.detail.problem}</p>
        <h2>The Solution</h2>
        <p>{project.detail.solution}</p>
        <h2>Outcome</h2>
        <p>{project.detail.outcome}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const skillsRef = useRef(null);
  const skillBarsRef = useRef([]);

  // Cursor
  useEffect(() => {
    const move = e => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  // Reveal on scroll
  useEffect(() => {
    if (activeProject) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [activeProject]);

  // Skill bars
  useEffect(() => {
    if (!skillsRef.current || activeProject) return;
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
  }, [activeProject]);

  // Hover tracking for cursor
  useEffect(() => {
    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);
    const els = document.querySelectorAll('a, button, .work-card');
    els.forEach(el => { el.addEventListener('mouseenter', addHover); el.addEventListener('mouseleave', removeHover); });
    return () => els.forEach(el => { el.removeEventListener('mouseenter', addHover); el.removeEventListener('mouseleave', removeHover); });
  });

  if (activeProject) {
    return (
      <>
        <style>{css}</style>
        <div className={`cursor${hovered ? ' hovered' : ''}`} style={{ left: cursorPos.x, top: cursorPos.y }} />
        <CaseStudy project={activeProject} onBack={() => setActiveProject(null)} />
      </>
    );
  }

  return (
    <>
      <style>{css}</style>
      <div className={`cursor${hovered ? ' hovered' : ''}`} style={{ left: cursorPos.x, top: cursorPos.y }} />

      {/* NAV */}
      <nav>
        <a href="#" className="nav-logo">darrough west</a>
        <ul className="nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="https://github.com/darroughw" target="_blank" rel="noopener">GitHub ↗</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left reveal">
          <p className="hero-eyebrow">Creative Technologist · UI/UX Designer · Engineer</p>
          <h1 className="hero-name">
            Crafting<br /><em>Digital</em><br />Experiences
          </h1>
          <p className="hero-desc">
            I'm Darrough West — a designer focused on creating intuitive and beautiful interfaces that solve real problems and delight users.
          </p>
          <a href="#work" className="hero-cta">View My Work →</a>
        </div>
        <div className="hero-right reveal" style={{ transitionDelay: '.2s' }}>
          <div className="hero-stat">
            <div className="hero-stat-num">25+</div>
            <div className="hero-stat-label">Years of experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">2</div>
            <div className="hero-stat-label">Featured case studies</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num">0</div>
            <div className="hero-stat-label">Skipped research phases</div>
          </div>
        </div>
        <div className="hero-bg-text" aria-hidden="true">DW</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Shopify Liquid', 'SEO', 'AIO', 'iOS Design', 'HTML/CSS', 'Figma', 'User Research', 'Design Systems', 'Prototyping', 'Shopify Liquid', 'SEO', 'AIO', 'iOS Design', 'HTML/CSS'].map((item, i) => (
            <span key={i} className={item === '·' ? 'marquee-dot' : 'marquee-item'}>{i % 1 === 0 && i > 0 ? <><span className="marquee-dot"> · </span>{item}</> : item}</span>
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
            <div className="work-card" key={p.id} onClick={() => setActiveProject(p)}>
              <span className="work-card-num">{p.num}</span>
              <img src={p.imgSrc} alt={p.title} className="work-card-img" />
              <h3 className="work-card-title">{p.title}</h3>
              <p className="work-card-desc">{p.desc}</p>
              <div className="work-card-meta">
                <span>{p.role}</span>
                <span>·</span>
                <span>{p.year}</span>
              </div>
              <div className="work-card-tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <span className="work-card-link">View case study →</span>
            </div>
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
                I'm a Creative Technologist, UI/UX designer, and engineer with over 25 years of experience creating digital experiences that are both beautiful and functional. My approach combines SEO, AIO, user research, iterative design, and close collaboration with development, marketing, and leadership teams.
              </p>
              <blockquote className="about-quote">
                "You are where you are today because you stand on somebody's shoulders. And wherever you are heading, you cannot get there by yourself… We exist temporarily through what we take, but we live forever through what we give."
                <br /><small style={{ fontFamily: "'DM Mono', monospace", fontSize: '.7rem', letterSpacing: '.1em', textTransform: 'uppercase', opacity: .6 }}>— Vernon Jordan</small>
              </blockquote>
              <p>
                When I'm not building, you can find me with my wife and kids — or more likely out paddling my kayak.
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
            Let's make something<br /><em>worth remembering.</em>
          </h2>
        </div>
        <div className="contact-links reveal" style={{ transitionDelay: '.15s' }}>
          <a href="mailto:your@email.com" className="contact-link">↗ Email me</a>
          <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="contact-link">↗ LinkedIn</a>
          <a href="https://github.com/darroughw" target="_blank" rel="noopener" className="contact-link">↗ GitHub</a>
          <a href="/resume.pdf" className="contact-link">↗ Resume (PDF)</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Darrough West. Built by hand.</p>
        <p>Creative Technologist · UI/UX Designer · Engineer</p>
      </footer>
    </>
  );
}
