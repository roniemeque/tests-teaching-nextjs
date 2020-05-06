import { NextApiRequest, NextApiResponse } from "next";
import { getItemById } from "../../../helpers/fauna";

type Data = {
  booking?: Booking;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { bookingId } = req.query;

  const booking: Booking = await getItemById("bookings", bookingId as string);

  res.statusCode = 200;
  res.json({ booking });
};
