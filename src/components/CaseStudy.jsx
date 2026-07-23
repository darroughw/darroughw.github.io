import { useEffect } from 'react';

export default function CaseStudy({ project }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const { detail } = project;

  return (
    <main className="case-study" id="main">
      <a className="case-back" href="/">← Back</a>
      <div className="case-hero">
        <img src={project.imgSrc} alt={project.title} className="case-hero-img" />
        <div className="case-hero-content">
          <p className="case-hero-eyebrow">Case Study · {project.year}</p>
          <h1 className="case-hero-title">{project.title}</h1>
          <div className="case-meta">
            <span>Role: {project.role}</span>
            <span>Year: {project.year}</span>
            {project.tools && <span>Tools: {project.tools}</span>}
          </div>
        </div>
      </div>

      <div className="case-body">
        <div className="case-tags">
          {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>

        {/* Simple 4-section layout */}
        {detail.overview && !detail.sections && (
          <>
            <h2>Overview</h2>
            <p>{detail.overview}</p>
            <img src={project.imgSrc} alt="Project overview" className="case-img" />
            <h2>The Problem</h2>
            <p>{detail.problem}</p>
            <h2>The Solution</h2>
            <p>{detail.solution}</p>
            <h2>Outcome</h2>
            <p>{detail.outcome}</p>
          </>
        )}

        {/* Rich multi-section layout */}
        {detail.sections && detail.sections.map((section, i) => (
          <div key={i}>
            <h2>{section.heading}</h2>

            {section.body && section.body.map((block, j) => {
              if (block.type === 'paragraph') {
                return block.text.includes('<')
                  ? <p key={j} dangerouslySetInnerHTML={{ __html: block.text }} />
                  : <p key={j}>{block.text}</p>;
              }
              if (block.type === 'subheading') {
                return <h3 key={j} className="case-subheading">{block.text}</h3>;
              }
              if (block.type === 'bullets') {
                return (
                  <ul key={j} className="case-bullets">
                    {block.items.map((item, k) => <li key={k}>{item}</li>)}
                  </ul>
                );
              }
              if (block.type === 'table') {
                return (
                  <div key={j} className="case-table-wrap">
                    <table className="case-table">
                      <thead>
                        <tr>{block.headers.map(h => <th key={h}>{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, k) => (
                          <tr key={k}>{row.map((cell, l) => <td key={l}>{cell}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (block.type === 'stat') {
                return (
                  <div key={j} className="case-stat-row">
                    {block.items.map((s, k) => (
                      <div key={k} className="case-stat">
                        <div className="case-stat-num">{s.value}</div>
                        <div className="case-stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </main>
  );
}
