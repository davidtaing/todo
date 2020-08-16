import { TOGGLE_TODO_COMPLETED } from './actions';

const intitialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
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