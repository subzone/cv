import React from "react";
import "../App.css";

const updates = [
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
        title: 'Azure DevOps extension',
        detail: 'Built Terraform Drift Detector extension — published to VS Marketplace, open for contributions.',
        link: 'https://marketplace.visualstudio.com/items?itemName=subzone.terraform-drift',
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

const gallery = [
    '/images/pic4.jpg',
    '/images/pic5.jpg',
    '/images/pic6.jpg',
    '/images/pic1.jpg',
    '/images/pic2.jpg',
];

const WhatsNew = () => {
    return (
        <section className="section no-print" id="whatsnew">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Latest</div>
                    <h2 className="section-title">What’s New</h2>
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

            <h3 style={{ marginTop: '12px', color: 'var(--text-strong)' }}>Gallery</h3>
            <div className="gallery-grid">
                {gallery.map((src) => (
                    <img src={src} alt="Gallery" key={src} loading="lazy" />
                ))}
            </div>
        </section>
    );
};

export default WhatsNew;