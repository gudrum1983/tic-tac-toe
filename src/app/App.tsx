import { Game } from '@features';
import { useEffect, useState } from 'react';
import { Footer, Header, PageLayout } from '@ui';
import type { ThemeName, Themes } from '@types';

export function App() {

  const appThemes: Themes = [
    { name: 'theme-light', label: 'Светлая тема' },
    { name: 'theme-dark', label: 'Темная тема' },
  ];

  const [theme, setTheme] = useState<ThemeName>(appThemes[0].name);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function handleThemeChange(themeName: ThemeName) {
    setTheme(themeName);
  }

  return (
    <PageLayout header={<Header onThemeChange={handleThemeChange} title={'Крестики-нолики'} currentTheme={theme}
                                themes={appThemes} />}
                footer={<Footer description={'Мини игра на React + Vite + TS, Scss модули + переменные'} />}>
      <Game />
    </PageLayout>
  );

}