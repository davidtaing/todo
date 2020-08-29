const initialState = { isLoading: false, todos: [] };

export const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case "todo/loadTodosSuccess": {
            const { todos } = payload;
            return { ...state, isLoading: false , todos: todos };
        }
        case "todo/loadTodosFailure": {
            return { ...state, isLoading: false };
        }
        case "todo/toggleTodoSuccess": {
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
        case "todo/addTodoSuccess": {
            const { todo } = payload;
            return {
                ...state,
                todos: state.todos.concat(todo),
            }
        }
        case "todo/deleteTodoSuccess": {
            const { id } = payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
        }
        default:
            return initialState;
    } 
}