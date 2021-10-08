import { getAuth, connectAuthEmulator } from "@firebase/auth";
import config from "../../utils/config";
import { firebaseApp } from "./";

export const auth = getAuth(firebaseApp);

if (config.NODE_ENV !== "production") {
  const { host, authPort } = config.firebaseEmulator;
  const emulatorUrl = `http://${host}:${authPort}/`;
  connectAuthEmulator(auth, emulatorUrl);
}