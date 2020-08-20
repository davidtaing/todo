import React from 'react';

const TodoListItem = ({todoListItem, toggleTodo}) => { 
    const { id, text, completed } = todoListItem;

    return (
        <div className="listitem" key={id}>
            <input 
                type="checkbox" 
                id="checkbox" 
                onClick={(e) => toggleTodo(id, e.target.value)}
            />
            <label htmlFor="checkbox">
                { completed ? <strike>{text}</strike> : text}
            </label><br />
        </div>
    )
};

export default TodoListItem;