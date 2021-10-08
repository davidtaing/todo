import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import config from "../../utils/config";
import { firebaseApp } from "./";

export const auth = getAuth(firebaseApp);

if (config.NODE_ENV !== "production") {
  // check _canInitEmulator to stop attempting to reconnect emulators
  if ((auth as any)?._canInitEmulator ?? true) {
    const { host, authPort } = config.firebaseEmulator;
    const emulatorUrl = `http://${host}:${authPort}/`;
    connectAuthEmulator(auth, emulatorUrl);
  }
}

export { signInWithEmailAndPassword, createUserWithEmailAndPassword };