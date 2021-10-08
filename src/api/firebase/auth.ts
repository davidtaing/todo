import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import config from "../../utils/config";
import { firebaseApp } from "./";

export const auth = getAuth(firebaseApp);

// check _canInitEmulator to stop attempting to reconnect emulators
if (config.NODE_ENV !== "production" && (auth as any)._canInitEmulator) {
  const { host, authPort } = config.firebaseEmulator;
  const emulatorUrl = `http://${host}:${authPort}/`;
  connectAuthEmulator(auth, emulatorUrl);
}

export { signInWithEmailAndPassword, createUserWithEmailAndPassword };