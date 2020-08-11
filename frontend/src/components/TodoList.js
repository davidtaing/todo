import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <div className="todo-list-container">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;