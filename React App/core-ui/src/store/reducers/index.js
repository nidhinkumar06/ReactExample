import { combineReducers } from 'redux';
import sessionReducer from './session';
import {reducer as reducerForm} from 'redux-form';


const rootReducer = combineReducers({
  sessionState: sessionReducer,
  form: reducerForm
});

export default rootReducer;
