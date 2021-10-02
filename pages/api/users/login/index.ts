import { NextApiRequest, NextApiResponse } from "next";

// Local Firebase Auth Object
import { auth, signInWithEmailAndPassword } from "../../../../src/api/firebase/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req?.method;

  if (method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
  } else {
    postHandler(req, res);
  }
}

export function postHandler(req: NextApiRequest, res: NextApiResponse): void {
  const { email, password } = req?.body;

  if (!email || !password) {
    res.status(400).json({ message: "Bad Request" });
  } else {
    try {
      const userCredential = signInWithEmailAndPassword(auth, email, password);
      res.status(303).json({ userCredential });
    } catch (err) {
      res.status(501).json({ message: "Not Yet Implemented" });
    }
  }
}
