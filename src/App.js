import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import './dark-theme.css';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/experience" className="nav-link">Experience</Link>
        <Link to="/education" className="nav-link">Education</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </nav>
      <div className='dark-theme'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
      </div><div className='cv'><Footer /></div>
    </BrowserRouter>
  );
}

export default App;


