import clsx from "clsx";

export default function UserWordsInput({
  currentWord,
  guessedLetters,
  isGameLost,
}) {
  return (
    <div className="words">
      {currentWord.split("").map((letter, index) => (
        <Letter
          key={index}
          letter={letter}
          guessedLetters={guessedLetters}
          isGameLost={isGameLost}
        />
      ))}
    </div>
  );
}

function Letter({ letter, guessedLetters, isGameLost }) {
  const shouldRevealLetters = isGameLost || guessedLetters.includes(letter);
  const className = clsx("letter", {
    "missed-letter": isGameLost && !guessedLetters.includes(letter),
  });
  return (
    <span className={className}>
      {shouldRevealLetters ? letter.toUpperCase() : ""}
    </span>
  );
}
