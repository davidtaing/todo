import { v4 as uuidv4 } from 'uuid';

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
            const { text } = payload;
            const newTodo = {
                id: uuidv4(),
                text,
                completed: false,
            }
            return {
                ...state,
                todos: state.todos.concat(newTodo),
            }
        }
        case "DELETE_TODO": {
            const { id } = payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id != id)
            }
        }
        default:
            return initialState;
    } 
}