import { NextApiRequest, NextApiResponse } from "next";
import { getItemById } from "../../../helpers/fauna";

type Data = {
  booking?: Booking;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { bookingId } = req.query;

  const booking: Booking = await getItemById("bookings", bookingId as string);
  if (!booking) return res.json({ booking: null });

  const place: Place = await getItemById("places", booking.placeId);

  res.json({ booking: { ...booking, place } });
};
