import React from 'react';

const TodoListItem = ({todoListItem, toggleTodo}) => { 
    const { text, completed } = todoListItem;

    return (
        <div className="listitem">
            <input type="checkbox" onClick={toggleTodo}/>
            <h className="listitem-text">
                { completed ? <strike>{text}</strike> : text}
            </h>
        </div>
    )
};

export default TodoListItem;