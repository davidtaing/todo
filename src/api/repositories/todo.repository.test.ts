import TodoRepository from "./todo.repository";

describe("Test Repository", () => {
  describe("Returns Array of Todos", () => {

    const result = TodoRepository.getAll();
    
    test("Returns Todos Array", () => {
      expect(Array.isArray(result)).toBeTruthy();
    })
  });
})