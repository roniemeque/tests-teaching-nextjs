import { NextApiRequest, NextApiResponse } from "next";
import { createBooking } from "../../../helpers/fauna";

type Data = {
  bookingId: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  //const places = await allPlaces();
  const bookingId = await createBooking(req.body);

  res.status(200).json({ bookingId });
};
