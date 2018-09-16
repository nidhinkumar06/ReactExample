import React, { Component } from 'react';
import withAuthorization from './withAuthorization';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { db } from '../firebase';

class Home extends Component {
  componentDidMount() {
    const { onSetUsers } = this.props;

    db.onceGetUser().then(snapshot =>
      onSetUsers(snapshot.val())
    );
 }

 render() {
   const { users } = this.props;
   console.log('users is', this.props);
   return (
     <div>
       <h1>HomePage</h1>
       <p>This page is accessible by everone</p>
       { !!users && <UserList users={users} /> }
     </div>
   );
 }
}

const UserList = ({ users }) =>
  <div>
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key =>
      <div key={key}>{users[key].username}</div>
    )}
  </div>

const mapStateToProps = (state) => ({
  users: state.userState.users,
});

const mapDispatchToProps = (dispatch) => ({
  onSetUsers: (users) => dispatch({ type: 'USERS_SET', users }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(Home);
