const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: {
            id
        }
    }
};