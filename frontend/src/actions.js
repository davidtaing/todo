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

const LOAD_TODOS = "LOAD_TODOS";

export const loadTodos = (todos) => {
    return {
        type: LOAD_TODOS,
        payload: {
            todos
        },
    }
};

const ADD_TODO = "ADD_TODO";

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        payload: { 
            text
        },
    }
};