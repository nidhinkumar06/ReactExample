import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './Reducers/components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './Reducers/reducers';


const store = createStore(allReducers);
console.log("store value is", store);

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
document.getElementById('root'));
registerServiceWorker();
