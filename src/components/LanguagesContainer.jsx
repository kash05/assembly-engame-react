import { languages } from "../resources/languages";

export default function LanguagesContainer() {
  return (
    <div className="languages-chips">
      {languages.map((language) => (
        <Chip
          key={language.name}
          name={language.name}
          color={language.color}
          backgroundColor={language.backgroundColor}
        />
      ))}
    </div>
  );
}

function Chip({ name, color, backgroundColor }) {
  return (
    <div className="chip" style={{ backgroundColor, color }}>
      {name}
    </div>
  );
}
