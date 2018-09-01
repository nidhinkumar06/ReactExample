import { combineReducers } from 'redux';
import MovieReducer from './movie-reducer';
import ActiveMovieReducer from './reducer-activeMovie';

const allReducers = combineReducers({
  movies: MovieReducer,
  activeMovie: ActiveMovieReducer
});

export default allReducers;
