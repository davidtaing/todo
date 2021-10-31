import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import TodoObject from "./TodoObject";

const initialState: Array<TodoObject> = [
  {
    id: "1",
    title: "finish this project",
    completed: false,
  },
  {
    id: "2",
    title: "go to sleep",
    completed: false,
  },
  {
    id: "3",
    title: "go to work",
    completed: true,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: TodoObject = {
        id: nanoid(),
        title: action.payload,
        completed: false,
      };
      state.push(todo);
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      return state.map((todoItem) => {
        if (todoItem.id !== action.payload) return todoItem;

        return { ...todoItem, completed: !todoItem.completed };
      });
    },
    updateTodo: (state, action: PayloadAction<TodoObject>) => {
      return state.map((todoItem) => {
        return todoItem.id === action.payload.id ? action.payload : todoItem;
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleCompleted, updateTodo, deleteTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
