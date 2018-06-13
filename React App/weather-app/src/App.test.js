import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const API_KEY = "22a2d86ec06aad005ceb4e23775b9161";
  const city = "coimbatore";
  const country = "India";
  const tree = renderer
    .create(<Link page="http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
