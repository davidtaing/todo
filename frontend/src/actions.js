const TOGGLE_TODO_COMPLETED = "TOGGLE_TODO_COMPLETED";

export const toggleTodoCompleted = (id) => {
    return {
        type: TOGGLE_TODO_COMPLETED,
        payload: {
            id
        }
    }
};