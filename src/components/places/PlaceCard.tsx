import React, { FunctionComponent } from "react";
import styled from "../../styles/styled";
import { Title3 } from "../../styles/Titles";
//import { centsToCurrency } from "../../helpers/money";
import { Button } from "../../styles/Buttons";
import Link from "next/link";

const Card = styled.div`
  box-shadow: ${(p) => p.theme.shadows.normal};
  border-radius: ${(p) => p.theme.border.normal};
  overflow: hidden;
  max-width: 260px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.01) translateY(-1px);
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

interface Props {}

const PlaceCard: FunctionComponent<Props> = () => {
  return (
    <Link href="places/cool-place">
      <a title="Place cool">
        <Card>
          <div className="top">
            <img
              src="https://source.unsplash.com/oji_NGmBI5o/400x300"
              alt="Prai"
            />
          </div>
          <div className="body">
            <p className="location">
              <img src="/imgs/icons8-map-24.png" alt="Ícone mapa" />
              Camboriú - SC
            </p>
            <h3>Casa na Praia em Camboriú</h3>
            <p className="value">R$ 150,00 / dia</p>
            <Button>reservar</Button>
          </div>
        </Card>
      </a>
    </Link>
  );
};

export default PlaceCard;
