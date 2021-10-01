import type { Database } from "firebase/database";
import { getDatabase, connectDatabaseEmulator } from "firebase/database";

const {
  NODE_ENV,
  FIREBASE_EMULATOR_HOST: localhost,
  FIREBASE_DATABASE_EMULATOR_PORT: localhostPort,
} = process.env;

const db: Database = getDatabase();

// Connect to Emulator if running development or test env.
if (NODE_ENV === "development" || NODE_ENV === "test") {
  if (!localhost || !localhostPort) {
    throw Error("Failed to load Firebase Database Emulator");
  }

  connectDatabaseEmulator(db, localhost, parseInt(localhostPort));
}

export default db;
