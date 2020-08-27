const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED";

export const toggleTodoCompleted = (id, completed) => {
    return {
        type: TOGGLE_TODO_COMPLETED,
        payload: {
            id,
            completed,
        },
    }
};

const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";

export const loadTodosSuccess = (todos) => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: {
            todos
        },
    }
};

const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";

export const addTodoSuccess = (todo) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: { 
            todo,
        },
    }
};

const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        },
    }
};