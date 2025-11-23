import styles from './Header.module.scss';

export type HeaderProps = {
  onChangeTheme: (themeName: 'dark' | 'light' | 'cold' | 'warm') => void
};

export function Header({ onChangeTheme }: HeaderProps) {

  return (
    <header className={styles.Header}>
      <h1> Крестики-нолики </h1>
      <button className={styles.Header_Button} onClick={() => onChangeTheme('light')}>Светлая тема</button>
      <button className={styles.Header_Button} onClick={() => onChangeTheme('dark')}>Темная тема</button>
      <button className={styles.Header_Button} onClick={() => onChangeTheme('cold')}>Холодная тема</button>
      <button className={styles.Header_Button} onClick={() => onChangeTheme('warm')}>Теплая тема</button>
    </header>);
}