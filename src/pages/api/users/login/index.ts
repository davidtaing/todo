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

  if (!email || !password) {
    return res.status(400).json({ message: "Bad Request" });
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return res.status(303).json({ userCredential });
  } catch (err: any) {
    switch (err.code) {
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-email":
        return res
          .status(401)
          .json({
            status: 401,
            message: "Unauthorized: Invalid Email or Password.",
          });
      case "auth/missing-email":
        return res.status(400).json({ status: 400, message: "Bad Request" });
      default:
        return res
          .status(500)
          .json({ status: 500, message: "Interal Server Error" });
    }
  }
}
