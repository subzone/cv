import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
			<footer className="footer no-print">
				<div className="icon-row">
					<a href="https://github.com/subzone" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
					<a href="https://www.linkedin.com/in/subzone/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
					<a href="https://twitter.com/milenkom81" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
					<a href="https://www.facebook.com/subzone" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
				</div>
				<div style={{ marginTop: 10 }}>{`© ${year} Milenko Mitrović. All rights reserved.`}</div>
			</footer>
    );
}

export default Footer;