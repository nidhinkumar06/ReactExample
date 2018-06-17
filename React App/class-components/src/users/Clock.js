import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}; //initializing the value
  }

  ComponentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000); //need to know why arrow func is used here and why as new id is given as this.timerID instead of this.props and this.state
  }

  ComponentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
