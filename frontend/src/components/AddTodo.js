import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
    const [text, setText] = useState('');
    
    return (
        <div className="add-todo-container">
            <form onSubmit={(e) => {
                e.preventDefault();
                if (text) { 
                    addTodo(text);
                }
            }}>
                <input 
                    className="todo-text"
                    type="text"
                    value={text}
                    placeholder="Next todo" 
                    onChange={(e) => setText(e.target.value)} />
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