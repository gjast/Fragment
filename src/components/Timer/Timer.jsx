import React, { useEffect, useRef, useState } from "react";

const Timer = ({ timerDuration, togglePopup  }) => {
  const [timer, setTimer] = useState(timerDuration);
  const timerRef = useRef(timer);

  useEffect(() => {
    timerRef.current = timer; // синхронизируем ref с состоянием
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerRef.current <= 1) {
        setTimer(timerDuration);
        togglePopup (); 
      } else {
        setTimer((prev) => prev - 1); // уменьшаем на 1
      }
    }, 1000);

    return () => clearInterval(interval); // очищаем интервал при размонтировании компонента
  }, [timerDuration]); // обновляем эффект при изменении длительности таймера

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="main-timer">
      <p>Deal will expire in:</p>
      <span>{formatTime(timer)}</span>
    </div>
  );
};

export default Timer;
