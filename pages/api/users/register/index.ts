import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  createUserWithEmailAndPassword,
} from "../../../../src/api/firebase/auth";
import ApiError from "../../../../src/api/utils/ApiError";

const RESPONSES = new Map([
  ["SUCCESS", { status: 200, message: "A link to activate your account has been emailed to the address provided"}],
  ["ERROR/BAD_REQUEST", { status: 400, message: "Bad Request"}],
  ["ERROR/INTERNAL_SERVER_ERROR", { status: 500, message: "Internal Server Error"}],
  ["ERROR/PASSWORDS_DO_NOT_MATCH", { status: 403, message: "Password and Confirm Password do not match"}],
])

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  try {
    if (method === "POST") {
      return postHandler(req, res);
    } else {
      throw new ApiError("Method Not Allowed", 405);
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
    throw new ApiError("Bad Request", 400);
  } else if (password !== confirmPassword) {
    throw new ApiError("Password and Confirm Password do not match.", 403);
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
        throw new ApiError("Bad Request", 400);
      default:
        throw new ApiError();
    }
  }
}

function errorHandler(req: NextApiRequest, res: NextApiResponse, error: ApiError) {
  res.status(error.httpStatus).json({message: error.message});
}

