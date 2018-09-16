import { createStore } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
console.log('store is', store.getState());
export default store;
