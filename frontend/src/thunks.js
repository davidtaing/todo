import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {  
    loadTodosRequested,
    loadTodosSuccess,
    loadTodosFailure,
    addTodoRequested,
    addTodoSuccess,
    addTodoFailure,
    toggleTodoRequested,
    toggleTodoSuccess,
    toggleTodoFailure,
    deleteTodoRequested,
    deleteTodoSuccess,
    deleteTodoFailure,
} from './actions';

export const loadTodosRequest = () => async (dispatch) => {
    dispatch(loadTodosRequested());
    
    // api call
    axios.get('http://localhost:3001/todos')
        .then(res => {
            if (res.status === 200) {
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

export const addTodoRequest = (title) => async (dispatch) => {
    dispatch(addTodoRequested());

    axios.post('http://localhost:3001/todo', {
        id: uuidv4(),
        title,
        completed: false,
    })
        .then(res => {
            if (res.status === 201) {
                dispatch(addTodoSuccess(res.data));
            }
        })
        .catch(error => {
            // Request failure logic
            console.log(error.toJSON());
            dispatch(addTodoFailure());
        });
};


export const toggleTodoRequest = (id) => async (dispatch) => { 
    dispatch(toggleTodoRequested());

    axios.put(`http://localhost:3001/todo/${id}/toggle`)
        .then(res => {
            if (res.status === 200) {
                dispatch(toggleTodoSuccess(res.data));
            }
        })
        .catch(error => {
            console.log(error.toJSON());
            dispatch(toggleTodoFailure());
        });
};

export const deleteTodoRequest = (id) => async (dispatch) => { 
    dispatch(deleteTodoRequested());

    axios.delete(`http://localhost:3001/todo/${id}`)
        .then(res => {
            if (res.status === 200) {
                dispatch(deleteTodoSuccess(res.data));
            }
        })
        .catch(error => {
            console.log(error.toJSON());
            dispatch(deleteTodoFailure());
        });
};