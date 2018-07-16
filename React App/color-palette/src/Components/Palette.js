import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Colors from './Colors';
import './Palette.css';

class Palette extends Component {
  render() {
    return (
      <div className="Palette">
        <header className="Palette-header">
           <h1 className="Palette-title">Material design Palette</h1>
        </header>
        <Colors/>
      </div>
    )
  }
}

export default Palette;
