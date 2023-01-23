const React = require('react');
const ReactDOM = require('react-dom/client');
const { render, fireEvent, getByAltText } = require('@testing-library/react');
const { createRoot } = require('react-dom/client');
const About = require('../src/About');


describe('About component', () => {
  it('should render without crashing', () => {
    const root = ReactDOM.createRoot(document.createElement('div'));
    root.render(<About />);
  });
});
