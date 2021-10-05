import { NextApiRequest, NextApiResponse } from "next";
import { FirebaseError } from "@firebase/util";

// Local Firebase Auth Object
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../../api/firebase/auth";

import { httpErrorCodes } from "../../../../api/errors";
import errorHandler from "../../../../api/middlewares/error";
import ApiErrorFactory from "../../../../api/utils/ApiErrorFactory";
import authErrorConverter from "../../../../api/firebase/auth/errors";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  try {
    if (method === "POST") {
      return postHandler(req, res);
    } else {
      throw ApiErrorFactory(httpErrorCodes.METHOD_NOT_ALLOWED);
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

    return res.status(303).json({ stsTokenManager });
  } catch (err: any) {
    if (err instanceof FirebaseError)
      return errorHandler(req, res, authErrorConverter(err));

    return errorHandler(req, res, err);
  }
}


/**
 * @param email 
 * @param password 
 * @remarks Fails with an error if the input is invalid.
 */
function validateInput(email: string, password: string) {
  if (!email || !password) {
    throw ApiErrorFactory(httpErrorCodes.BAD_REQUEST);
  }
}
