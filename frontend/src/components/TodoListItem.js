import React from 'react';

const TodoListItem = ({ todoListItem, toggleTodo, deleteTodo }) => {
    const { id, title, completed } = todoListItem;

    return (
        <div className="listitem" key={id}>
            <form>
                <input
                    type="checkbox"
                    className="completed-checkbox"
                    checked={completed}
                    onClick={(e) => toggleTodo(id, e.target.checked)}
                    readOnly
                />
                {
                    completed ?
                        [
                            <label>
                                <strike>{title}</strike>
                            </label>,
                            <input
                                type="checkbox"
                                className="delete-checkbox"
                                onClick={() => deleteTodo(id)}
                            />
                        ] :
                        <label>
                            {title}
                        </label>
                }
            </form>
        </div>
    )
};

export default TodoListItem;