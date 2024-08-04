import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa/";
import '../App.css';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="footer custom-footer"> {/* Add the "custom-footer" class */}
			<div className="container">			
				<a href="https://github.com/subzone" target="_blank"><FaGithub /></a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="https://www.linkedin.com/in/subzone/" target="_blank"><FaLinkedin /></a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="https://twitter.com/milenkom81" target="_blank"><FaTwitter /></a>&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="https://www.facebook.com/subzone" target="_blank"><FaFacebook /></a>
				<br />
				<p className="text-muted"> {`Copyright © Milenko Mitrovic ${year}.  All rights reserved.`}</p>
			</div>
		</div>
	);
};

export default Footer;
