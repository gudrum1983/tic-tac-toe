import styles from './Button.module.scss';
import clsx from 'clsx';

export type ButtonProps = {
  description?: string,
  onClick?: () => void,
  widthFull?: boolean,
  icAccent?: boolean,
};

export function Button({ description, onClick, widthFull, icAccent }: ButtonProps) {

  return (
    <button className={clsx(
      styles.Button,
      widthFull && styles.Button_width_full,
      icAccent && styles.Button_accent
    )} onClick={onClick}>{description}</button>
  );
}