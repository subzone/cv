import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

function Home() {
    return (
        <div>
        <About />
        <Experience />
        <Education />  
        <Skills />
        <Projects />
      </div>
    );
}

export default Home;
