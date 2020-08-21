import React from 'react';

const TodoListItem = ({todoListItem, toggleTodo, deleteTodo}) => { 
    const { id, text, completed } = todoListItem;

    return (
        <div className="listitem" key={id}>
            <form>
                <input 
                    type="checkbox" 
                    name="completed-checkbox" 
                    checked={completed}
                    onClick={(e) => toggleTodo(id, e.target.checked)}
                    readOnly
                />
                <label>
                    { completed ? <strike>{text}</strike> : text}
                </label>
                <input 
                    type="checkbox" 
                    name="delete-checkbox" 
                    checked={completed}
                    onClick={() => deleteTodo(id)}
                />
                <br />
            </form>
        </div>
    )
};

export default TodoListItem;