export default function UserWordsInput({ currentWord }) {
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
