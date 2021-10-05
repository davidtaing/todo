import { FirebaseError } from "@firebase/util";
import { createMocks } from "node-mocks-http";
import handler from "./index";

let mockResponse = () => ({});

jest.mock("../../../../api/firebase/auth", () => {
  return {
    auth: jest.fn(),
    signInWithEmailAndPassword: jest.fn(() => mockResponse()),
  };
});

afterAll(() => {
  jest.resetModules();
});

describe("/users/login", () => {
  describe("Supported Methods", () => {
    describe("POST /users/login", () => {
      describe("Success Response", () => {
        const { req, res } = createMocks({
          method: "POST",
          body: {
            email: "test@test.com",
            password: "12345678",
          },
        });

        beforeAll(async () => {
          mockResponse = () => ({
            user: {
              stsTokenManager: "token",
            },
          });
          await handler(req, res);
        });

        test("Respond with 303 Status", () => {
          expect(res._getStatusCode()).toBe(303);
        });

        test("Return JSON", () => {
          expect(res._isJSON()).toBeTruthy();
        });
      });

      // TODO: Refactor test to authErrorConverter tests.
      describe("Handle Firebase auth/wrong-password error", () => {
        const { req, res } = createMocks({
          method: "POST",
          body: {
            email: "test@test.com",
            password: "12345678",
          },
        });
        beforeAll(async () => {
          mockResponse = () => {
            throw new FirebaseError(
              "auth/wrong-password",
              "mocked firebase error"
            );
          };
          await handler(req, res);
        });

        test("Respond with 401 Status", () => {
          expect(res._getStatusCode()).toBe(401);
        });

        test("Return JSON", () => {
          expect(res._isJSON()).toBeTruthy();
        });

        test(`Return Error Message: "Unauthorized: Invalid Email or Password"`, () => {
          const { message: actualMessage } = res._getJSONData();
          expect(actualMessage).toBe("Unauthorized: Invalid Email or Password");
        });
      });
    });
  });

  describe("Unsupported Methods", () => {
    describe("DELETE /users/login", () => {
      const { req, res } = createMocks({
        method: "DELETE",
        body: {
          email: "test@test.com",
          password: "12345678",
        },
      });

      beforeAll(async() => {
        await handler(req, res);
      })

      test("Respond with 405 Status", async () => {
        expect(res._getStatusCode()).toBe(405);
      });

      test("Return JSON", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test(`Return Error Message: "Method Not Allowed"}`, () => {
        const { message: actualMessage } = res._getJSONData();
        expect(actualMessage).toBe("Method Not Allowed");
      });
    });
  });
});
