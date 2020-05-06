import { NextApiRequest, NextApiResponse } from "next";
import { createBooking } from "../../../helpers/fauna";

type Data = {
  bookingId: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const bookingId = await createBooking(req.body);

  // send mail

  res.status(200).json({ bookingId });
};
