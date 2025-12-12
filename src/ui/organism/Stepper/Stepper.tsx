import styles from './Stepper.module.scss';
import { Button } from '../../atoms';
import type { HistoryItem } from '@types';
import { HistoryStepItem } from '../../molecules';

type StepperProps = {
  isAscending: boolean,
  setIsAscending: (value: boolean) => void,
  sortedMoves: Array<HistoryItem>,
  currentMove: number,
  setCurrentMove: (step: number) => void
};

export function Stepper({ isAscending, setIsAscending, sortedMoves, currentMove, setCurrentMove }: StepperProps) {

  return (
    <div className={styles.Stepper}>
      <Button
        widthFull
        isAccent
        textCenter
        description={isAscending ? 'Шаги по возрастанию' : 'Шаги по убыванию'}
        onClick={() => setIsAscending(!isAscending)}
      />

      <div className={styles.History}>
        <ul className={styles.Game_List}>
          {sortedMoves.map((item) => (
            <HistoryStepItem
              key={item.step}
              item={item}
              isCurrent={item.step === currentMove}
              onSelect={setCurrentMove}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}