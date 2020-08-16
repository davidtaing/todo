import { toggleTodoCompleted } from './actions';

const initialState = { isLoading: false, data: [] };

export const todosReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case TOGGLE_TODO_COMPLETED:
            // map through array and flip the completed field of the target task
            return state.map(
                (todo) => 
                    todo.id === payload.id ?
                        { ...todo, completed: !todo.completed} :
                        todo
            );
        default:
            return initialState;
    } 
}