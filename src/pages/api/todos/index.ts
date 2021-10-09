import { NextApiRequest, NextApiResponse } from "next";
import getHandler from "./getHandler";
import postHandler from "./postHandler";
import putHandler from "./putHandler";
import deleteHandler from "./deleteHandler";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { router } from "./router";

const methodHandlers = {
  getHandler,
  postHandler,
  putHandler,
  deleteHandler,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  router(req, res, methodHandlers);
}
