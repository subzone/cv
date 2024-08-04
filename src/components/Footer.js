import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../App.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer no-print">
            <div className="footer-container">               
				<table className="centered-table">
						<tr>
						<a href="https://github.com/subzone"><FaGithub /></a>
						<a href="https://www.linkedin.com/in/subzone/"><FaLinkedin /></a>
						<a href="https://twitter.com/milenkom81"><FaTwitter /></a>
						<a href="https://www.facebook.com/subzone"><FaFacebook /></a>
						</tr>
						<tr>
						<hr className="red-line" />
						<p className="text-muted">{`Copyright © Milenko Mitrovic ${year}. All rights reserved.`}</p>
						</tr>
				</table>
            </div>
        </footer>
    );
}

export default Footer;