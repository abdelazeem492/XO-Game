import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import { GameContext } from "../../context/GameContext";

const Restart = () => {
  const { handleQuit } = useContext(GameContext);

  const { hideModal } = useContext(ModalContext);
  return (
    <div className="restart">
      <h3 className="restart__title">restart game ?</h3>
      <div className="restart__btns">
        <button className="btn btn-sm" onClick={hideModal}>
          no, cancel
        </button>
        <button className="btn btn-sm btn-yellow" onClick={handleQuit}>
          yes, restart
        </button>
      </div>
    </div>
  );
};

export default Restart;
