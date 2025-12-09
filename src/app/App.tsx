import { Game } from '@features';
import { useEffect, useState } from 'react';
import { Footer, Header, PageLayout } from '@ui';
import type { ThemeName } from '@types';
import { THEMES } from '@utils';

export default function App() {

  const [theme, setTheme] = useState<ThemeName>(THEMES[0].name);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function handleThemeChange(themeName: ThemeName) {
    setTheme(themeName);
  }

  return (
    <PageLayout header={<Header onThemeChange={handleThemeChange} title={'Крестики-нолики'} currentTheme={theme}
                                themes={THEMES} />}
                footer={<Footer description={'Мини игра на React + Vite + TS, Scss + токен дизайн'} />}>
      <Game />
    </PageLayout>
  );

}