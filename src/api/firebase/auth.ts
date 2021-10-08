import { getAuth, connectAuthEmulator } from "@firebase/auth";
import { firebaseApp } from "./";

export const auth = getAuth(firebaseApp);

if (process.env.NODE_ENV !== "production") {
  const { FIREBASE_EMULATOR_HOST: host, FIREBASE_AUTH_EMULATOR_PORT: port } = process.env;
  const emulatorUrl = `http://${host}:${port}/`;
  connectAuthEmulator(auth, emulatorUrl);
}