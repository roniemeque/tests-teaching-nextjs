import styled from "./styled";

export const Button = styled.button`
  border: none;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.02) translateY(-1px);
  }
  &:focus {
    transform: scale(0.99) translateY(0);
  }
`;
