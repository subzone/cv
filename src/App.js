import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Videos from './components/Videos';
import './dark-theme.css';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import ExportCV from './components/ExportCV';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <meta name="theme-color" content="#0f172a" />
      </Helmet>

      <div className="background-gradient" aria-hidden="true" />

      <BrowserRouter>
        <Navbar />
        <main className="page-shell">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/education' element={<Education />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/videos' element={<Videos />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/chatbot' element={<Chatbot />} />
            <Route path='/export' element={<ExportCV />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


