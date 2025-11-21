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
    <div className="App">
      <header className="App-header">
        <h1> dfgsdfgsdf sdfbgsdf </h1>
        <button className={"App-header-bt"} onClick={changeThemeLight}>Светлая тема</button>
        <button className={"App-header-bt"} onClick={changeThemeDark}>Темная тема</button>
        <button className={"App-header-bt"} onClick={changeThemeCold}>Холодная тема</button>
        <button className={"App-header-bt"} onClick={changeThemeWarm}>Теплая тема</button>


      </header>

      <Game />

      <footer className="App-footer">
        <h1 className={'test'}> dfgsdfgsdf sdfbgsdf </h1>

        {/*https://www.youtube.com/watch?v=A4Y5VwXGG9g&t=436s*/}
      </footer>
    </div>

  )

}