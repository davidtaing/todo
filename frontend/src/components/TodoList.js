import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodosRequest, addTodoRequest, deleteTodoRequest } from '../thunks';
import { toggleTodoSuccess } from '../actions';

import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, initTodos, toggleTodo, addTodoRequest, deleteTodoRequest, isLoading }) => {
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
                            deleteTodoRequest={deleteTodoRequest}
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
    deleteTodoRequest: (id) => dispatch(deleteTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);