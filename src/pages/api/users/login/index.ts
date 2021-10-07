import { NextApiRequest, NextApiResponse } from "next";
import postHandler from "./postHandler";

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const { method } = req;

  if (method !== "POST")
    return res.status(405).json({ message: "Method Not Allowed" });
  
  return postHandler(req, res);
};

