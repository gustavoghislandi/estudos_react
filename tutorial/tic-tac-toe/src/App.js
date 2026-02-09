import { useState } from "react";

function Square({ value, onSquareClick }) {

  return <button
    className="square"
    onClick={onSquareClick}
  >
    {value}
  </button>
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null)); // Array(9).fill(null) creates an array with nine elements and sets each of them to null.
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    // Se squares[i] for 'truthy', só retorna. Ou calcula vencedor.
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice(); //  slice sem argumentos cria uma cópia (uma "fatia inteira")
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares)
  }

const board = [...Array(3)].map((_, row) => ( //  _ underscore é convenção de nome de parâmetro não usado.
  <div className="board-row">
    {[...Array(3)].map((square, col) => { // Spread é necessário para o array ter índices. Array(3) não funcionaria. Poderia ser Array(3).fill(null) ou [0, 1, 2].
      const index = row * 3 + col; // 0 * 3 + 0; 0 * 3 + 1; 0 * 3 + 2; 1 * 3 + 0;...
      return (
        <Square
          key={index}
          value={squares[index]}
          onSquareClick={() => handleClick(index)}
        />
      );
    })}
  </div>
));

  // Primeira tentativa (eu já sabia que iria sair em uma única dimensão):
  // const arrayBoard = squares.map((square,index) => {
  //   return <Square value={squares[index]} onSquareClick={() => handleClick(index)} /> // Depois a IA me mostrou o óbvio value={square}
  // })

  return <>
    {/* <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    <p>Novo Board</p> */}
    {/* {arrayBoard} */}
    {board}
  </>;
}

export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true); // Transferida para baixo.

  const [history, setHistory] = useState([Array(9).fill(null)]); // Perceba como [Array(9).fill(null)] é um array com um único item, o qual é em si um array de 9 nulls.
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];


  const moves = history.map((squares, move) => {
    let description;
    if (move === currentMove) {
      if (move === 0){
        return <li>You are at the game start</li>
      } else
      return <li>You are at move #{move}</li>
    } else {
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    }
    return (
    <li key={move}>
      <button onClick={() => jumpTo(move)}>{description}</button>
    </li>
    );
});


function handlePlay(nextSquares) {
  const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(nextHistory);
  setCurrentMove(nextHistory.length - 1);
  // setXIsNext(!xIsNext);
}

function jumpTo(nextMove) {
  setCurrentMove(nextMove);
  // setXIsNext(nextMove % 2 === 0);
}

return (
  <div className="game">
    <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
    <div className="game-info">
      <ol>
        {moves}
      </ol>
      
    </div>
  </div>
)
}


// Note:
// The DOM <button> element’s onClick attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. You could give any name to the Square’s onSquareClick prop or Board’s handleClick function, and the code would work the same.

// In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.