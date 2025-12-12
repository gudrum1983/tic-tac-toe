import styles from './HistoryStepItem.module.scss';
import type { HistoryItem } from '@types';
import { Button, Typography } from '../../atoms';

type HistoryStepItemProps = {
  item: HistoryItem;
  isCurrent: boolean;
  onSelect: (step: number) => void;
};

export function HistoryStepItem({ item, isCurrent, onSelect }: HistoryStepItemProps) {

  const { step, coordinates, currentPlayer } = item;

  const isStartStep = step === 0;

  const coordinatesText = coordinates
    ? `(${coordinates[0]},${coordinates[1]})`
    : '';

  const playerText = currentPlayer ?? '';

  const baseDescription = isStartStep
    ? 'К началу игры'
    : `К шагу № ${step} → ${playerText} : ${coordinatesText}`;

  const currentDescription = isStartStep
    ? 'Вы в начале игры'
    : `Шаг № ${step} → ${playerText} : ${coordinatesText}`;

  return (
    <li className={styles.HistoryStepItem}>
      {isCurrent ? (
        <Typography variant="accent" extraClass={styles.HistoryStepItem_isText}>
          {currentDescription}
        </Typography>
      ) : (
        <Button
          widthFull
          description={baseDescription}
          onClick={() => onSelect(step)}
        />
      )}
    </li>
  );
}