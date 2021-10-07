import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  res.status(405).json({ message: "Method Not Allowed" });
};

export function postHandler(req: NextApiRequest, res: NextApiResponse) {
  res.status(501).json({ message: "Not Implemented" });
}