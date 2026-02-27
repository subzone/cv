import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CVDocument.css';

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
    ],
    tags: ['Azure', 'AWS', 'GitOps', 'Platform Engineering', 'FinOps', 'Partnerships'],
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

const skillGroups = [
  { title: 'Cloud & Platforms', tools: ['Azure', 'AWS', 'Landing Zones', 'VNet/VPC', 'FinOps', 'Azure DevOps'] },
  { title: 'DevOps & GitOps', tools: ['Terraform', 'Helm', 'Argo CD', 'GitHub Actions', 'Jenkins', 'Terraform Cloud'] },
  { title: 'Containers & Orchestration', tools: ['Kubernetes', 'EKS', 'AKS', 'Docker', 'Helm'] },
  { title: 'SRE & Observability', tools: ['Prometheus', 'Grafana', 'New Relic', 'ELK', 'SLOs', 'Nagios'] },
  { title: 'Security & Compliance', tools: ['SAST/DAST', 'SonarQube', 'Coverity', 'Black Duck', 'Xray', 'ISO 27001'] },
  { title: 'Leadership & Delivery', tools: ['Team Leadership', 'Hiring', 'Architecture Review', 'Pre-sales', 'Mentoring'] },
];

const education = [
  {
    title: 'IT Engineer · VI degree',
    detail: 'VTS Doboj, Doboj, BiH — 2004',
    tags: ['Information Technology', 'Engineering'],
  },
  {
    title: 'Cloud Credentials & Continuous Learning',
    detail: 'Azure learning paths (administration, DevOps, architecture). Google Cloud credentials. Active hands-on practice across Azure and AWS.',
    tags: ['Azure', 'GCP', 'AWS'],
  },
  {
    title: 'Internal Auditor Certifications',
    detail: 'ISO 9001, ISO 14001, ISO 17025, ISO 18001 (OHSAS), ISO 27001',
    tags: ['Quality', 'Security', 'Compliance'],
  },
  {
    title: 'High Performance Team Coach',
    detail: 'Certified by Atria Group International',
    tags: ['Leadership', 'Coaching'],
  },
];

const CVDocument = () => {
  const navigate = useNavigate();

  return (
    <div className="cv-page">
      <div className="cv-toolbar">
        <button className="cv-toolbar-btn back" onClick={() => navigate(-1)}>← Back</button>
        <button className="cv-toolbar-btn print" onClick={() => window.print()}>Print / Save as PDF</button>
      </div>

      <div className="cv-document">
        {/* Header */}
        <header className="cv-header">
          <h1>Milenko Mitrović</h1>
          <p className="cv-title">Head of Cloud Engineering · DevOps, Cloud & Platform Engineering Leader</p>
          <div className="cv-contact-row">
            <span>Serbia · Remote OK</span>
            <a href="https://www.linkedin.com/in/subzone/" target="_blank" rel="noopener noreferrer">linkedin.com/in/subzone</a>
            <a href="https://github.com/subzone" target="_blank" rel="noopener noreferrer">github.com/subzone</a>
          </div>
          <p className="cv-summary">
            16+ years architecting resilient platforms across Azure and AWS. I lead teams, design pragmatic delivery pipelines,
            and bring Site Reliability and FinOps thinking into everyday engineering so products ship faster and safer.
            Open to leadership and advisory engagements.
          </p>
        </header>

        {/* Experience */}
        <section className="cv-section">
          <h2 className="cv-section-title">Professional Experience</h2>
          {roles.map((role) => (
            <div className="cv-role" key={role.title + role.period}>
              <div className="cv-role-header">
                <span className="cv-role-title">{role.title}</span>
                <span className="cv-role-period">{role.period}</span>
              </div>
              <div className="cv-role-company">
                <a href={role.link} target="_blank" rel="noopener noreferrer">{role.company}</a>
                {role.focus && <> · {role.focus}</>}
              </div>
              <ul className="cv-bullet-list">
                {role.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
              <div className="cv-tags">
                {role.tags.map((t) => <span className="cv-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="cv-section">
          <h2 className="cv-section-title">Core Skills</h2>
          <div className="cv-skills-grid">
            {skillGroups.map((group) => (
              <div className="cv-skill-group" key={group.title}>
                <h4>{group.title}</h4>
                <div className="cv-tags">
                  {group.tools.map((t) => <span className="cv-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="cv-section">
          <h2 className="cv-section-title">Education & Certifications</h2>
          {education.map((item) => (
            <div className="cv-edu-item" key={item.title}>
              <div className="cv-edu-title">{item.title}</div>
              <div className="cv-edu-detail">{item.detail}</div>
              <div className="cv-tags" style={{ marginTop: 4 }}>
                {item.tags.map((t) => <span className="cv-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CVDocument;
