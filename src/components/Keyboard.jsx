import clsx from "clsx";

export default function Keyboard({
  guessedLetters,
  addGuessedLetter,
  currentWord,
}) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div className="keyboard">
      {alphabet.split("").map((letter, index) => (
        <Key
          key={index}
          letter={letter}
          addGuessedLetter={addGuessedLetter}
          guessedLetters={guessedLetters}
          currentWord={currentWord}
        />
      ))}
    </div>
  );
}

function Key({ letter, addGuessedLetter, guessedLetters, currentWord }) {
  const isGuessed = guessedLetters.includes(letter);
  const isCorrect = isGuessed && currentWord.includes(letter);
  const isWrong = isGuessed && !currentWord.includes(letter);

  const className = clsx("key", {
    correct: isCorrect,
    wrong: isWrong,
  });

  return (
    <button className={className} onClick={() => addGuessedLetter(letter)}>
      {letter.toUpperCase()}
    </button>
  );
}
