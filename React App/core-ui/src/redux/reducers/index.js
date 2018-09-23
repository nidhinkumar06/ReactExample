import { combineReducers } from 'redux';
import sessionReducer from './session';
import reportReducer from './report';
import projectReducer from './project';
import {reducer as reducerForm} from 'redux-form';


const rootReducer = combineReducers({
  sessionState: sessionReducer,
  reportState: reportReducer,
  projectState: projectReducer,
  form: reducerForm
});

export default rootReducer;
