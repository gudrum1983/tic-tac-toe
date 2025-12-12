import styles from './Footer.module.scss';
import { Typography } from '../../atoms';

type FooterProps = {
  description: string
};

export function Footer({ description }: FooterProps) {
  return <footer className={styles.Footer}><Typography as={'p'}>{description}</Typography></footer>;
}
