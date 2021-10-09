import handler from ".";
import getHandler from "./getHandler";
import postHandler from "./postHandler";
import putHandler from "./putHandler";
import deleteHandler from "./deleteHandler";
import { createMocks } from "node-mocks-http";

jest.mock("./getHandler", () => {
  return {
    __esModule: true,
    default: jest.fn((req: any, res: any) => {}),
  };
});
jest.mock("./postHandler", () => {
  return {
    __esModule: true,
    default: jest.fn((req: any, res: any) => {}),
  };
});
jest.mock("./putHandler", () => {
  return {
    __esModule: true,
    default: jest.fn((req: any, res: any) => {}),
  };
});
jest.mock("./deleteHandler", () => {
  return {
    __esModule: true,
    default: jest.fn((req: any, res: any) => {}),
  };
});

describe("/api/users/login", () => {
  describe("Root Handler", () => {
    describe("GET (Allowed)", () => {
      const { req, res } = createMocks({
        method: "GET",
      });

      beforeAll(() => handler(req, res));

      test("is getHandler called?", () => {
        expect(getHandler).toHaveBeenCalled();
      });
    });

    describe("POST (Allowed)", () => {
      const { req, res } = createMocks({
        method: "POST",
      });

      beforeAll(() => handler(req, res));

      test("is postHandler called?", () => {
        expect(postHandler).toHaveBeenCalled();
      });
    });

    describe("PUT (Allowed)", () => {
      const { req, res } = createMocks({
        method: "PUT",
      });

      beforeAll(() => handler(req, res));

      test("is putHandler called?", () => {
        expect(putHandler).toHaveBeenCalled();
      });
    });

    describe("DELETE (Allowed)", () => {
      const { req, res } = createMocks({
        method: "DELETE",
      });

      beforeAll(() => handler(req, res));

      test("is deleteHandler called?", () => {
        expect(deleteHandler).toHaveBeenCalled();
      });
    });

    describe("PATCH (Not Allowed)", () => {
      const { req, res } = createMocks({
        method: "PATCH",
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
});
