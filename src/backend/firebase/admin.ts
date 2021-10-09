import admin from "firebase-admin";
import config from "../utils/config";

export const adminApp = admin.initializeApp({
  credential: admin.credential.cert(config.firebaseServiceAccount),
  databaseURL: "https://todo-399e4-default-rtdb.asia-southeast1.firebasedatabase.app"
});