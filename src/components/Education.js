import React from 'react';

const Education = () => {
    return (
        <section className="section" id="education">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Education & Certifications</div>
                    <h2 className="section-title">Formal Education</h2>
                </div>
            </div>

            <div className="section-label-row" style={{ marginBottom: '1.5rem' }}>
                <span className="section-label">Tier 1 — Professional</span>
            </div>

            <div className="card-grid" style={{ marginBottom: '1px' }}>
                <div className="card">
                    <h3>IT Engineer · VI degree</h3>
                    <p className="muted">VTS Doboj, Doboj, BiH — 2004 · Post-secondary applied IT engineering, equivalent to technical BSc</p>
                    <p className="muted" style={{ marginTop: '0.5rem' }}>Thesis: Installing, Securing and Optimizing Linux Servers · Grade 10/10</p>
                    <div className="tag-row">
                        <span className="tag">Information Technology</span>
                        <span className="tag">Engineering</span>
                        <span className="tag">Linux</span>
                        <span className="tag">Systems Security</span>
                    </div>
                </div>

                <div className="card">
                    <h3>Internal Auditor Certifications</h3>
                    <p className="muted">ISO 9001, ISO 14001, ISO 17025, ISO 18001 (OHSAS), ISO 27001</p>
                    <div className="tag-row">
                        <span className="tag">Quality</span>
                        <span className="tag">Security</span>
                        <span className="tag">Compliance</span>
                    </div>
                </div>

                <div className="card">
                    <h3>High Performance Team Coach</h3>
                    <p className="muted">
                        Certified by <a href="https://www.linkedin.com/company/atria-group-see/" target="_blank" rel="noopener noreferrer">Atria Group International</a>
                    </p>
                    <div className="tag-row">
                        <span className="tag">Leadership</span>
                        <span className="tag">Coaching</span>
                    </div>
                </div>
            </div>

            <div className="section-label-row" style={{ marginBottom: '1.5rem', marginTop: '3rem' }}>
                <span className="section-label">Tier 2 — Continuous Learning</span>
            </div>

            <div className="card-grid">
                <div className="card">
                    <h3>Cloud Credentials</h3>
                    <p className="muted">Azure learning paths across administration, DevOps, and architecture tracks. Google Cloud credentials. Active hands-on practice across Azure and AWS.</p>
                    <div className="tag-row">
                        <span className="tag">Azure</span>
                        <span className="tag">GCP</span>
                        <span className="tag">AWS</span>
                        <span className="tag">Continuous Learning</span>
                    </div>
                </div>

                <div className="card">
                    <h3>Anthropic Academy</h3>
                    <p className="muted">AI fluency, Claude API, agentic development, and tooling — 2026</p>
                    <div className="tag-row">
                        <span className="tag">Claude 101</span>
                        <span className="tag">AI Fluency</span>
                        <span className="tag">Building with the Claude API</span>
                        <span className="tag">Claude Code in Action</span>
                        <span className="tag">Introduction to Agent Skills</span>
                        <span className="tag">Introduction to Subagents</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;