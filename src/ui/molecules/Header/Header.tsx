import styles from './Header.module.scss';
import { Typography, Button, Logo } from '../../atoms';
import type { Player, ThemeName, Themes } from '@types';

type HeaderProps = {
  themes: Themes;
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
  title: string;
  winnerPlayer?: Player | null;
};

export function Header({ onThemeChange, currentTheme, themes, title }: HeaderProps) {

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Content} >
        <Logo/>
        <Typography as={'h1'} size={'xl'}>{title}</Typography>
        <div className={styles.Header_Actions}>
          {themes.map((item, index) => {
            return <Button key={item.name + index}
                           onClick={() => onThemeChange(item.name)}
                           description={item.label}
                           isAccent={currentTheme === item.name} />;
          })}
        </div>
      </div>
    </div>);
}