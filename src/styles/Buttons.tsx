import styled from "./styled";

export const Button = styled.button`
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: ${({ theme }) => theme.border.small};
  padding: 0.3rem 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.main};
`;
