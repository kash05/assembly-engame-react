import clsx from "clsx";
import { languages } from "../resources/languages";

export default function LanguagesContainer({ guessedLetters, currentWord }) {
  const wrongGuessesCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  return (
    <div className="languages-chips">
      {languages.map((language, index) => (
        <Chip
          key={language.name}
          index={index}
          name={language.name}
          color={language.color}
          backgroundColor={language.backgroundColor}
          wrongGuessesCount={wrongGuessesCount}
        />
      ))}
    </div>
  );
}

function Chip({ name, index, color, backgroundColor, wrongGuessesCount }) {
  const isLanguageLost = index < wrongGuessesCount;
  const className = clsx("chip", {
    lost: isLanguageLost,
  });
  return (
    <span className={className} style={{ backgroundColor, color }}>
      {name}
    </span>
  );
}
