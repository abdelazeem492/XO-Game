import React, { useContext } from "react";
import Xicon from "../Icons/Xicon";
import Oicon from "../Icons/Oicon";
import { GameContext } from "../../context/GameContext";

const Start = () => {
  const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
      <div className="card shadow-gray">
        <h1 className="text-lg"> Pick Player 1'st mark</h1>
        <div className="start__players">
          <span
            className={activeUser === "x" ? "start__players--active" : ""}
            onClick={() => setActiveUser("x")}
          >
            <Xicon color={activeUser === "x" ? "dark" : "light"} />
          </span>
          <span
            className={activeUser === "o" ? "start__players--active" : ""}
            onClick={() => setActiveUser("o")}
          >
            <Oicon color={activeUser === "o" ? "dark" : "light"} />
          </span>
        </div>
        <p className="text-light">remember: X goes first</p>
      </div>
      <div className="start__btns">
        <button
          className="btn btn-yellow"
          onClick={() => changePlayMode("cpu")}
        >
          new game (vs CPU)
        </button>
        <button
          className="btn btn-blue"
          onClick={() => changePlayMode("player")}
        >
          new game (vs Player)
        </button>
      </div>
    </div>
  );
};

export default Start;
