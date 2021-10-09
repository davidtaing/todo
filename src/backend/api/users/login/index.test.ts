import handler from ".";
import postHandler from "./postHandler";
import { createMocks } from "node-mocks-http";

jest.mock("./postHandler", () => {
  return {
    __esModule: true,
    default: jest.fn((req: any, res: any) => { }),
  }
});

describe("/api/users/login", () => {
  describe("Root Handler", () => {
    describe("POST (Allowed)", () => {
      const { req, res } = createMocks({
        method: "POST",
      });
  
      beforeAll(() => handler(req, res));

      test("is postHandler called?", () => {
        expect(postHandler).toHaveBeenCalled();
      });
    });

    describe("DELETE (Not Allowed)", () => {
      const { req, res } = createMocks({
        method: "DELETE",
      });
  
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