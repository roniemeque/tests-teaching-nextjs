import { Title1 } from "../styles/Titles";
import styled from "../styles/styled";
import Link from "next/link";

export default function Custom404() {
  return (
    <NotFound>
      <Title1>Página não encontrada!</Title1>
      <Link href="/">
        <a title="Voltar para home">Voltar para home</a>
      </Link>
    </NotFound>
  );
}

const NotFound = styled.div`
  a {
    color: #0074d9;
  }
`;
