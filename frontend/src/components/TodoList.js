import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadTodosRequest, addTodoRequest, deleteTodoRequest, toggleTodoRequest } from '../thunks';

import TodoListItem from './TodoListItem';
import AddTodo from './AddTodo';

const TodoList = ({ todos, initTodos, toggleTodoRequest, addTodoRequest, deleteTodoRequest, isLoading }) => {
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
                            toggleTodoRequest={toggleTodoRequest}
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
    toggleTodoRequest: (id) => dispatch(toggleTodoRequest(id)),
    addTodoRequest: (title) => dispatch(addTodoRequest(title)),
    deleteTodoRequest: (id) => dispatch(deleteTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);