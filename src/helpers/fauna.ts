import faunadb, { query as q } from "faunadb";

const client = new faunadb.Client({
  secret: process.env.FAUNA_KEY,
});

export const allPlaces = async () => {
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

export const getPlace = async (id: string) => {
  const { ref, data } = await client.query(
    q.Get(q.Ref(q.Collection("places"), id))
  );

  return {
    id: ref.value.id,
    ...data,
  };
};
