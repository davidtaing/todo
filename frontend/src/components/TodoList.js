import React from 'react';
import { connect } from 'react-redux';
import { loadTodos, toggleTodoCompleted } from '../actions';

import TodoListItem from './TodoListItem';

const todos = [
    {
    id: "123",
    text: "text",
    completed: false,
    },
    {
    id: "123",
    text: "second task",
    completed: false,
    },
    {
    id: "123",
    text: "third task",
    completed: false,
    },
];

const TodoList = ({todos, toggleTodo}) => {
    return (
        <div className="todo-list-container">
            {   todos ?
                todos.map(todo => ( 
                    <TodoListItem 
                        todoListItem={todo} 
                        toggleTodo={toggleTodo}
                    /> 
                )) :
                <h1>Loading</h1>
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todos,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initTodos: (todos) => dispatch(loadTodos(todos)),
        toggleTodo: (id) => dispatch(toggleTodoCompleted(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);