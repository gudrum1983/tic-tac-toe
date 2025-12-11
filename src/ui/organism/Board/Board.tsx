import styles from './Board.module.scss';
import { calculateWinner } from '@utils';
import type { Player } from '@types';
import { Square } from '../../atoms';

type BoardProps = {
  currentPlayer: Player,
  squares: Array<string | null>,
  onPlay: (index: number) => void
};

export function Board({ currentPlayer, squares, onPlay }: BoardProps) {

  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(squares);

  const winnerLine = winner?.line ?? null;

  return (
    <div className={styles.Board}>
      {squares.map((square, index) => (
        <Square key={index}
                currentPlayer={currentPlayer}
                value={square}
                onSquareClick={() => onPlay(index)}
                highlighted={winnerLine?.includes(index) ?? false}
                disabled={Boolean(winner)} />
      ))}
    </div>
  );
}