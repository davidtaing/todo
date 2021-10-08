import postHandler from "./postHandler";
// test dependencies
import { createMocks } from "node-mocks-http";
import { FirebaseError } from "@firebase/util";

let mockCreateUserWithEmailAndPassword: any = () => ({});

jest.mock("../../../../api/firebase", () => {
  return {
    auth: jest.fn(),
    createUserWithEmailAndPassword: () => mockCreateUserWithEmailAndPassword(),
  };
});

describe("POST api/users/register", () => {
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
});
