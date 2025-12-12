import { useMemo, useState } from 'react';
import { Board, GameLayout, StatusPanel, Stepper } from '@ui';
import { calculateWinner, PLAYERS } from '@utils';
import type { HistoryItem, Player } from '@types';

const initialSquares: Array<null> = Array(9).fill(null);

const initialHistory: Array<HistoryItem> = [{ step: 0, value: initialSquares }];

export function Game() {

  const [history, setHistory] = useState<Array<HistoryItem>>(initialHistory);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const [isAscending, setIsAscending] = useState<boolean>(true);

  const currentSquares = history[currentMove]?.value ?? initialSquares;

  //xIsNext в true, если число, на которое вы меняете currentMove, чётное.
  const xIsNext: boolean = currentMove % 2 === 0;

  const currentPlayer: Player = xIsNext ? PLAYERS.X : PLAYERS.O;

  const winner : {winner: string, line: [number, number, number]} | null = useMemo(
    () => calculateWinner(currentSquares),
    [currentSquares]
  );

  function handlePlay(index: number) {

    if (currentSquares[index] || winner) return;

    const nextSquares = [...currentSquares];
    nextSquares[index] = currentPlayer;

    const nextCoordinates: [number, number] = [
      Math.floor(index / 3) + 1,
      (index % 3) + 1,
    ];

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

  function getStatus() {
    if (winner) return `Победитель — ${winner.winner}`;
    if (currentMove > 8) return 'НИЧЬЯ';
    return `Ход игрока — ${currentPlayer}`;
  }

  const status = getStatus();

  const winnerLine = winner?.line ?? null;

  const sortedMoves = useMemo(() => {
    return isAscending ? history : history.toReversed();
  }, [history, isAscending]);

  return (
    <GameLayout
      status={
        <StatusPanel label={'Статус игры: '}
                     statusText={status}
                     onReset={handleReset} />
      }
      board={
        <Board currentPlayer={currentPlayer}
               squares={currentSquares}
               onPlay={handlePlay}
               winnerLine={winnerLine} />
      }
      stepper={
        <Stepper isAscending={isAscending}
                 currentMove={currentMove}
                 setCurrentMove={setCurrentMove}
                 sortedMoves={sortedMoves}
                 setIsAscending={setIsAscending} />
      }
    />
  );
}