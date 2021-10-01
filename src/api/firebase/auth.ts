import type { Auth } from "firebase/auth";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const {
  NODE_ENV,
  FIREBASE_EMULATOR_HOST: localhost,
  FIREBASE_AUTH_EMULATOR_PORT: localhostPort,
} = process.env;

const auth: Auth = getAuth();

// Connect to Emulator if running development or test env.
if (NODE_ENV === "development" || NODE_ENV === "test") {
  if (!localhost || !localhostPort) {
    throw Error("Failed to load Firebase Auth Emulator");
  }
  
  const url = `${localhost}:${localhostPort}`;
  connectAuthEmulator(auth, url);
}

export default auth;
