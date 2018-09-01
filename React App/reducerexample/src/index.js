import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);
console.log("store data is", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
