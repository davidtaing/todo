import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { loadTodosSuccess, addTodoSuccess, loadTodosFailure } from './actions';

// TODO
export const loadTodosRequest = () => async (dispatch) => {
    // api call
    axios.get('http://localhost:3001/todos')
        .then(res => {
            if (res.status = 200) {
                dispatch(loadTodosSuccess(res.data));
            } else {
                throw `Something went wrong. Status code: ${res.status}`;
            }
        })
        .catch((e) => {
            alert(e);
            dispatch(loadTodosFailure());
        })
};

// TODO
export const addTodoRequest = (title) => async (dispatch) => {
    axios.post('http://localhost:3001/todo', {
        id: uuidv4(),
        title,
        completed: false,
    })
        .then(res => {
            if (res.status === 201) {
                alert(`Successfully added new todo: ${res.data}`);
                dispatch(addTodoSuccess(res.data));
            }
        })
        .catch(error => {
            // Request failure logic
            // dispatch(addTodoFailure())
            console.log(error.toJSON());
        });
};


// TODO
//export const toggleTodoRequest = () => async () => { };

// TODO
//export const deleteTodoRequest = () => async () => { };