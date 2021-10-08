import { NextApiRequest, NextApiResponse } from "next";
import { auth, createUserWithEmailAndPassword } from "../../../../api/firebase";

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
    const userCredential: any = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { _tokenResponse } = userCredential;
    return res.status(303).json(_tokenResponse);
  } catch (err: any) {
    switch (err.code) {
      case "auth/invalid-email":
        return res.status(400).json({ message: "Email is Invalid." });
      case "auth/weak-password":
          return res.status(400).json({ message: "Password is too weak." });
      default:
        return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
