import { useState, useEffect, useRef } from 'react';
import './App.css';

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
  { name: 'UX/UI & Interaction Design', w: 0.97 },
  { name: 'Design Systems', w: 0.95 },
  { name: 'React / Angular / JS', w: 0.90 },
  { name: 'Figma & Adobe Creative Suite', w: 0.95 },
  { name: 'Accessibility (WCAG)', w: 0.88 },
  { name: 'AI-Driven UX / LLM Interfaces', w: 0.85 },
  { name: 'SEO / GEO', w: 0.82 },
  { name: 'Wireframing & Prototyping', w: 0.93 },
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
        <div className={`cursor${hovered ? ' hovered' : ''}`} style={{ left: cursorPos.x, top: cursorPos.y }} />
        <CaseStudy project={activeProject} onBack={() => setActiveProject(null)} />
      </>
    );
  }

  return (
    <>
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
          <p className="hero-eyebrow">UX/UI Designer · Front-End Developer · UX Engineer</p>
          <h1 className="hero-name">
            Crafting<br /><em>Digital</em><br />Experiences
          </h1>
          <p className="hero-desc">
            I'm Darrough West — a UX/UI designer and front-end developer with 15+ years building scalable, user-centered digital experiences. From design systems to AI-driven interfaces, I move seamlessly from concept to production.
          </p>
          <a href="#work" className="hero-cta">View My Work →</a>
        </div>
        <div className="hero-right reveal" style={{ transitionDelay: '.2s' }}>
          <div className="hero-stat">
            <div className="hero-stat-num">15+</div>
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
          {['Figma', 'Design Systems', 'React', 'Angular', 'Node.js', 'Accessibility', 'AI/LLM UX', 'SEO/GEO', 'HTML/CSS', 'Interaction Design', 'Prototyping', 'Figma', 'Design Systems', 'React', 'Angular', 'Node.js', 'Accessibility', 'AI/LLM UX', 'SEO/GEO', 'HTML/CSS', 'Interaction Design', 'Prototyping'].map((item, i) => (
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
                I'm a UX/UI designer and front-end developer with 15+ years of experience designing and building scalable, user-centered digital experiences. Strong background in design systems, interaction design, and modern front-end development — with the ability to move seamlessly from concept to production.
              </p>
              <p>
                Currently leading web development and digital experience at Liberty Hardware in Winston-Salem, NC. Previously at Fidelity Investments, IBM, MullenLowe, and others — building everything from enterprise design systems to AI-driven interfaces and high-traffic consumer products.
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
          <a href="mailto:darrough@gmail.com" className="contact-link">↗ Email me</a>
          <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="contact-link">↗ LinkedIn</a>
          <a href="https://github.com/darroughw" target="_blank" rel="noopener" className="contact-link">↗ GitHub</a>
          <a href="/resume.pdf" className="contact-link">↗ Resume (PDF)</a>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Darrough West. Built by hand.</p>
        <p>UX/UI Designer · Front-End Developer · UX Engineer</p>
      </footer>
    </>
  );
}
