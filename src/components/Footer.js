import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa/";

const Footer = () => {
	const year = new Date().getFullYear();
  
	return (<footer>
		<a href="https://github.com/subzone" target="_blank"><FaGithub /></a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="https://www.linkedin.com/in/subzone/" target="_blank"><FaLinkedin /></a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="https://twitter.com/milenkom81" target="_blank"><FaTwitter /></a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="https://www.facebook.com/subzone" target="_blank"><FaFacebook /></a>
		<hr /> 
		<br /> {`Copyright © Milenko Mitrovic ${year}`}</footer>);
  };
  
  export default Footer;