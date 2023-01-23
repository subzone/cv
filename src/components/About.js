import React from 'react';
import { Link } from 'react-router-dom';
import me from '../me.jpg';

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
                  <h1>Hi and welcome to my brief CV</h1>
               </th>
               </tr>
               <tr>
                  <td>
                     <p>This is me.</p>
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
            <p>Senior DevOps Engineer, with extensive experience in Static Code Analysis, Artifact Management, Infrastructure Architecture, Compliance, SSDLC process etc. Even though I love my profession, still my greatest achievement is that I am a father of two, son and a daughter and they represent my biggest success in life. </p>
            <p>This what you are curently looking is my own playground for learning React, and I must say that I am pretty much inloved how streigth forward everything is. Soon I will add detailed explanation for each thing I have implemented here, but even github repository can provide details.</p>
            <p>Current status of this playground is, github repo created, code commited, CICD pipeline added to repository. Deployment target is some storage account on Azure, and hopefully this can be my door to FrontEnd development, as to better understand how those guys think about development process itself.</p>
            <p>Plan that I have on my mind is to add:</p>
            <ul>
               <li>Static Code Analysis - hopefully SonarCloud</li>
               <li>Dockerfile - distroless nginx</li>
               <li>Vulnerability scan - probably trivy or similar</li>
               <li>CSP policy v3 - Done</li>
               <li>Blog - Future development</li>
               <li>Mail Newsletter - DevOps topics based</li>
               <li><Link to="/contact" className="nav=link">ContactForm</Link></li>
            </ul>
         </div>
        );
    }
}

export default About;