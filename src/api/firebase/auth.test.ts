// module dependencies
import { connectAuthEmulator } from "@firebase/auth";
import config from "../../utils/config";
import { auth } from "./auth";


jest.mock("@firebase/auth", () => {
  return {
    getAuth: jest.fn(),
    connectAuthEmulator: jest.fn(),
  };
});


describe("Firebase Auth", () => {
  describe("NODE_ENV='test'", () => {
    beforeAll(() => {
      auth; // trigger loading dependencies
    })
    test("Connects to Auth Emulator", () => {
      expect(connectAuthEmulator).toBeCalled();
    });
  });
});
