import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TodoObject from "./TodoObject";

const initialState: Array<TodoObject> = [
  {
    id: 1,
    title: "finish this project",
    completed: false,
  },
  {
    id: 2,
    title: "go to sleep",
    completed: false,
  },
  {
    id: 3,
    title: "go to work",
    completed: true,
  },
];
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
