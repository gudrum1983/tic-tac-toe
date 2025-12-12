import styles from './Board.module.scss';
import type { Player } from '@types';
import { Square } from '../../atoms';

type BoardProps = {
  currentPlayer: Player,
  squares: Array<string | null>,
  onPlay: (index: number) => void
  winnerLine?: [number, number, number] | null
};

export function Board({ currentPlayer, squares, onPlay, winnerLine }: BoardProps) {

  return (
    <div className={styles.Board}>
      {squares.map((square, index) => (
        <Square key={index}
                currentPlayer={currentPlayer}
                value={square}
                onSquareClick={() => onPlay(index)}
                highlighted={winnerLine?.includes(index) ?? false}
                disabled={Boolean(winnerLine)} />
      ))}
    </div>
  );
}