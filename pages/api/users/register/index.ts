import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../src/api/firebase/auth";
import ApiError from "../../../../src/api/utils/ApiError";

const CreateApiError = {
  BAD_REQUEST: () => {
    return new ApiError(403, "Bad Request");
  },
  INTERNAL_SERVER_ERROR: () => {
    return new ApiError(403, "Internal Server Error");
  },
  PASSWORDS_DO_NOT_MATCH: () => {
    return new ApiError(403, "Password and Confirm Password do not match");
  },
  METHOD_NOT_ALLOWED: () => {
    return new ApiError(405, "Method Not Allowed");
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  try {
    if (method === "POST") {
      return postHandler(req, res);
    } else {
      throw CreateApiError.METHOD_NOT_ALLOWED();
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
    throw CreateApiError.BAD_REQUEST();
  } else if (password !== confirmPassword) {
    throw CreateApiError.PASSWORDS_DO_NOT_MATCH();
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
        throw CreateApiError.BAD_REQUEST();
      default:
        throw CreateApiError.INTERNAL_SERVER_ERROR();
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
