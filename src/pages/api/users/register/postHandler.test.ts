import postHandler from "./postHandler";
// test dependencies
import { createMocks } from "node-mocks-http";
import { FirebaseError } from "@firebase/util";

let mockCreateUserWithEmailAndPassword: any = () => ({});

jest.mock("../../../../backend/firebase", () => {
  return {
    auth: jest.fn(),
    createUserWithEmailAndPassword: () => mockCreateUserWithEmailAndPassword(),
  };
});

describe("POST api/users/register", () => {
  describe("303 - See Other Responses", () => {
    describe("Successful login response", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        body: {
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "12345678",
        },
      });

      beforeAll(() => {
        mockCreateUserWithEmailAndPassword = jest.fn((req: any, res: any) => {});
        postHandler(req, res);
      });

      test("Response status is 303 Internal Server Error", () => {
        expect(res._getStatusCode()).toBe(303);
      });

      test("Responds with JSON", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test("Response Header: 'location: http://localhost:3000/login'", () => {
        const headers = res._getHeaders();
        expect(headers).toHaveProperty("location", "http://localhost:3000/login");
      });

      test("Response message: 'A link to activate your account has been emailed to the address provided.'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe(
          "A link to activate your account has been emailed to the address provided."
        );
      });
    });

    describe("Firebase Auth throws 'auth/email-already-in-use' error", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        body: {
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "12345678",
        },
      });

      beforeAll(() => {
        mockCreateUserWithEmailAndPassword = jest.fn((req: any, res: any) => {
          throw new FirebaseError(
            "auth/email-already-in-use",
            "mocked firebase error"
          );
        });
        postHandler(req, res);
      });

      test("Response status is 303 Internal Server Error", () => {
        expect(res._getStatusCode()).toBe(303);
      });

      test("Responds with JSON", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test("Response Header: 'location: http://localhost:3000/login'", () => {
        const headers = res._getHeaders();
        expect(headers).toHaveProperty("location", "http://localhost:3000/login");
      });

      test("Response message: 'A link to activate your account has been emailed to the address provided.'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe(
          "A link to activate your account has been emailed to the address provided."
        );
      });
    });
  });

  describe("400 - Bad Request Responses", () => {
    describe("Firebase Auth throws 'auth/invalid-email' error", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        body: {
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "12345678",
        },
      });

      beforeAll(() => {
        mockCreateUserWithEmailAndPassword = (req: any, res: any) => {
          throw new FirebaseError(
            "auth/invalid-email",
            "mocked firebase error"
          );
        };
        postHandler(req, res);
      });

      test("Status: 400 Bad Request", () => {
        expect(res._getStatusCode()).toBe(400);
      });

      test("JSON Response", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test("Error Message: 'Email is Invalid.'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe("Email is Invalid.");
      });
    });

    describe("Firebase Auth throws 'auth/weak-password' error", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        body: {
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "12345678",
        },
      });

      beforeAll(() => {
        mockCreateUserWithEmailAndPassword = (req: any, res: any) => {
          throw new FirebaseError(
            "auth/weak-password",
            "mocked firebase error"
          );
        };
        postHandler(req, res);
      });

      test("Status: 400 Bad Request", () => {
        expect(res._getStatusCode()).toBe(400);
      });

      test("JSON Response", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test("Error Message: 'Password is too weak.'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe("Password is too weak.");
      });
    });

    describe("Password and Confirm Password do not match", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        body: {
          email: "test@test.com",
          password: "12345678",
          confirmPassword: "1234567",
        },
      });

      beforeAll(() => {
        mockCreateUserWithEmailAndPassword = (req: any, res: any) => {};
        postHandler(req, res);
      });

      test("Status: 400 Bad Request", () => {
        expect(res._getStatusCode()).toBe(400);
      });

      test("JSON Response", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test("Error Message: 'Password and Confirm Password do not match.'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe("Password and Confirm Password do not match.");
      });
    });
  });

  describe("500 - Internal Server Error Responses", () => {
    // set valid email & password to bypass local input validation
    const { req, res } = createMocks({
      body: {
        email: "test@test.com",
        password: "12345678",
        confirmPassword: "12345678",
      },
    });

    beforeAll(() => {
      mockCreateUserWithEmailAndPassword = (req: any, res: any) => {
        throw new Error("mocked base Error");
      };
      postHandler(req, res);
    });

    test("Response status is 500 Internal Server Error", () => {
      expect(res._getStatusCode()).toBe(500);
    });

    test("Responds with JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });

    test("Responds with message: 'Internal Server Error'", () => {
      const { message } = res._getJSONData();
      expect(message).toBe("Internal Server Error");
    });
  });
});
