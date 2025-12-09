import { useMemo, useState } from 'react';
import { Board, GameLayout, StatusPanel, Stepper } from '@ui';
import { calculateWinner } from '@utils';
import type { HistoryItem, Player } from '@types';

const initialSquares: Array<null> = Array(9).fill(null);

const initialHistory: Array<HistoryItem> = [{ step: 0, value: initialSquares }];

export function Game() {
  const [history, setHistory] = useState<Array<HistoryItem>>(initialHistory);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const currentSquares = history.find((item) => item.step === currentMove)?.value ?? initialSquares;


  //xIsNext в true, если число, на которое вы меняете currentMove, чётное.
  const xIsNext: boolean = currentMove % 2 === 0;

  const currentPlayer: Player = xIsNext ? 'X' : 'O';

  function handlePlay(index: number) {

    if (currentSquares[index] || calculateWinner(currentSquares)) return;

    const nextSquares = [...currentSquares];
    nextSquares[index] = currentPlayer;

    const nextCoordinates: [number, number] = [Math.floor(index / 3 + 1), ((index + 1) % 3 === 0) ? 3 : (index + 1) % 3];

    const nextHistory = [...history.slice(0, currentMove + 1), {
      step: currentMove + 1,
      value: nextSquares,
      coordinates: nextCoordinates,
      currentPlayer: currentPlayer,
    }];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleReset() {
    setCurrentMove(0);
    setHistory(initialHistory);
  }

  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(currentSquares);

  const status = !winner && currentMove > 8 ? 'НИЧЬЯ' : winner?.winner ? 'Победитель - ' + winner.winner : 'Ход игрока - ' + (xIsNext ? 'X' : 'O');

  const sortedMoves = useMemo(() => {
    return isAscending ? history : history.toReversed();
  }, [history, isAscending]);

  return (
    <GameLayout
      status={
        <StatusPanel contentText={`Статус игры: ${status}`}
                     onClick={handleReset} />
      }
      board={
        <Board currentPlayer={currentPlayer}
               squares={currentSquares}
               onPlay={handlePlay} />
      }
      stepper={
        <Stepper isAscending={isAscending}
                 currentMove={currentMove}
                 setCurrentMove={setCurrentMove}
                 sortedMoves={sortedMoves}
                 setIsAscending={setIsAscending} />
      }
    />
  )
    ;
}