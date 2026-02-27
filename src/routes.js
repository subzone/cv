import React from 'react';
import Experience from './components/Experience';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import Videos from './components/Videos';
import AIResources from './components/AIResources';
import AISsdlc from './components/AISsdlc';
import CVDocument from './components/CVDocument';

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/experience', element: <Experience /> },
    { path: '/education', element: <Education /> },
    { path: '/projects', element: <Projects /> },
    { path: '/skills', element: <Skills /> },
    { path: '/videos', element: <Videos /> },
    { path: '/ai-resources', element: <AIResources /> },
    { path: '/ai-ssdlc', element: <AISsdlc /> },
    { path: '/contact', element: <ContactForm /> },
    { path: '/chatbot', element: <Chatbot /> },
    { path: '/export', element: <CVDocument /> },
  ];
  