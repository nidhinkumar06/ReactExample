import React, { Component, Fragment } from 'react';

import './App.css';

const FragmentCheck = () => {
  return (
  //   <div>
  //   <div>Hi</div>
  //   <div>Hello</div>
  // </div>
    // [
    //   <div Key="1">Hi</div>,
    //   <div key="2">Hello</div>
    // ]
    <Fragment>
      <div>Hi</div>
      <div>Hello</div>
    </Fragment>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
         <FragmentCheck />
      </div>
    );
  }
}

export default App;
