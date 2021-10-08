import { NextApiRequest, NextApiResponse } from "next";
import { auth, createUserWithEmailAndPassword } from "../../../../api/firebase";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

/**
 * POST api/users/register
 * @body fullName: string
 * @body email: string
 * @body password: string
 * @body confirmPassword: string
 * @responses 303 See Other -
 * "A link to activate your account has been emailed to the address provided."
 * @responses 400 Bad Request -
 * "Email is invalid."
 * @responses 400 Bad Request -
 * "Password is too weak."
 * @responses 400 Bad Request -
 * "Password and Confirm Password do not match."
 * @responses 500 Internal Server Error
 */
export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { fullName, email, password, confirmPassword } = req.body;
  try {
    if (password !== confirmPassword) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Password and Confirm Password do not match." });
    }

    await createUserWithEmailAndPassword(auth, email, password);

    return successResponse(res);
  } catch (err: any) {
    switch (err.code) {
      case "auth/email-already-in-use":
        return successResponse(res);
      case "auth/invalid-email":
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Email is Invalid." });
      case "auth/weak-password":
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Password is too weak." });
      default:
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  }
}

const successResponse = (res: NextApiResponse) => {
  res.setHeader("location", "http://localhost:3000/login");
  return res.status(StatusCodes.SEE_OTHER).json({
    message:
      "A link to activate your account has been emailed to the address provided.",
  });
};
