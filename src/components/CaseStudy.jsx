import { useEffect } from 'react';

export default function CaseStudy({ project, onBack }) {
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
        <div className="case-tags">
          {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
        </div>
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
