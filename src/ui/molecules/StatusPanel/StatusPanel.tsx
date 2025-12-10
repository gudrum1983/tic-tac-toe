import styles from './StatusPanel.module.scss';
import { Typography, Button } from '../../atoms';

export type StatusPanelProps = {
  label: string;
  statusText: string;
  onReset: () => void
};

export function StatusPanel({ label, statusText, onReset }: StatusPanelProps) {

  return (
    <div className={styles.StatusPanel}>
      <Typography variant={'primary'} as={'p'} size={'m'}>{label}
        <Typography variant={'accent'} as={'span'} size={'m'}>{statusText}</Typography>
      </Typography>
      <Button onClick={onReset} description={'Начать заново'} isAccent textCenter />
    </div>
  );
}