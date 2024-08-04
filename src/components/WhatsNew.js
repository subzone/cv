import React from "react";
import "../App.css";

const WhatsNew = () => {
    return (
        <div><br /><br />
            <h1>What is New</h1> 
            <hr className="red-line" />         
            <p><h2>Migrated hosting</h2></p>
            <p><ul>
                <li>From Azure Storage account moved to AWS Cloud Front because "I can"</li>
                <li>Played with creating extensions for Azure DevOps. <a href="https://marketplace.visualstudio.com/items?itemName=subzone.terraform-drift">Terraform Drift</a> Do not expect miracules, since this is piece of code created within two cofee breaks. Who wants to check out more and contribute please try <a href="https://github.com/subzone/TerraformDrifter">GitHub Repository.</a></li>
                <li>Planned to present at CodeCamp. <a href="https://codecamp.ro/codecamp-festival-2024/">Event details.</a></li>
            </ul></p>  
        </div>
    );
}

export default WhatsNew;