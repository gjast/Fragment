import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import Header from './components/Header/Header';

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
    </>
  );
}

export default App;
