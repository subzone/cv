import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa/";
import '../App.css';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="footer "> 
			<div className="container">			
				<a href="https://github.com/subzone" target="_blank"><FaGithub /></a>
				<a href="https://www.linkedin.com/in/subzone/" target="_blank"><FaLinkedin /></a>
				<a href="https://twitter.com/milenkom81" target="_blank"><FaTwitter /></a>
				<a href="https://www.facebook.com/subzone" target="_blank"><FaFacebook /></a>
				<hr className="red-line" />
			</div>
		<div className="container">
			<hr className="red-line" />
				<p className="text-muted"> {`Copyright © Milenko Mitrovic ${year}.  All rights reserved.`}</p>
			</div>
		</div>
	);
};

export default Footer;
