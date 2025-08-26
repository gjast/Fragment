import React, { useCallback } from "react";
import tonImg from "/img/imageTon.svg";
import completed from "/img/completed.svg";
import inProgress from "/img/inProgress.svg";

const Transactions = React.memo(({ transactions }) => {
  return (
    <div className="latest-transactions">
      <h2>Latest Transactions:</h2>
      <div className="latest-transactions-container">
        <div className="latest-transactions-container-header">
          <p>Username</p>
          <p>Deal Price</p>
          <p>Status</p>
        </div>
        {transactions.map((item, index) => (
          <div
            key={index}
            className="latest-transactions-item"
            onClick={() => handleTransactionClick(item.username)}
          >
            <p className="latest-transactions-item-username">
              {item.username}
            </p>
            <div className="latest-transactions-item-price">
              <div className="latest-transactions-item-price-ton">
                <img src={tonImg} alt="" />
                <p>{item.ton}</p>
              </div>
              <p id="dollarEcv">~${item.usd}</p>
            </div>
            <div className="latest-transactions-item-status">
              <div className="latest-transactions-item-status-container">
                <img
                  src={item.status === "In Progress" ? inProgress : completed}
                  alt=""
                />
                <p className={`${item.status === "In Progress" ? "completed" : "inProgress"}`}>{item.status}</p>
              </div>
              <p className="latest-transactions-item-status-time">{item.time} ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Transactions;
