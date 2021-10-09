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
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  },
  firebaseEmulator: {
    host: process.env.FIREBASE_EMULATOR_HOST,
    authPort: process.env.FIREBASE_AUTH_EMULATOR_PORT,
    databasePort: process.env.FIREBASE_DATABASE_EMULATOR_PORT,
  },
  firebaseServiceAccount: {
    type: String(process.env.FIREBASE_TYPE),
    projectId: String(process.env.FIREBASE_PROJECT_ID),
    privateKeyId: String(process.env.FIREBASE_PRIVATE_KEY_ID),
    privateKey: String(process.env.FIREBASE_PRIVATE_KEY),
    clientEmail: String(process.env.FIREBASE_CLIENT_EMAIL),
    clientId: String(process.env.FIREBASE_CLIENT_ID),
    authUri: String(process.env.FIREBASE_AUTH_URI),
    tokenUri: String(process.env.FIREBASE_TOKEN_URI),
    auth_provider_x509_cert_url:
      String(process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL),
    client_x509_cert_url: String(process.env.FIREBASE_CLIENT_X509_CERT_URL),
  },
};

export default config;
