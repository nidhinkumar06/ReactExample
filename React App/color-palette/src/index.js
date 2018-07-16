import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Palette from './Components/Palette';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Palette />, document.getElementById('root'));
registerServiceWorker();
