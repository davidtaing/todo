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
  describe("User successfully logs in", () => {
    const { req, res } = createMocks({
      email: "test@test.com",
      password: "12345678",
    });

    beforeAll(() => postHandler(req, res))

    test("Response status is 200 OK", () => {
      expect(res._getStatusCode()).toBe(200);
    });

    test("Responds with JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });
  });

  describe("Firebase Auth throws auth/invalid-email error", () => {
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

    test("Response status is 400 OK", () => {
      expect(res._getStatusCode()).toBe(400);
    });

    test("Responds with JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });

    test("Responds with message: 'Bad Request'", () => {
      const { message } = res._getJSONData();
      expect(message).toBe("Bad Request");
    });
  });

  describe("Firebase Auth throws auth/user-disabled error", () => {
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

    test("Response status is 401 Unauthorized", () => {
      expect(res._getStatusCode()).toBe(401);
    });

    test("Responds with JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });

    test("Responds with message: 'Invalid Email or Password'", () => {
      const { message } = res._getJSONData();
      expect(message).toBe('Invalid Email or Password');
    });
  });

  describe("Firebase Auth throws 'auth/user-not-found' error", () => {
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

    test("Response status is 401 Unauthorized", () => {
      expect(res._getStatusCode()).toBe(401);
    });

    test("Responds with JSON", () => {
      expect(res._isJSON()).toBeTruthy();
    });

    test("Responds with message: 'Invalid Email or Password'", () => {
      const { message } = res._getJSONData();
      expect(message).toBe('Invalid Email or Password');
    });
  });
});
