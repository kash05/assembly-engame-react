import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesContainer from "./components/LanguagesContainer";
import UserWordsInput from "./components/UserWordsInput";
import { languages } from "./resources/languages";

export default function App() {
  const [currentWord, setCurrentWord] = useState("react");
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
  return (
    <main>
      <Header />
      <GameStatus
        isGameLost={isGameLost}
        isGameWon={isGameWon}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        language={language}
      />
      <LanguagesContainer
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        wrongGuessesCount={wrongGuessesCount}
      />
      <UserWordsInput
        currentWord={currentWord}
        guessedLetters={guessedLetters}
      />
      <Keyboard
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
      />
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  );
}
