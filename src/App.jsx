import { useState } from "react";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesContainer from "./components/LanguagesContainer";
import UserWordsInput from "./components/UserWordsInput";

export default function App() {
  const [currentWord, setCurrentWord] = useState("react");
  const [guessedLetters, setGuessedLetters] = useState([]);

  //   useEffect(() => {
  //     setCurrentWord(getRandomWord());
  //     console.log(currentWord);
  //   }, [currentWord]);

  //   function getRandomWord() {
  //     return languages[Math.floor(Math.random() * languages.length)];
  //   }

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }
  return (
    <main>
      <Header />
      <GameStatus />
      <LanguagesContainer
        guessedLetters={guessedLetters}
        currentWord={currentWord}
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
      <button className="new-game">New Game</button>
    </main>
  );
}
