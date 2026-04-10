import React, { useState, useEffect } from 'react';
import { FaGithub, FaStore, FaPuzzlePiece } from 'react-icons/fa';
import '../App.css';
import './Portfolio.css';

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
                <div className="pill">Azure DevOps Extensions</div>
            </div>

            <div className="ext-grid">
                {items.map((item) => (
                    <div className="ext-card" key={item.name}>
                        <div className="ext-card-meta">
                            <span className="ext-type-badge">
                                <FaPuzzlePiece style={{ fontSize: '0.65rem' }} />
                                Extension
                            </span>
                            <span className="ext-free-badge">Free</span>
                        </div>

                        <h3 className="ext-name">{item.name}</h3>
                        <p className="ext-publisher">by <span>subzone</span></p>
                        <p className="ext-desc">{item.description}</p>

                        <div className="ext-actions">
                            {item.marketplace && (
                                <a href={item.marketplace} target="_blank" rel="noopener noreferrer" className="ext-btn-primary">
                                    <FaStore style={{ fontSize: '0.75rem' }} /> Marketplace
                                </a>
                            )}
                            {item.github && (
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="ext-btn-secondary">
                                    <FaGithub style={{ fontSize: '0.75rem' }} /> Source
                                </a>
                            )}
                        </div>

                        <div className="tag-row" style={{ marginTop: 0 }}>
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
