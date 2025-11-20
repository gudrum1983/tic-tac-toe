import { cn as bem } from '@bem-react/classname';
import './style.css';
import { calculateWinner } from '../../utils/utils.ts';
import Square from '../Square';

type BoardProps = {
  xIsNext: boolean,
  squares: Array<string | null>,
  onPlay: (squares: Array<string | null>) => void
};

function Board({ xIsNext, squares, onPlay }: BoardProps) {

  const cn = bem('Board');

  function handleClick(index: number) {

    if (squares[index] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[index] = xIsNext ? 'O' : 'X';

    onPlay(nextSquares);
  }

  const winner: {winner: string, line: [number, number, number]} | null = calculateWinner(squares);

  const winnerLine = winner?.line ?? null;

  return (
    <div className={cn()}>

      <div className={cn('Row')}>
        {[0, 1, 2].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={!winner} />
        ))}
      </div>
      <div className={cn('Row')}>
        {[3, 4, 5].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={!winner}/>
        ))}
      </div>
      <div className={cn('Row')}>
        {[6, 7, 8].map((index) => (
          <Square key={index}
                  value={squares[index]}
                  onSquareClick={() => handleClick(index)}
                  highlighted={winnerLine?.includes(index) ?? false}
                  disabled={!winner} />
        ))}
      </div>
    </div>);

}

export default Board;