import React from 'react';
import '../App.css';

const projectData = [
    {
        name: 'GreatPlaceToWork',
        link: 'https://www.greatplacetowork.com/',
        summary: 'Global employee satisfaction platform rebuilt on Azure with full IaC and delivery automation.',
        impact: 'Migrated from click-ops to Terraform + Azure DevOps; improved deployment reliability and repeatability.',
        tags: ['Azure', 'Terraform', 'Azure DevOps', 'IaC'],
    },
    {
        name: 'Ananas',
        link: 'https://ananas.rs',
        summary: 'E-commerce platform (EKS) for South-Eastern Europe, built from scratch with modern DevOps.',
        impact: 'Delivered Kubernetes PaaS on EKS with Terraform Cloud + GitHub Actions CI and Argo CD GitOps.',
        tags: ['AWS', 'EKS', 'Terraform Cloud', 'GitHub Actions', 'Argo CD'],
    },
    {
        name: 'Cinedavis',
        link: 'https://www.cinedavis.com/',
        summary: 'Screen advertising and cinema exhibition platform reliability uplift.',
        impact: 'Implemented proactive monitoring/alerting to reduce downtime and accelerate incident response.',
        tags: ['Monitoring', 'Alerting', 'SRE', 'Grafana'],
    },
    {
        name: 'PHC Digitalization',
        link: null,
        summary: 'Primary Health Care Center modernization (7-year quality leader).',
        impact: 'Delivered EMR/EHR, PACS/DICOM, telemedicine, and ISO 27001 certification across the org.',
        tags: ['Healthcare IT', 'ISO 27001', 'Security', 'Telemedicine'],
    },
];

const Projects = () => {
    return (
        <section className="section" id="projects">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Selected Work</div>
                    <h2 className="section-title">Projects & Impact</h2>
                </div>
            </div>

            <div className="card-grid">
                {projectData.map((project) => (
                    <div className="card" key={project.name}>
                        <h3>
                            {project.link
                                ? <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{project.name} ↗</a>
                                : project.name}
                        </h3>
                        <p className="muted">{project.summary}</p>
                        <p>{project.impact}</p>
                        <div className="tag-row">
                            {project.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;