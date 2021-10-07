import { NextApiRequest, NextApiResponse } from "next";

/**
 * POST api/users/login
 * @param req
 * @param res 
 */
export default function postHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Called actual post handler");
  res.status(501).json({ message: "Not Implemented" });
}
