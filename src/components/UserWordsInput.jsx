import { useState } from "react";

export default function UserWordsInput() {
  const [currentWord, setCurrentWord] = useState("react");
  return (
    <div className="words">
      {currentWord.split("").map((letter, index) => (
        <Letter key={index} letter={letter.toUpperCase()} />
      ))}
    </div>
  );
}

function Letter({ letter }) {
  return <div className="letter">{letter}</div>;
}
