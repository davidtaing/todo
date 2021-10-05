import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../../api/firebase/auth";

import ApiError from "../../../../api/utils/ApiError";
import { httpErrorCodes, usersErrorCodes } from "../../../../api/errors";
import ErrorFactory from "../../../../api/utils/ErrorFactory";
import errorHandler from "../../../../api/middlewares/error";
import { FirebaseError } from "@firebase/util";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  try {
    if (method === "POST") {
      return postHandler(req, res);
    } else {
      throw ErrorFactory(httpErrorCodes.METHOD_NOT_ALLOWED);
    }
  } catch (err: any) {
    errorHandler(req, res, err);
  }
}

export async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password } = req?.body;

  try {
    // Throws error if invalid
    validateInput(email, password);

    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const { stsTokenManager } = user as any;
    // TODO Return something more appropiate
    return res.status(303).json({ stsTokenManager });
  } catch (err: any) {
    let responseError = err;
    // Handle validateInput Errors
    if (err instanceof FirebaseError) {
      switch (err.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-email":
          responseError = ErrorFactory(
            usersErrorCodes.UNAUTHORIZED_INVALID_EMAIL_OR_PASSWORD
          );
          break;
        case "auth/missing-email":
          responseError = ErrorFactory(httpErrorCodes.BAD_REQUEST);
          break;
        default:
          responseError = ErrorFactory(httpErrorCodes.INTERNAL_SERVER_ERROR);
          break;
      }
    }
    return errorHandler(req, res, responseError);
  }
}

function validateInput(email: string, password: string) {
  if (!email || !password) {
    throw ErrorFactory(httpErrorCodes.BAD_REQUEST);
  }
}
