import styles from './Board.module.scss';
import { calculateWinner } from '../../utils/utils.ts';

export type BoardProps = {
  xIsNext: boolean,
  squares: Array<string | null>,
  onPlay: (squares: Array<string | null>) => void
};

export function Board({ xIsNext, squares, onPlay }: BoardProps) {

  function handleClick(index: number) {

    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? 'X' : '0';

    onPlay(nextSquares);
  }

  const Square = ({ value, onSquareClick }: {
    disabled: boolean,
    highlighted: boolean,
    value: string | null,
    onSquareClick: () => void
  }) => <button className={styles.Board_Square} onClick={onSquareClick}>{value}</button>;


  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(squares);

  const winnerLine = winner?.line ?? null;

  return (
    <div className={styles.Board}>
      <div className={styles.Board_Row}>
        {[0, 1, 2].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={!winner} />
        ))}
      </div>
      <div className={styles.Board_Row}>
        {[3, 4, 5].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={!winner} />
        ))}
      </div>
      <div className={styles.Board_Row}>
        {[6, 7, 8].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={!winner} />
        ))}
      </div>
    </div>);

}