import { NextApiRequest, NextApiResponse } from "next";
import postHandler from "./postHandler";
import { router } from "../../../../api/router";

const methodHandlers = { postHandler };

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  return router(req, res, methodHandlers);
}
