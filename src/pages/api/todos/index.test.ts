import { createMocks } from "node-mocks-http";
import handler from "./index";

describe("GET /todos", () => {
  const { req, res } = createMocks({
    method: "GET",
  });

  beforeAll(async () => {
    await handler(req, res);
  })

  test("Status Code: 200",  () => {
    expect(res._getStatusCode()).toBe(200);
  });

  test("Returns JSON", () => {
    expect(res._isJSON()).toBeTruthy();
  });
})
