import React, { Component } from 'react';
import Users from './Users';

class User extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Users></Users>
        <Users age="25">Kumar</Users>
        <Users age="50">Ramesh</Users>
      </div>
    )
  }
}

export default User;
