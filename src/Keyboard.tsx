import styled from "styled-components";
import Key, { VariantKey } from "./Key";
import { KEYS } from "./constants";

interface KeyboardProps {
  correctLetters: string[];
  incorrectLetters: string[];
  onClick: (letter: string) => void;
  disabled?: boolean;
}

export default function Keyboard({
  correctLetters,
  incorrectLetters,
  onClick,
  disabled = false,
}: KeyboardProps) {
  return (
    <Container>
      <Grid>
        {KEYS.map((key) => {
          const isSuccess = correctLetters.includes(key);
          const isError = incorrectLetters.includes(key);
          let variant: VariantKey | undefined = isSuccess
            ? "success"
            : isError
            ? "error"
            : undefined;

          return (
            <Key
              key={key}
              variant={variant}
              disabled={isSuccess || isError || disabled}
              onClick={() => onClick(key)}
            >
              {key}
            </Key>
          );
        })}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  align-self: stretch;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.5rem;
  width: 100%;
`;
