const ReactDOM = require('react-dom/client');
const React = require('react');
const { render, getByAltText, screen, fireEvent } = require('@testing-library/react');
const { expect } = require('@testing-library/jest-dom');

const App = require('../src/App').default;

describe('App', () => {
  it('should render without crashing', () => {
    const root = ReactDOM.createRoot(document.createElement('root'));
    root.render(<App />);
  });
});
