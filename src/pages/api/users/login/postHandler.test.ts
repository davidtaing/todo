import postHandler from "./postHandler";
// test dependencies
import { createMocks } from "node-mocks-http";
import { FirebaseError } from "@firebase/util";

let mockSignInWithEmailAndPassword: any = () => ({ });

jest.mock("../../../../api/firebase", () => {
  return {
    auth: jest.fn(),
    signInWithEmailAndPassword: () => mockSignInWithEmailAndPassword(),
  }
});

describe("POST api/users/login", () => {
  describe("200 - OK Reponses", () => {
    // set valid email & password to bypass local input validation
    const { req, res } = createMocks({
      email: "test@test.com",
      password: "12345678",
    });

    beforeAll(() => postHandler(req, res))

    test("Status: 200 OK", () => {
      expect(res._getStatusCode()).toBe(200);
    });

    test("JSON Response", () => {
      expect(res._isJSON()).toBeTruthy();
    });
  });

  describe("400 - Bad Request Responses", () => {
    describe("Firebase Auth throws 'auth/invalid-email' error", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        email: "test@test.com",
        password: "12345678",
      });

      beforeAll(() => {
        mockSignInWithEmailAndPassword = (req: any, res: any) => {
          throw new FirebaseError("auth/invalid-email", "mocked firebase error");
        }
        postHandler(req, res);
      });

      test("Status: 400 OK", () => {
        expect(res._getStatusCode()).toBe(400);
      });

      test("JSON Response", () => {
        expect(res._isJSON()).toBeTruthy();
      });

      test("Error Message: 'Bad Request'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe("Bad Request");
      });
    });
  });

  describe("401 - Invalid Email or Password Responses", () => {
    describe("Firebase Auth throws 'auth/user-not-found' error", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        email: "test@test.com",
        password: "12345678",
      });
  
      beforeAll(() => {
        mockSignInWithEmailAndPassword = (req: any, res: any) => {
          throw new FirebaseError("auth/user-not-found", "mocked firebase error");
        }
        postHandler(req, res);
      });
  
      test("Status: 401 Unauthorized", () => {
        expect(res._getStatusCode()).toBe(401);
      });
  
      test("JSON Response", () => {
        expect(res._isJSON()).toBeTruthy();
      });
  
      test("Error Message: 'Invalid Email or Password'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe('Invalid Email or Password');
      });
    });

    describe("Firebase Auth throws 'auth/user-disabled' error", () => {
      // set valid email & password to bypass local input validation
      const { req, res } = createMocks({
        email: "test@test.com",
        password: "12345678",
      });
  
      beforeAll(() => {
        mockSignInWithEmailAndPassword = (req: any, res: any) => {
          throw new FirebaseError("auth/user-disabled", "mocked firebase error");
        }
        postHandler(req, res);
      });
  
      test("Status: 401 Unauthorized", () => {
        expect(res._getStatusCode()).toBe(401);
      });
  
      test("JSON Response", () => {
        expect(res._isJSON()).toBeTruthy();
      });
  
      test("Error Message: 'Invalid Email or Password'", () => {
        const { message } = res._getJSONData();
        expect(message).toBe('Invalid Email or Password');
      });
    });
  });

  describe("500 - Internal Server Error Responses", () => {
    // set valid email & password to bypass local input validation
    const { req, res } = createMocks({
      email: "test@test.com",
      password: "12345678",
    });

    beforeAll(() => {
      mockSignInWithEmailAndPassword = (req: any, res: any) => {
        throw new Error("mocked base Error");
      }
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
      expect(message).toBe('Internal Server Error');
    });
  });
});
