import styles from './StatusPanel.module.scss';
import { Button } from '../Button';
import type { ReactNode } from 'react';

export type StatusPanelProps = {
  contentText: ReactNode;
  onClick: () => void
};

export function StatusPanel({ contentText, onClick }: StatusPanelProps) {

  return (
    <div className={styles.StatusPanel}>
      <div className={styles.StatusPanel_Info}>{contentText}</div>
      <Button onClick={onClick} description={'Начать заново'} isAccent textCenter />
    </div>
  );
}