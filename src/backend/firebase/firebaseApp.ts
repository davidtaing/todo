import * as firebase from "@firebase/app";
import config from "../utils/config";

export let getFirebaseApp = () => {
  if (firebase.getApps().length === 0)
    return firebase.initializeApp(config.firebase);

  return firebase.getApp();
};