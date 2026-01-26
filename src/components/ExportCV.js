import React from "react";
import '../App.css';

const ExportCV = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="button-secondary" onClick={handlePrint} type="button">Export CV</button>
  );
};

export default ExportCV;