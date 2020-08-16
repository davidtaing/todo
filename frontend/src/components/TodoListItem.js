import React from 'react';

const TodoListItem = ({todoListItem}) => { 
    const { text, completed } = todoListItem;

    return (
        <div className="listitem">
            <input type="checkbox" />
            <h className="listitem-text">
                { completed ? <strike>{text}</strike> : text}
            </h>
        </div>
    )
};

export default TodoListItem;