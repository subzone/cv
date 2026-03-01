import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ExportCV from './components/ExportCV';
import ThemeSwitcher from './components/ThemeSwitcher';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="nav-shell no-print">
      <nav className="nav-bar">
        <Link to="/" className="brand">
          Milenko Mitrovic
        </Link>

        <div className="nav-links">
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/experience" className="nav-link">Experience</NavLink>
          <NavLink to="/education" className="nav-link">Education</NavLink>
          <NavLink to="/skills" className="nav-link">Skills</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/videos" className="nav-link">Videos</NavLink>
          <NavLink to="/ai-resources" className="nav-link">AI Resources</NavLink>
          <NavLink to="/ai-ssdlc" className="nav-link">AI & SSDLC</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>

        <div className="nav-actions">
          <ThemeSwitcher />
          <ExportCV />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
