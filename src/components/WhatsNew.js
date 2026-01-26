import React from "react";
import "../App.css";

const updates = [
    {
        title: 'Hosting migration',
        detail: 'Moved static hosting from Azure Storage to AWS CloudFront for fun and learning.',
        link: null,
    },
    {
        title: 'Azure DevOps extension',
        detail: 'Built Terraform Drift extension in two coffee breaks; open for contributions.',
        link: 'https://marketplace.visualstudio.com/items?itemName=subzone.terraform-drift',
    },
    {
        title: 'Speaking',
        detail: 'Planned session at CodeCamp Festival 2024.',
        link: 'https://codecamp.ro/codecamp-festival-2024/',
    },
    {
        title: 'Recharge',
        detail: 'Carved out time to recharge — see the gallery below.',
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