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

  return <>
    {board}
  </>;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // Perceba como [Array(9).fill(null)] é um array com um único item, o qual é em si um array de 9 nulls.
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const [isAscending, setIsAscending] = useState(true); // Criação de um estado para armazenar qual o estado da ordenação.

  const orderedHistory = isAscending ? history : [...history].reverse(); // variável intermediária que deixa o history intacto. Spread cria uma cópia.
    // orderedHistory controla apenas a ordem de exibição. history nunca é mutado; a cópia evita efeitos colaterais no estado. Não mutar estado é regra estrutural do React, não só “boa prática”.



  const moves = orderedHistory.map((squares, move) => {

    const realMove = isAscending ? move : history.length - 1 - move; // move → posição visual na lista | realMove → índice verdadeiro no history. Porque quando false o index real é reverso ao acendente/original; e quando é ascendente o index real é o próprio move.

    let description;
    if (realMove === currentMove) {
      if (realMove === 0) {
        return <li>You are at the game start</li>
      } else
        return <li>You are at move #{realMove}</li>
    } else {
      if (realMove > 0) {
        description = 'Go to move #' + realMove;
      } else {
        description = 'Go to game start';
      }
    }
    return (
      <li key={realMove}> {/*Alterar de move para realMove aqui faz com que a key represente a jogada(move) correta. Em aplicações maiores, não alterar isso pode dar problema. GUARDE ISTO: Key identifica a entidade, não a posição. Ainda tem fato de que usar só index como key não é o mais certo. Mas aqui é aplicação pequena, sem BD e tal. */}
        <button onClick={() => jumpTo(realMove)}>{description}</button>
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
        <button onClick={() => setIsAscending(!isAscending)}>
          Sort {isAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
    </div>
  )
}


// Note:
// The DOM <button> element’s onClick attribute has a special meaning to React because it is a built-in component. For custom components like Square, the naming is up to you. You could give any name to the Square’s onSquareClick prop or Board’s handleClick function, and the code would work the same.

// In React, it’s conventional to use onSomething names for props which represent events and handleSomething for the function definitions which handle those events.