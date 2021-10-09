import { NextApiRequest, NextApiResponse } from "next";
import postHandler from "./postHandler";
import { router } from "../../../router";

const methodHandlers = { postHandler };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  return router(req, res, methodHandlers);
}
