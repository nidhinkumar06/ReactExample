import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { selectedUser } from '../actions/index';


class UserList extends Component {
  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li
          key={user.id}
           onClick={() => this.props.selectedUser(user)}
        >
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
    )
  }
}

function mapStateToProps(state) { //it will take a piece of state from the container and send it as props to the component
  return {
    users: state.users
  };
}

function matchDispatchProps (dispatch) {
  return bindActionCreators({selectedUser: selectedUser}, dispatch);
}

export default connect(mapStateToProps, matchDispatchProps)(UserList);
