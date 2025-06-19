import React ,{useState}from "react";

const useTicTacToe = () => {
      const initialArray=()=>  Array(9).fill(null);
      const [board, setBoard] = useState(initialArray());
     const [isNextX,setNextX]=useState(true)
     const winnerPattern = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6]  // Diagonal from top-right to bottom-left
];
      const calculateWinner=(currentBoard)=>{
         for(let i=0;i<winnerPattern.length;i++){
            const [a,b,c]=winnerPattern[i];
            if(currentBoard[a]&& currentBoard[a]===currentBoard[b] && currentBoard[a]===currentBoard[c]){
                return currentBoard[a];
            }
         }
         return null;
      }
      const handleClick=(index)=>{
          const winner=calculateWinner(board)
          if(winner || board[index]){
            return;
          }
          const newboard=[...board]
          newboard[index]=isNextX?"X":"0"
          setBoard(newboard)
          setNextX(!isNextX)

      }
      const resetGame=()=>{
         setBoard(initialArray())
         setNextX(true)
      }
      const getMessage=()=>{
           const winner=calculateWinner(board);
           if(winner)return `Winner is ${winner}`;
           return isNextX?"Player X turns":"Player Y turns"
      }
      return {getMessage,resetGame,handleClick,board}
}

export default useTicTacToe;
