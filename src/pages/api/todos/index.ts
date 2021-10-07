import { NextApiRequest, NextApiResponse } from "next";
import TodoRepository from "../../../api/repositories/todo.repository";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      return getHandler(req, res);
    default:
      return res.status(500).json({ message: "Not implemented" });
  }
}

export async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.body

  const todoRepo = new TodoRepository();
  const result = await todoRepo.getAll(uid);

  res.status(500).json( result );
}