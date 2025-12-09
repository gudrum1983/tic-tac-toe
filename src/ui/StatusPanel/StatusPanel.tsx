import styles from './StatusPanel.module.scss';
import { Button } from '../Button';
import { Typography } from '../Typography';

export type StatusPanelProps = {
  label: string;
  statusText: string;
  onReset: () => void
};

export function StatusPanel({ label, statusText, onReset }: StatusPanelProps) {

  return (
    <div className={styles.StatusPanel}>
      <Typography variant={'secondary'} as={'p'} size={'m'}>{label}
        <Typography variant={'primary'} as={'span'} size={'m'}>{statusText}</Typography>
      </Typography>
      <Button onClick={onReset} description={'Начать заново'} isAccent textCenter />
    </div>
  );
}