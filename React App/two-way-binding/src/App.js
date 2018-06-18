import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: "Nidhin"
  }

  changeState = (newName) => {
    this.setState({
      name: newName
    })
  }

  changeInputState = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <br/> <br/>
        {/* <button onClick={this.changeState}>Change State</button> */}
        <button onClick={()=> {this.changeState("Kumar Coimbatore")}}>Change State using Anyonoums function</button>
        <br/> <br/>
        <button onClick={this.changeState.bind(this, "Name change using bind")}>Change State using Bind function</button>
        <br/> <br/>
        <input type="text" onChange={this.changeInputState} value={this.state.name} placeholder="Enter Name"/>
        <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
