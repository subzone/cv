import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './dark-theme.css';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import ContactForm from './components/ContactForm';

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
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      </div><div className='cv'><Helmet>
        <html lang="en" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet><Footer /></div>
    </BrowserRouter>
  );
}

export default App;


