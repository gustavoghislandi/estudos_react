import { useState } from "react";
import Board from "./components/Board";


export default function Game() {
  const [rowCol, setRowCol] = useState([]);
  const [history, setHistory] = useState([Array(9).fill(null)]); // Perceba como [Array(9).fill(null)] é um array com um único item, o qual é em si um array de 9 nulls.
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const [isAscending, setIsAscending] = useState(true); // Criação de um estado para armazenar qual o estado da ordenação.

  const orderedHistory = isAscending ? history : [...history].reverse(); // variável intermediária que deixa o history intacto. Spread cria uma cópia.
  // orderedHistory controla apenas a ordem de exibição. history nunca é mutado; a cópia evita efeitos colaterais no estado. Não mutar estado é regra estrutural do React, não só “boa prática”.

  function getSquareIndex(move) {
    if (move === 0) return null; // no move 0 não existe índice
    const prev = history[move - 1];
    const curr = history[move];

    // retorna o índice do square que mudou
    return prev.findIndex((value, i) => value !== curr[i]);
  }
  
  const moves = orderedHistory.map((squares, move) => {

    const realMove = isAscending ? move : history.length - 1 - move; // move → posição visual na lista | realMove → índice verdadeiro no history. Porque quando false o index real é reverso ao acendente/original; e quando é ascendente o index real é o próprio move.

    let description;
    let squareIndex = getSquareIndex(realMove)

    if (realMove === currentMove) {
      if (realMove === 0) {
        return <li>You are at the game start</li>
      } else
        console.log(history)
        return <li>You are at move #{realMove} | row: {rowCol[squareIndex][0]}, col: {rowCol[squareIndex][1]}</li>
    } else {
      if (realMove > 0) {
        console.log(`row: ${rowCol[realMove-1][0]}`)
        console.log(`col: ${rowCol[realMove-1][1]}`)
        description = `Go to move # ${realMove} | row: ${rowCol[realMove-1][0]}, col: ${rowCol[realMove-1][1]}`;
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
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} setRowCol={setRowCol}/>
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