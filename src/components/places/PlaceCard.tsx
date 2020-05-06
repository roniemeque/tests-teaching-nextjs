import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";
import { Button } from "../../styles/Buttons";
import Link from "next/link";
import { centsToCurrency } from "../../helpers/currency";

interface Props {
  place: Place;
  buttonText?: string;
}

const PlaceCard: FunctionComponent<Props> = ({
  place,
  buttonText = "reservar",
}) => {
  return (
    <Link href="/places/[placeId]" as={`/places/${place.id}`}>
      <Card title={place.title}>
        <div className="top">
          <img src={`${place.image}/400x300`} alt={place.title} />
        </div>
        <div className="body">
          <p className="location">
            <img src="/imgs/icons8-map-24.png" alt="Ícone mapa" />
            {place.location}
          </p>
          <h3>{place.title}</h3>
          <p className="value">{centsToCurrency(place.dayFee)} / dia</p>
          <Button>{buttonText}</Button>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled.a`
  display: block;
  box-shadow: ${(p) => p.theme.shadows.normal};
  border-radius: ${(p) => p.theme.border.normal};
  overflow: hidden;
  max-width: 260px;
  transition: all 0.2s;
  margin: 0;
  backface-visibility: hidden;
  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.bigger};
  }
  .top {
    position: relative;
    height: 12rem;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: cover;
    }
  }
  .body {
    padding: 1rem;
    background: ${({ theme }) => theme.colors.main};
    color: ${({ theme }) => theme.colors.textOnMain};
    display: grid;
    gap: 0.5rem;
    .location {
      display: flex;
      align-items: center;
      img {
        margin-right: 0.5rem;
      }
    }
    h3 {
      font-size: 1.8rem;
      font-weight: bold;
      line-height: 1.2;
    }
    .desc {
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.9rem;
    }
    .value {
      font-size: 1rem;
      text-align: center;
    }
    button {
      justify-self: center;
    }
  }
`;

export default PlaceCard;
