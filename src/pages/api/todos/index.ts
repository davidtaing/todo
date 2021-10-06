import { NextApiRequest, NextApiResponse } from "next";
import { ref, get } from "firebase/database";
import db from "../../../api/firebase/database";

import errorHandler from "../../../api/middlewares/errorHandler";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getHandler(req, res);
    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  // interact with the repository
  const { uid } = req.body;
  const resourcePath = `/users/${uid}/`;
  console.log(resourcePath);

  const dbRef = ref(db, resourcePath);
  const data = (await get(dbRef)).val();

  console.log(data);
  // get the data
  return res.status(200).json({
    data: data,
  });
}
