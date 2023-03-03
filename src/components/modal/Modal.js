import React, { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import Win from "./Win";
import Restart from "./Restart";

const Modal = () => {
  const { show, modalMode } = useContext(ModalContext);
  return (
    <>
      {show && (
        <div className="modal">
          <div className="modal__content">
            <div className="container">
              {modalMode === "win" && <Win />}
              {modalMode === "restart" && <Restart />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
