import { auth } from "./auth";
// module dependencies
import { connectAuthEmulator } from "@firebase/auth";
import config from "../../utils/config";

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

  describe("NODE_ENV='production'", () => {
    beforeAll(() => {
      jest.doMock("../../utils/config", () => {
        return {
          __esModule: true,
          NODE_ENV: "production",
        }
      });
      auth; // trigger loading dependencies
    })
    test("Connects to Auth Emulator", () => {
      console.log(`TEST NODE_ENV: ${config.NODE_ENV}`)
      expect(connectAuthEmulator).toBeCalledTimes(0);
    });
  });
});
