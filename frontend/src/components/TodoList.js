import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodos, toggleTodoCompleted } from '../actions';

import TodoListItem from './TodoListItem';

const database = [
    {
        id: "123",
        text: "text",
        completed: false,
    },
    {
        id: "13",
        text: "second task",
        completed: false,
    },
    {
        id: "400",
        text: "third task",
        completed: false,
    },
];

const TodoList = ({ todos, initTodos, toggleTodo, isLoading }) => {
    useEffect(() => {
        initTodos(database);
    }, []);

    return (
        <div className="todo-list-container">
            {
                isLoading ?
                    <h1>Loading</h1> :
                    todos.map(todo => (
                        <TodoListItem
                            todoListItem={todo}
                            toggleTodo={toggleTodo}
                        />
                    ))
            }
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    initTodos: (todos) => dispatch(loadTodos(todos)),
    toggleTodo: (id) => dispatch(toggleTodoCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);