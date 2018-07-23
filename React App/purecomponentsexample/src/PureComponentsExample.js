import React, { PureComponent } from 'react';

const Temp = (props) => {
  console.log('temp class log');
  return(
    <div>Value displayed heres is {props.val} </div>
    )
}


class PureComponentsExamples extends PureComponent {
  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return {val: 15};
      });
    }, 2000);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('next props is', nextProps);
  //   console.log('next state', nextState);
  //   return this.state.val === nextState.val ? false : true;
  // }

  render() {
    console.log('PureComponent class log');
    return (
    <div>
      <Temp val={this.state.val}/>
    </div>
  );
  }

}

export default PureComponentsExamples;
