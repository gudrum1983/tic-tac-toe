import styles from './Stepper.module.scss';
import { Button, Typography } from '../../atoms';
import clsx from 'clsx';
import type { HistoryItem } from '@types';

type StepperProps = {
  isAscending: boolean,
  setIsAscending: (value: boolean) => void,
  sortedMoves: Array<HistoryItem>,
  currentMove: number,
  setCurrentMove: (step: number) => void
};

export function Stepper({ isAscending, setIsAscending, sortedMoves, currentMove, setCurrentMove }: StepperProps) {

  const steps = sortedMoves.map((squares) => {

    const step = squares.step;
    const isStartStep = (squares.step === 0);
    const isCurrentStep = (squares.step === currentMove);
    const coordinatesText = squares.coordinates ? '(' + squares.coordinates[0] + ',' + squares.coordinates[1] + ')' : '';
    const currentPlayerText = squares.currentPlayer ? squares.currentPlayer : '';

    const baseDescription = isStartStep
      ? 'К началу игры'
      : `К шагу № ${step} -> ${currentPlayerText} : ${coordinatesText}`;

    const currentDescription = isStartStep
      ? 'Вы в начале игры'
      : `Шаг № ${step} -> ${currentPlayerText} : ${coordinatesText}`;

    return (
      <li key={step} className={clsx(styles.Game_ListItem, (step === currentMove) && styles.ListItem_accent)}>
        {(isCurrentStep)
          ? <Typography variant={'accent'}>{currentDescription}</Typography>
          : <Button onClick={() => setCurrentMove(step)} description={baseDescription} widthFull />
        }
      </li>
    );
  });

  return (
    <div className={styles.Stepper}>
      <Button description={isAscending ? 'Шаги по возрастанию' : 'Шаги по убыванию'} widthFull isAccent textCenter
              onClick={() => setIsAscending(!isAscending)} />
      <div className={styles.History}>
        <ul className={styles.Game_List}>{steps}</ul>
      </div>
    </div>
  );
}