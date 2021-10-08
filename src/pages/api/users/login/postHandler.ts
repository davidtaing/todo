import { NextApiRequest, NextApiResponse } from "next";

/**
 * POST api/users/login
 * @body email: string
 * @body password: string
 * @responses 200 OK - User Data { name: string, todos: []}
 * @responses 400 Bad Request
 * @responses 401 Unauthorized - "Invalid Email or Password"
 * @responses 500 Internal Server Error
 */
export default function postHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Called actual post handler");
  res.status(501).json({ message: "Not Implemented" });
}
