import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import bxs_shield from "/img/bxs_shield.svg";
import support from "/img/support.svg";
import './App.css';
function App() {
  useEffect(() => {
    WebApp.ready(); // сигнализируем, что всё готово
    WebApp.expand(); // опционально, чтобы веб-апп открылось на весь экран

    console.log(WebApp.initDataUnsafe); // данные пользователя
  }, []);

  const handleClick = () => {
    WebApp.sendData("Hello from React mini app!"); // отправка данных боту
  };

  return (
    <>
      <Header/>
      <Main/>
      <footer>
        <div className="footer-verified">
          <img src={bxs_shield} alt="" />
          <p>Fragment Verified Escrow Protocol</p>
        </div>
        <a className="footer-support" href="#">
          <img src={support} alt="" />
          <p>Support</p>
        </a>
      </footer>
    </>
  );
}

export default App;
