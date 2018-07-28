import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div>
          <h3>Select a user....</h3>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <h1>{this.props.user.age}</h1>
        <h1>{this.props.user.city}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) { //it will take a piece of state from the container and send it as props to the component
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
