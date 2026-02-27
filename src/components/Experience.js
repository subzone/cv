import React from 'react';
import '../App.css';

const roles = [
    {
        title: 'Head of Cloud Engineering',
        company: 'HTEC Group',
        link: 'https://htecgroup.com',
        period: 'Jul 2022 – Present',
        focus: 'Cloud strategy, platform engineering, DevOps leadership',
        bullets: [
            'Lead cloud engineering teams of 2–7 engineers, owning infrastructure architecture, platform reliability, and DevOps capability across concurrent client engagements.',
            'Drive pre-sales and due-diligence technical support; contribute to high-level architecture proposals for new business engagements.',
            'Scale GitOps and Platform Engineering patterns org-wide; own interviewing and hiring standards for cloud roles.',
            'Led cloud vendor partnership processes with Microsoft, AWS, and GCP over 3 years, contributing to partner-tier advancement.',
            'Built custom AI agents and developer tooling on Azure OpenAI, Amazon Bedrock, and Vertex AI; led org-wide adoption of AI coding assistants and established spec-driven development practices to keep AI-assisted delivery auditable and secure.',
        ],
        tags: ['Azure', 'AWS', 'GitOps', 'Platform Eng', 'FinOps', 'AI Engineering'],
    },
    {
        title: 'Senior DevOps Engineer · Tech Lead',
        company: 'HTEC Group',
        link: 'https://htecgroup.com',
        period: 'Sep 2020 – Jul 2022',
        focus: 'IaC, CI/CD, security practices',
        bullets: [
            'Built and hardened pipelines (SAST/DAST), infrastructure as code, and release automation across multiple client products.',
            'Mentored engineers and shaped R&D initiatives on delivery tooling.',
            'Established GitOps practices with Terraform + Argo CD.',
        ],
        tags: ['Terraform', 'Argo CD', 'GitHub Actions', 'SAST/DAST'],
    },
    {
        title: 'DevOps Engineer',
        company: 'Wolters Kluwer (consulting)',
        link: 'https://www.wolterskluwer.com',
        period: 'Aug 2018 – Sep 2020',
        focus: 'CI/CD platform, observability, IaC',
        bullets: [
            'Maintained CloudBees Jenkins Enterprise + Artifactory platform; extended scripted shared libraries.',
            'Integrated SonarQube, Coverity, Black Duck, and Xray for code and supply-chain assurance.',
            'Supported Azure infrastructure with Terraform and Chef; implemented logging with ELK/New Relic.',
        ],
        tags: ['Jenkins', 'Artifactory', 'SonarQube', 'Terraform', 'Azure'],
    },
    {
        title: 'Linux Administrator',
        company: 'Intens',
        link: 'https://intens.rs',
        period: 'Sep 2017 – Sep 2018',
        focus: 'Streaming platform reliability',
        bullets: [
            'Monitored 300+ Scientific Linux servers for video streaming workloads.',
            'Implemented Nagios with custom Bash plugins and Grafana visualizations.',
            'Managed KVM virtualization footprint and capacity.',
        ],
        tags: ['Linux', 'Nagios', 'Grafana', 'KVM'],
    },
    {
        title: 'IT Assistant',
        company: 'Farmina Pet Foods',
        link: 'https://farmina.com/',
        period: 'Oct 2016 – Sep 2017',
        focus: 'Infrastructure & security',
        bullets: [
            'Administered HW/SW for 20+ servers and 200+ workstations; supported 100+ users.',
            'Managed LAN/VPN/security and video surveillance systems.',
        ],
        tags: ['Networking', 'Security', 'Support'],
    },
    {
        title: 'System Administrator / IT Engineer',
        company: 'Primary Health Care Center Inđija',
        link: 'https://dzindjija.rs',
        period: 'Sep 2008 – Oct 2016',
        focus: 'Healthcare IT modernization',
        bullets: [
            'Implemented and maintained EHR/EMR, PACS/DICOM, telemedicine, and ISO 27001 controls.',
            'Managed 20+ servers, 200+ workstations, and security for 350+ users.',
            'Led ISO 9001/14001/18001 programs and achieved 98%+ excellence in health standards.',
        ],
        tags: ['EHR/EMR', 'ISO 27001', 'Security', 'Healthcare IT'],
    },
];

const Experience = () => {
    return (
        <section className="section" id="experience">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Roles & Impact</div>
                    <h2 className="section-title">Professional Experience</h2>
                </div>
                <div className="pill">Leadership · Delivery · Reliability</div>
            </div>

            <div className="timeline">
                {roles.map((role) => (
                    <div className="timeline-item" key={role.title + role.period}>
                        <span className="timeline-dot" aria-hidden="true" />
                        <div className="timeline-card">
                            <div className="timeline-header">
                                <div>
                                    <h3 className="timeline-title">{role.title}</h3>
                                    <div className="timeline-meta">
                                        <a href={role.link} target="_blank" rel="noopener noreferrer">{role.company}</a> · {role.period}
                                    </div>
                                    <div className="muted">{role.focus}</div>
                                </div>
                            </div>
                            <ul className="bullet-list">
                                {role.bullets.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            <div className="tag-row">
                                {role.tags.map((tag) => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
