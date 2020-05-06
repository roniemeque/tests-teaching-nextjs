interface Place {
  id: string;
  title: string;
  desc?: string;
  location?: string;
  image: string;
  dayFee: number;
}

interface Booking {
  id?: string;
  placeId: string;
  total: number;
  email: string;
  checkIn: string;
  checkOut: string;
}
