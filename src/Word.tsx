import styled from "styled-components";

interface WordProps {
  playedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}

export default function Word({
  playedLetters,
  wordToGuess,
  reveal = false,
}: WordProps) {
  return (
    <Container>
      {wordToGuess.split("").map((letter, id) => (
        <span key={id} className="border-b-2">
          <Letter playedLetters={playedLetters} letter={letter} reveal={reveal}>
            {letter}
          </Letter>
        </span>
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  max-width: 100vw;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
  overflow-x: auto !important;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Border = styled.span`
  border-bottom: 0.5rem solid black;
`;

interface LetterProps {
  playedLetters: string[];
  letter: string;
  reveal?: boolean;
}

const Letter = styled.span<LetterProps>`
  visibility: ${({ playedLetters, letter, reveal }) =>
    playedLetters.includes(letter) || reveal ? "visible" : "hidden"};
  color: ${({ playedLetters, letter, reveal }) =>
    !playedLetters.includes(letter) && reveal ? "#d30000" : "black"};
`;
