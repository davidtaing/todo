import postHandler from "./postHandler";
// module dependencies
import { auth, signInWithEmailAndPassword } from "../../../../api/firebase";
// test dependencies
import { createMocks } from "node-mocks-http";


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
  });
});