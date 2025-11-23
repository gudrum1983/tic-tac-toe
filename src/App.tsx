import { Game } from './containers';
import { useEffect } from 'react';
//если импортировать как модули то будет добавлен постфикс
import styles from './styles.module.scss';
import { Footer, Header } from './components';
import { PageLayout } from './layout/PageLayout';
//Для пропсов в React принято использовать "onSomething" для событий и
// "handleSomething" для определений функций, обрабатывающих эти события.

export default function App() {

  // const themeNames: ['light', 'dark', 'cold', 'warm'] = ['light', 'dark', 'cold', 'warm'];

  useEffect(() => {
    document.body.classList.add('theme-light');
  }, []);

  const changeTheme = (themeName: 'dark' | 'light' | 'cold' | 'warm') => {
    console.log('theme-' + themeName);
    document.body.className = 'theme-' + themeName;
  };

  return (
    <div className={styles.App}>
      <PageLayout header={<Header onChangeTheme={changeTheme} />}
                  footer={<Footer text={'Мини игра на React + Vite + TS, Scss + токен дизайн'} />}
                  children={<Game />} />
    </div>

  );

}