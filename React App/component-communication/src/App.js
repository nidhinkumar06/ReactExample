import React, { Component } from 'react';
import Parent from './Component/ParentToChild/parent'
// import Child from './Component/ParentToChild/child'
import './App.css';

class App extends Component {
  state = {
    title: "PlaceHolderTitle"
  }

  changeTheWorld = (newTitle) => {
    this.setState({title: newTitle})
  }
  render() {
    return (
      <div className="App">
        {/* passing value from Grandfather to children */}
        {/* <Child doWhatEver={this.changeTheWorld.bind(this, 'New World')} title={this.state.title}/> */}
        {/* passing value from Grandfather -> Parent -> Children */}
        {/* <Parent doWhatEver={this.changeTheWorld.bind(this, 'New World')} title={this.state.title}/> */}
        <Parent
           changeTheWorldEvent={this.changeTheWorld.bind(this, 'New World')}
           changeThePeopleEvent={this.changeTheWorld.bind(this, 'People should change')}
           title={this.state.title}/>
      </div>
    );
  }
}

export default App;
