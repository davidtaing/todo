import * as firebase from "@firebase/app";
import config from "../utils/config";
  
if (firebase.getApps().length === 0)
  firebase.initializeApp(config.firebase);

export default firebase;