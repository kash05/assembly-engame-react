import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesContainer from "./components/LanguagesContainer";
import UserWordsInput from "./components/UserWordsInput";
import { languages } from "./resources/languages";
import { getRandomWord } from "./resources/utils";
import Confetti from "react-confetti";

export default function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessesCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessesCount >= languages.length - 1;
  const isGameOver = isGameLost || isGameWon;

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const language =
    wrongGuessesCount > 0 ? languages[wrongGuessesCount - 1].name : "";

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }
  return (
    <main>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <Header />
      <GameStatus
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        language={language}
      />
      <LanguagesContainer wrongGuessesCount={wrongGuessesCount} />
      <UserWordsInput
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />
      {isGameOver && (
        <button className="new-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
}
