import styles from './GameLayout.module.scss';
import type { ReactNode } from 'react';
import { Paper } from '../../atoms';

type GameLayoutProps = {
  status: ReactNode;
  board: ReactNode;
  stepper: ReactNode;
};

export function GameLayout({ status, board, stepper }: GameLayoutProps) {

  return (
    <div className={styles.GameLayout}>
      <div className={styles.GameLayout_Status}><Paper fullWidth>{status}</Paper></div>
      <div className={styles.GameLayout_Board}><Paper padding={'xxl'} fullWidth>{board}</Paper></div>
      <div className={styles.GameLayout_Stepper}><Paper fullHeight fullWidth>{stepper}</Paper></div>
    </div>
  );
}