import React from 'react';
import StarsRating from './StarsRating';


const Skills = () => {
    return (
        <div>
        <h1>Skills</h1>
        <table>
           <tr>
            <th>
                Skill
            </th>
            <th>
                Experience
            </th>
            </tr> 
            <tr>
                <td>
                    Infrastructure as a Code
                </td>
                <td>
                <StarsRating />
                </td>
            </tr>
            <tr>
                <td>
                    CICD
                </td>
                <td>
                    <StarsRating />
                </td>
            </tr>
            <tr>
                <td>
                    Compliance (ISO 27001)
                </td>
                <td>
                    <StarsRating />
                </td>
            </tr>
            <tr>
                <td>
                    Monitoring
                </td>
                <td>
                    <StarsRating />
                </td>
            </tr>
            <tr>
                <td>
                    HA/DR
                </td>
                <td>
                    <StarsRating />
                </td>
            </tr>
            <tr>
                <td>
                    GitOps
                </td>
                <td>
                    <StarsRating />
                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>
                    
                </td>
            </tr>
            <tr>
                <td>

                </td>
                <td>
                    
                </td>
            </tr>
        </table>
        </div>
    );
}

export default Skills;