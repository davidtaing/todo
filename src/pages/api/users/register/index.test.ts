import { createMocks } from "node-mocks-http";
import handler from "./index";
import { createApiError, createUsersApiError } from "../../../../api/errors";

jest.mock("../../../../api/firebase/auth", () => {
  return {
    auth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(),
  };
});

afterAll(() => {
  jest.resetModules();
});

describe("/users/register", () => {
  describe("Supported Methods", () => {
    describe("POST /users/register", () => {
      const { req, res } = createMocks({
        method: "POST",
        body: {
          fullname: "John Citizen",
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "12345678",
        },
      });

      beforeAll(async () => {
        await handler(req, res);
      });

      test("Respond with 200 Status", () => {
        expect(res._getStatusCode()).toBe(200);
      });

      test("Return JSON", () => {
        expect(res._isJSON()).toBeTruthy();
      });
    });
  });

  describe("Unsupported Methods", () => {
    describe("GET /users/register", () => {
      const { req, res } = createMocks({
        method: "GET",
        body: {
          fullname: "John Citizen",
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "12345678",
        },
      });
      const { message: expectMessage } = createApiError.METHOD_NOT_ALLOWED();

      beforeAll(async () => {
        await handler(req, res);
      });

      test("Respond with 405 Status", () => {
        expect(res._getStatusCode()).toBe(405);
      });

      test("Return JSON", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test(`Respond with message: "${expectMessage}"`, () => {
        const { message: actualMessage } = res._getJSONData();
        expect(actualMessage).toBe(expectMessage);
      });
    });
  });
});
