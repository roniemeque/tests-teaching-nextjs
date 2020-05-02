import { NextApiRequest, NextApiResponse } from "next";
import { getPlace } from "../../../helpers/fauna";

type Data = {
  place: Place;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { placeId } = req.query;

  const place = await getPlace(placeId as string);

  res.statusCode = 200;
  res.json({ place });
};
