import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import SkiDayCount from './components/SkiDayCount';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <SkiDayCount total={50}
               powder={30}
               backcountry={44}
               goal={100}
  />,
  document.getElementById('root')
);
registerServiceWorker();
