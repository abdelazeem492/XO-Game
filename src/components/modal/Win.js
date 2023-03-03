import React, { useContext } from "react";
import Xicon from "./../Icons/Xicon";
import { GameContext } from "../../context/GameContext";
import Oicon from "../Icons/Oicon";

const Win = () => {
  const { winner, handleQuit, handleNextRound } = useContext(GameContext);

  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>you win!</p>
          <h3 className="score__title">
            {winner === "x" ? <Xicon /> : <Oicon />} takes the round
          </h3>
        </>
      ) : (
        <h3 className="score__title no-winner">No Winner</h3>
      )}
      <div className="score__btns">
        <button className="btn btn-sm" onClick={handleQuit}>
          quit
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleNextRound}>
          next round
        </button>
      </div>
    </div>
  );
};

export default Win;
