const initialState = { isLoading: false, todos: [] };

export const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case "LOAD_TODOS": {
            const { todos } = payload;
            return { ...state, todos: todos };
        }
        case "TOGGLE_TODO_COMPLETED": {
            // map through array and flip the completed field of the target task
            const { id, completed } = payload;
            return {
                ...state,
                todos: state.todos.map(
                (todo) => 
                    todo.id === id && todo.completed !== completed ?
                        { ...todo, completed} :
                        todo
                )
            };
        }
        case "ADD_TODO": {
            const { todo } = payload
            return {
                ...state,
                todos: state.todos.concat(todo),
            }
        }
        default:
            return initialState;
    } 
}