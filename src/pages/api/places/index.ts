import { NextApiRequest, NextApiResponse } from "next";
import { allPlaces } from "../../../helpers/fauna";

type Data = {
  places: Place[];
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const places = await allPlaces();

  res.status(200).json({ places });
};
