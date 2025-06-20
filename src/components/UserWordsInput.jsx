export default function UserWordsInput({ currentWord, guessedLetters }) {
  return (
    <div className="words">
      {currentWord.split("").map((letter, index) => (
        <Letter key={index} letter={letter} guessedLetters={guessedLetters} />
      ))}
    </div>
  );
}

function Letter({ letter, guessedLetters }) {
  return (
    <span className="letter">
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  );
}
