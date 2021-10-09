import { NextApiRequest, NextApiResponse } from "next";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

function postHandler(req: NextApiRequest, res: NextApiResponse): void {
  return res
  .status(StatusCodes.NOT_IMPLEMENTED)
  .json({ message: ReasonPhrases.NOT_IMPLEMENTED });
}

export default postHandler;