const data = new Map([
  [
    "gKl5yZeYDXzQ6mYzRZsIfq7JqNta", {
      fullname: "John Citizen",
      todos: [
        {
          category: "Sleep",
          id: 1,
          status: "done",
          title: "Go to sleep at 12AM",
        },
        {
          category: "Excercise",
          id: 2,
          status: "pending",
          title: "Walk the dog",
        },
        {
          category: "Exercise",
          id: 4,
          status: "pending",
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
          status: "done",
          title: "Study for 3 hours this week.",
        },
        {
          category: "Diet",
          id: 5,
          status: "pending",
          title: "Eat an apple today.",
        },
        {
          category: "Exercise",
          id: 6,
          status: "pending",
          title: "Do 10 push ups",
        },
      ],
    },
  ],
]);

export class JSONDatasource {
  async getAllTodos(uid: string) {
    const user = data.get(uid);

    return user?.todos;
  };
}