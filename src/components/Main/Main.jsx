import React, { useState, useEffect, useRef } from "react";
import tonImg from "/img/imageTon.svg";
import "./Main.css";

export default function Main() {
  const [timer, setTimer] = useState(15 * 60);
  const timerRef = useRef(timer);

  useEffect(() => {
    timerRef.current = timer;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (timerRef.current <= 1) {
          return 15 * 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <main>
      <div className="main-header">
        <h2>nameui.t.me</h2>
        <span className="main-header-status">Deal In Progress</span>
      </div>
      <div className="main-timer">
        <p>Deal will expire in:</p>
        <span>{formatTime(timer)}</span>
      </div>
      <div className="main-info-price">
        <div className="main-info-price-header">
          <p>Deal Price</p>
          <p>Commission</p>
        </div>
        <div className="main-info-price-body">
          <div className="main-info-price-body-item">
            <img src={tonImg} alt="" />
            <p className="price-ton">2,005</p>
            <p className="price-usd">~ $6,065</p>
          </div>
          <div className="main-info-price-body-item">
            <img src={tonImg} alt="" />
            <p className="price-ton">100</p>
            <p className="price-usd">~ $336</p>
          </div>
        </div>
      </div>
    </main>
  );
}
