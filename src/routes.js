import React from 'react';
import Experience from './Experience';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/experience', element: <Experience /> },
    { path: '/education', element: <Education /> },
    { path: '/projects', element: <Projects /> },
    { path: '/skills', element: <Skills /> },
    { path: '/contact', element: <ContactForm /> },
    { path: '/chatbot', element: <Chatbot /> },
  ];
  