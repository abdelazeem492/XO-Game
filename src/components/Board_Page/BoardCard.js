import React, { useContext } from "react";
import Xicon from "./../Icons/Xicon";
import Oicon from "./../Icons/Oicon";
import { GameContext } from "../../context/GameContext";

const BoardCard = ({ user = "noUser", active, index }) => {
  const { handleSquareClick } = useContext(GameContext);

  return (
    <div
      className={`card ${active && user === "x" && "shadow-blue"} ${
        active && user === "o" && "shadow-yellow"
      } ${!active ? "shadow-gray" : "active"}`}
      onClick={() => handleSquareClick(index)}
    >
      {user === "x" && <Xicon color={active && "dark"} size="lg" />}
      {user === "o" && <Oicon color={active && "dark"} size="lg" />}
    </div>
  );
};

export default BoardCard;
