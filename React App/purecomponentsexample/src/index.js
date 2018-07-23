import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './Example';
import PureComponentsExamples from './PureComponentsExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PureComponentsExamples />, document.getElementById('root'));
registerServiceWorker();
