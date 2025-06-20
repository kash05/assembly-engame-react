export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (
    <div className="keyboard">
      {alphabet.split("").map((letter, index) => (
        <Key key={index} letter={letter.toUpperCase()} />
      ))}
    </div>
  );
}

function Key({ letter }) {
  return <button className="key">{letter}</button>;
}
