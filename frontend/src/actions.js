const TOGGLE_TODO_REQUEST = "todo/toggleTodoRequest";
const TOGGLE_TODO_SUCCESS = "todo/toggleTodoSuccess";

const LOAD_TODOS_REQUEST = "todo/loadTodosRequest";
const LOAD_TODOS_SUCCESS = "todo/loadTodosSuccess";
const LOAD_TODOS_FAILURE = "todo/loadTodosFailure";

const ADD_TODO_REQUEST = "todo/addTodoRequest";
const ADD_TODO_SUCCESS = "todo/addTodoSuccess";
const ADD_TODO_FAILURE = "todo/addTodoFailure";

const DELETE_TODO_REQUEST = "todo/deleteTodoRequest";
const DELETE_TODO_SUCCESS = "todo/deleteTodoSuccess";

export const toggleTodoRequest = () => {
    return {
        type: TOGGLE_TODO_REQUEST,
    }
};

export const toggleTodoSuccess = ({id, completed}) => {
    return {
        type: TOGGLE_TODO_SUCCESS,
        payload: {
            id,
            completed
        },
    }
};

export const loadTodosRequest = () => {
    return {
        type: LOAD_TODOS_REQUEST,
    }
}

export const loadTodosSuccess = (todos) => {
    return {
        type: LOAD_TODOS_SUCCESS,
        payload: {
            todos
        },
    }
};

export const loadTodosFailure = () => {
    return {
        type: LOAD_TODOS_FAILURE,
    };
};

export const addTodoRequest = () => {
    return {
        type: ADD_TODO_REQUEST,
    }
};

export const addTodoSuccess = (todo) => {
    return {
        type: ADD_TODO_SUCCESS,
        payload: { 
            todo,
        },
    }
};

export const deleteTodoRequest = () => {
    return {
        type: DELETE_TODO_REQUEST,
    }
};

export const deleteTodoSuccess = (todo) => {
    return {
        type: DELETE_TODO_SUCCESS,
        payload: {
            todo,
        },
    }
};