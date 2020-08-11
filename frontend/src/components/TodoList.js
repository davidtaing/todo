import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({todos}) => {
    return (
        <div className="todo-list-container">
            {   todos.map(todo => ( <TodoListItem todoListItem={todo} /> )) }
        </div>
    );
};

export default TodoList;