import React, { Component, PureComponent } from 'react';

const Temp = (props) => {
  console.log('temp value in example');
  return (
    <div>value display in temp {props.val}</div>
  )
}

class Example extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return {val: 18};
      })
    }, 2000);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps is', nextProps);
  //   console.log('nextState is', nextState);
  //   return this.state.val === nextState.val ? false : true;
  // }

  render() {
    console.log("app in Example");
    return (
      <div>
        <Temp val={this.state.val}/>
      </div>
    );
  }
}

export default Example;
