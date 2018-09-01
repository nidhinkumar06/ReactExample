import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedUser } from '../actions/index';

class UserList extends Component {
  createListItems() {
    return this.props.users.map((user, index) => {
      return (
        <li key={index} onClick={() => this.props.selectedUser(user)}>
           {user.name} {user.age}
         </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state is", state);
  return {
    users: state.user
  };
}

function matchDispatchProps(dispatch) {
  return bindActionCreators({selectedUser: selectedUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchProps)(UserList);
