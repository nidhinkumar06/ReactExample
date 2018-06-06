import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import SkiDayCount from './components/SkiDayCount';
import SkiDayList from './components/SkiDayList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // <App />,
  <SkiDayList days={
    [
      {
        resort: "Swa",
        date: new Date("1/6/2018"),
        powder: true,
        backCountry: false
      },
      {
        resort: "Half",
        date: new Date("03/08/2017"),
        powder: false,
        backCountry: true
      },
      {
        resort: "Wave",
        date: new Date("08/05/2018"),
        powder: false,
        backCountry: true
      }
    ]
  }
  />,
  document.getElementById('root')
);
registerServiceWorker();


// <SkiDayCount total={50}
//              powder={30}
//              backcountry={44}
//              goal={100}
// />
