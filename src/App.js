import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './Navbar';
import Experience from './experience';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Education from './Education';
import Projects from './Projects';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/experience" component={Experience} />
      <Route path="/education" component={Education} />
      <Route path="/projects" component={Projects} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
