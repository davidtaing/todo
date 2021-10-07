import TodoRepository from "./todo.repository";

describe("Test Repository", () => {
  describe("Returns Array of Todos", () => {
    const todoRepository = new TodoRepository();
    let result;
    beforeAll(async () => {
      result = await todoRepository.getAll("gKl5yZeYDXzQ6mYzRZsIfq7JqNta");
      console.log(result);
    })

    test("Returns Todos Array", () => {
      expect(Array.isArray(result)).toBeTruthy();
    })
  });
})