import Head from "next/head";
import styled from "../styles/styled";
import PlaceList from "../components/places/PlaceList";
import { GetStaticProps } from "next";
import fetch from "isomorphic-unfetch";
import { FunctionComponent } from "react";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://coolplaces.ronie.dev/api";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/places`);
  const { places } = await res.json();

  return {
    props: { places },
  };
};

interface Props {
  places: Place[];
}

const HomePage: FunctionComponent<Props> = ({ places }) => {
  return (
    <>
      <Head>
        <title>Cool Places</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <LogoHero>
          <strong>Cool Places</strong> Encontre novas experiências
        </LogoHero>
      </header>
      <section className="full">
        <PlaceList places={places}></PlaceList>
      </section>
    </>
  );
};

const LogoHero = styled.h1`
  color: ${({ theme }) => theme.colors.main};
  font-size: 1.3rem;
  font-weight: normal;
  text-align: center;
  strong {
    font-family: Romanesco;
    font-size: 7rem;
    font-weight: normal;
    display: block;
    line-height: 1;
  }
`;

export default HomePage;
