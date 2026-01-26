import React from 'react';

const skillGroups = [
    {
        title: 'Cloud & Platforms',
        level: 95,
        summary: 'Azure, AWS, landing zones, networking, cost awareness',
        tools: ['Azure', 'AWS', 'Landing Zones', 'VNet/VPC', 'FinOps'],
    },
    {
        title: 'DevOps & GitOps',
        level: 92,
        summary: 'IaC, delivery pipelines, GitOps rollouts',
        tools: ['Terraform', 'Helm', 'Argo CD', 'GitHub Actions', 'Jenkins'],
    },
    {
        title: 'SRE & Observability',
        level: 88,
        summary: 'Reliability, monitoring, alerting, performance baselines',
        tools: ['Prometheus', 'Grafana', 'New Relic', 'ELK', 'SLOs'],
    },
    {
        title: 'Security & Compliance',
        level: 85,
        summary: 'ISO 27001, secure SDLC, supply-chain hygiene',
        tools: ['SAST/DAST', 'SonarQube', 'Coverity', 'Black Duck', 'Xray'],
    },
];

const Skills = () => {
    return (
        <section className="section" id="skills">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Capabilities</div>
                    <h2 className="section-title">Core Skills</h2>
                </div>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="card skill-card" key={group.title}>
                        <h3>{group.title}</h3>
                        <p className="muted">{group.summary}</p>
                        <div className="meter" aria-label={`${group.title} proficiency`}>
                            <div className="meter-fill" style={{ width: `${group.level}%` }} />
                        </div>
                        <div className="tag-row">
                            {group.tools.map((tool) => (
                                <span className="tag" key={tool}>{tool}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;