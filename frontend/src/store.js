import { createStore, combineReducers } from 'redux';
import { todosReducer } from './reducers';

const reducers = { todosReducer, };
const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(rootReducer);

export default configureStore;