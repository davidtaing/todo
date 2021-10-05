import { createMocks } from "node-mocks-http";
import handler from "./index";
import { httpErrorCodes, usersErrorCodes } from "../../../../api/errors";

let mockResponse = () => ({});

jest.mock("../../../../api/firebase/auth", () => {
  return {
    auth: jest.fn(),
    createUserWithEmailAndPassword: jest.fn(() => mockResponse()),
  };
});

afterAll(() => {
  jest.resetModules();
});

describe("/users/register", () => {
  describe("Supported Methods", () => {
    describe("POST /users/register", () => {
      describe("Success Response", () => {
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

        test(`Responds with: "A link to activate your account has been emailed to the address provided."`, () => {
          const { message: actualMessage } = res._getJSONData();
          expect(actualMessage).toBe("A link to activate your account has been emailed to the address provided.");
        });
      });

      describe("Error Response: Passwords Do Not Match", () => {
        const { req, res } = createMocks({
          method: "POST",
          body: {
            fullname: "John Citizen",
            email: "test@test.com",
            password: "12345678",
            confirmPassword: "1234",
          },
        });

        beforeAll(async () => {
          await handler(req, res);
        });

        test("Respond with 403 Status", () => {
          expect(res._getStatusCode()).toBe(403);
        });

        test("Return JSON", () => {
          expect(res._isJSON()).toBeTruthy();
        });

        test(`Respond with message: "Password and Confirm Password do not match"`, () => {
          const { message: actualMessage } = res._getJSONData();
          expect(actualMessage).toBe("Password and Confirm Password do not match");
        });
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

      beforeAll(async () => {
        await handler(req, res);
      });

      test("Respond with 405 Status", () => {
        expect(res._getStatusCode()).toBe(405);
      });

      test("Return JSON", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test(`Respond with message: "${httpErrorCodes.METHOD_NOT_ALLOWED.message}"`, () => {
        const { message: expectMessage } = httpErrorCodes.METHOD_NOT_ALLOWED;
        const { message: actualMessage } = res._getJSONData();

        expect(actualMessage).toBe(expectMessage);
      });
    });
  });
});
