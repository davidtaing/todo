import { NextApiRequest, NextApiResponse } from "next";
import ApiError from "../utils/errors/ApiError";

/**
 * @description Default error handler
 * @param req: NextApiRequest
 * @param res: NextApiResponse
 * @param error: Api Error
 */
export default function errorHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  error: ApiError
) {
  res.status(error.status).json({ message: error.message });
}