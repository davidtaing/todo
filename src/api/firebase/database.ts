import type { Database } from "firebase/database";
import getFirebaseApp from "./firebase";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";

const {
  NODE_ENV,
  FIREBASE_EMULATOR_HOST: localhost,
  FIREBASE_DATABASE_EMULATOR_PORT: localhostPort,
} = process.env;

const db: Database = getDatabase(getFirebaseApp());

// Connect to Emulator if running development or test env.
// Check ._instanceStarted (Next.js hot-reloads causes re-init & re-emulation) 
if (NODE_ENV !== "production" && (db as any)._instanceStarted == false) {
  if (!localhost || !localhostPort) {
    throw Error("Failed to load Firebase Database Emulator");
  }

  connectDatabaseEmulator(db, localhost, parseInt(localhostPort));
}

export default db;
