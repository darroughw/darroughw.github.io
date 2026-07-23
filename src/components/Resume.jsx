import { useEffect } from 'react';

const experience = [
  {
    company: 'Liberty Hardware',
    location: 'Winston-Salem, NC',
    roles: [
      {
        title: 'Manager, Web Development & Digital Workplace (UX/UI + Engineering Lead)',
        period: '2024 – Present',
        bullets: [
          'Lead design and development of enterprise web experiences, balancing UX strategy with hands-on front-end execution.',
          'Define and implement UX patterns, interaction models, and UI standards across digital platforms.',
          'Introduced AI-assisted UX workflows and LLM-driven content experiences.',
          'Improved site usability, accessibility, SEO, and GEO through better content structure and interface design.',
          'Partner with business teams to translate requirements into intuitive digital experiences.',
        ],
      },
    ],
  },
  {
    company: 'Fidelity Investments',
    location: 'Raleigh–Durham–Chapel Hill Area',
    roles: [
      {
        title: 'Principal UX Designer / UX Engineer',
        period: '2021 – 2024',
        bullets: [
          'Co-led design and implementation of a scalable enterprise design system across multiple product teams.',
          'Designed and built reusable UI components that improved consistency and accelerated development.',
          'Partnered with engineers to ensure designs were feasible, performant, and production-ready.',
          'Supported accessibility and usability improvements across high-traffic financial applications.',
        ],
      },
      {
        title: 'UX Designer',
        period: '2021',
        bullets: [
          'Designed user flows and interfaces for retirement and investment platforms.',
          'Collaborated with cross-functional teams to deliver clear, intuitive user experiences in agile environments.',
        ],
      },
    ],
  },
  {
    company: 'Pillar4 Media',
    location: 'Charlotte, NC',
    roles: [
      {
        title: 'Director of Development (UX + Front-End)',
        period: '2020 – 2021',
        bullets: [
          'Led UX and front-end development for large content platforms.',
          'Designed and implemented headless CMS architectures and JavaScript frameworks.',
        ],
      },
    ],
  },
  {
    company: 'IBM',
    location: 'Raleigh–Durham, NC',
    roles: [
      {
        title: 'Front-End Developer / UX Engineer',
        period: '2017 – 2020',
        bullets: [
          'Built accessible, responsive interfaces aligned with the IBM Design System.',
          'Translated wireframes and prototypes into high-quality, production UI.',
          'Ensured strong UX outcomes through performance, accessibility, and usability optimization.',
          'Collaborated closely with designers and product teams to refine interaction models.',
        ],
        recognition: ['Outstanding Technical Achievement Award (2019)', 'First Patent Filed (2018)'],
      },
    ],
  },
  {
    company: 'MullenLowe U.S.',
    location: '',
    roles: [
      {
        title: 'Lead Creative Technologist (UX/UI + Development)',
        period: '2015 – 2017',
        bullets: [
          'Designed and developed digital experiences for large brand campaigns.',
          'Delivered interactive microsites, mobile apps, and experiential products.',
          'Bridged creative design and engineering to bring concepts to life.',
        ],
      },
    ],
  },
  {
    company: 'Ignite Social Media',
    location: '',
    roles: [
      {
        title: 'Director of Technology (UX + Engineering Leadership)',
        period: '2013 – 2015',
        bullets: [
          'Led development and UX execution for social web applications and branded digital experiences.',
          'Partnered with creative and strategy teams to design engaging user interactions.',
          'Built scalable front-end solutions and reusable components.',
        ],
      },
    ],
  },
  {
    company: 'Earlier Experience',
    location: '',
    roles: [
      {
        title: 'UX Designer / Interactive Developer',
        period: '2002 – 2013',
        bullets: [
          'Designed and built interactive experiences, websites, and applications.',
          'Created wireframes, prototypes, and production UI across various industries.',
          'Developed strong foundations in visual design, interaction, and front-end development.',
        ],
      },
    ],
  },
];

