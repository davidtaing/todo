import { Todo, TodoStatus } from "../models";

const data = new Map([
  [
    "gKl5yZeYDXzQ6mYzRZsIfq7JqNta", {
      fullname: "John Citizen",
      todos: [
        {
          category: "Sleep",
          id: 1,
          done: true,
          title: "Go to sleep at 12AM",
        },
        {
          category: "Excercise",
          id: 2,
          done: false,
          title: "Walk the dog",
        },
        {
          category: "Exercise",
          id: 4,
          done: false,
          title: "Do 10 push ups",
        },
      ],
    },
  ],
  [
    "9HtZjbWrF5nTncMxMHuArkASSENp", {
      fullname: "David Taing",
      todos: [
        {
          category: "Uncategorized",
          id: 3,
          done: false,
          title: "Study for 3 hours this week.",
        },
        {
          category: "Diet",
          id: 5,
          done: true,
          title: "Eat an apple today.",
        },
        {
          category: "Exercise",
          id: 6,
          done: false,
          title: "Do 10 push ups",
        },
      ],
    },
  ],
]);

export class JSONDatasource {
  async getAllTodos(uid: string): Promise<Todo[]> {
    const user = await data.get(uid);
    if (!user?.todos) {
      throw Error("Failed to get todos");
    }

    const todos = user.todos.map(item => {
      return new Todo(
        item.id,
        item.title,
        item.category,
        item.done
      )
    })

    return todos;
  };
}