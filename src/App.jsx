import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesContainer from "./components/LanguagesContainer";
import UserWordsInput from "./components/UserWordsInput";

export default function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }
  return (
    <main>
      <Header />
      <GameStatus />
      <LanguagesContainer />
      <UserWordsInput currentWord={currentWord} />
      <Keyboard
        guessedLetters={guessedLetters}
        addGuessedLetter={addGuessedLetter}
        currentWord={currentWord}
      />
      <button className="new-game">New Game</button>
    </main>
  );
}
