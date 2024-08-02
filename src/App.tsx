import { useState } from "react";
import styled from "styled-components";
import { TryAgainIcon } from "./assets/TryAgainIcon";
import Drawing from "./Drawing";
import Keyboard from "./Keyboard";
import Word from "./Word";
import { getRandomWord } from "./words";

export default function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [playedLetters, setPlayedLetters] = useState<string[]>([]);

  const incorrectLetters = playedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => playedLetters.includes(letter));

  const addPlayedLetter = (letter: string) => {
    if (!playedLetters.includes(letter)) {
      setPlayedLetters((currentLetters) => [...currentLetters, letter]);
    }
  };

  const restartGame = () => {
    setWordToGuess(getRandomWord());
    setPlayedLetters([]);
  };

  return (
    <Container>
      <Title>Colgado (Hangman)</Title>

      {!(isWinner || isLoser) ? (
        <Drawing numberOfGuesses={incorrectLetters.length} />
      ) : (
        <EndGame isWinner={isWinner}>
          {isWinner && "Ganaste!!!"}
          {isLoser && "Buen intento"}
        </EndGame>
      )}

      <Word
        reveal={isLoser}
        wordToGuess={wordToGuess}
        playedLetters={playedLetters}
      />

      {(isWinner || isLoser) && (
        <TryAgainButton onClick={restartGame}>{TryAgainIcon}</TryAgainButton>
      )}

      <Keyboard
        disabled={isWinner || isLoser}
        correctLetters={playedLetters.filter((letter) =>
          wordToGuess.includes(letter)
        )}
        incorrectLetters={incorrectLetters}
        onClick={addPlayedLetter}
      />

      <Footer>Es solo un juego. Disfrutenlo y jueguen con paciencia.</Footer>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100vh;
  max-width: 800px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  position: relative;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  padding: 15px;
`;

const EndGame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props: { isWinner: boolean }) =>
    props.isWinner ? "green" : "black"};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const TryAgainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2.5rem;
  background: none;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #16a085;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Footer = styled.footer`
  margin: 0 auto;
  padding: 0.5rem;
  display: block;
  width: max-content;
  font-weight: 700;
  color: black;

  a {
    color: #0044ff;
    font-style: italic;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
