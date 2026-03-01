import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
          and bring Site Reliability, FinOps, and AI engineering thinking into everyday delivery — so products ship faster, safer, and smarter.
          I build custom AI agents, work across Azure OpenAI, Bedrock, and Vertex AI, and apply spec-driven development to keep AI-assisted engineering auditable.
          Always happy to talk about infrastructure, AI tooling, or where the two meet.
        </p>
        <div className="hero-actions">
          <a href="https://www.linkedin.com/in/subzone/" target="_blank" rel="noopener noreferrer" className="button-primary" style={{ background: "linear-gradient(135deg, #0077b5, #005983)", borderColor: "#005983" }}>
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/subzone" target="_blank" rel="noopener noreferrer" className="button-secondary">
            <FaGithub /> GitHub
          </a>
          <Link to="/export" className="button-secondary">Download CV</Link>
        </div>
        <div className="stat-chips">
          <div className="stat-chip"><span className="label">Years in IT</span><span className="value">16+</span></div>
          <div className="stat-chip"><span className="label">Teams led</span><span className="value">5+</span></div>
          <div className="stat-chip"><span className="label">Location</span><span className="value">Serbia · Remote OK</span></div>
          <div className="stat-chip"><span className="label">Clouds</span><span className="value">Azure · AWS</span></div>
          <div className="stat-chip"><span className="label">Focus</span><span className="value">DevOps · SRE · AI Eng</span></div>
          <div className="stat-chip"><span className="label">Engagement</span><span className="value">Leadership · Advisory</span></div>
        </div>
      </div>

      <div className="hero-portrait">
        <img src={me} alt="Portrait of Milenko Mitrović" loading="lazy" />
      </div>
    </section>
  );
};

export default About;