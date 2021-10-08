import { NextApiRequest, NextApiResponse } from "next";
import postHandler from "./postHandler";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const { method } = req;

  if (method !== "POST")
    return res.status(StatusCodes.METHOD_NOT_ALLOWED).json({ message: ReasonPhrases.METHOD_NOT_ALLOWED });
  
  return postHandler(req, res);
};

