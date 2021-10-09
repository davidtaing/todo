import { NextApiRequest, NextApiResponse } from "next";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

/**
 * Acts as the root handler at an API endpoint
 * @param req 
 * @param res 
 * @param methodHandlers 
 * @remarks 
 * Do not unit test. Test coverage is provided by the API endpoints.
 */
export function router(
  req: NextApiRequest,
  res: NextApiResponse,
  methodHandlers: {
    getHandler?: (req: NextApiRequest, res: NextApiResponse) => void;
    postHandler?: (req: NextApiRequest, res: NextApiResponse) => void;
    putHandler?: (req: NextApiRequest, res: NextApiResponse) => void;
    deleteHandler?: (req: NextApiRequest, res: NextApiResponse) => void;
    patchHandler?: (req: NextApiRequest, res: NextApiResponse) => void;
  }
): void {
  const getHandler = methodHandlers?.getHandler;
  const postHandler = methodHandlers?.postHandler;
  const putHandler = methodHandlers?.putHandler;
  const deleteHandler = methodHandlers?.deleteHandler;
  const patchHandler = methodHandlers?.patchHandler;

  switch (req.method) {
    case "GET":
      if (getHandler) return getHandler(req, res);
    case "POST":
      if (postHandler) return postHandler(req, res);
    case "PUT":
      if (putHandler) return putHandler(req, res);
    case "DELETE":
      if (deleteHandler) return deleteHandler(req, res);
    case "PATCH":
      if (patchHandler) return patchHandler(req, res);
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .json({ message: ReasonPhrases.METHOD_NOT_ALLOWED });
  }
}
