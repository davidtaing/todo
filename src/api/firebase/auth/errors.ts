import { FirebaseError } from "@firebase/util";
import { httpErrorCodes, usersErrorCodes } from "../../errors";
import ApiError from "../../utils/ApiError";
import ErrorFactory from "../../utils/ErrorFactory";

const authErrorConverter = (err: FirebaseError): ApiError => {
  let apiError: ApiError;

  switch (err.code) {
    case "auth/user-not-found":
    case "auth/wrong-password":
    case "auth/invalid-email":
      apiError = ErrorFactory(
        usersErrorCodes.UNAUTHORIZED_INVALID_EMAIL_OR_PASSWORD
      );
      break;
    case "auth/missing-email":
      apiError = ErrorFactory(httpErrorCodes.BAD_REQUEST);
      break;
    default:
      apiError = ErrorFactory(httpErrorCodes.INTERNAL_SERVER_ERROR);
      break;
  }

  return apiError;
};

export default authErrorConverter;