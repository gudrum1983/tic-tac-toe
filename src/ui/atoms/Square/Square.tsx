import styles from './Square.module.scss';
import clsx from 'clsx';
import type { Player } from '@types';

export type SquareProps = {
  disabled: boolean,
  highlighted: boolean,
  value: string | null,
  onSquareClick: () => void,
  currentPlayer: Player
};

export function Square({ value, onSquareClick, highlighted, disabled, currentPlayer }: SquareProps) {

  return (
    <button
      className={clsx([
        styles.Square,
        (disabled || value) && styles.Square_inactive,
        highlighted && styles.Square_highlighted,
      ])}
      {...(!disabled && !value) ? {'data-preview': currentPlayer} : {} } // только если клетка пустая
      onClick={onSquareClick}>{value}</button>
  );
}