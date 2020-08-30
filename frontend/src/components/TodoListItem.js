import React from 'react';

const TodoListItem = ({ todoListItem, toggleTodoRequest, deleteTodoRequest }) => {
    const { id, title, completed } = todoListItem;

    return (
        <div className="listitem" key={id}>
            <form>
                <input
                    type="checkbox"
                    className="completed-checkbox"
                    checked={completed}
                    onClick={(e) => toggleTodoRequest(id)}
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
                                onClick={() => deleteTodoRequest(id)}
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