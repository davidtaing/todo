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
    validateInput(email, password);

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return res.status(303).json({ userCredential });
  } catch (err: any) {
    // Handle validateInput Errors
    if (err instanceof ApiError)
      return errorHandler(req, res, err);

    switch (err.code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-email":
        throw ErrorFactory(usersErrorCodes.UNAUTHORIZED_INVALID_EMAIL_OR_PASSWORD);
      case "auth/missing-email":
        throw ErrorFactory(httpErrorCodes.BAD_REQUEST);
      default:
        throw ErrorFactory(httpErrorCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

function validateInput(email: string, password: string) {
  if (!email || !password) {
    throw ErrorFactory(httpErrorCodes.BAD_REQUEST);
  }
}
