import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null)); // Array(9).fill(null) creates an array with nine elements and sets each of them to null.
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    (winner[1] === "draw") ? status = "It's a draw" : status = "Winner: " + winner[0];
    }
  else {
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

        return [squares[a],[a,b,c]];
      }
    }
    if (!squares.includes(null)){
      return [null, "draw"]
    }

    return null;
  }

  const board = [...Array(3)].map((_, row) => ( //  _ underscore é convenção de nome de parâmetro não usado.
    <div className="board-row">
      {[...Array(3)].map((square, col) => { // Spread é necessário para o array ter índices. Array(3) não funcionaria. Poderia ser Array(3).fill(null) ou [0, 1, 2].
        const index = row * 3 + col; // 0 * 3 + 0; 0 * 3 + 1; 0 * 3 + 2; 1 * 3 + 0;...

        if (winner){
          if (index === winner[1][0] || index === winner[1][1] || index === winner[1][2])

          return (
          <Square
            key={`square-${index}`}
            value={squares[index]}
            onSquareClick={() => handleClick(index)}
            styles={{backgroundColor: "yellow"}}
          />
        );
        }

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
    <div style={{ margin: 10 }}>{status}</div>
    {board}
  </>;
}
