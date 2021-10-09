import { NextApiRequest, NextApiResponse } from "next";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

function getHandler(req: NextApiRequest, res: NextApiResponse): void {
  return res
  .status(StatusCodes.OK)
  .json({ todos: [] });
}

export default getHandler;