import React from 'react';
import Experience from './Experience';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/experience', element: <Experience /> },
    { path: '/education', element: <Education /> },
    { path: '/projects', element: <Projects /> },
    { path: '/skills', element: <Skills /> },
  ];
  