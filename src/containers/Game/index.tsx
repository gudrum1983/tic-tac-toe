import { cn as bem } from '@bem-react/classname';
import './style.css';
import { Board } from '../../components';
import { useState } from 'react';
import { calculateWinner } from '../../utils/utils.ts';

const initialSquares: Array<null> = Array(9).fill(null);

function Game() {
  const cn = bem('Game');

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
  const status = !winner && currentMove > 8 ? 'НИЧЬЯ' :  winner?.winner ? 'Winner: ' + winner.winner : 'Next player: ' + (xIsNext ? 'X' : 'O');

  const steps = history.map((_squares, step) => {


    //todo refactor
    let description;
    if (step > 0) {
      if (currentMove === step) {
        description = 'You are at move #' + step;
      } else {
        description = 'Go to move #' + step;
      }

    } else {
      description = 'Go to game start';
    }


    return (
      <li key={step}>
        <button onClick={() => jumpTo(step)}>{description}</button>
      </li>
    );

  });

  return (
    <div className={cn()}>



      <div className={cn('Board')}>
        <div className={cn('Status')}>{status}</div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={cn('Info')}>
        <ol>{steps}</ol>
      </div>
    </div>
  );
}

export default Game;