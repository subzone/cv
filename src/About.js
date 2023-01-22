import React from 'react';
import me from './me.jpg';

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
         </div>
        );
    }
}

export default About;