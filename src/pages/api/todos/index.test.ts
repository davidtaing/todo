import { createMocks } from "node-mocks-http";
import handler from "./index";

let mockedResponse = () => ({});

// jest.mock();

describe("/todos", () => {
  describe("GET /todos", () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    beforeAll(async () => {
      await handler(req, res);
    });

    test("Status Code: 200", () => {
      expect(res._getStatusCode()).toBe(200);
    });

    test("Returns JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });

    test("Returns Todos Array", () => {
      const { todos } = res._getJSONData()
      expect(Array.isArray(todos)).toBeTruthy();
    });
  });
});
