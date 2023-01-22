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

  // let image;
  // beforeEach(() => {
  //   const root = ReactDOM.createRoot(document.createElement('div'));
  //   const getByAltText = root;
  //   image = getByAltText('Milenko Mitrovic');
  // });

  // test('should scale the image on hover', async () => {
  //   fireEvent.mouseOver(image);
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   expect(image).toHaveStyle(`transform: scale(1.5)`);
  // });
});
