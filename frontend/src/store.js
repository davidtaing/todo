import { createStore, combineReducers } from 'redux';
import { todosReducer } from './reducers';

const reducers = { todosReducer, };
const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;