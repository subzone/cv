import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const handlePrint = () => {
        window.print();
      };

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">Home</Link>
                <div className="App-header">
                    <Link to="/about" className="navbar-item">About</Link>
                    <Link to="/experience" className="navbar-item">Experience</Link>
                    <Link to="/education" className="navbar-item">Education</Link>
                    <Link to="/projects" className="navbar-item">Projects</Link>
                    <Link to="/contact" className="navbar-item">ContactForm</Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;
