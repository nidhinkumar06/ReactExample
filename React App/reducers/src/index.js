import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import allReducers  from './reducers';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);
console.log("store value", store);

ReactDOM.render(<h1>Hello index</h1>, document.getElementById('root'));
registerServiceWorker();
