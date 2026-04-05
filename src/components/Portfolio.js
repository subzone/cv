import React, { useState, useEffect } from 'react';
import { FaGithub, FaStore } from 'react-icons/fa';
import '../App.css';

const Portfolio = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/data/portfolio.json')
            .then(res => res.json())
            .then(data => setItems(data.portfolio))
            .catch(err => console.error('Failed to load portfolio data:', err));
    }, []);

    return (
        <section className="section" id="portfolio">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Open Source & Tools</div>
                    <h2 className="section-title">Portfolio</h2>
                </div>
            </div>

            <div className="card-grid">
                {items.map((item) => (
                    <div className="card" key={item.name}>
                        <h3>{item.name}</h3>
                        <p className="muted">{item.description}</p>
                        <div className="hero-actions" style={{ marginBottom: '16px' }}>
                            {item.marketplace && (
                                <a href={item.marketplace} target="_blank" rel="noopener noreferrer" className="button-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FaStore /> Marketplace
                                </a>
                            )}
                            {item.github && (
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="button-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <FaGithub /> Source
                                </a>
                            )}
                        </div>
                        <div className="tag-row">
                            {item.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
