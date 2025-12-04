import styles from './Board.module.scss';
import clsx from 'clsx';
import { Paper } from '@/ui';
import { calculateWinner, type Player } from '@/shared';

export type BoardProps = {
  xIsNext: boolean,
  squares: Array<string | null>,
  onPlay: (index: number) => void
};

export function Board({ xIsNext, squares, onPlay }: BoardProps) {

  const currentPlayer: Player = xIsNext ? 'X' : 'O';

  function handleClick(index: number) {

/*
    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[index] = currentPlayer;

    onPlay(nextSquares, index);
*/

    onPlay(index);
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
    <>
    <Paper padding={'md'}>dfgdfgsdfg</Paper>
    <div className={styles.Board}>

        {squares.map((square, index) => (
          <Square key={index}
                  value={square}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={Boolean(winner)} />
        ))}


    </div>


    </>);

}