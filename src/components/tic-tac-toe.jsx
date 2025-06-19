import React from "react";
import "./tic-tac-toe.css";
import useTicTacToe from "../hooks/usetictactoe"
const TicTacToe = () => {

  const {getMessage,resetGame,handleClick,board}=useTicTacToe()
  return (
    <div>
      <div className="head">
        <div>{getMessage()}</div>
        <button onClick={()=>resetGame()}>Reset</button>
      </div>

      <div class="game">
        {board.map((_, index) => (
          <button class="box" disabled={board[index]!=null} onClick={()=>handleClick(index)}>{board[index]}</button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
