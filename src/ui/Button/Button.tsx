import styles from './Button.module.scss';
import clsx from 'clsx';

export type ButtonProps = {
  description?: string,
  onClick?: () => void,
  widthFull?: boolean,
  isAccent?: boolean,
  textCenter?: boolean
};

export function Button({ description, onClick, widthFull, isAccent, textCenter }: ButtonProps) {

  return (
    <button className={clsx(
      styles.Button,
      widthFull && styles.Button_width_full,
      isAccent && styles.Button_accent,
      textCenter && styles.Button_alignText_center,

    )} onClick={onClick}>{description}</button>
  );
}