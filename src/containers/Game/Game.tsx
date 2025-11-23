import styles from './Game.module.scss';
import { Board } from '../../components';
import { useState } from 'react';
import { calculateWinner } from '../../utils/utils.ts';
import { Button } from '../../components/Button';

const initialSquares: Array<null> = Array(9).fill(null);

export function Game() {
  const [history, setHistory] = useState<Array<Array<string | null>>>([initialSquares]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquares = history[currentMove];
  //xIsNext в true, если число, на которое вы меняете currentMove, чётное.
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(currentSquares);
 // const status = !winner && currentMove > 8 ? 'НИЧЬЯ' :  winner?.winner ? 'Winner: ' + winner.winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

  const status = !winner && currentMove > 8 ? 'НИЧЬЯ' :  winner?.winner ? 'Победитель - ' + winner.winner : 'Ход игрока - ' + (xIsNext ? 'X' : 'O');


  const steps = history.map((_squares, step) => {
    //todo refactor
    let description;
    if (step > 0) {
      if (currentMove === step) {
        description = 'Текущий шаг #' + step; //'You are at move #' + step;
      } else {
        description = 'Перейти на шаг #' + step; //'Go to move #' + step;
      }

    } else {
      description = 'Перейти к началу игры'; //'Go to game start'
    }


    return (
      <li key={step}>

          <Button onClick={() => jumpTo(step)} description={description} widthFull/>
{/*          <button onClick={() => jumpTo(step)}>{description}</button>*/}
        </li>
    );

  });

  return (
    <div className={styles.Game}>
      <div className={styles.Game_Status}>Статус игры: {status}</div>
      <div className={styles.Game_Board}>

        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.Game_Info}>
        <ol>{steps}</ol>
      </div>
    </div>
  );
}