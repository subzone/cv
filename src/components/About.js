import React from 'react';
import { Link } from 'react-router-dom';
import me from '../me.jpg';
import '../App.css';

const About = () => {
  return (
    <section className="section hero" id="about">
      <div className="hero-intro">
        <div className="pill">Head of Cloud Engineering · HTEC</div>
        <h1>Hi, I’m Milenko Mitrović</h1>
        <h2>DevOps, Cloud & Platform Engineering Leader</h2>
        <p className="muted">
          16+ years architecting resilient platforms across Azure and AWS. I lead teams, design pragmatic delivery pipelines,
          and bring Site Reliability and FinOps thinking into everyday engineering so products ship faster and safer.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="button-primary">Let’s talk</Link>
          <Link to="/export" className="button-secondary">Download CV</Link>
        </div>
        <div className="stat-chips">
          <div className="stat-chip"><span className="label">Years in IT</span><span className="value">16+</span></div>
          <div className="stat-chip"><span className="label">Teams led</span><span className="value">5+</span></div>
          <div className="stat-chip"><span className="label">Clouds</span><span className="value">Azure · AWS</span></div>
          <div className="stat-chip"><span className="label">Focus</span><span className="value">DevOps · SRE · GitOps</span></div>
        </div>
      </div>

      <div className="hero-portrait">
        <img src={me} alt="Portrait of Milenko Mitrović" loading="lazy" />
      </div>
    </section>
  );
};

export default About;