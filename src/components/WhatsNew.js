import React from "react";
import "../App.css";

const updates = [
    {
        title: 'Azure DevOps · ADO Terraform Agent',
        detail: 'Extension that provisions self-hosted pipeline agents with Terraform pre-installed, enabling seamless IaC workflows directly within ADO pipelines.',
        link: 'https://marketplace.visualstudio.com/items?itemName=subzone.ado-tf-agent',
    },
    {
        title: 'Azure DevOps · AI PR Reviewer',
        detail: 'Pipeline task that uses Claude AI to automatically review pull requests. Supports GitHub, GitLab, Bitbucket, and multiple AI backends (Anthropic, Azure AI Foundry, AWS Bedrock, Vertex AI).',
        link: 'https://marketplace.visualstudio.com/items?itemName=subzone.ad-ai-pr-reviewer',
    },
    {
        title: 'Azure DevOps · Terraform Drift',
        detail: 'Pipeline task that detects infrastructure drift between Terraform config and live state. Supports auto-reconciliation, manual approval workflows, Terraform and OpenTofu across Azure, AWS, and GCP.',
        link: 'https://marketplace.visualstudio.com/items?itemName=subzone.terraform-drift',
    },
    {
        title: 'Speaking · Vision Days 2025',
        detail: 'Spoke at Vision Days IT conference in Mostar — IT Security & DevOps track.',
        link: 'https://visiondays.ba/',
    },
    {
        title: 'Speaking · CodeCamp 2024',
        detail: 'Spoke at CodeCamp Festival 2024 on DevOps and cloud platform topics.',
        link: 'https://codecamp.ro/speakers/milenko-mitrovic/',
    },
    {
        title: 'GitHub Action · AI SSDLC Security Suite',
        detail: 'Published AI-powered SSDLC action to GitHub Marketplace — SAST, secret detection, SCA, IaC, AI triage, and STRIDE threat modeling in a single pipeline step.',
        link: 'https://github.com/marketplace/actions/ai-ssdlc-security-suite',
    },
    {
        title: 'Multi-theme system',
        detail: 'Implemented three themes (Dark, Ocean, Light) with persistent selection and redesigned navbar.',
        link: null,
    },
    {
        title: 'Multi-cloud hosting',
        detail: 'Migrated CV hosting from Azure Storage to AWS CloudFront — dogfooding multi-cloud.',
        link: null,
    },
];

const WhatsNew = () => {
    return (
        <section className="section no-print" id="whatsnew">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Latest</div>
                    <h2 className="section-title">What's New</h2>
                </div>
            </div>

            <div className="news-grid">
                {updates.map((item) => (
                    <div className="card" key={item.title}>
                        <h3>{item.title}</h3>
                        <p className="muted">{item.detail}</p>
                        {item.link && (
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="button-secondary" style={{ padding: '8px 12px', display: 'inline-flex' }}>
                                Learn more
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatsNew;