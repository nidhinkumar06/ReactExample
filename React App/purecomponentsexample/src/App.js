import React, { Component, PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

const Temp = (props) => {
  console.log('Render Temp');
  return (<div>Value displayed from temp is{props.val}</div>);
}

class App extends PureComponent {

  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return {val: 19};
      })
    }, 2000);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //    console.log('next state is', nextState);
  //    console.log('next props', nextProps);
  //    return(this.state.val === nextState.val ? false : true);
  // }

  render() {
    console.log('Render App');
    return (
      <div className="App">
        <Temp val={this.state.val} />
      </div>
    );
  }
}

export default App;
