import clsx from "clsx";
import { getFarewellText } from "../resources/farewellMessages";

export default function GameStatus({
  isGameLost,
  isGameWon,
  isLastGuessIncorrect,
  language,
}) {
  const className = clsx("game-status", {
    lost: isGameLost,
    won: isGameWon,
    farewell: !isGameLost && isLastGuessIncorrect,
  });

  const heading = isGameLost ? "Game Over!" : "You win!";
  const message = isGameLost
    ? "You lose! Better start learning Assembly 😭"
    : "Well done! 🎉";

  if (!isGameLost && isLastGuessIncorrect) {
    return <FarewellMessage language={language} className={className} />;
  }

  if (isGameLost || isGameWon) {
    return (
      <div className={className}>
        <h2>{heading}</h2>
        <p>{message}</p>
      </div>
    );
  }

  return <div className="empty" />;
}

function FarewellMessage({ language, className }) {
  const text = getFarewellText(language);
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
}
