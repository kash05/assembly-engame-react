import clsx from "clsx";

export default function Keyboard({
  guessedLetters,
  addGuessedLetter,
  currentWord,
  isGameOver,
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
          isGameOver={isGameOver}
        />
      ))}
    </div>
  );
}

function Key({
  letter,
  addGuessedLetter,
  guessedLetters,
  currentWord,
  isGameOver,
}) {
  const isGuessed = guessedLetters.includes(letter);
  const isCorrect = isGuessed && currentWord.includes(letter);
  const isWrong = isGuessed && !currentWord.includes(letter);

  const className = clsx("key", {
    correct: isCorrect,
    wrong: isWrong,
  });

  return (
    <button
      className={className}
      onClick={() => addGuessedLetter(letter)}
      disabled={isGameOver}
      aria-disabled={guessedLetters.includes(letter)}
      aria-label={`Letter ${letter}`}
    >
      {letter.toUpperCase()}
    </button>
  );
}
