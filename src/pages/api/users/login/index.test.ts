import handler from "./";
import { postHandler } from "./postHandler";
import { createMocks } from "node-mocks-http";

jest.mock("./postHandler");

describe("/api/users/login", () => {
  describe("Root Handler", () => {
    describe("POST /api/users/login", () => {
      const { req, res } = createMocks({
        method: "POST",
      });
  
      beforeAll(() => handler(req, res));

      test("is postHandler called?", () => {
        expect(postHandler).toHaveBeenCalled();
      });
    });

    describe("Method Not Specified", () => {
      const { req, res } = createMocks();
  
      beforeAll(() => handler(req, res));

      test("405 Response Status Code", () => {
        expect(res._getStatusCode()).toBe(405);
      });

      test("Responds with JSON Message: 'Method Not Allowed'", () => {
        const { message: actualMessage } = res._getJSONData();
        expect(actualMessage).toBe("Method Not Allowed");
      });
    });
  });
})