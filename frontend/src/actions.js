const TOGGLE_TODO_REQUESTED = "todo/toggleTodoRequested";
const TOGGLE_TODO_SUCCESS = "todo/toggleTodoSuccess";

const LOAD_TODOS_REQUESTED = "todo/loadTodosRequested";
const LOAD_TODOS_SUCCESS = "todo/loadTodosSuccess";
const LOAD_TODOS_FAILURE = "todo/loadTodosFailure";

const ADD_TODO_REQUESTED = "todo/addTodoRequested";
const ADD_TODO_SUCCESS = "todo/addTodoSuccess";
const ADD_TODO_FAILURE = "todo/addTodoFailure";

const DELETE_TODO_REQUESTED = "todo/deleteTodoRequested";
const DELETE_TODO_SUCCESS = "todo/deleteTodoSuccess";

export const toggleTodoRequested = () => {
    return {
        type: TOGGLE_TODO_REQUESTED,
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

export const loadTodosRequested = () => {
    return {
        type: LOAD_TODOS_REQUESTED,
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

export const addTodoRequested = () => {
    return {
        type: ADD_TODO_REQUESTED,
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

export const deleteTodoRequested = () => {
    return {
        type: DELETE_TODO_REQUESTED,
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