import { NextApiRequest, NextApiResponse } from "next";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import TodoRepository from "../../todos.repository";
import { JSONDatasource } from "../../datasources";

const todoReposistory = new TodoRepository(new JSONDatasource());

async function getHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const todos = await todoReposistory.getTodosByUser("gUNInSb3Rm99xSmYfmk3jL7TSBS0");
  
  return res
  .status(StatusCodes.OK)
    .json({ todos: todos });
}

export default getHandler;