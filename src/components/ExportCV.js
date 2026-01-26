import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const ExportCV = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePrint = () => {
    // If not on home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation and render before printing
      setTimeout(() => {
        window.print();
      }, 100);
    } else {
      window.print();
    }
  };

  return (
    <button className="button-secondary" onClick={handlePrint} type="button">Export CV</button>
  );
};

export default ExportCV;