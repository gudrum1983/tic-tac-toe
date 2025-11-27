import styles from './Header.module.scss';
import { Button } from '../Button';

export type HeaderProps = {
  onChangeTheme: (themeName: 'dark' | 'light') => void;
  isLightTheme: boolean;
};

export function Header({ onChangeTheme, isLightTheme }: HeaderProps) {

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Content}>
        <h1 className={styles.Header_Title}> Крестики-нолики </h1>
        <div className={styles.Header_Actions}>
          <Button onClick={() => onChangeTheme('light')} description={'Светлая тема'} icAccent={isLightTheme}/>
          <Button onClick={() => onChangeTheme('dark')} description={'Темная тема'} icAccent={!isLightTheme}/>
        </div>
      </div>
    </div>);
}