import { NextApiRequest, NextApiResponse } from "next";
import getHandler from "./getHandler";
import postHandler from "./postHandler";
import putHandler from "./putHandler";
import deleteHandler from "./deleteHandler";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  const { method } = req;

  switch (method) {
    case "GET":
      return getHandler(req, res);
    case "POST":
      return postHandler(req, res);
    case "PUT":
      return putHandler(req, res);
    case "DELETE":
      return deleteHandler(req, res);
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .json({ message: ReasonPhrases.METHOD_NOT_ALLOWED });
  }
}
