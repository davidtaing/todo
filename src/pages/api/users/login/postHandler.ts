import { NextApiRequest, NextApiResponse } from "next";

export function postHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Called actual post handler");
  res.status(501).json({ message: "Not Implemented" });
}
