import axios from 'axios';
import { loadTodos, } from './actions';

// TODO
export const loadTodosRequest = () => (dispatch) => {
    // api call
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            if (res.status = 200) {
                dispatch(loadTodos(res.data));
            } else {
                throw `Something went wrong. Status code: ${res.status}`;
            }
        })
        .catch((e) => {
            alert(e);
        })
};

// TODO
//export const toggleTodo = () => () => { };

// TODO
//export const addTodos = () => () => { };

// TODO
//export const deleteTodos = () => () => { };
