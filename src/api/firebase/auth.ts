import { getAuth, connectAuthEmulator } from "@firebase/auth";
import { firebaseApp } from "./";

export const auth = getAuth(firebaseApp);
