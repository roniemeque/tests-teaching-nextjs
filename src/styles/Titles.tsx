import styled from "./styled";

export const Title1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bolder;
  font-size: 2.2rem;
`;

export const Title2 = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-weight: normal;
`;

export const Title3 = styled.h3`
  color: ${({ theme }) => theme.colors.text};
`;
