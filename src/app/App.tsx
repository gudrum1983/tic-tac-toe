import { Game } from '@/features';
import { useEffect, useState } from 'react';
//если импортировать как модули то будет добавлен постфикс
import { Footer, Header } from '@/ui';
import { PageLayout } from '@/layout';
//Для пропсов в React принято использовать "onSomething" для событий и
// "handleSomething" для определений функций, обрабатывающих эти события.

export default function App() {

  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    document.body.classList.add('theme-light');
  }, []);

  const changeTheme = (themeName: 'dark' | 'light') => {
    console.log('theme-' + themeName);
    document.body.className = 'theme-' + themeName;
    setIsLightTheme(themeName === 'light')
  };

  return (
    <PageLayout header={<Header onChangeTheme={changeTheme} isLightTheme={isLightTheme} />}
                footer={<Footer text={'Мини игра на React + Vite + TS, Scss + токен дизайн'} />}
                children={<Game />} />
  );

}