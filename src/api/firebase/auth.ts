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
if (NODE_ENV !== "production") {
  if (!localhost || !localhostPort) {
    throw Error(
      "Failed to load Firebase Auth Emulator. Please check if your configs are missing."
    );
  }

  const url = `http://${localhost}:${localhostPort}/`;

  try {
    connectAuthEmulator(auth, url);
  } catch (err) {
    console.error(err);
  }
}

// Re-export Auth functions so we can mock them in testing
export { auth, signInWithEmailAndPassword };