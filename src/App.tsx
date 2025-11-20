import { Game } from './containers';
import { useEffect } from 'react';

//Для пропсов в React принято использовать "onSomething" для событий и
// "handleSomething" для определений функций, обрабатывающих эти события.

export default function App() {

  useEffect(() => {
    document.body.classList.add('theme-light');
  }, []);


  const changeThemeDark = () => {
    console.log('dark');
    document.body.className = 'theme-dark';
  }

  const changeThemeLight = () => {
    console.log('light');
    document.body.className = 'theme-light';
  }


  const changeThemeCold = () => {
    console.log('cold');
    document.body.className = 'theme-cold';
  }

  const changeThemeWarm = () => {
    console.log('warm');
    document.body.className = 'theme-warm';
  }



  return(
    <>
      <header className="App-header">
        <button className={"App-header-bt"} onClick={changeThemeLight}>Светлая тема</button>
        <button className={"App-header-bt"} onClick={changeThemeDark}>Темная тема</button>
        <button className={"App-header-bt"} onClick={changeThemeCold}>Холодная тема</button>
        <button className={"App-header-bt"} onClick={changeThemeWarm}>Теплая тема</button>


      </header>

      <Game />

    </>

  )

}