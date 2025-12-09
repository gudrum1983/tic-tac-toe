import styles from './Board.module.scss';
import clsx from 'clsx';
import { calculateWinner } from '@utils';
import type { Player } from '@types';

export type BoardProps = {
  currentPlayer: Player,
  squares: Array<string | null>,
  onPlay: (index: number) => void
};

export function Board({ currentPlayer, squares, onPlay }: BoardProps) {

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
      <div className={styles.Board}>

        {squares.map((square, index) => (
          <Square key={index}
                  value={square}
                  onSquareClick={() => onPlay(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={Boolean(winner)} />
        ))}


      </div>


    </>);

}