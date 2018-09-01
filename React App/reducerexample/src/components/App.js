import React, { Component } from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
class App extends Component {
  render() {
    return (
      <div>
        <h2> UserList </h2>
        <UserList />
        <h2> UserDetail </h2>
        <UserDetail />
      </div>
    );
  }
}

export default App;
