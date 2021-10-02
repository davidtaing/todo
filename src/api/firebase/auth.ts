import type { Auth } from "@firebase/auth";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from "@firebase/auth";

// Local Firebase App Object
import firebaseApp from "./firebase";

const {
  NODE_ENV,
  FIREBASE_EMULATOR_HOST: localhost,
  FIREBASE_AUTH_EMULATOR_PORT: localhostPort,
} = process.env;

const auth: Auth = getAuth(firebaseApp);

// Connect to Emulator if running development or test env.
if (NODE_ENV === "development" || NODE_ENV === "test") {
  if (!localhost || !localhostPort) {
    throw Error("Failed to load Firebase Auth Emulator");
  }
  const url = `http://${localhost}:${localhostPort}/`;

  connectAuthEmulator(auth, url);
}

// Re-export Auth functions so we can mock them in testing
export { auth, signInWithEmailAndPassword };