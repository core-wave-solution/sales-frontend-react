import { NextApiResponse } from "next";

export default function handler(res: NextApiResponse) {
  res.redirect("/process");
}
