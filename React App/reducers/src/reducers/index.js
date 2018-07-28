import { combineReducers } from 'redux';
import UserReducer from './reducer-user';
import MovieReducer from './reducer-movie';
import ActiveUserReducer from './reducer-active-user';

const allReducers = combineReducers({
  users: UserReducer,
  movies: MovieReducer,
  activeUser: ActiveUserReducer,
});

export default allReducers;
