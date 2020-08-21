import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodos, toggleTodoCompleted, addTodo } from '../actions';

import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

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

const TodoList = ({ todos, initTodos, toggleTodo, addTodo, isLoading }) => {
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
            <AddTodo addTodo={addTodo}/>
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    initTodos: (todos) => dispatch(loadTodos(todos)),
    toggleTodo: (id, completed) => dispatch(toggleTodoCompleted(id, completed)),
    addTodo: (text) => dispatch(addTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);