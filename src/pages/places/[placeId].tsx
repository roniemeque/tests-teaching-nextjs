import Head from "next/head";
import styled from "../../styles/styled";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-unfetch";
import { FunctionComponent } from "react";
import { Title1 } from "../../styles/Titles";
import RequestBooking from "../../components/bookings/RequestBooking";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { placeId } = params;

  const res = await fetch(`http://${req.headers.host}/api/places/${placeId}`);
  const { place } = await res.json();

  return {
    props: { place },
  };
};

interface Props {
  place: Place;
}

const PlacePage: FunctionComponent<Props> = ({ place }) => {
  if (!place) {
    return (
      <div>
        <h1>Acomodação não encontrada</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{place.title}</title>
      </Head>
      <PlaceHeader>
        <div className="place-image">
          <img src={`${place.image}/800x540`} alt={place.title} />
        </div>
        <p className="location">
          <img src="/imgs/icons8-map-96.png" alt="Ícone mapa" />
          {place.location}
        </p>
        <Title1>{place.title}</Title1>
      </PlaceHeader>
      <section>
        <p>{place.desc}</p>
      </section>
      <section>
        <RequestBooking place={place}></RequestBooking>
      </section>
    </>
  );
};

const PlaceHeader = styled.header`
  display: grid;
  gap: 1.5rem;
  .place-image {
    position: relative;
    img {
      border-radius: ${({ theme }) => theme.border.big};
      border-radius: 10px;
      width: 100%;
      max-height: 36rem;
      object-fit: cover;
    }
  }
  .location {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.main};
    font-size: 2rem;
    img {
      margin-right: 1rem;
    }
  }
`;

export default PlacePage;
