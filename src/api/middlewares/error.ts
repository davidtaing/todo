import { NextApiRequest, NextApiResponse } from "next";
import ApiError from "../utils/ApiError";

export default function errorHandler(
  req: NextApiRequest,
  res: NextApiResponse,
  error: ApiError
) {
  res.status(error.status).json({ message: error.message });
}