import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import '../App.css';

const Videos = () => {
    return (
        <section className="section" id="videos">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Content & Education</div>
                    <h2 className="section-title">YouTube Channel</h2>
                </div>
                <a
                    href="https://www.youtube.com/@milenkom81"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    <FaYoutube />
                    Visit Channel
                </a>
            </div>

            <div className="video-intro">
                <div className="video-icon">
                    <FaYoutube size={48} color="#FF0000" />
                </div>
                <h3>Cloud & DevOps Insights</h3>
                <p className="muted">
                    I share my experience and knowledge about cloud engineering, DevOps practices,
                    and platform architecture through video tutorials and technical deep-dives.
                </p>
            </div>

            <div className="videos-grid">
                <div className="video-card-item">
                    <div className="video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/videoseries?list=PLKtRlcNF71QvBhvOALMJks8f1kRsMp443"
                            title="YouTube Playlist - Cloud & DevOps"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                    <h4>Video Playlist</h4>
                    <p className="muted">Browse through my collection of cloud engineering and DevOps tutorials</p>
                </div>
            </div>
        </section>
    );
};

export default Videos;
