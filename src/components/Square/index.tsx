import { cn as bem } from '@bem-react/classname';
import './style.css';

function Square({ value, onSquareClick, highlighted , disabled}: {disabled: boolean, highlighted: boolean, value: string | null, onSquareClick: () => void}) {

  const cn = bem('Square');

  return <button className={cn({disabled: disabled , filled: Boolean(value), highlighted: highlighted})} onClick={onSquareClick}>{value}</button>;
}

export default Square;