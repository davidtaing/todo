import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../api/firebase/auth";


import ApiError from "../../../../api/utils/ApiError";
import { createApiError, createUsersApiError } from "../../../../api/errors";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  try {
    if (method === "POST") {
      return postHandler(req, res);
    } else {
      throw createApiError.METHOD_NOT_ALLOWED();
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

  // TODO Refactor
  // Validate Input
  if (!fullname || !email || !password || !confirmPassword) {
    throw createApiError.BAD_REQUEST();
  } else if (password !== confirmPassword) {
    throw createUsersApiError.PASSWORDS_DO_NOT_MATCH();
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
        throw createApiError.BAD_REQUEST();
      default:
        throw createApiError.INTERNAL_SERVER_ERROR();
    }
  }
}

function errorHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  error: ApiError
) {
  res.status(error.httpStatus).json({ message: error.message });
}