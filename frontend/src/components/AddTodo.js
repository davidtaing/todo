import React, { useState } from 'react';

const AddTodo = ({addTodoRequest}) => {
    const [title, setTitle] = useState('');
    
    return (
        <div className="add-todo-container">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (title) { 
                    addTodoRequest(title);
                    setTitle('');
                }
            }}>
                <input 
                    className="todo-title"
                    type="title"
                    value={title}
                    placeholder="Next todo" 
                    onChange={(e) => setTitle(e.target.value)} />
                <button 
                    className="add-button"
                    type="submit" >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddTodo;