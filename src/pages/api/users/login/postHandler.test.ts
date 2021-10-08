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

  describe("Firebase Auth throws error: auth/invalid-email", () => {
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
});
