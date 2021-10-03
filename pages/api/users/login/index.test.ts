import { createMocks } from "node-mocks-http";
import handler from "./index";

jest.mock("../../../../src/api/firebase/auth", () => {
  return {
    auth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(),
  };
});

describe("/users", () => {
  describe("Supported Methods", () => {
    describe("POST /users", () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          email: "test@test.com",
          password: "12345678",
        },
      });

      beforeAll(async () => {
        await handler(req, res);
      });

      test("Respond with 303 Status", () => {
        expect(res._getStatusCode()).toBe(303);
        expect(res._isJSON()).toBeTruthy();
      });
    });
  });

  describe("Unsupported Methods", () => {
    const { req, res } = createMocks({
      body: {
        email: "test@test.com",
        password: "12345678",
      },
    });

    describe("DELETE /users", () => {
      test("Respond with 405 Status", async () => {
        req._setMethod("DELETE");

        await handler(req, res);
        expect(res._getStatusCode()).toBe(405);
        expect(res._isJSON()).toBeTruthy();
      });
    });
  });
});
