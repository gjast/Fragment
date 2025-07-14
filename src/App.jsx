import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

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
    <div style={{ padding: 16 }}>
      <h1>Моя Telegram Mini App</h1>
      <button onClick={handleClick}>Отправить данные боту</button>
    </div>
  );
}

export default App;
