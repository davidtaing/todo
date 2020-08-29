import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodosRequest, addTodoRequest } from '../thunks';
import { toggleTodoSuccess, deleteTodo } from '../actions';

import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, initTodos, toggleTodo, addTodoRequest, deleteTodo, isLoading }) => {
    useEffect(() => {
        initTodos();
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
                            deleteTodo={deleteTodo}
                        />
                    ))
            }
            <AddTodo addTodoRequest={addTodoRequest}/>
        </div>
    );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    initTodos: () => dispatch(loadTodosRequest()),
    toggleTodo: (id, completed) => dispatch(toggleTodoSuccess(id, completed)),
    addTodoRequest: (title) => dispatch(addTodoRequest(title)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);