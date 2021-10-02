import { createMocks } from "node-mocks-http";
import handler from "./index";

jest.mock("../../../../src/api/firebase/auth", () => {
  return {
    auth: jest.fn().mockReturnThis(),
    signInWithEmailAndPassword: jest.fn(),
  }
})

describe("/users", () => {
  describe("POST /users", () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        email: "1@1.com",
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

  describe("Unsupported Methods", () => {
    const { req, res } = createMocks({
      body: {
        email: "1@1.com",
        password: "12345678",
      },
    });

    describe("GET /users", () => {
      test("Respond with 405 Status", async () => {
        req._setMethod("GET");

        await handler(req, res);
        expect(res._getStatusCode()).toBe(405);
        expect(res._isJSON()).toBeTruthy();
      });
    });

    describe("PUT /users", () => {
      test("Respond with 405 Status", async () => {
        req._setMethod("PUT");

        await handler(req, res);
        expect(res._getStatusCode()).toBe(405);
        expect(res._isJSON()).toBeTruthy();
      });
    });

    describe("PATCH /users", () => {
      test("Respond with 405 Status", async () => {
        req._setMethod("PATCH");

        await handler(req, res);
        expect(res._getStatusCode()).toBe(405);
        expect(res._isJSON()).toBeTruthy();
      });
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