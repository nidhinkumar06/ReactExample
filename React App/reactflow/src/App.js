import React, { Component } from 'react';
import FunctionalComp from './functionalcompflow';
type TextProps = {
  str: string,
  num?: number,
  ary: Array<number>
}

type StateProps = {
  message: string
}

class Test extends Component<TextProps, StateProps> {
   //defaultstate
  state = {
    message: 'Hi'
  }
  //default props
  static defaultProps = {
    str: 'NIDHINKUMAR'
  }
  render() {
    return (
    <div>
      <h1>{this.props.str}</h1>
      <h1>{this.props.num}</h1>
      <h1>{this.props.ary.map(val => val)}</h1>
      <h1>{this.state.message}</h1>
    </div>
    );
  }
}


class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test str={'NIDHIN'}
          ary={[1,2,3]}
         />
         <FunctionalComp str={'this is functional Component'} />
      </div>
    );
  }
}

export default App;
