import React from 'react';
import '../App.css';

class Projects extends React.Component {
    render() {
        return (
            <div><br /><br />
                <h1>Most Interesting Projects that I had a part in</h1>
                <hr className="black-line" />
                <h2>GreatPlaceToWork</h2>
                <p>Global employee satisfaction survey and culture management platform.</p>
                <p>Rebuild entire Infrastructure on Azure from Clickops to IaC, with Terraform as a code base, and Azure Devops as an orchestrator for deployment and infrastructure management.</p>
                <h2>Ananas</h2>
                <p>Serbian leading e-Commerce platform, with intention to become "Amazon" for SouthEastern Europe.</p>
                <p>Built from scratch ground up, e-commerce solution based on k8s (EKS) as a PaaS, IaC Terraform, Terraform Cloud as an orchestrator and GitHub Actions as CI tool with ARGO CD as a deployment platform.</p>
                <h2>Cinedavis</h2>
                <p>In Europe, Cinedavis is a leading provider of solutions for screen advertising and cinema exibition industries.</p>
                <p>Implemented continuous monitoring and alerting systems in order to reduce downtimes, and create response even before issue occurs.</p>
                <h2>Primary Health Care Center Digitalization</h2>
                <p>One of the leading Serbian Health Care providers (7 years continuously Best Health Care Center in continuous quality improvement)</p>
                <p>Implemented EMR/EHR systems, Laboratory IS, PACS, RISC, DICOM, Telemedicine, Certified per ISO 27001 (only PHC in Serbia ever achieved it), and many, many more high end technologies to improve quality for service users.</p>
            </div>
        );
    }
}

export default Projects;