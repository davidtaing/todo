import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../api/firebase/auth";

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
  const { fullname, email, password, confirmPassword } = req?.body;
  // Throws Error if invalid
  try {
    validateInput();
  } catch (err: any) {
    return errorHandler(req, res, err);
  }

  try {
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
    // Handle Firebase Auth Errors from createUserWIthEmailAndPassword()
    switch (err.code) {
      // Respond with '200 OK' to prevent exposing existing accounts to attackers
      case "auth/email-already-in-use":
        return res.status(200).json({
          message:
            "A link to activate your account has been emailed to the address provided.",
        });
      case "auth/invalid-email":
      case "auth/weak-password":
        throw ErrorFactory(httpErrorCodes.BAD_REQUEST);
      default:
        throw ErrorFactory(httpErrorCodes.INTERNAL_SERVER_ERROR);
    }
  }

  function validateInput() {
    if (!fullname || !email || !password || !confirmPassword) {
      throw ErrorFactory(httpErrorCodes.BAD_REQUEST);
    } else if (password !== confirmPassword) {
      throw ErrorFactory(usersErrorCodes.PASSWORDS_DO_NOT_MATCH);
    }
  }
}
