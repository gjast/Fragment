import React, { useState, useEffect, useRef } from "react";
import tonImg from "/img/imageTon.svg";
import tonWhite from "/img/ImageTonWhite.svg";
import logoComp from "/img/logoComp.svg";
import "./Main.css";
import Timer from "../Timer/Timer";
import Transactions from "../Transactions/Transactions";
import bxs_shield from "/img/bxs_shield.svg";
import support from "/img/support.svg";
const usersTransactions = [
  {
    username: "@alpha_crazy",
    ton: 1573,
    usd: 1887.6,
    time: "15m",
    status: "Completed",
  },
  {
    username: "@ragnar",
    ton: 1624,
    usd: 1948.8,
    time: "20 minutes",
    status: "In Progress",
  },
  {
    username: "@storm_rider",
    ton: 1749,
    usd: 2098.8,
    time: "30 minutes",
    status: "Completed",
  },
  {
    username: "@shadow_wolf",
    ton: 1882,
    usd: 2258.4,
    time: "40 minutes",
    status: "In Progress",
  },
  {
    username: "@night_strike",
    ton: 1912,
    usd: 2294.4,
    time: "45 minutes",
    status: "Completed",
  },
  {
    username: "@phoenix_fire",
    ton: 2023,
    usd: 2427.6,
    time: "1 h",
    status: "In Progress",
  },
  {
    username: "@iron_hawk",
    ton: 2104,
    usd: 2524.8,
    time: "1 h 10 minutes",
    status: "Completed",
  },
  {
    username: "@drake_legend",
    ton: 2178,
    usd: 2613.6,
    time: "1 h 20 minutes",
    status: "In Progress",
  },
  {
    username: "@wolf_blood",
    ton: 2256,
    usd: 2707.2,
    time: "1 h 30 minutes",
    status: "Completed",
  },
  {
    username: "@viking_warrior",
    ton: 2301,
    usd: 2761.2,
    time: "1 h 45 minutes",
    status: "In Progress",
  },
  {
    username: "@dark_axe",
    ton: 2387,
    usd: 2864.4,
    time: "2 h",
    status: "Completed",
  },
  {
    username: "@ocean_surge",
    ton: 2469,
    usd: 2962.8,
    time: "2 h 15 minutes",
    status: "In Progress",
  },
];

function getRandomTransactions(transactions) {
  const inProgressTransactions = transactions.filter(
    (item) => item.status === "In Progress"
  );

  if (inProgressTransactions.length === 0) return [];

  const randomInProgress =
    inProgressTransactions[
      Math.floor(Math.random() * inProgressTransactions.length)
    ];

  const remainingTransactions = transactions.filter(
    (item) => item.status !== "In Progress"
  );

  const randomRemaining = [];
  while (randomRemaining.length < 2) {
    const randomIndex = Math.floor(
      Math.random() * remainingTransactions.length
    );
    const randomItem = remainingTransactions[randomIndex];
    if (!randomRemaining.includes(randomItem)) {
      randomRemaining.push(randomItem);
    }
  }

  const selectedTransactions = [randomInProgress, ...randomRemaining];

  return selectedTransactions.sort((a, b) => {
    const timeA = extractTimeInMinutes(a.time);
    const timeB = extractTimeInMinutes(b.time);
    return timeA - timeB;
  });
}

function extractTimeInMinutes(time) {
  const hoursMatch = time.match(/(\d+)\s*h/);
  const minutesMatch = time.match(/(\d+)\s*minutes/);

  const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

  return hours * 60 + minutes;
}

export default function Main() {
  const [randomTransactions, setRandomTransactions] = useState([]);

  useEffect(() => {
    const selectedTransactions = getRandomTransactions(usersTransactions);
    setRandomTransactions(selectedTransactions);
  }, []);

  return (
    <main>
      <div className="main-header">
        <h2>nameui.t.me</h2>
        <span className="main-header-status">Deal In Progress</span>
      </div>

      <Timer timerDuration={15 * 60} />

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

      <div className="main-info">
        <div className="main-info-tablet">
          <p>Telegram Username</p>
          <a>@nameui</a>
        </div>
        <div className="main-info-tablet">
          <p>Web Address</p>
          <a>t.me/nameui</a>
        </div>
        <div className="main-info-tablet">
          <p>TON Web 3.0 Address</p>
          <a>nameui.t.me</a>
        </div>
      </div>
      <p className="main-info-confirm">
        Funds are already locked in smart-contract escrow. Confirm to receive.
      </p>
      <button id="button-confirm">Confirm via Tonkeeper</button>

      <div className="main-info-wallet">
        <img src={tonWhite} />
        <p>
          {"xe2a1"}
          ...
          {"9ff3"}
          (view on Tonscan)
        </p>
      </div>

      <div className="main-info-transaction">
        <div className="main-info-transaction-tablet">
          <p className="main-info-transaction-id">Verified Merchant ID:</p>
          <p className="main-info-transaction-id">#54672</p>
        </div>
        <div className="main-info-transaction-tablet">
          <p className="main-info-transaction-id">Security deposit:</p>
          <div className="main-info-transaction-container">
            <img src={tonImg} alt="" />
            <p>25,000</p>
          </div>
        </div>
        <div className="main-info-transaction-tablet">
          <p className="main-info-transaction-id">Escrow Provider:</p>
          <div className="main-info-transaction-container">
            <img src={logoComp} alt="" />
            <p>Fragment Escrow V2.0</p>
          </div>
        </div>
      </div>
      <Transactions transactions={randomTransactions} />

      <footer>
        <div className="footer-verified">
          <img  src={bxs_shield} alt="" />
          <p>Fragment Verified Escrow Protocol</p>
        </div>
        <a className="footer-support" href="#">
          <img src={support} alt="" />
          <p>Support</p>
        </a>
      </footer>
    </main>
  );
}
