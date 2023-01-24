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
import { authProvider } from './authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

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
      <div className='dark-theme'><p></p>
      <div className="App">
 <AzureAD provider={authProvider}>
      <span>Only authenticated users can see me.</span>
    </AzureAD>
 
 <AzureAD provider={authProvider} forceLogin={true}>
  {
    ({login, logout, authenticationState, error, accountInfo}) => {
      switch (authenticationState) {
        case AuthenticationState.Authenticated:
          return (
            <p>
              <span>Welcome, {accountInfo.account.userName}!</span>
              <span>{accountInfo.jwtIdToken}</span>
              <button onClick={logout}>Logout</button>
            </p>
          );
        case AuthenticationState.Unauthenticated:
          return (
            <div>
              {error && <p><span>An error occured during authentication, please try again!</span></p>}
              <p>
                <span>Hey stranger, you look new!</span>
                <button onClick={login}>Login</button>
              </p>
            </div>
          );
        case AuthenticationState.InProgress:
          return (<p>Authenticating...</p>);
      }
    }
  }
</AzureAD>
      <header className="App-header">
      </header>
    </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      </div><div className='cv'> <Helmet>
        <html lang="en" />
        <meta name="theme-color" content="#E6E6FA" />
      </Helmet><Footer /></div>
    </BrowserRouter>
  );
}

export default App;


