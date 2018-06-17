import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Clock from './users/Clock';
import Tick from './users/Tick';
import registerServiceWorker from './registerServiceWorker';

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);
let datae = new Date();
setInterval(datae, 1000);

ReactDOM.render(<Tick date={datae}/>, document.getElementById('root'));

registerServiceWorker();
