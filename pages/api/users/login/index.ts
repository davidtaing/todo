import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../../src/api/firebase/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  if (method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
  } else {
    return postHandler(req, res);
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
