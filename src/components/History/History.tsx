import styles from './History.module.scss';
import clsx from 'clsx';
import { Button } from '../Button';
type HistoryItem = {step: number, value: Array<string | null>, currentPlayer?: string, coordinates?: [number, number] };
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
    if (step > 0 && squares.coordinates) {
      if (currentMove === step) {
        description = 'Текущий шаг №' + step; //'You are at move #' + step;
      } else {
        description = 'К шагу № ' + step +' -> ' + squares.currentPlayer + ' : (' + squares.coordinates[0] + ',' + squares.coordinates[1] + ')'; //'Go to move #' + step;
      }

    } else {
      description = 'К началу игры'; //'Go to game start'
    }

    if (step === currentMove && squares.coordinates) description='Вы на шаге № ' + step + ' -> ' + squares.currentPlayer + ' : (' + squares.coordinates[0] + ',' + squares.coordinates[1] + ')';


    return (
      <li key={step} className={clsx(styles.Game_ListItem, (step === currentMove) && styles.ListItem_accent )}>
        {(step === currentMove)
          ? <div className={styles.Game_Button_accent}>{(step !== 0) ? description : 'Вы в начале игры'}</div>
          : <Button onClick={() => jumpTo(step)} description={description} widthFull/>
        }
      </li>
    );

  });

  return (
    <div className={styles.History}>
      <ul className={styles.Game_List}>{steps}</ul>
    </div>
  );
}