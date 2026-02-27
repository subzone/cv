import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './themes.css';
import './dark-theme.css';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import { ThemeProvider } from './ThemeContext';
import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider>
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
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
