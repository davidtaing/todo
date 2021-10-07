import handler from "./";
import { createMocks } from "node-mocks-http";

describe("api/todos", () => {
  describe("GET api/todos", () => {
    const { req, res } = createMocks({
      method: "GET",
      body: {
        uid: "gKl5yZeYDXzQ6mYzRZsIfq7JqNta",
      }
    });

    beforeAll(() => handler(req, res));

    test("Returns An Array of Todos", () => {
      const result = res._getJSONData();
      expect(Array.isArray(result)).toBeTruthy();
    });
  });
});