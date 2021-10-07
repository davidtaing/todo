import { FirebaseError } from "@firebase/util";
import { httpErrorCode, usersErrorCode } from "../utils/errors/codes";
import ApiError from "../utils/errors/ApiError";
import ApiErrorFactory from "../utils/errors/ApiErrorFactory";

/**
 * @description Converts Firebase Auth Errors into ApiErrors
 * @param err FirebaseError
 * @returns ApiError
 */
const authErrorConverter = (err: FirebaseError): ApiError => {
  let apiError: ApiError;

  switch (err.code) {
    case "auth/user-not-found":
    case "auth/wrong-password":
      apiError = ApiErrorFactory(
        usersErrorCode.UNAUTHORIZED_INVALID_EMAIL_OR_PASSWORD
      );
      break;
    case "auth/invalid-email":
    case "auth/weak-password":
    case "auth/missing-email":
      apiError = ApiErrorFactory(httpErrorCode.BAD_REQUEST);
      break;
    default:
      apiError = ApiErrorFactory(httpErrorCode.INTERNAL_SERVER_ERROR);
      break;
  }

  return apiError;
};

export default authErrorConverter;
