import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json({
      user: "ssss",
      todos: ["Have dinner at 6 pm", "Go to sleep at 3 am"],
    });
}
