import styles from './Footer.module.scss';

export type FooterProps = {
  text: string
};

export function Footer({ text }: FooterProps) {

  return (
    <footer className={styles.Footer}>
      <h2 className={'test'}>{text}</h2>

      {/*https://www.youtube.com/watch?v=A4Y5VwXGG9g&t=436s*/}
    </footer>
  );

}