import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import me from '../me.jpg';
import PipelineDiagram from './PipelineDiagram';

const About = () => {
  return (
    <>
      {/* ── Full-bleed hero ── */}
      <div className="hero-full">
        <div className="hero-dark-zone" />
        <div className="hero-portrait-col">
          <img src={me} alt="Milenko Mitrović" loading="eager" />
        </div>
        <div className="hero-bg-zone" />

        <div className="hero-caption">
          <span className="hero-caption-label">Engineering Beyond Borders</span>
          <p className="hero-caption-body">
            16+ years shaping cloud infrastructure across AWS and Azure.
            Leading teams, building platforms that scale.
          </p>
          <Link
            to="/contact"
            className="hero-connect-btn"
          >
            Let&rsquo;s connect <FaArrowRight />
          </Link>
        </div>

        <div className="hero-name-wrap">
          <span className="hero-big">Milenko</span>
          <span className="hero-big">Mitrović</span>
        </div>
      </div>

      {/* ── Info bar ── */}
      <div className="info-bar">
        <div className="info-cell">
          <span className="info-label">Current Role</span>
          Head of Cloud Engineering<br />HTEC Group
        </div>
        <div className="info-cell">
          <span className="info-label">Focus</span>
          AWS · Azure<br />DevOps · SRE · AI Engineering
        </div>
        <div className="info-cell">
          <span className="info-label">Location</span>
          Belgrade, Serbia<br />Available Globally
        </div>
      </div>

      {/* ── About section ── */}
      <section className="section" id="about">
        <div className="section-label-row">
          <span className="section-label">About</span>
          <span className="section-num">01</span>
        </div>

        <div className="about-grid">
          <div className="about-lead">
            <span>16+</span>
            <span>Years</span>
            <span>In Cloud</span>
          </div>

          <div className="about-right">
            <p>
              Head of Cloud Engineering at HTEC Group, overseeing infrastructure strategy
              across multi-cloud environments. Every architectural decision is grounded in
              the AWS Well-Architected Framework — operational excellence, security,
              reliability, performance, cost, sustainability.
            </p>
            <p>
              FinOps practitioner with a track record of measurable cost reduction at
              enterprise scale — up to 35% savings against ~$1M annual infrastructure
              baselines, achieved via rightsizing, reserved capacity strategy, and
              architectural optimization. I build custom AI agents, work across Azure OpenAI,
              Bedrock, and Vertex AI, and apply spec-driven development to keep AI-assisted
              engineering auditable.
            </p>

            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-n">16+</div>
                <div className="stat-l">Years in IT</div>
              </div>
              <div className="stat-item">
                <div className="stat-n">7</div>
                <div className="stat-l">Peak Team Size</div>
              </div>
              <div className="stat-item">
                <div className="stat-n">~$1M</div>
                <div className="stat-l">Annual Infra Owned</div>
              </div>
              <div className="stat-item">
                <div className="stat-n">35%</div>
                <div className="stat-l">Peak Cost Reduction</div>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/contact" className="button-primary">Let&rsquo;s connect &rarr;</Link>
              <a
                href="https://www.linkedin.com/in/subzone/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/subzone"
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                <FaGithub /> GitHub
              </a>
              <Link to="/export" className="button-secondary">Download CV</Link>
            </div>
          </div>
        </div>
      </section>

      <PipelineDiagram />
    </>
  );
};

export default About;