const coreSkills = [
  'UX/UI Design & Interaction Design',
  'Design Systems & Component Libraries',
  'User Flows, Wireframing & Prototyping',
  'Front-End Development (React, Angular, JavaScript)',
  'Accessibility (WCAG) & Inclusive Design',
  'AI-Driven UX & LLM Interfaces',
  'SEO, GEO & Content Experience Optimization',
  'Responsive & Mobile-First Design',
  'Agile Product Development & Collaboration',
];

const highlights = [
  'Cut friction-driven site searches 92% and grew traffic 6x through UX research and content strategy (Liberty Hardware)',
  'Led the iOS workstream for an enterprise design system adopted by 150+ designers, shipped on schedule in 9 months (Fidelity)',
  'Increased product page conversion 28% and mobile session duration 41% through a full Shopify platform redesign',
  'Introduced AI-assisted UX and content workflows now used in daily production work',
  'Outstanding Technical Achievement Award and first patent filed (IBM, 2018-2019)',
];

export default function Resume({ onBack }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div className="resume-page">
      <button className="case-back" onClick={onBack}>← Back</button>

      <div className="resume-wrap">

        {/* HEADER */}
        <header className="resume-header">
          <div className="resume-header-left">
            <h1 className="resume-name">Darrough West</h1>
            <p className="resume-title">UX/UI Designer &amp; Front-End Developer (UX Engineer)</p>
          </div>
          <div className="resume-header-right">
            <a href="mailto:darrough@gmail.com" className="resume-contact-link">darrough@gmail.com</a>
            <a href="https://linkedin.com/in/darroughw" target="_blank" rel="noopener" className="resume-contact-link">linkedin.com/in/darroughw</a>
            <span className="resume-contact-link">312-391-4663</span>
            <span className="resume-contact-link">Winston-Salem, NC</span>
          </div>
        </header>

        <div className="resume-rule" />

        {/* SUMMARY */}
        <section className="resume-section">
          <h2 className="resume-section-title">Summary</h2>
          <p className="resume-summary">
            UX/UI designer and front-end developer with 15+ years designing and building digital
            products end to end, from Figma to production code. Recent work: a Shopify redesign that
            cut friction-driven site searches 92% while traffic grew 6x, and an iOS design system
            used by 150+ designers at Fidelity. Background spans design systems, interaction design,
            accessibility, and AI-driven interfaces.
          </p>
        </section>

        <div className="resume-rule" />

        {/* TWO COLUMN: SKILLS + TOOLS */}
        <section className="resume-section resume-two-col">
          <div>
            <h2 className="resume-section-title">Core Skills</h2>
            <ul className="resume-list">
              {coreSkills.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="resume-section-title">Tools &amp; Technologies</h2>
            <p className="resume-tools">
              Figma, Adobe Creative Suite, JavaScript, React, Angular, Node.js, HTML, CSS, APIs,
              CMS platforms, Design System frameworks
            </p>
          </div>
        </section>

        <div className="resume-rule" />

        {/* EXPERIENCE */}
        <section className="resume-section">
          <h2 className="resume-section-title">Professional Experience</h2>
          <div className="resume-experience">
            {experience.map(job => (
              <div className="resume-job" key={job.company}>
                <div className="resume-job-header">
                  <span className="resume-company">{job.company}</span>
                  {job.location && <span className="resume-location">{job.location}</span>}
                </div>
                {job.roles.map(role => (
                  <div className="resume-role" key={role.title}>
                    <div className="resume-role-meta">
                      <span className="resume-role-title">{role.title}</span>
                      <span className="resume-period">{role.period}</span>
                    </div>
                    <ul className="resume-bullets">
                      {role.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                    {role.recognition && (
                      <div className="resume-recognition">
                        {role.recognition.map(r => (
                          <span className="resume-badge" key={r}>★ {r}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div className="resume-rule" />

        {/* KEY HIGHLIGHTS */}
        <section className="resume-section resume-two-col">
          <div>
            <h2 className="resume-section-title">Key Highlights</h2>
            <ul className="resume-list">
              {highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="resume-section-title">Education</h2>
            <p className="resume-tools" style={{ fontWeight: 500 }}>Associate Degree – Computer Graphics &amp; Multimedia</p>
            <p className="resume-tools">Lansing Community College</p>
          </div>
        </section>

      </div>
    </div>
  );
}
