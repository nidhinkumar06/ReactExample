import { combineReducers } from 'redux';
import UserList from './reducer-user';
import MovieList from './reducer-location';
import ActiveUser from './reducers-active-user';

const allReducers = combineReducers({
   user: UserList,
   movie: MovieList,
   activeUser: ActiveUser
});

export default allReducers;
