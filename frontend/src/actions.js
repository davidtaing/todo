const TOGGLE_TODO_SUCCESS = "todo/toggleTodoSuccess";

export const toggleTodoSuccess = (id, completed) => {
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload: {
            id,
            completed,
        },
    }
};

const LOAD_TODOS_SUCCESS = "todo/loadTodosSuccess";

export const loadTodosSuccess = (todos) => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: {
            todos
        },
    }
};

const ADD_TODO_SUCCESS = "todo/addTodoSuccess";

export const addTodoSuccess = (todo) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: { 
            todo,
        },
    }
};

const DELETE_TODO_SUCCESS = "todo/deleteTodoSuccess";

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: {
            id
        },
    }
};