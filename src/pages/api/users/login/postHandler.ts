import { NextApiRequest, NextApiResponse } from "next";
import { auth, signInWithEmailAndPassword } from "../../../../api/firebase";

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
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return res.status(200).json(userCredential);
  } catch (err: any) {
    switch (err.code) {
      case "auth/invalid-email":
        return res.status(400).json({ message: "Bad Request" });
      default:
        return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}
