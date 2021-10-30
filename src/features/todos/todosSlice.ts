import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
  todos: Array<object>;
}

const initialState: TodosState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state) => state,
    completeTodo: (state) => state,
    updateTodo: (state) => state,
    deleteTodo: (state) => state,
  },
});

export const { addTodo, completeTodo, updateTodo, deleteTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
