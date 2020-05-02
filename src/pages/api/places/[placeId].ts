import { NextApiRequest, NextApiResponse } from "next";
import { getPlace } from "../../../helpers/fauna";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { placeId } = req.query;

  const place = await getPlace(placeId as string);

  res.statusCode = 200;
  res.json(place);
};
