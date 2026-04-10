import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ExportCV from './components/ExportCV';
import ThemeSwitcher from './components/ThemeSwitcher';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-shell no-print">
      <nav className="nav-bar">
        <Link to="/" className="brand">
          Milenko Mitrovic
        </Link>

        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/about"        className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/experience"   className="nav-link" onClick={() => setMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/education"    className="nav-link" onClick={() => setMenuOpen(false)}>Education</NavLink>
          <NavLink to="/skills"       className="nav-link" onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/projects"     className="nav-link" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/videos"       className="nav-link" onClick={() => setMenuOpen(false)}>Videos</NavLink>
          <NavLink to="/ai-resources" className="nav-link" onClick={() => setMenuOpen(false)}>AI Resources</NavLink>
          <NavLink to="/ai-ssdlc"     className="nav-link" onClick={() => setMenuOpen(false)}>AI & SSDLC</NavLink>
          <NavLink to="/portfolio"    className="nav-link" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
          <NavLink to="/contact"      className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>

        <div className="nav-actions">
          <ThemeSwitcher />
          <ExportCV />
          <button
            className="nav-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
