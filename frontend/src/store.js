import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducer } from './reducers';

// const reducers = { todosReducer, };
// const rootReducer = combineReducers(reducers);

const configureStore = () => createStore(
    todosReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default configureStore;