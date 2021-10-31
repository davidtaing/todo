import * as types from "./actionTypes";

export const createTodo = (todo: any) => {
  return { type: types.CREATE_TODO, todo: todo };
};

export const finishTodo = (todo: any) => {
  return { type: types.FINISH_TODO, todo: todo };
};

export const deleteTodo = (todo: any) => {
  return { type: types.DELETE_TODO, todo: todo };
};

export const loadTodos = () => {
  return { type: types.LOAD_TODOS };
};
