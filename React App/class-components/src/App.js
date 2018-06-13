import React, { Component } from 'react';
import User from './users/User';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User title="User List"/>
      </div>
    );
  }
}

export default App;
