import React from 'react';

const TodoListItem = ({todoListItem}) => { 
    return (
        <div className="listitem">
            <input type="checkbox" />
            <h className="listitem-text">{todoListItem.text}</h>
        </div>
    )
};

export default TodoListItem;