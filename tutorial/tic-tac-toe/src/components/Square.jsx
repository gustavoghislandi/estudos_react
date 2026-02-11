export default function Square({ value, onSquareClick, styles }) {
  return <button
    className="square"
    onClick={onSquareClick}
    style={styles}
  >
    {value}
  </button>
}