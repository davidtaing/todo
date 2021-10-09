/**
 * Acts as a wrapper for process.env and allows us to mock NODE_ENV
 */
const config = {
  NODE_ENV: process.env.NODE_ENV,
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  },
  firebaseEmulator: {
    host: process.env.FIREBASE_EMULATOR_HOST,
    authPort: process.env.FIREBASE_AUTH_EMULATOR_PORT,
    databasePort: process.env.FIREBASE_DATABASE_EMULATOR_PORT
  }
 };

export default config;