import styles from './Button.module.scss';
import clsx from 'clsx';

export type ButtonProps = {
  description?: string,
  onClick?: () => void,
  widthFull?: boolean
};

export function Button({ description, onClick, widthFull }: ButtonProps) {

  return (
    <button className={clsx([styles.Button, widthFull && styles.Button_width_full])} onClick={onClick}>{description}</button>
  );
}