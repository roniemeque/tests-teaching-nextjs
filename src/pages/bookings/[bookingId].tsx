import Head from "next/head";
import styled from "../../styles/styled";
import { GetServerSideProps } from "next";
import fetch from "isomorphic-unfetch";
import { FunctionComponent } from "react";
import { Title1 } from "../../styles/Titles";
import PlaceCard from "../../components/places/PlaceCard";
import { format } from "date-fns";
import { centsToCurrency } from "../../helpers/currency";

const translateStatus = (status: Booking["status"]) => {
  switch (status) {
    case "approved":
      return "Aceita";
    case "denied":
      return "Recusada";
  }
  return "Pendente";
};

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

  const { place } = booking;

  return (
    <>
      <Head>
        <title>Reserva em {place.title}</title>
      </Head>
      <section>
        <BookingTitle>Reserva em {place.title}</BookingTitle>
        <p className="booking-code">código: {booking.id}</p>
        <Status status={booking.status}>
          {translateStatus(booking.status)}
        </Status>
      </section>
      <section>
        <ul>
          <li>Check-in: {format(new Date(booking.checkIn), "dd/MM/yyyy")}</li>
          <li>Check-out: {format(new Date(booking.checkIn), "dd/MM/yyyy")}</li>
          <li>Valor: {centsToCurrency(booking.total)}</li>
        </ul>
      </section>
      <section>
        <PlaceCard place={place} buttonText="ver"></PlaceCard>
      </section>
    </>
  );
};

const BookingTitle = styled(Title1)`
  font-size: 1.5rem;
`;

const Status = styled.span<{ status: Booking["status"] }>`
  --pending: #ffdc00;
  --approved: #2ecc40;
  --denied: #ff4136;
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  box-shadow: rgb(201, 201, 201) 0px 1px 2px;
  background: var(--${(p) => p.status});
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.85rem;
`;

export default BookingPage;
