import React from 'react';

const TodoListItem = ({ todoListItem, toggleTodo, deleteTodo }) => {
    const { id, text, completed } = todoListItem;

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
                                <strike>{text}</strike>
                            </label>,
                            <input
                                type="checkbox"
                                className="delete-checkbox"
                                onClick={() => deleteTodo(id)}
                            />
                        ] :
                        <label>
                            {text}
                        </label>
                }
            </form>
        </div>
    )
};

export default TodoListItem;