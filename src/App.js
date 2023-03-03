import Start from "./components/Start_Page/Start";
import Board from "./components/Board_Page/Board";
import Modal from "./components/modal/Modal";
import { useContext } from "react";
import { GameContext } from "./context/GameContext";

function App() {
  const { screen } = useContext(GameContext);

  return (
    <div className="App">
      <div className="container">
        {screen === "start" && <Start />}
        {screen === "game" && <Board />}
      </div>
      <Modal />
    </div>
  );
}

export default App;
