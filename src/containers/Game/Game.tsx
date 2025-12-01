import styles from './Game.module.scss';
import { Board, History } from '../../components';
import { useMemo, useState } from 'react';
import { calculateWinner } from '../../utils/utils.ts';
import { Button } from '../../components/Button';

const initialSquares: Array<null> = Array(9).fill(null);


type HistoryItem = {
  step: number,
  value: Array<string | null>,
  currentPlayer?: string,
  coordinates?: [number, number]
};

const initialHistory: Array<HistoryItem> = [{ step: 0, value: initialSquares }];


export function Game() {
  const [history, setHistory] = useState<Array<HistoryItem>>(initialHistory);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const currentSquares = history.find((item) => item.step === currentMove)?.value ?? initialSquares;


  //xIsNext в true, если число, на которое вы меняете currentMove, чётное.
  const xIsNext = currentMove % 2 === 0;

  const currentPlayer = xIsNext ? 'X' : 'O';

  function handlePlay(index: number) {

    if (currentSquares[index] || calculateWinner(currentSquares)) return;

    const nextSquares = [...currentSquares];
    nextSquares[index] = currentPlayer;

    const nextCoordinates: [number, number] = [Math.floor(index/ 3 + 1), ((index + 1) % 3 === 0) ? 3 : (index + 1) % 3 ];

    const nextHistory = [...history.slice(0, currentMove + 1), {
      step: currentMove + 1,
      value: nextSquares,
      coordinates: nextCoordinates,
      currentPlayer: currentPlayer
    }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }


  function handleReset() {
    setCurrentMove(0);
    setHistory(initialHistory);
  }

  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(currentSquares);
  // const status = !winner && currentMove > 8 ? 'НИЧЬЯ' :  winner?.winner ? 'Winner: ' + winner.winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

  const status = !winner && currentMove > 8 ? 'НИЧЬЯ' : winner?.winner ? 'Победитель - ' + winner.winner : 'Ход игрока - ' + (xIsNext ? 'X' : 'O');

  //const listHistory = isAscending ? history : history.toReversed()

  const sortedMoves = useMemo(() => {
    return isAscending ? history : history.toReversed();
  }, [history, isAscending]);

  /*  const steps = history.map((_squares, step) => {
      //todo refactor
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

    });*/

  return (
    <div className={styles.Game}>
      <div className={styles.Game_Panel}>
        <div className={styles.Game_Status}> Статус игры: {status} </div>
        <Button onClick={handleReset} description={'Начать заново'} isAccent />
      </div>

      <div className={styles.Game_Board}>

        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.Game_Info}>
        <Button description={isAscending ? 'Шаги по возрастанию' : 'Шаги по убыванию'} widthFull isAccent textCenter
                onClick={() => setIsAscending(!isAscending)} />
        <History history={sortedMoves} currentMove={currentMove} setCurrentMove={setCurrentMove} />
        {/*<ol className={styles.Game_List}>{steps}</ol>*/}
      </div>
    </div>
  );
}