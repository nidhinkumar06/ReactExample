import React from 'react';
import { LoginForm } from './LoginForm';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => (
  <div>
    <LoginForm history={history} />
  </div>
);

export default withRouter(Login);
