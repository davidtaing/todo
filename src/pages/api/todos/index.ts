import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getHandler(req, res);
    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(501).json({ message: "Not implemented" });
}