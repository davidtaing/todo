import { NextApiRequest, NextApiResponse } from "next";
import { auth, signInWithEmailAndPassword } from "../../../../backend/firebase";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

/**
 * POST api/users/login
 * @body email: string
 * @body password: string
 * @responses 200 OK - User Data { name: string, todos: []}
 * @responses 400 Bad Request
 * @responses 401 Unauthorized - "Invalid Email or Password"
 * @responses 500 Internal Server Error
 */
export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password } = req.body;
  try {
    const userCredential: any = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { _tokenResponse } = userCredential;

    res.setHeader("cache-control", "no-store");
    res.setHeader("pragma", "no-store");
    return res.status(StatusCodes.OK).json(_tokenResponse);
  } catch (err: any) {
    switch (err.code) {
      case "auth/invalid-email":
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: ReasonPhrases.BAD_REQUEST });
      case "auth/user-disabled":
      case "auth/user-not-found":
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Invalid Email or Password" });
      default:
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  }
}
