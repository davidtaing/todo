import { auth } from "./auth";
// module dependencies
import { connectAuthEmulator } from "@firebase/auth";

jest.mock("@firebase/auth", () => {
  return {
    getAuth: jest.fn(),
    connectAuthEmulator: jest.fn(),
  };
});

describe("Firebase Auth", () => {
  describe("NODE_ENV='test'", () => {
    beforeAll(() => {
      auth; // trigger loading depencies
    })
    test("Connects to Auth Emulator", () => {
      expect(connectAuthEmulator).toBeCalled();
    });
  });
});
