const skillGroups = [
    {
        title: 'Cloud & Platforms',
        summary: 'Azure, AWS, landing zones, networking, cost awareness',
        tools: ['Azure', 'AWS', 'Landing Zones', 'VNet/VPC', 'FinOps', 'Azure DevOps'],
    },
    {
        title: 'DevOps & GitOps',
        summary: 'IaC, delivery pipelines, GitOps rollouts',
        tools: ['Terraform', 'Helm', 'Argo CD', 'GitHub Actions', 'Jenkins', 'Terraform Cloud'],
    },
    {
        title: 'Containers & Orchestration',
        summary: 'Kubernetes, EKS, AKS, container strategy',
        tools: ['Kubernetes', 'EKS', 'AKS', 'Docker', 'Helm'],
    },
    {
        title: 'SRE & Observability',
        summary: 'Reliability, monitoring, alerting, performance baselines',
        tools: ['Prometheus', 'Grafana', 'New Relic', 'ELK', 'SLOs', 'Nagios'],
    },
    {
        title: 'Security & Compliance',
        summary: 'ISO 27001, secure SDLC, supply-chain hygiene',
        tools: ['SAST/DAST', 'SonarQube', 'Coverity', 'Black Duck', 'Xray', 'ISO 27001'],
    },
    {
        title: 'Leadership & Delivery',
        summary: 'Team leadership, hiring, architecture, stakeholder management',
        tools: ['Team Leadership', 'Hiring', 'Architecture Review', 'Pre-sales', 'Mentoring', 'FinOps'],
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
