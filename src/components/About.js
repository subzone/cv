import React from 'react';
import { Link } from 'react-router-dom';
import me from '../me.jpg';
import '../App.css';

class About extends React.Component {
    render() {
        return (
            <div>
            <p></p>
            <p></p>
            <p></p>
            <table>
               <tr>
               <th>
               <div className="no-print"><h1>Hi and welcome to my brief CV</h1></div>
               </th>
               </tr>
               <tr>
                  <td>
                  <div className="no-print">
                     <p>This is me.</p></div>
                     <img src={me} alt="Milenko Mitrovic" />
                  </td>
                  <td>
               <tr>
                  <td>Name:</td>
                  <td>Milenko Mitrović</td>
               </tr>
               <tr>
                  <td>Born:</td>
                  <td>06.06.1981</td>
               </tr>
               <tr>
                  <td>Place Of Birth:</td>
                  <td>Gracanica, BiH</td>
               </tr>
               <tr>
                  <td>Occupation:</td>
                  <td>Senior DevOps Engineer</td>
               </tr>
               <tr>
                  <td>Residence:</td>
                  <td>Inđija, Republic of Serbia</td>
               </tr>
               </td>
               </tr>
            </table>
            <hr className="red-line" />
            <p><b>Head of Cloud Engineering at HTEC</b>, where I am steering the technological helm <b>since July 2022</b>. With over <b>16 years of experience</b> in the IT industry, my journey has taken me from the foundational roles of System Administrator and IT Assistant to the advanced positions of Senior DevOps Engineer and Head of Cloud Engineering. My technical acumen spans <b>Azure, AWS, DevOps, GitOps, SRE, Platform Engineering, FinOps, etc.</b> My approach to problem-solving is complemented by strong communication skills and a collaborative spirit, ensuring that I'm not just a technician but a true team player.</p>
            <p>When not architecting the digital future, I am a family man and a sports enthusiast, finding parallels between the evolution of civilizations and technology. My belief in continuous learning and community engagement keeps me at the forefront of the tech landscape, whether I'm contributing to open-source projects or mentoring the next generation of IT professionals. </p>
            <p>This what you are curently looking is my own playground for learning React, and I must say that I am pretty much inloved how streigth forward everything is. Soon I will add detailed explanation for each thing I have implemented here, but even github repository can provide details.</p>
            <p>Current status of this playground is, github repo created, code commited, CICD pipeline added to repository. Deployment target is some storage account on Azure, and hopefully this can be my door to FrontEnd development, as to better understand how those guys think about development process itself.</p>
            <p>Plan that I have on my mind is to add:</p>
            <ul>
               <li>Static Code Analysis - Added SonarCloud</li>
               <li>Dockerfile - distroless nginx</li>
               <li>Vulnerability scan - probably trivy or similar</li>
               <li>CSP policy v3 - Done</li>
               <li>Blog - Future development</li>
               <li>Mail Newsletter - DevOps topics based</li>
               <li><Link to="/contact" className="nav=link">ContactForm</Link> Feel free to ping an email if you have any questions.</li>
            </ul>
         </div>
        );
    }
}

export default About;