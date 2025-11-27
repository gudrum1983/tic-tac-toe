import styles from './Board.module.scss';
import { calculateWinner } from '../../utils/utils.ts';
import clsx from 'clsx';

export type BoardProps = {
  xIsNext: boolean,
  squares: Array<string | null>,
  onPlay: (squares: Array<string | null>) => void
};

export function Board({ xIsNext, squares, onPlay }: BoardProps) {

  const currentPlayer = xIsNext ? 'X' : 'O';

  function handleClick(index: number) {

    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[index] = currentPlayer;

    onPlay(nextSquares);
  }

  const Square = ({ value, onSquareClick, highlighted, disabled }: {
    disabled: boolean,
    highlighted: boolean,
    value: string | null,
    onSquareClick: () => void
  }) => <button
    className={clsx([
      styles.Board_Square,
      (disabled || Boolean(value)) && styles.Board_Square_deactive,
      highlighted && styles.Board_Square_highlighted,
    ])}
    data-preview={value ? '' : currentPlayer}  // только если клетка пустая
    onClick={onSquareClick}>{value}</button>;


  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(squares);

  const winnerLine = winner?.line ?? null;

  return (
    <div className={styles.Board}>

        {[0, 1, 2, 3, 4 , 5 , 6 , 7 , 8].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={Boolean(winner)} />
        ))}


    </div>);

}