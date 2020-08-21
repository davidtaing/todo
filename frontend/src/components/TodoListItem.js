import React from 'react';

const TodoListItem = ({todoListItem, toggleTodo}) => { 
    const { id, text, completed } = todoListItem;

    return (
        <div className="listitem" key={id}>
            <form>
                <input 
                    type="checkbox" 
                    name="checkbox" 
                    checked={completed}
                    onClick={(e) => toggleTodo(id, e.target.checked)}
                    readOnly
                />
                <label htmlFor="checkbox">
                    { completed ? <strike>{text}</strike> : text}
                </label><br />
            </form>
        </div>
    )
};

export default TodoListItem;