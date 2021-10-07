import TodoRepository from "./todo.repository";

describe("TodoRepository", () => {
  const todoRepository = new TodoRepository();

  test("Returns Todos Array", async () => {
    const result = await todoRepository.getAll("gKl5yZeYDXzQ6mYzRZsIfq7JqNta");
    expect(result).toBeInstanceOf(Array);
  });
});
