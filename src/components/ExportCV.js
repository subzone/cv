import React from "react";
import '../App.css';

const ExportCV = () => {
    const handlePrint = () => {
      window.print();
    };
  
    return (
        <button className="print-button" onClick={handlePrint}>Export CV</button>
    );
  };
  
  export default ExportCV;