import { createStore } from 'redux';
import { todosReducer } from './reducers';

// const reducers = { todosReducer, };
// const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
    todosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;