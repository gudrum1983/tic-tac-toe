import styles from './History.module.scss';
import clsx from 'clsx';
import { Button } from '../Button';
type HistoryItem = {step: number, value: Array<string | null>, currentPlayer?: string, coordinates?: Array<[number, number]> };
export type HistoryProps = {
  history: Array<HistoryItem>;
  currentMove: number;
  setCurrentMove: (step: number) => void;
};

export function History({ history, currentMove, setCurrentMove }: HistoryProps) {

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const steps = history.map((squares) => {
    //todo refactor
    const step = squares.step

    let description;
    if (step > 0) {
      if (currentMove === step) {
        description = 'Текущий шаг №' + step; //'You are at move #' + step;
      } else {
        description = 'Перейти на шаг №' + step; //'Go to move #' + step;
      }

    } else {
      description = 'Перейти к началу игры'; //'Go to game start'
    }


    return (
      <li key={step} className={clsx(styles.Game_ListItem, (step === currentMove) && styles.ListItem_accent )}>
        {(step === currentMove)
          ? <div className={styles.Game_Button_accent}>{(step !== 0) ? `Вы на шаге № ${step}` : 'Вы в начале игры'}</div>
          : <Button onClick={() => jumpTo(step)} description={description} widthFull/>
        }
      </li>
    );

  });

  return (
    <div className={styles.History}>
      <ol className={styles.Game_List}>{steps}</ol>
    </div>
  );
}