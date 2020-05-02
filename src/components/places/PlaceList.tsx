import React, { FunctionComponent } from "react";
import { Title2 } from "../../styles/Titles";
import styled from "../../styles/styled";
import PlaceCard from "./PlaceCard";

interface Props {
  places: Place[];
}

const PlaceList: FunctionComponent<Props> = ({ places = [] }) => {
  return (
    <PlaceListStyled>
      <div className="gap-in-full">
        <Title2>Disponíveis</Title2>
      </div>
      <ul>
        {places.map((place) => (
          <li key={place.id}>
            <PlaceCard place={place}></PlaceCard>
          </li>
        ))}
      </ul>
    </PlaceListStyled>
  );
};

const PlaceListStyled = styled.div`
  ul {
    display: grid;
    grid-template-columns: ${(p) => p.theme.gutter};
    grid-auto-flow: column;
    grid-auto-columns: calc(300px - ${(p) => p.theme.gutter} * 2);
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    gap: ${(p) => p.theme.gutter};
    max-width: 100vw;
    &::before,
    &::after {
      content: "";
      width: ${(p) => p.theme.gutter};
    }
    padding: 0.4rem 0 1rem;
    @media (min-width: 900px) {
      grid-template-columns: repeat(
        auto-fit,
        calc(300px - ${(p) => p.theme.gutter} * 2)
      );
      grid-auto-flow: initial;
      padding: 1rem;
      justify-content: space-between;
      gap: 2rem;
      max-width: initial;
      &::before,
      &::after {
        display: none;
      }
    }
  }
`;

export default PlaceList;
