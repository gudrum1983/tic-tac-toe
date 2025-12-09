import styles from './Header.module.scss';
import { Button, Typography } from '@ui';
import type { ThemeName, Themes } from '@types';

export type HeaderProps = {
  themes: Themes;
  currentTheme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
  title: string;
};

export function Header({ onThemeChange, currentTheme, themes, title }: HeaderProps) {

  return (
    <div className={styles.Header}>
      <div className={styles.Header_Content}>
        <Typography as={'h1'} variant={'secondary'} size={'xl'}>{title}</Typography>
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