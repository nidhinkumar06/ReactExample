import React from 'react';
import MovieList from '../containers/movieListContainer';
import MovieDetail from '../containers/movieDetailContainer';

const App = () => (
  <div>
    <h2>
      Movie List
    </h2>
     <MovieList />
    <h2>selectedMovie</h2>
    <MovieDetail />
  </div>
);

export default App;
