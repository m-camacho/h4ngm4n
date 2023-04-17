import styled from "styled-components";

export type VariantKey = "success" | "error";

interface KeyProps {
  variant?: VariantKey;
}

const Key = styled.button<KeyProps>`
  aspect-ratio: 1/1;
  width: 100%;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2rem;
  font-family: unset;
  font-family: monospace;
  text-transform: uppercase;
  font-weight: bold;
  background: ${({ variant }) => (variant === "success" ? "#16A085" : "none")};
  color: ${({ variant }) => (variant === "success" ? "white" : "black")};
  opacity: ${({ variant }) => (variant === "error" ? ".3" : "1")};
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: #f4d03f;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

export default Key;
