import styles from './Header.module.scss';
import { Button } from '../Button';

export type HeaderProps = {
  onChangeTheme: (themeName: 'dark' | 'light') => void
};

export function Header({ onChangeTheme }: HeaderProps) {

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Content}>
        <h1 className={styles.Header_Title}> Крестики-нолики </h1>
        <Button onClick={() => onChangeTheme('light')} description={'Светлая тема'}/>
        <Button onClick={() => onChangeTheme('dark')} description={'Темная тема'}/>
{/*        <button className={styles.Header_Button} onClick={() => onChangeTheme('light')}>Светлая тема</button>
        <button className={styles.Header_Button} onClick={() => onChangeTheme('dark')}>Темная тема</button>*/}
{/*        <button className={styles.Header_Button} onClick={() => onChangeTheme('cold')}>Холодная тема</button>
        <button className={styles.Header_Button} onClick={() => onChangeTheme('warm')}>Теплая тема</button>*/}

      </div>

    </div>);
}