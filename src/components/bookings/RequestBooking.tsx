import React, { FunctionComponent, useState } from "react";
import styled from "../../styles/styled";
import { Button } from "../../styles/Buttons";
import { format, addDays, differenceInDays } from "date-fns";
import { centsToCurrency } from "../../helpers/currency";
import { useRouter } from "next/router";

interface Props {
  place: Place;
}

const RequestBooking: FunctionComponent<Props> = ({ place }) => {
  const router = useRouter();

  const [sending, setSending] = useState(false);
  const [booking, setBooking] = useState({
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const calculateTotal = () => {
    if (!booking.checkIn || !booking.checkOut) return 0;
    const difference = differenceInDays(
      new Date(booking.checkOut),
      new Date(booking.checkIn)
    );
    if (difference <= 0) return 0;
    return difference * place.dayFee;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const bookingRequest = {
      placeId: place.id,
      total: calculateTotal(),
      ...booking,
    };

    try {
      const res = await fetch("/api/bookings/book", {
        method: "POST",
        body: JSON.stringify({ ...bookingRequest }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { bookingId } = await res.json();
      if (bookingId) {
        return router.push("/bookings/[bookingId]", `/bookings/${bookingId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { name, value },
    } = e;
    setBooking({
      ...booking,
      [name]: value,
    });
  };

  const tomorrow = format(addDays(new Date(), 1), "yyyy-MM-dd");
  const total = calculateTotal();

  return (
    <FormStyled onSubmit={handleSubmit}>
      <h2>Socilite uma reserva</h2>
      <fieldset disabled={sending}>
        <div className="inputs">
          <InputWrapper>
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="ex: joao@gmail.com"
              name="email"
              value={booking.email}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="check-in">check-in</label>
            <input
              type="date"
              min={tomorrow}
              name="checkIn"
              value={booking.checkIn}
              onChange={handleChange}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="check-out">check-out</label>
            <input
              type="date"
              min={
                booking.checkIn
                  ? format(addDays(new Date(booking.checkIn), 1), "yyyy-MM-dd")
                  : tomorrow
              }
              name="checkOut"
              value={booking.checkOut}
              onChange={handleChange}
              required
            />
          </InputWrapper>
        </div>
        <p className="price">Total: {centsToCurrency(total)}</p>
        <ButtonSubmit>solicitar</ButtonSubmit>
      </fieldset>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  background: ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.border.big};
  padding: 2rem;
  color: ${({ theme }) => theme.colors.textOnMain};
  max-width: 28rem;
  margin: 0 auto;
  text-align: center;
  display: grid;
  gap: 1rem;
  .inputs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
    & > *:first-child {
      grid-column: 1 / -1;
    }
  }
  .price {
    margin-top: 1rem;
    text-align: left;
  }
`;

const InputWrapper = styled.div`
  display: grid;
  align-items: center;
  label {
    justify-self: flex-start;
  }
  input {
    padding: 0.5rem;
    border-radius: ${({ theme }) => theme.border.small};
  }
`;

const ButtonSubmit = styled(Button)`
  margin-top: 1rem;
`;

export default RequestBooking;
