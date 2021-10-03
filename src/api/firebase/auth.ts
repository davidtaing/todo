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

/**
 *  Connect to Emulator not if running in prod env.
 *  Also checks canInitEmulator to prevent reconnects after Next.js hot reload.
 */

if (NODE_ENV !== "production" && (auth as any)._canInitEmulator) {
  const emulatorUrl = `http://${localhost}:${localhostPort}/`;
  connectAuthEmulator(auth, emulatorUrl);
}

// Re-export Auth functions so we can mock them in testing
export { auth, signInWithEmailAndPassword };
