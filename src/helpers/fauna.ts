import faunadb, { query as q } from "faunadb";

const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY,
});

export const allPlaces = async (): Promise<Place[]> => {
  const { data } = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index("all_places"))),
      q.Lambda("X", q.Get(q.Var("X")))
    )
  );

  const places = data.map((item) => ({
    id: item.ref.value.id,
    ...item.data,
  }));

  return places;
};

export const getItemById = async (
  collectionName: string,
  id: string
): Promise<any> => {
  try {
    const { ref, data } = await client.query(
      q.Get(q.Ref(q.Collection(collectionName), id))
    );

    return {
      id: ref.value.id,
      ...data,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createBooking = async (booking: Booking): Promise<any> => {
  try {
    const { ref } = await client.query(
      q.Create(q.Collection("bookings"), {
        data: { ...booking, status: "pending" },
      })
    );

    return ref.value.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};
