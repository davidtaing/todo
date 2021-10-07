import { NextApiRequest, NextApiResponse } from "next";
import TodoRepository from "../../../api/repositories/todo.repository";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method;

  switch (method) {
    default:
      return res.status(500).json({ message: "Not implemented" });
  }
  return getHandler(req, res);
  res.status(500).json({ message: "Not implemented" });
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  const { uid } = req.body

  const todoRepo = new TodoRepository();
  const result = await todoRepo.getAll(uid);

  res.status(500).json( result );
}