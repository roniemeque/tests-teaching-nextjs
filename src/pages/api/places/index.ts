import { NextApiRequest, NextApiResponse } from "next";
import { allPlaces } from "../../../helpers/fauna";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const places = await allPlaces();

  res.statusCode = 200;
  res.json(places);
};
