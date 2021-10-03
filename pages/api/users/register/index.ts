import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import {
  auth,
  createUserWithEmailAndPassword,
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
  const { fullname, email, password, confirmPassword } = req?.body;

  if (!fullname || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Bad Request" });
  } else if (password !== confirmPassword) {
    return res
      .status(403)
      .json({ message: "Password and Confirm Password do not match." });
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return res.status(200).json({status: 200, message: "A link to activate your account has been emailed to the address provided."});
  } catch (err: any) {
    switch (err.code) {
      case "auth/email-already-in-use":
        return res.status(200).json({status: 200, message: "A link to activate your account has been emailed to the address provided."});
      case "auth/invalid-email":
      case "auth/weak-password":
        return res.status(403).json({status: 403, message: "Not Implemented"});
      default:
        return res
          .status(500)
          .json({ status: 500, message: "Interal Server Error" });
    }
  }
}