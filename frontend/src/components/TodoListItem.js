import React from 'react';

const TodoListItem = ({todoListItem, toggleTodo}) => { 
    const { id, text, completed } = todoListItem;

    return (
        <div className="listitem" key={id}>
            <input type="checkbox" id="checkbox" onClick={toggleTodo}/>
            <label htmlFor="checkbox">
                { completed ? <strike>{text}</strike> : text}
            </label><br />
        </div>
    )
};

export default TodoListItem;