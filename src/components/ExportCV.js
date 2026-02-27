import React from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ExportCV = () => {
  const navigate = useNavigate();

  return (
    <button className="button-secondary" onClick={() => navigate('/export')} type="button">Export CV</button>
  );
};

export default ExportCV;