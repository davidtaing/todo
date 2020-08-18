const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED";

export const toggleTodoCompleted = (id) => {
    return {
        type: TOGGLE_TODO_COMPLETED,
        payload: {
            id
        }
    }
};

const LOAD_TODOS = "LOAD_TODOS";

export const loadTodos = (todos) => {
    return {
        type: LOAD_TODOS,
        payload: {
            todos
        }
    }
}