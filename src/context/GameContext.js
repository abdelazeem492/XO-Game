import { createContext, useContext, useEffect, useState } from "react";
import { calcBestMove, getWinner } from "./../helpers/getWinner";
import { ModalContext } from "./ModalContext";

const GameContext = createContext();

const GameState = (props) => {
  const { showModal, hideModal, setModalMode } = useContext(ModalContext);

  const [screen, setScreen] = useState("start"); // start page || game page

  const [activeUser, setActiveUser] = useState("x"); // x || o
  const [playMode, setPlayMode] = useState("cpu"); // cpu || player

  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xNext, setXNext] = useState(false);

  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);

  // tie == try
  const [ties, setTies] = useState({ x: 0, o: 0 });

  useEffect(() => {
    checkNoWinner();
    const currentUser = xNext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNext(squares);
    }
  }, [xNext, winner, screen]);

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen("game");
  };

  const handleSquareClick = (ix) => {
    if (squares[ix] || winner) {
      return;
    }
    const currentUser = xNext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }

    // ns is the copy of squares
    let ns = [...squares];
    ns[ix] = !xNext ? "x" : "o";

    setSquares(ns);
    setXNext(!xNext);

    // check winner
    checkWinner(ns);
  };

  const handleQuit = () => {
    setSquares(new Array(9).fill(""));
    setXNext(false);
    setWinnerLine(null);
    setWinner(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    hideModal();
    setScreen("start");
  };

  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setXNext(null);
    setWinner(null);
    setWinnerLine(null);
    hideModal();
  };

  const checkWinner = (ns) => {
    const isWinner = getWinner(ns);
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);

      // set ties && ti == ties copy
      const ti = { ...ties };
      ti[isWinner.winner] += 1;

      setTies(ti);

      showModal();
      setModalMode("win");
    }
  };

  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    if (!moves.length) {
      setWinner("no");
      showModal();
      setModalMode("win");
    }
  };

  const cpuNext = (sq) => {
    const bestMove = calcBestMove(sq, activeUser === "x" ? "o" : "x");
    let ns = [...squares];
    ns[bestMove] = !xNext ? "x" : "o";
    setSquares(ns);
    setXNext(!xNext);
    checkWinner(ns);
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        squares,
        xNext,
        ties,
        winner,
        winnerLine,
        playMode,
        handleNextRound,
        handleQuit,
        handleSquareClick,
        setActiveUser,
        changePlayMode,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameState };
