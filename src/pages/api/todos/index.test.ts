import { getHandler } from "./";
import { createMocks } from "node-mocks-http";

describe("api/todos", () => {
  describe("GET api/todos", () => {
    const { req, res } = createMocks({
      method: "GET",
      body: {
        uid: "gKl5yZeYDXzQ6mYzRZsIfq7JqNta",
      }
    });

    beforeAll(() => getHandler(req, res));

    test("Returns An Array", () => {
      const result = res._getJSONData();
      expect(result).toBeInstanceOf(Array);
    });
  });
});