import React, { Component } from 'react';
import Calculator from './components/calculator/Calculator';

class App extends Component {
  render() {
    return (
      <div>
        <h2>React Calculator</h2>
        <Calculator />
      </div>
    );
  }
}

export default App;
