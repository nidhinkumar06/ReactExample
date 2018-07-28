import React from 'react';
import UserList from '../containers/user-list';
import MovieList from '../containers/movie-list';
import UserDetail from '../containers/user-detail';
const App = () => (
  <div>
    <h2>User List:</h2>
    <UserList />
    <hr/>
    <h2>User Detail:</h2>
    {/* <MovieList /> */}
    <UserDetail />
  </div>
);

export default App;
