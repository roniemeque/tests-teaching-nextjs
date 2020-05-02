import React, { useState } from "react";
import styled from "../../styles/styled";
import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const [bookingCode, setBookingCode] = useState("");
  const router = useRouter();

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && bookingCode) {
      router.push(`/bookings/${bookingCode}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookingCode(e.currentTarget.value);
  };

  return (
    <NavStyled>
      <Link href="/">
        <a title="Home" className="logo">
          Cool Places
        </a>
      </Link>
      <SearchInput>
        <img src="/imgs/icons8-search-24.png" alt="Ícone busca" />
        <input
          type="text"
          placeholder="Encontrar reserva"
          value={bookingCode}
          onKeyPress={handleEnter}
          onChange={handleChange}
        />
      </SearchInput>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  .logo {
    color: ${({ theme }) => theme.colors.black};
    font-family: Romanesco;
    font-size: 2.2rem;
    line-height: 1;
  }
`;

const SearchInput = styled.div`
  padding: 0.3rem 0.5rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  transition: all 0.2s;
  background: whitesmoke;
  border: none;
  input {
    background: none;
    font-size: 0.95rem;
    margin-left: 0.5rem;
  }
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.main};
  }
`;

export default Nav;
