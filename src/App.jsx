import GameStatus from "./components/GameStatus";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguagesContainer from "./components/LanguagesContainer";
import UserWordsInput from "./components/UserWordsInput";

export default function App() {
  return (
    <main>
      <Header />
      <GameStatus />
      <LanguagesContainer />
      <UserWordsInput />
      <Keyboard />
      <button className="new-game">New Game</button>
    </main>
  );
}
