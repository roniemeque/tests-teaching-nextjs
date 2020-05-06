import Head from "next/head";
import styled from "../../styles/styled";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-unfetch";
import { FunctionComponent } from "react";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { bookingId } = params;

  const res = await fetch(
    `http://${req.headers.host}/api/bookings/${bookingId}`
  );
  const { booking } = await res.json();

  return {
    props: { booking },
  };
};

interface Props {
  booking: Booking;
}

const BookingPage: FunctionComponent<Props> = ({ booking }) => {
  if (!booking) {
    return <h1>Reserva não encontrada</h1>;
  }

  return (
    <PageStyled>
      <Head>
        <title>Booking {booking.id}</title>
      </Head>
      <section>
        <p>booking</p>
      </section>
    </PageStyled>
  );
};

const PageStyled = styled.div``;

export default BookingPage;
