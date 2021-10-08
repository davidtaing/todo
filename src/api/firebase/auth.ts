import { getAuth, connectAuthEmulator } from "@firebase/auth";
import { firebaseApp } from "./";
import config from "../../utils/config";

export const auth = getAuth(firebaseApp);

if (config.NODE_ENV !== "production") {
  const { FIREBASE_EMULATOR_HOST: host, FIREBASE_AUTH_EMULATOR_PORT: port } = config;
  const emulatorUrl = `http://${host}:${port}/`;
  connectAuthEmulator(auth, emulatorUrl);
}