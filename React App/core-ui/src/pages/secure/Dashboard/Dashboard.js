import React from 'react';
import withAuthorization from '../../../hoc/session/withAuthorization';

const Dashboard = () => {
  return (
    <div>Dasboardpage</div>
  );
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Dashboard);
