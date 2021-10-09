import { NextApiRequest, NextApiResponse } from "next";
import getHandler from "./getHandler";
import postHandler from "./postHandler";
import putHandler from "./putHandler";
import deleteHandler from "./deleteHandler";
import { router } from "../../../backend/router";

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
