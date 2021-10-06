import { NextApiRequest, NextApiResponse } from "next";
import { FirebaseError } from "@firebase/util";

// Local Firebase Auth Object
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../api/firebase/auth";

import { httpErrorCodes, usersErrorCodes } from "../../../../api/utils/errors/codes";
import ApiErrorFactory from "../../../../api/utils/errors/ApiErrorFactory";
import errorHandler from "../../../../api/middlewares/errorHandler";
import authErrorConverter from "../../../../api/firebase/authErrors";


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
  const { fullname, email, password, confirmPassword } = req?.body;
  try {
    validateInput(fullname, email, password, confirmPassword);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return res.status(200).json({
      message:
        "A link to activate your account has been emailed to the address provided.",
    });
  } catch (err: any) {
    let errorResponse = err;
    if (err instanceof FirebaseError) {
      // Respond with '200 OK' to prevent exposing existing accounts to attackers
      if (err.code === "auth/email-already-in-use") {
        return res.status(200).json({
          message:
            "A link to activate your account has been emailed to the address provided.",
        });
      } else {
        errorResponse = authErrorConverter(err);
      }
    }
    return errorHandler(req, res, errorResponse);
  }
}

/**
 * @param fullname: string
 * @param email: string 
 * @param password: string 
 * @param confirmPassword: string 
 * @remarks Fails with an error if the input is invalid.
 */
function validateInput(
  fullname: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  if (!fullname || !email || !password || !confirmPassword) {
    throw ApiErrorFactory(httpErrorCodes.BAD_REQUEST);
  } else if (password !== confirmPassword) {
    throw ApiErrorFactory(usersErrorCodes.PASSWORDS_DO_NOT_MATCH);
  }
}
