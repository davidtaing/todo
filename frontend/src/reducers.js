const initialState = { isLoading: false, todos: [] };

export const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case "todo/loadTodosRequested": {
            return { ...state, isLoading: true };
        }
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
                        {
                            id,
                            title: todo.title,
                            completed,
                        } :
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
            const { todo: deletedTodo } = payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== deletedTodo.id)
            }
        }
        case "todo/addTodoRequested":
        case "todo/deleteTodoRequested":
        case "todo/toggleTodoRequested":
        default:
            return state;
    } 
}